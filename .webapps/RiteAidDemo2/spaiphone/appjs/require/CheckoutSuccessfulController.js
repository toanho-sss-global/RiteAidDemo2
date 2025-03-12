define("userCheckoutSuccessfulController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft4.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle4.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight4.skin = "CopyslFbox0ab370b90781448";
    },
});
define("CheckoutSuccessfulControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGoBack **/
    AS_Button_hbc403d7f60142d6a4d9a4cef79615e6: function AS_Button_hbc403d7f60142d6a4d9a4cef79615e6(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("Home");
        ntf.navigate();
    },
    /** init defined for CheckoutSuccessful **/
    AS_Form_c8b711fcac4b4f44b6bc6665c15ef520: function AS_Form_c8b711fcac4b4f44b6bc6665c15ef520(eventobject) {
        var self = this;
        return self.updateProgressBar.call(this);
    }
});
define("CheckoutSuccessfulController", ["userCheckoutSuccessfulController", "CheckoutSuccessfulControllerActions"], function() {
    var controller = require("userCheckoutSuccessfulController");
    var controllerActions = ["CheckoutSuccessfulControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
