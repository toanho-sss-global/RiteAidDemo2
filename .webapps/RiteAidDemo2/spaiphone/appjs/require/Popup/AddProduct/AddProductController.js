define("Popup/AddProduct/userAddProductController", function() {
    return {};
});
define("Popup/AddProduct/AddProductControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Popup/AddProduct/AddProductController", ["Popup/AddProduct/userAddProductController", "Popup/AddProduct/AddProductControllerActions"], function() {
    var controller = require("Popup/AddProduct/userAddProductController");
    var actions = require("Popup/AddProduct/AddProductControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
