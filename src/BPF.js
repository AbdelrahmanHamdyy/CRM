BPF = {
  AdvanceBPF() {
    if (Xrm.Page.data.process) {
      Xrm.Page.getAttribute("new_empid").setRequiredLevel("required");
      Xrm.Page.data.process.moveNext();
      setTimeout(function () {
        Xrm.Page.data.entity.save();
        Xrm.Page.data.refresh(true);
        // Xrm.Navigation.openForm({
        //   entityId: Xrm.Page.data.entity.getId(),
        //   entityName: Xrm.Page.data.entity.getEntityName(),
        // });
      }, 1000);
    }
    // Xrm.Page.data.refresh(true);
  },

  hideNext() {
    // Hide Next Stage button

    function hide() {
      if (
        !parent.document
          .getElementById("stageNavigateActionContainer")
          .classList.contains("hidden")
      ) {
        parent.document
          .getElementById("stageNavigateActionContainer")
          .classList.add("hidden");
      }

      if (
        !parent.document
          .getElementById("stageAdvanceActionContainer")
          .classList.contains("hidden")
      ) {
        parent.document
          .getElementById("stageAdvanceActionContainer")
          .classList.add("hidden");
      }
    }
    hide();

    Xrm.Page.data.process.addOnStageChange(hide);
  },
};
