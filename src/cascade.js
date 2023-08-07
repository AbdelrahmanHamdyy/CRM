Cascade = {
  updateAddress() {
    var address = Xrm.Page.getAttribute("new_address").getValue();
    var companyId = Xrm.Page.data.entity
      .getId()
      .replace("{", "")
      .replace("}", "");
    var data = { new_companyaddress: address };

    Xrm.WebApi.retrieveMultipleRecords(
      "new_employee",
      "?$select=new_name,new_companyaddress,_new_companyname_value&$filter=_new_companyname_value eq " +
        companyId
    ).then(
      function success(result) {
        for (var i = 0; i < result.entities.length; i++) {
          var employee = result.entities[i];
          Xrm.WebApi.updateRecord(
            "new_employee",
            employee.new_employeeid,
            data
          ).then(
            function success(result) {
              console.log("Employee updated");
            },
            function (error) {
              console.log(error.message);
            }
          );
        }
      },
      function (error) {
        console.log(error.message);
      }
    );
  },
};
