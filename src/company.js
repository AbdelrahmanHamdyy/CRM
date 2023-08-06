CompanyScript = {
  validatePhoneNumber: function (context) {
    var formContext = context.getFormContext();
    var input = formContext.getAttribute("new_phone").getValue();

    if (input !== null && input !== undefined) {
      var correctFormat = /^[0-9]+$/;

      if (input.match(correctFormat)) {
        console.log("Phone Number Valid! ✅");
        return true;
      } else {
        alert("Please Enter a valid phone number");
        formContext.getAttribute("new_phone").setValue(null);
        return false;
      }
    } else {
      console.log("Phone field is empty!");
    }

    return false;
  },

  checkDate: function (context) {
    var formContext = context.getFormContext();
    var joinDate = formContext.getAttribute("new_joindate").getValue();

    if (joinDate !== null && joinDate !== undefined) {
      var currentDate = new Date();

      if (
        joinDate.getTime() > currentDate.getTime() ||
        joinDate.toDateString() === currentDate.toDateString()
      ) {
        console.log("Date is in the present or future! ✅");
        return true;
      } else {
        alert("Please Enter a present or future date!");
        formContext.getAttribute("new_joindate").setValue(null);
        return false;
      }
    } else {
      console.log("Join Date field is empty!");
    }

    return false;
  },

  getNumberOfEmployees(context) {
    let formContext = context.getFormContext(); // get the form context
    let onLoadFunc = function () {
      setTimeout(function () {
        if (formContext.getControl("Employees")) {
          var count = formContext
            .getControl("Employees")
            .getGrid()
            .getTotalRecordCount();
          var x = parseInt(count); //parseInt() function parses a string and returns an integer.
          formContext.getAttribute("new_numberofemployees").setValue(x);
        }
      }, 500);
    };
    formContext.getControl("Employees").addOnLoad(onLoadFunc);
  },

  addEmployee() {
    debugger;
    var companyName = Xrm.Page.getAttribute("new_name").getValue();
    var companyId = Xrm.Page.data.entity.getId();
    var entityFormOptions = {};

    entityFormOptions["entityName"] = "new_employee";
    entityFormOptions["openInNewWindow"] = true;

    var formParameters = {};
    formParameters["new_companyname"] = companyId;
    formParameters["new_companynamename"] = companyName;

    Xrm.Navigation.openForm(entityFormOptions, formParameters);
  },
};
