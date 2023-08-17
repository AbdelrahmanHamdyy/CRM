var debug = false;

function calculateWorkingDays(startDate, endDate) {
  var workingDays = 0;
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 5 && dayOfWeek !== 6) {
      // Exclude Friday (5) and Saturday (6)
      workingDays++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return workingDays;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function load() {
  debugger;
  var eja_tsid = Xrm.Page.getAttribute("eja_tsid").getValue();

  if (!eja_tsid) {
    var currentDate = new Date();
    var currentMonthNumber = currentDate.getMonth() + 1; // Adding 1 to convert from 0-11 to 1-12
    var currentYear = currentDate.getFullYear(); // Get the current year

    var eja_month = new Date().toLocaleString("default", { month: "short" });

    var currentDate = new Date();
    var previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);

    var reportingPeriodStart = new Date(
      previousMonth.getFullYear(),
      previousMonth.getMonth(),
      22
    );
    var reportingPeriodEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      21
    );

    var eja_reportingperiod =
      "From " +
      reportingPeriodStart.toLocaleDateString() +
      " to " +
      reportingPeriodEnd.toLocaleDateString();

    var workingDays = calculateWorkingDays(
      reportingPeriodStart,
      reportingPeriodEnd
    );

    Xrm.Page.getAttribute("eja_month").setValue(eja_month);
    Xrm.Page.getAttribute("eja_reportingperiod").setValue(eja_reportingperiod);
    Xrm.Page.getAttribute("eja_workingdays").setValue(workingDays);
    Xrm.Page.getAttribute("eja_submissionduedate").setValue(
      "21-" + currentMonthNumber + "-" + currentYear
    );
    Xrm.Page.getAttribute("eja_approvalduedate").setValue(
      "26-" + currentMonthNumber + "-" + currentYear
    );
    Xrm.WebApi.retrieveMultipleRecords("eja_timesheet", "").then(
      function success(result) {
        var newId = result.entities.length + 1;
        Xrm.Page.getAttribute("eja_tsid").setValue(newId.toString());
      },
      function (error) {
        console.log(error.message);
      }
    );
  } else {
    var statuscode = Xrm.Page.getAttribute("statuscode").getValue();
    if (statuscode == 970760002 && UserHasTeam("Leaders")) {
      // Set the visibility and requirement based on your conditions
      var shouldShowRejectionReason = true; // Adjust this based on your conditions

      // Get the rejection reason field
      var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
      fieldControl.setVisible(true);

      Xrm.Page.getAttribute("eja_rejectionreason").setRequiredLevel("required");

      // Set the field as read-only
      fieldControl.setDisabled(false);
    } else if (statuscode == 970760002) {
      var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
      fieldControl.setVisible(true);
      // Set the field as read-only
      fieldControl.setDisabled(true);
    } else {
      var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
      fieldControl.setVisible(false);
      Xrm.Page.getAttribute("eja_rejectionreason").setRequiredLevel("none");
    }
    Xrm.Page.data.entity.save();
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function addTask() {
  var timesheetId = Xrm.Page.getAttribute("eja_tsid").getValue();
  var employee = Xrm.Page.getAttribute("eja_employee").getValue();
  var timesheetGUID = Xrm.Page.data.entity.getId();
  var entityFormOptions = {};

  entityFormOptions["entityName"] = "eja_task";
  entityFormOptions["openInNewWindow"] = true;

  var formParameters = {};
  formParameters["eja_tslookupid"] = timesheetGUID;
  formParameters["eja_tslookupidname"] = timesheetId;
  formParameters["eja_employee"] = employee[0].id;
  formParameters["eja_employeename"] = employee[0].name;

  Xrm.Navigation.openForm(entityFormOptions, formParameters);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateNumberOfHours() {
  var eja_taskname = Xrm.Page.getAttribute("eja_name").getValue();
  if (eja_taskname) {
    var startHour = Xrm.Page.getAttribute("eja_starthour").getValue();
    var endHour = Xrm.Page.getAttribute("eja_endhour").getValue();
    Xrm.Page.getAttribute("eja_numberofhours").setValue(endHour - startHour);
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);
  } else {
    var currentDate = new Date();
    Xrm.Page.getAttribute("eja_day").setValue(currentDate);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateReportedDays() {
  var totalNumberOfHours = 0;
  var timesheetId = Xrm.Page.data.entity
    .getId()
    .replace("{", "")
    .replace("}", "");
  Xrm.WebApi.retrieveMultipleRecords(
    "eja_task",
    "?$select=eja_numberofhours&$filter=_eja_tslookupid_value eq " + timesheetId
  ).then(
    function success(result) {
      for (var i = 0; i < result.entities.length; i++) {
        var task = result.entities[i];
        totalNumberOfHours += task.eja_numberofhours;
      }
      Xrm.Page.getAttribute("eja_reporteddays").setValue(
        Math.ceil(totalNumberOfHours / 8)
      );
    },
    function (error) {
      console.log(error.message);
    }
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function approveButtonVisibility() {
  var owner = Xrm.Page.getAttribute("ownerid").getValue();
  return UserHasTeam(owner[0].name);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function addTaskVisibility() {
  // 970760000 Under Approval
  // 1 New
  // 970760002 Rejected
  // 970760001 Approved
  var statuscode = Xrm.Page.getAttribute("statuscode").getValue();
  return !(statuscode == 970760000 || statuscode == 970760001);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function UserHasTeam(teamName) {
  if (teamName != null && teamName != "") {
    // build endpoint URL
    var globalContext = Xrm.Utility.getGlobalContext();
    var serverUrl = globalContext.getClientUrl();
    var oDataEndpointUrl =
      serverUrl + "/XRMServices/2011/OrganizationData.svc/";
    // query to get the teams that match the name
    oDataEndpointUrl +=
      "TeamSet?$select=Name,TeamId&$filter=Name eq '" + teamName + "'";
    var service = GetRequestObject();
    if (service != null) {
      // execute the request
      service.open("GET", oDataEndpointUrl, false);
      service.setRequestHeader("X-Requested-Width", "XMLHttpRequest");
      service.setRequestHeader(
        "Accept",
        "application/json,text/javascript, */*"
      );
      service.send(null);
      // parse the results
      var requestResults = eval("(" + service.responseText + ")").d;
      if (requestResults != null && requestResults.results.length > 0) {
        var teamCounter;
        // iterate through all of the matching teams, checking to see if the current user has a membership
        for (
          teamCounter = 0;
          teamCounter < requestResults.results.length;
          teamCounter++
        ) {
          var team = requestResults.results[teamCounter];
          var teamId = team.TeamId;
          // get current user teams
          var currentUserTeams = getUserTeams(teamId);
          // Check whether current user teams matches the target team
          if (currentUserTeams != null) {
            for (var i = 0; i < currentUserTeams.length; i++) {
              var userTeam = currentUserTeams[i];
              // check to see if the team guid matches the user team membership id
              if (GuidsAreEqual(userTeam.TeamId, teamId)) {
                return true;
              }
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
      return false;
    }
  } else {
    return false;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function getUserTeams(teamToCheckId) {
  // gets the current users team membership
  var userId = Xrm.Page.context.getUserId().substr(1, 36);
  var globalContext = Xrm.Utility.getGlobalContext();
  var serverUrl = globalContext.getClientUrl();
  var oDataEndpointUrl = serverUrl + "/XRMServices/2011/OrganizationData.svc/";
  oDataEndpointUrl +=
    "TeamMembershipSet?$filter=SystemUserId eq guid' " +
    userId +
    " ' and TeamId eq guid' " +
    teamToCheckId +
    " '";
  var service = GetRequestObject();
  if (service != null) {
    service.open("GET", oDataEndpointUrl, false);
    service.setRequestHeader("X-Requested-Width", "XMLHttpRequest");
    service.setRequestHeader("Accept", "application/json,text/javascript, */*");
    service.send(null);
    var requestResults = eval("(" + service.responseText + ")").d;
    if (requestResults != null && requestResults.results.length > 0) {
      return requestResults.results;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function GetRequestObject() {
  if (window.XMLHttpRequest) {
    return new window.XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject("MSXML2.XMLHTTP.3.0");
    } catch (ex) {
      return null;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function GuidsAreEqual(guid1, guid2) {
  // compares two guids
  var isEqual = false;
  if (guid1 == null || guid2 == null) {
    isEqual = false;
  } else {
    isEqual =
      guid1.replace(/[{}]/g, "").toLowerCase() ==
      guid2.replace(/[{}]/g, "").toLowerCase();
  }
  return isEqual;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function approveBtnAction() {
  Xrm.Page.data.entity.save();
  Xrm.Page.data.process.moveNext();
  Xrm.Page.data.entity.save();
  Xrm.Page.data.refresh(true);
  Xrm.Page.data.entity.save();

  setTimeout(function () {
    var currentDate = new Date();
    Xrm.Page.getControl("eja_approveddate").setVisible(true);
    Xrm.Page.getAttribute("eja_approveddate").setValue(currentDate);

    var userId = Xrm.Page.context.getUserId();
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var fullName = userSettings.fullname;
    var lookupValue = new Array();
    lookupValue[0] = new Object();
    lookupValue[0].id = userId;
    lookupValue[0].name = fullName;
    lookupValue[0].entityType = "systemuser";
    Xrm.Page.getAttribute("eja_approvedby").setValue(lookupValue);
    Xrm.Page.getAttribute("eja_rejectedby").setValue(null);

    var newStatusCodeValue = 970760001; // Replace with the actual value
    Xrm.Page.getAttribute("statuscode").setValue(newStatusCodeValue);

    var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
    var fieldAttr = Xrm.Page.getAttribute("eja_rejectionreason");
    fieldAttr && fieldAttr.setValue(null);
    fieldAttr && fieldAttr.setRequiredLevel("none");
    fieldControl && fieldControl.setVisible(false);

    Xrm.Page.data.entity.save();
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);

    Xrm.Page.data.entity.save();
  }, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function rejectBtnAction() {
  Xrm.Page.data.entity.save();
  Xrm.Page.data.process.moveNext();
  Xrm.Page.data.entity.save();
  Xrm.Page.data.refresh(true);
  Xrm.Page.data.entity.save();

  setTimeout(function () {
    Xrm.Page.getControl("eja_approveddate").setVisible(false);
    Xrm.Page.getAttribute("eja_approveddate").setValue(null);
    var userId = Xrm.Page.context.getUserId();
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var fullName = userSettings.fullname;
    var lookupValue = new Array();
    lookupValue[0] = new Object();
    lookupValue[0].id = userId;
    lookupValue[0].name = fullName;
    lookupValue[0].entityType = "systemuser";
    Xrm.Page.getAttribute("eja_rejectedby").setValue(lookupValue);
    Xrm.Page.getAttribute("eja_approvedby").setValue(null);

    var newStatusCodeValue = 970760002; // Replace with the actual value
    Xrm.Page.getAttribute("statuscode").setValue(newStatusCodeValue);
    Xrm.Page.data.entity.save();

    var employee = Xrm.Page.getAttribute("eja_employee").getValue();
    Xrm.WebApi.retrieveRecord(
      "eja_employee",
      employee[0].id.replace("{", "").replace("}", ""),
      "?$select=_ownerid_value"
    ).then(
      function success(result) {
        Xrm.WebApi.retrieveRecord(
          "systemuser",
          result._ownerid_value,
          "?$select=fullname"
        ).then(
          function success(result) {
            owner = {
              id: result.systemuserid,
              name: result.fullname,
              entityType: "systemuser",
            };
            Xrm.Page.getAttribute("ownerid").setValue([owner]);
          },
          function (error) {
            console.log(error.message);
          }
        );
      },
      function (error) {
        console.log(error.message);
      }
    );
    var statuscode = Xrm.Page.getAttribute("statuscode").getValue();
    if (statuscode == 970760002 && UserHasTeam("Leaders")) {
      // Get the rejection reason field
      var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
      fieldControl.setVisible(true);
      Xrm.Page.getAttribute("eja_rejectionreason").setValue(null);
      Xrm.Page.getAttribute("eja_rejectionreason").setRequiredLevel("required");
      fieldControl.setDisabled(false);
    } else if (statuscode == 970760002) {
      var fieldControl = Xrm.Page.getControl("eja_rejectionreason");
      fieldControl.setVisible(true);
      fieldControl.setDisabled(true);
    }

    Xrm.Page.data.entity.save();
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);

    Xrm.Page.data.entity.save();
  }, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function submit() {
  Xrm.Page.data.entity.save();
  Xrm.Page.data.process.moveNext();
  Xrm.Page.data.entity.save();
  Xrm.Page.data.refresh(true);

  setTimeout(function () {
    Xrm.Page.data.process.moveNext();
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);
  }, 1000);

  // Leaders
  setTimeout(function () {
    Xrm.Page.getAttribute("ownerid").setValue([
      {
        id: "C60FA114-8E3B-EE11-BDF4-000D3ADECF73",
        name: "Leaders",
        entityType: "team",
      },
    ]);
    // Get the current date
    var currentDate = new Date();
    Xrm.Page.getAttribute("eja_submissiondate").setValue(currentDate);

    var newStatusCodeValue = 970760000; // Replace with the actual value
    Xrm.Page.getAttribute("statuscode").setValue(newStatusCodeValue);

    Xrm.Page.getControl("eja_employee").setDisabled(true);
    //Xrm.Page.getControl("ownerid").setDisabled(true);
    Xrm.Page.data.entity.save();
    Xrm.Page.data.entity.save();
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);
    Xrm.Page.data.entity.save();
  }, 3000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function submitButtonVisibility() {
  // eja_submissionduedate
  var currentDate = new Date();
  var submissionDueDateValue = Xrm.Page.getAttribute(
    "eja_submissionduedate"
  ).getValue();
  submissionDueDateValue = "17-8-2023";
  // 970760000 Under Approval
  // 1 New
  // 970760002 Rejected
  // 970760001 Approved
  var statuscode = Xrm.Page.getAttribute("statuscode").getValue();
  var submitted = statuscode == 970760000;
  var approved = statuscode == 970760001;
  var rejected = statuscode == 970760002;
  var dateArray = submissionDueDateValue.split("-");
  var currentDay = currentDate.getDate();
  var currentMonthNumber = currentDate.getMonth() + 1; // Adding 1 to convert from 0-11 to 1-12
  var currentYear = currentDate.getFullYear();
  if (
    debug ||
    (currentDay == dateArray[0] &&
      currentMonthNumber == dateArray[1] &&
      currentYear == dateArray[2] &&
      !submitted &&
      !approved) ||
    rejected
  )
    return true;
  else return false;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function markTodayAsHoliday() {
  debugger;
  // alert("ahmed is here");// Create a new Date object
  var currentDate = new Date();

  // Get the components of the date
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  var year = currentDate.getFullYear();

  // Format the date components as a string
  var formattedDate = day + "/" + month + "/" + year;
  var days = Xrm.Page.getAttribute("eja_vacationdays").getValue();
  var daysArray = [""]; // Split the string into an array
  if (days) daysArray = days.split("/");

  var current_day =
    day.toString() + "-" + month.toString() + "-" + year.toString();
  var isInArray = daysArray.includes(current_day); // Check if the current_day is in the array
  console.log(isInArray);
  if (!isInArray) {
    if (days) days = days + "/" + current_day;
    else days = current_day;
    Xrm.Page.getAttribute("eja_vacationdays").setValue(days);
    var working = Xrm.Page.getAttribute("eja_workingdays").getValue() - 1;
    Xrm.Page.getAttribute("eja_workingdays").setValue(working);
    Xrm.Page.data.entity.save();
    Xrm.Page.data.refresh(true);
    alert("You marked today " + formattedDate + " as vacation");
  } else {
    alert("You already marked today as holiday");
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function validateWorkingHour() {
  debugger;
  var startHour = Xrm.Page.getAttribute("eja_starthour").getValue();
  var endHour = Xrm.Page.getAttribute("eja_endhour").getValue();

  if (startHour && (startHour < 0 || startHour > 23)) {
    alert("Start hour should be between 0 and 23");
    Xrm.Page.getAttribute("eja_starthour").setValue(null);
  }
  if (endHour && (endHour < 0 || endHour > 23)) {
    alert("End hour should be between 0 and 23");
    Xrm.Page.getAttribute("eja_endhour").setValue(null);
  }

  startHour = Xrm.Page.getAttribute("eja_starthour").getValue();
  endHour = Xrm.Page.getAttribute("eja_endhour").getValue();

  if (startHour && endHour && startHour <= endHour) {
    console.log("success");
  } else if (startHour && endHour) {
    alert("End hour should be after the starting hour");
    Xrm.Page.getAttribute("eja_starthour").setValue(null);
    Xrm.Page.getAttribute("eja_endhour").setValue(null);
  }
}
