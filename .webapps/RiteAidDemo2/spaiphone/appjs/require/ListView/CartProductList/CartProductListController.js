define("ListView/CartProductList/userCartProductListController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("ListView/CartProductList/CartProductListControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ListView/CartProductList/CartProductListController", ["ListView/CartProductList/userCartProductListController", "ListView/CartProductList/CartProductListControllerActions"], function() {
    var controller = require("ListView/CartProductList/userCartProductListController");
    var actions = require("ListView/CartProductList/CartProductListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
