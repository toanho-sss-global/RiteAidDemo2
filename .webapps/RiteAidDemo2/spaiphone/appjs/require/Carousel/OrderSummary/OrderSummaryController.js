define("Carousel/OrderSummary/userOrderSummaryController", function() {
    return {};
});
define("Carousel/OrderSummary/OrderSummaryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Carousel/OrderSummary/OrderSummaryController", ["Carousel/OrderSummary/userOrderSummaryController", "Carousel/OrderSummary/OrderSummaryControllerActions"], function() {
    var controller = require("Carousel/OrderSummary/userOrderSummaryController");
    var actions = require("Carousel/OrderSummary/OrderSummaryControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
