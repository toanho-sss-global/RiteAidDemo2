define("userFlex0f2795775352a48Controller", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        setData: function() {
            //       var navigation = new voltmx.mvc.Navigation("Login");
            //       navigation.navigate();
        }
    };
});
define("Flex0f2795775352a48ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0b820f12e10ad40 **/
    AS_Button_h39a0419d00544678f14f209ca26aa0d: function AS_Button_h39a0419d00544678f14f209ca26aa0d(eventobject, context) {
        var self = this;
        return self.setData.call(this);
    },
    /** preShow defined for Flex0f2795775352a48 **/
    AS_FlexContainer_b024a7dbbe2146e4a11104f090ae347c: function AS_FlexContainer_b024a7dbbe2146e4a11104f090ae347c(eventobject, context) {
        var self = this;
        voltmx.timer.schedule("TIMEOUT_ACTION_c9523593b6a24d238db2418129618f21", function() {}, 1000, false);
        var container = document.getElementById("Flex0f2795775352a48");
        if (container) {
            var swipeEvent = new Event('swipeleft'); // Hoặc 'swiperight' nếu muốn vuốt phải
            container.dispatchEvent(swipeEvent);
        }
    }
});
define("Flex0f2795775352a48Controller", ["userFlex0f2795775352a48Controller", "Flex0f2795775352a48ControllerActions"], function() {
    var controller = require("userFlex0f2795775352a48Controller");
    var controllerActions = ["Flex0f2795775352a48ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
