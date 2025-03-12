define("userProductCarouselContainerController", {
    //Type your controller code here 
});
define("ProductCarouselContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ProductCarouselContainerController", ["userProductCarouselContainerController", "ProductCarouselContainerControllerActions"], function() {
    var controller = require("userProductCarouselContainerController");
    var controllerActions = ["ProductCarouselContainerControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
