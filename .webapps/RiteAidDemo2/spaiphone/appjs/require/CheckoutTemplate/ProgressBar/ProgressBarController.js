define("CheckoutTemplate/ProgressBar/userProgressBarController", function() {
    return {};
});
define("CheckoutTemplate/ProgressBar/ProgressBarControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CheckoutTemplate/ProgressBar/ProgressBarController", ["CheckoutTemplate/ProgressBar/userProgressBarController", "CheckoutTemplate/ProgressBar/ProgressBarControllerActions"], function() {
    var controller = require("CheckoutTemplate/ProgressBar/userProgressBarController");
    var actions = require("CheckoutTemplate/ProgressBar/ProgressBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
