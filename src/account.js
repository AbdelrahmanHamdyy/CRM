AccountFormScript = {
  validatePhone: function (context) {
    "use script";

    var formContext = context.getFormContext();
    var input = formContext.getAttribute("telephone1").getValue();

    if (input !== null && input !== undefined) {
      var correctFormat = /^(0020)([0-9]{10})/;

      if (input.match(correctFormat) && input.length === 14) {
        console.log("Phone Number Valid! ✅");

        formContext.getControl("fax").setDisabled(true);
        formContext.getControl("websiteurl").setVisible(false);

        formContext.data.entity.save();

        return true;
      } else {
        alert("Please Enter a valid phone number");

        formContext.getControl("fax").setDisabled(false);
        formContext.getControl("websiteurl").setVisible(true);

        formContext.getAttribute("telephone1").setValue(null);
      }
    } else {
      console.log("Main Phone field is empty!");
    }

    return false;
  },

  checkAccountName: function (context) {
    "use script";
    debugger;

    var formContext = context.getFormContext();
    var input = formContext.getAttribute("name").getValue();

    if (input === "Travis") {
      formContext.getAttribute("websiteurl").setValue("www.travisscott.com");
      formContext.getAttribute("address1_line1").setValue("UTOPIA");

      // Should be getControl instead of getAttribute like in the else statement
      formContext.getAttribute("fax").setDisabled(true); // Intentional error (For debugging)
      formContext.getControl("telephone1").setDisabled(true);

      formContext.getControl("parentaccountid").setVisible(false);

      return true;
    } else {
      formContext.getAttribute("websiteurl").setValue(null);
      formContext.getAttribute("address1_line1").setValue(null);

      formContext.getControl("fax").setDisabled(false);
      formContext.getControl("telephone1").setDisabled(false);

      formContext.getControl("parentaccountid").setVisible(true);
    }

    return false;
  },
};
