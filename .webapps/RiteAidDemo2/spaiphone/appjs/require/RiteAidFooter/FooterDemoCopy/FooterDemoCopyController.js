define("RiteAidFooter/FooterDemoCopy/userFooterDemoCopyController", function() {
    return {};
});
define("RiteAidFooter/FooterDemoCopy/FooterDemoCopyControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("RiteAidFooter/FooterDemoCopy/FooterDemoCopyController", ["RiteAidFooter/FooterDemoCopy/userFooterDemoCopyController", "RiteAidFooter/FooterDemoCopy/FooterDemoCopyControllerActions"], function() {
    var controller = require("RiteAidFooter/FooterDemoCopy/userFooterDemoCopyController");
    var actions = require("RiteAidFooter/FooterDemoCopy/FooterDemoCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
