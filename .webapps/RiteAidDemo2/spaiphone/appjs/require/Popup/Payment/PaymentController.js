define("Popup/Payment/userPaymentController", function() {
    return {};
});
define("Popup/Payment/PaymentControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Popup/Payment/PaymentController", ["Popup/Payment/userPaymentController", "Popup/Payment/PaymentControllerActions"], function() {
    var controller = require("Popup/Payment/userPaymentController");
    var actions = require("Popup/Payment/PaymentControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
