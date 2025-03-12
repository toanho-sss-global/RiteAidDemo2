define("userCopyFBoxController", {
    //Type your controller code here 
});
define("CopyFBoxControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxController", ["userCopyFBoxController", "CopyFBoxControllerActions"], function() {
    var controller = require("userCopyFBoxController");
    var controllerActions = ["CopyFBoxControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
