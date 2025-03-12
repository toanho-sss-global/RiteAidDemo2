define("Popup/AddProductCopy/userAddProductCopyController", function() {
    return {};
});
define("Popup/AddProductCopy/AddProductCopyControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Popup/AddProductCopy/AddProductCopyController", ["Popup/AddProductCopy/userAddProductCopyController", "Popup/AddProductCopy/AddProductCopyControllerActions"], function() {
    var controller = require("Popup/AddProductCopy/userAddProductCopyController");
    var actions = require("Popup/AddProductCopy/AddProductCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
