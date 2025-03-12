define("userPopupAddProductController", {
    //Type your controller code here 
});
define("PopupAddProductControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for BtnAdd **/
    AS_Button_bf2af23d1c3043a8b15a0e7559301c56: function AS_Button_bf2af23d1c3043a8b15a0e7559301c56(eventobject) {
        var self = this;
        self.view.FCPopup.left = "100%";
        self.view.FCPopup.isVisible = true;
        self.view.FCPopup.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_IN_OUT
                }
            }
        }), {
            "delay": 0,
            "duration": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        }, {
            "animationEnd": function() {
                setTimeout(function() {
                    self.view.FCPopup.animate(kony.ui.createAnimation({
                        "100": {
                            "left": "100%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE_IN_OUT
                            }
                        }
                    }), {
                        "delay": 0,
                        "duration": 0.3,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS
                    }, {
                        "animationEnd": function() {
                            self.view.FCPopup.isVisible = false;
                        }
                    });
                }, 2500);
            }
        });
    },
    /** init defined for PopupAddProduct **/
    AS_Form_e6663594279c467ba18a65eb3a2e03b2: function AS_Form_e6663594279c467ba18a65eb3a2e03b2(eventobject) {
        var self = this;
        self.view.FCPopup.isVisible = false;
    }
});
define("PopupAddProductController", ["userPopupAddProductController", "PopupAddProductControllerActions"], function() {
    var controller = require("userPopupAddProductController");
    var controllerActions = ["PopupAddProductControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
