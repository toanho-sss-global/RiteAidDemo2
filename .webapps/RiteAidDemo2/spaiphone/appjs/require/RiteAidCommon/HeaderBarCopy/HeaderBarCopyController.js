define("RiteAidCommon/HeaderBarCopy/userHeaderBarCopyController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        openMenu: function() {},
        openHome: function() {},
    };
});
define("RiteAidCommon/HeaderBarCopy/HeaderBarCopyControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("RiteAidCommon/HeaderBarCopy/HeaderBarCopyController", ["RiteAidCommon/HeaderBarCopy/userHeaderBarCopyController", "RiteAidCommon/HeaderBarCopy/HeaderBarCopyControllerActions"], function() {
    var controller = require("RiteAidCommon/HeaderBarCopy/userHeaderBarCopyController");
    var actions = require("RiteAidCommon/HeaderBarCopy/HeaderBarCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onMenuClicked_ua7e40d664e14566b3383c36bc052f0e = function() {
        if (this.onMenuClicked) {
            this.onMenuClicked.apply(this, arguments);
        }
    }
    controller.AS_onLogoClicked_u1f0f4d95dc04a6e956cdefd3d064014 = function() {
        if (this.onLogoClicked) {
            this.onLogoClicked.apply(this, arguments);
        }
    }
    controller.AS_onCartClicked_u2747f98edbc4e1197892fe71abe649f = function() {
        if (this.onCartClicked) {
            this.onCartClicked.apply(this, arguments);
        }
    }
    controller.AS_onUserClicked_u012607882ed4ff786d904291d44835f = function() {
        if (this.onUserClicked) {
            this.onUserClicked.apply(this, arguments);
        }
    }
    return controller;
});
