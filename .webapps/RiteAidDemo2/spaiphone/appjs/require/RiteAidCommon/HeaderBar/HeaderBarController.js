define("RiteAidCommon/HeaderBar/userHeaderBarController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        openMenu: function() {},
        openHome: function() {},
        checkIsLogin: function() {
            var userData = voltmx.store.getItem('userData');
            if (userData) {
                return true;
            } else {
                return false;
            }
        },
        handleMoveOnUserClicked: function() {
            var information = this.view.ListInformation;
            var page = "Login";
            if (this.checkIsLogin()) {
                if (information.height === "220dp") {
                    information.height = "0dp";
                } else {
                    information.height = "220dp";
                }
                this.view.forceLayout();
            } else {
                var nav = new voltmx.mvc.Navigation(page);
                nav.navigate();
            }
        },
        NavDashboard: function() {
            if (this.checkIsLogin()) {
                var nav = new voltmx.mvc.Navigation("Dashboard");
                nav.navigate();
            }
        },
        Logout: function() {
            if (this.checkIsLogin()) {
                voltmx.store.removeItem('userData');
                var nav = new voltmx.mvc.Navigation("Login");
                nav.navigate();
            }
        }
    };
});
define("RiteAidCommon/HeaderBar/HeaderBarControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlxAccount **/
    AS_FlexContainer_dc18523182da45d482867fabc1e481a0: function AS_FlexContainer_dc18523182da45d482867fabc1e481a0(eventobject) {
        var self = this;
        return self.NavDashboard.call(this);
    },
    /** onClick defined for FlxSignOut **/
    AS_FlexContainer_ef87036e0cc740f48a1cebb92b03d908: function AS_FlexContainer_ef87036e0cc740f48a1cebb92b03d908(eventobject) {
        var self = this;
        return self.Logout.call(this);
    },
    /** onTouchStart defined for userHeaderImg **/
    AS_Image_c8154b247778489bae1213639a65f0e3: function AS_Image_c8154b247778489bae1213639a65f0e3(eventobject, x, y) {
        var self = this;
        return self.handleMoveOnUserClicked.call(this);
    }
});
define("RiteAidCommon/HeaderBar/HeaderBarController", ["RiteAidCommon/HeaderBar/userHeaderBarController", "RiteAidCommon/HeaderBar/HeaderBarControllerActions"], function() {
    var controller = require("RiteAidCommon/HeaderBar/userHeaderBarController");
    var actions = require("RiteAidCommon/HeaderBar/HeaderBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onMenuClicked_jeec49f4f1af422694cacfd34bc132ab = function() {
        if (this.onMenuClicked) {
            this.onMenuClicked.apply(this, arguments);
        }
    }
    controller.AS_onLogoClicked_b30e8cff55f54d98becdf63e346ab32c = function() {
        if (this.onLogoClicked) {
            this.onLogoClicked.apply(this, arguments);
        }
    }
    controller.AS_onCartClicked_b0b43c8f71f0486b9f6dd9d269ebc041 = function() {
        if (this.onCartClicked) {
            this.onCartClicked.apply(this, arguments);
        }
    }
    return controller;
});
