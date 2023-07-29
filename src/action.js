ButtonScript = {
  toggleStatus: function () {
    // Entity ID
    var Id = Xrm.Page.data.entity.getId().replace("{", "").replace("}", "");

    // Get the current organization URL from the global context
    var globalContext = Xrm.Utility.getGlobalContext();
    var serverURL = globalContext.getClientUrl();

    // Query appended to the request
    var query =
      "eja_hospitals(" + Id + ")/Microsoft.Dynamics.CRM.new_statusChange";

    // Create the HttpRequestObject to send WEB API Request
    var req = new XMLHttpRequest();

    req.open("POST", serverURL + "/api/data/v9.2/" + query, true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");

    req.onreadystatechange = function () {
      if (this.readyState == 4 /* complete */) {
        req.onreadystatechange = null;

        if (this.status == 200 || this.status == 204) {
          alert("Action Called Successfully...");

          // Refresh data to see changes
          Xrm.Page.data.refresh(true);

          return true;
        } else {
          var error = JSON.parse(this.response).error;
          alert("Error in Action: " + error.message);

          return false;
        }
      }
    };

    // Execute request
    req.send();
  },
};
