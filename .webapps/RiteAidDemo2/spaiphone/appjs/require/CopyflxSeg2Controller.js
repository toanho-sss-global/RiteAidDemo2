define("userCopyflxSeg2Controller", {
    //Type your controller code here 
});
define("CopyflxSeg2ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for PlusIcon **/
    AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682: function AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682(eventobject, x, y, context) {
        var self = this;
    },
    /** onTouchStart defined for MinusIcon **/
    AS_Image_g216879dd24a43d59d3e9c14cd26082c: function AS_Image_g216879dd24a43d59d3e9c14cd26082c(eventobject, x, y, context) {
        var self = this;
    }
});
define("CopyflxSeg2Controller", ["userCopyflxSeg2Controller", "CopyflxSeg2ControllerActions"], function() {
    var controller = require("userCopyflxSeg2Controller");
    var controllerActions = ["CopyflxSeg2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
