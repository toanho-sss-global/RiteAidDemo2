define("RiteAidFooter/FooterDemo/userFooterDemoController", function() {
    return {};
});
define("RiteAidFooter/FooterDemo/FooterDemoControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("RiteAidFooter/FooterDemo/FooterDemoController", ["RiteAidFooter/FooterDemo/userFooterDemoController", "RiteAidFooter/FooterDemo/FooterDemoControllerActions"], function() {
    var controller = require("RiteAidFooter/FooterDemo/userFooterDemoController");
    var actions = require("RiteAidFooter/FooterDemo/FooterDemoControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
