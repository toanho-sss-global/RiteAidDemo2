define("userFlxSegController", {
    //Type your controller code here 
});
define("FlxSegControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlxSegController", ["userFlxSegController", "FlxSegControllerActions"], function() {
    var controller = require("userFlxSegController");
    var controllerActions = ["FlxSegControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
