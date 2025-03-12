define("userHomeController", {
    //Type your controller code here 
    checkIsLogin: function() {
        var userData = voltmx.store.getItem('userData');
        if (userData) {
            return true;
        } else {
            return false;
        }
    },
    handleMoveOnUserClicked: function() {
        console.log("User Clicked");
        var page = "Login";
        if (this.checkIsLogin()) {
            page = "Dashboard"
        }
        var nav = new voltmx.mvc.Navigation(page);
        nav.navigate();
    }
});
define("HomeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for Home **/
    AS_Form_bb2d02b95471423abf3253a2859fb952: function AS_Form_bb2d02b95471423abf3253a2859fb952(eventobject) {
        var self = this;
    },
    /** onRowClick defined for Segment0a85a0f0f28a548 **/
    AS_Segment_i8992e512edf470ab88e6aa3bad20d0d: function AS_Segment_i8992e512edf470ab88e6aa3bad20d0d(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("ProductList");
        ntf.navigate();
    }
});
define("HomeController", ["userHomeController", "HomeControllerActions"], function() {
    var controller = require("userHomeController");
    var controllerActions = ["HomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
