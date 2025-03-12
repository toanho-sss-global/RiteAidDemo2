define('applicationController',{
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("Carousel.OrderSummary", {
            "viewName": "OrderSummary",
            "controllerName": "OrderSummaryController"
        });
        voltmx.application.registerMaster({
            "namespace": "Carousel",
            "classname": "OrderSummary",
            "name": "Carousel.OrderSummary"
        });
        voltmx.mvc.registry.add("Carousel.ProductListCarousel", {
            "viewName": "ProductListCarousel",
            "controllerName": "ProductListCarouselController"
        });
        voltmx.application.registerMaster({
            "namespace": "Carousel",
            "classname": "ProductListCarousel",
            "name": "Carousel.ProductListCarousel"
        });
        voltmx.mvc.registry.add("CheckoutTemplate.ProgressBar", {
            "viewName": "ProgressBar",
            "controllerName": "ProgressBarController"
        });
        voltmx.application.registerMaster({
            "namespace": "CheckoutTemplate",
            "classname": "ProgressBar",
            "name": "CheckoutTemplate.ProgressBar"
        });
        voltmx.mvc.registry.add("com.konymp.map1", {
            "viewName": "map1",
            "controllerName": "map1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "map1",
            "name": "com.konymp.map1"
        });
        voltmx.mvc.registry.add("ListView.CartProductList", {
            "viewName": "CartProductList",
            "controllerName": "CartProductListController"
        });
        voltmx.application.registerMaster({
            "namespace": "ListView",
            "classname": "CartProductList",
            "name": "ListView.CartProductList"
        });
        voltmx.mvc.registry.add("ListView.ProductSimple", {
            "viewName": "ProductSimple",
            "controllerName": "ProductSimpleController"
        });
        voltmx.application.registerMaster({
            "namespace": "ListView",
            "classname": "ProductSimple",
            "name": "ListView.ProductSimple"
        });
        voltmx.mvc.registry.add("Popup.AddProduct", {
            "viewName": "AddProduct",
            "controllerName": "AddProductController"
        });
        voltmx.application.registerMaster({
            "namespace": "Popup",
            "classname": "AddProduct",
            "name": "Popup.AddProduct"
        });
        voltmx.mvc.registry.add("Popup.AddProductCopy", {
            "viewName": "AddProductCopy",
            "controllerName": "AddProductCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "Popup",
            "classname": "AddProductCopy",
            "name": "Popup.AddProductCopy"
        });
        voltmx.mvc.registry.add("Popup.Payment", {
            "viewName": "Payment",
            "controllerName": "PaymentController"
        });
        voltmx.application.registerMaster({
            "namespace": "Popup",
            "classname": "Payment",
            "name": "Popup.Payment"
        });
        voltmx.mvc.registry.add("RiteAidCommon.HeaderBar", {
            "viewName": "HeaderBar",
            "controllerName": "HeaderBarController"
        });
        voltmx.application.registerMaster({
            "namespace": "RiteAidCommon",
            "classname": "HeaderBar",
            "name": "RiteAidCommon.HeaderBar"
        });
        voltmx.mvc.registry.add("RiteAidCommon.HeaderBarCopy", {
            "viewName": "HeaderBarCopy",
            "controllerName": "HeaderBarCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "RiteAidCommon",
            "classname": "HeaderBarCopy",
            "name": "RiteAidCommon.HeaderBarCopy"
        });
        voltmx.mvc.registry.add("RiteAidFooter.FooterDemo", {
            "viewName": "FooterDemo",
            "controllerName": "FooterDemoController"
        });
        voltmx.application.registerMaster({
            "namespace": "RiteAidFooter",
            "classname": "FooterDemo",
            "name": "RiteAidFooter.FooterDemo"
        });
        voltmx.mvc.registry.add("RiteAidFooter.FooterDemoCopy", {
            "viewName": "FooterDemoCopy",
            "controllerName": "FooterDemoCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "RiteAidFooter",
            "classname": "FooterDemoCopy",
            "name": "RiteAidFooter.FooterDemoCopy"
        });
        voltmx.mvc.registry.add("CopyflxSeg2", {
            "viewName": "CopyflxSeg2",
            "controllerName": "CopyflxSeg2Controller"
        });
        voltmx.mvc.registry.add("Flex0f2795775352a48", {
            "viewName": "Flex0f2795775352a48",
            "controllerName": "Flex0f2795775352a48Controller"
        });
        voltmx.mvc.registry.add("FlxSeg", {
            "viewName": "FlxSeg",
            "controllerName": "FlxSegController"
        });
        voltmx.mvc.registry.add("OrderSummaryItemListCtn", {
            "viewName": "OrderSummaryItemListCtn",
            "controllerName": "OrderSummaryItemListCtnController"
        });
        voltmx.mvc.registry.add("ProductCarouselContainer", {
            "viewName": "ProductCarouselContainer",
            "controllerName": "ProductCarouselContainerController"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("CheckoutAddress", {
            "viewName": "CheckoutAddress",
            "controllerName": "CheckoutAddressController"
        });
        voltmx.mvc.registry.add("CheckoutPaymentMethod", {
            "viewName": "CheckoutPaymentMethod",
            "controllerName": "CheckoutPaymentMethodController"
        });
        voltmx.mvc.registry.add("CheckoutShippingMethod", {
            "viewName": "CheckoutShippingMethod",
            "controllerName": "CheckoutShippingMethodController"
        });
        voltmx.mvc.registry.add("CheckoutSuccessful", {
            "viewName": "CheckoutSuccessful",
            "controllerName": "CheckoutSuccessfulController"
        });
        voltmx.mvc.registry.add("CopyShoppingCart", {
            "viewName": "CopyShoppingCart",
            "controllerName": "CopyShoppingCartController"
        });
        voltmx.mvc.registry.add("Dashboard", {
            "viewName": "Dashboard",
            "controllerName": "DashboardController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("Home", {
            "viewName": "Home",
            "controllerName": "HomeController"
        });
        voltmx.mvc.registry.add("Login", {
            "viewName": "Login",
            "controllerName": "LoginController"
        });
        voltmx.mvc.registry.add("PopupAddProduct", {
            "viewName": "PopupAddProduct",
            "controllerName": "PopupAddProductController"
        });
        voltmx.mvc.registry.add("ProductDetails", {
            "viewName": "ProductDetails",
            "controllerName": "ProductDetailsController"
        });
        voltmx.mvc.registry.add("ProductList", {
            "viewName": "ProductList",
            "controllerName": "ProductListController"
        });
        voltmx.mvc.registry.add("ShoppingCart", {
            "viewName": "ShoppingCart",
            "controllerName": "ShoppingCartController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Login").navigate();
    }
});
define('Carousel/OrderSummary/OrderSummary',[],function() {
    return function(controller) {
        var OrderSummary = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "356dp",
            "id": "OrderSummary",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f26e99be6f1040",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "OrderSummary"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "OrderSummary"), extendConfig({}, controller.args[2], "OrderSummary"));
        OrderSummary.setDefaultUnit(voltmx.flex.DP);
        var OrderSummaryLabel = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "OrderSummaryLabel",
            "isVisible": true,
            "left": "32dp",
            "skin": "defLabel",
            "text": "Order Summary",
            "textStyle": {},
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "OrderSummaryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryLabel"));
        var OrderSummaryTotalLabel = new voltmx.ui.Label(extendConfig({
            "id": "OrderSummaryTotalLabel",
            "isVisible": true,
            "left": "19dp",
            "skin": "CopydefLabel0d0f4f0b048dd41",
            "text": "Est. Total",
            "textStyle": {},
            "top": "79dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "OrderSummaryTotalLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryTotalLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryTotalLabel"));
        var OrderSummaryTotal = new voltmx.ui.Label(extendConfig({
            "id": "OrderSummaryTotal",
            "isVisible": true,
            "right": "20dp",
            "skin": "CopydefLabel0fc02044f65e747",
            "text": "$8.19",
            "textStyle": {},
            "top": "79dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "OrderSummaryTotal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryTotal"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryTotal"));
        var InMyCartCtn = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "37dp",
            "id": "InMyCartCtn",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0h4d45619755a41",
            "top": "127dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "InMyCartCtn"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "InMyCartCtn"), extendConfig({}, controller.args[2], "InMyCartCtn"));
        InMyCartCtn.setDefaultUnit(voltmx.flex.DP);
        var InMyCartQuantity = new voltmx.ui.Label(extendConfig({
            "id": "InMyCartQuantity",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopydefLabel0j7d1c107d00c4a",
            "text": "In My Cart | 1 Items",
            "textStyle": {},
            "top": "7dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "InMyCartQuantity"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "InMyCartQuantity"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "InMyCartQuantity"));
        var InMyCartDetail = new voltmx.ui.Label(extendConfig({
            "id": "InMyCartDetail",
            "isVisible": true,
            "right": 10,
            "skin": "CopydefLabel0i732171cad3a4a",
            "text": "Details^",
            "textStyle": {},
            "top": "7dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "InMyCartDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "InMyCartDetail"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "InMyCartDetail"));
        InMyCartCtn.add(InMyCartQuantity, InMyCartDetail);
        var OrderSummaryItemList = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "49.96%",
            "data": [{
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }],
            "groupCells": false,
            "height": "100dp",
            "id": "OrderSummaryItemList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "OrderSummaryItemListCtn",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "237dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "OrderSummaryItemImg": "OrderSummaryItemImg",
                "OrderSummaryItemListCtn": "OrderSummaryItemListCtn",
                "OrderSummaryProductName": "OrderSummaryProductName",
                "OrderSummaryProductPrice": "OrderSummaryProductPrice",
                "OrderSummaryProductQty": "OrderSummaryProductQty"
            },
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "OrderSummaryItemList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryItemList"), extendConfig({}, controller.args[2], "OrderSummaryItemList"));
        var ShipToAddressLabel = new voltmx.ui.Label(extendConfig({
            "id": "ShipToAddressLabel",
            "isVisible": true,
            "left": "19dp",
            "skin": "CopydefLabel0hf58eb5a59694b",
            "text": "Ship to Address ",
            "textStyle": {},
            "top": "193dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ShipToAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ShipToAddressLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ShipToAddressLabel"));
        OrderSummary.add(OrderSummaryLabel, OrderSummaryTotalLabel, OrderSummaryTotal, InMyCartCtn, OrderSummaryItemList, ShipToAddressLabel);
        return OrderSummary;
    }
});
define("Carousel/OrderSummary/userOrderSummaryController", [],function() {
    return {};
});
define("Carousel/OrderSummary/OrderSummaryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Carousel/OrderSummary/OrderSummaryController", ["Carousel/OrderSummary/userOrderSummaryController", "Carousel/OrderSummary/OrderSummaryControllerActions"], function() {
    var controller = require("Carousel/OrderSummary/userOrderSummaryController");
    var actions = require("Carousel/OrderSummary/OrderSummaryControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('Carousel/ProductListCarousel/ProductListCarousel',[],function() {
    return function(controller) {
        var ProductListCarousel = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "ProductListCarousel",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductListCarousel"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProductListCarousel"), extendConfig({}, controller.args[2], "ProductListCarousel"));
        ProductListCarousel.setDefaultUnit(voltmx.flex.DP);
        var ProductCarousel = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }, {
                "CarouselPoductUnitQuantity": "Label",
                "CarouselProductImg": "cartproductimg.png",
                "CarouselProductMade": "Nature Made",
                "CarouselProductName": "Label",
                "CarouselProductPrice": "Label"
            }],
            "groupCells": false,
            "height": "240dp",
            "id": "ProductCarousel",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "ProductCarouselContainer",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "20dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "CarouselPoductUnitQuantity": "CarouselPoductUnitQuantity",
                "CarouselProductImg": "CarouselProductImg",
                "CarouselProductMade": "CarouselProductMade",
                "CarouselProductName": "CarouselProductName",
                "CarouselProductPrice": "CarouselProductPrice",
                "ProductCarouselContainer": "ProductCarouselContainer"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductCarousel"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProductCarousel"), extendConfig({}, controller.args[2], "ProductCarousel"));
        ProductListCarousel.add(ProductCarousel);
        return ProductListCarousel;
    }
});
define("Carousel/ProductListCarousel/userProductListCarouselController", [],function() {
    return {};
});
define("Carousel/ProductListCarousel/ProductListCarouselControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Carousel/ProductListCarousel/ProductListCarouselController", ["Carousel/ProductListCarousel/userProductListCarouselController", "Carousel/ProductListCarousel/ProductListCarouselControllerActions"], function() {
    var controller = require("Carousel/ProductListCarousel/userProductListCarouselController");
    var actions = require("Carousel/ProductListCarousel/ProductListCarouselControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("CheckoutAddress", [],function() {
    return function(controller) {
        function addWidgetsCheckoutAddress() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ShippingDetailsLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ShippingDetailsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopydefLabel0c8d3b8bfca234b",
                "text": "1. Shipping Details",
                "textStyle": {},
                "top": "120dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ProgressBar = new CheckoutTemplate.ProgressBar({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "ProgressBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f0a1dc06dd574a",
                "top": "0dp",
                "width": "1096px",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProgressBar": {
                        "centerX": "50%",
                        "width": "1096px"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CheckoutFIrstNameLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutFIrstNameLabel",
                "isVisible": true,
                "left": "32dp",
                "onTouchStart": controller.AS_Label_e673e6d6d1384b80bdbc00576e52a57d,
                "skin": "CopydefLabel0c0b0f04da4a04b",
                "text": "First Name",
                "textStyle": {},
                "top": "189dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutFirstNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "onTextChange": controller.AS_TextField_fc8f24616d1248db85c523a72e177b26,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d343d588bda647",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "221dp",
                "width": "90%",
                "zIndex": 1,
                "enableHapticFeedback": false
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutLastNameLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutLastNameLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0ca069beaf1fa4e",
                "text": "Last Name",
                "textStyle": {},
                "top": "285dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutLastNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "onTextChange": controller.AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0df1aa50e904b4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "318dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCompanyLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutCompanyLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0b6e721f6ee0142",
                "text": "Add Company Name (Optional)+",
                "textStyle": {},
                "top": "388dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCompanyInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCompanyInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0f00c9376174a4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "424dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutAddressLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0d2e1657ff67b47",
                "text": "Street Address",
                "textStyle": {},
                "top": "498dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutAddressInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0a74c1794125348",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "531dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddessDetailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutAddessDetailLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0j1251d5f7b9f41",
                "text": "Add Apt/Suite/Floor (Optional)+",
                "textStyle": {},
                "top": "611dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutAddressDetailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressDetailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j6bfbb8767c64a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "644dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutZipCodeLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutZipCodeLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0d564b14070114a",
                "text": "Zip Code",
                "textStyle": {},
                "top": "718dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutZipCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutZipCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0h336216f77ab47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "751dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCityLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutCityLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0h7f6b7ac202d44",
                "text": "City",
                "textStyle": {},
                "top": "828dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCityInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0b10fc8f9224b45",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "861dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutStateLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutStateLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0f96f41a0233e4f",
                "text": "State",
                "textStyle": {},
                "top": "934dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutStateInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutStateInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ba02eadc2eff42",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "964dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutEmailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutEmailLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0j192c6800f5d44",
                "text": "Email Address",
                "textStyle": {},
                "top": "1038dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutEmailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0a1a79f20956543",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1068dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var ChekoutPhoneLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ChekoutPhoneLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0i9e81a3a066148",
                "text": "Phone Number",
                "textStyle": {},
                "top": "1141dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCountryCodeLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "CheckoutCountryCodeLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0i9e81a3a066148",
                "text": "Country Code",
                "textStyle": {},
                "top": "1243dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutPhoneInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPhoneInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d6bea144eafe4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1171dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCountryCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCountryCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d6bea144eafe4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1277dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutColorBlock = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.16%",
                "clipBounds": false,
                "height": "50dp",
                "id": "CheckoutColorBlock",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1d2855ee7d348",
                "top": "1359dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutColorBlock.setDefaultUnit(voltmx.flex.DP);
            CheckoutColorBlock.add();
            var CheckoutContinueButton = new voltmx.ui.Button({
                "centerX": "50.16%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "CheckoutContinueButton",
                "isVisible": true,
                "left": "21dp",
                "onClick": controller.AS_Button_g2d635f049804bbabdf0f9c59fabfb0d,
                "skin": "CopydefBtnNormal0i0944cb0c6ae46",
                "text": "Continue",
                "top": "1439dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var OrderSummary = new Carousel.OrderSummary({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.16%",
                "height": "43.31%",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "1534dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50.16%",
                        "height": "43.31%",
                        "top": "1534dp"
                    },
                    "OrderSummaryItemList": {
                        "data": [{
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }]
                    },
                    "OrderSummaryLabel": {
                        "centerX": "50%",
                        "top": "13dp"
                    },
                    "ShipToAddressLabel": {
                        "left": "19dp",
                        "top": "177dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FullNameConverter = new voltmx.ui.Label({
                "id": "FullNameConverter",
                "isVisible": false,
                "left": "104dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {},
                "top": "1371dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            this.add(ShippingDetailsLabel, ProgressBar, CheckoutFIrstNameLabel, CheckoutFirstNameInput, CheckoutLastNameLabel, CheckoutLastNameInput, CheckoutCompanyLabel, CheckoutCompanyInput, CheckoutAddressLabel, CheckoutAddressInput, CheckoutAddessDetailLabel, CheckoutAddressDetailInput, CheckoutZipCodeLabel, CheckoutZipCodeInput, CheckoutCityLabel, CheckoutCityInput, CheckoutStateLabel, CheckoutStateInput, CheckoutEmailLabel, CheckoutEmailInput, ChekoutPhoneLabel, CheckoutCountryCodeLabel, CheckoutPhoneInput, CheckoutCountryCodeInput, CheckoutColorBlock, CheckoutContinueButton, OrderSummary, FullNameConverter);
        };
        return [{
            "addWidgets": addWidgetsCheckoutAddress,
            "enabledForIdleTimeout": false,
            "id": "CheckoutAddress",
            "init": controller.AS_Form_e65583c028c94c1f81be330e3ae684cd,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0b78efbf101814f",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "a0f2ba1a2db44238ae888c9c0e565544"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userCheckoutAddressController", {
    validateAddressInput: function() {
        var requiredFields = [{
            value: this.view.CheckoutFirstNameInput.text,
            name: "First Name"
        }, {
            value: this.view.CheckoutLastNameInput.text,
            name: "Last Name"
        }, {
            value: this.view.CheckoutAddressInput.text,
            name: "Address"
        }, {
            value: this.view.CheckoutZipCodeInput.text,
            name: "Zip Code"
        }, {
            value: this.view.CheckoutCityInput.text,
            name: "City"
        }, {
            value: this.view.CheckoutStateInput.text,
            name: "State"
        }, {
            value: this.view.CheckoutEmailInput.text,
            name: "Email"
        }, {
            value: this.view.CheckoutPhoneInput.text,
            name: "Phone Number"
        }];
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        for (var i = 0; i < requiredFields.length; i++) {
            if (!requiredFields[i].value.trim()) {
                alert("Please fill out the " + requiredFields[i].name + " field!");
                return false;
            }
        }
        if (!emailPattern.test(this.view.CheckoutEmailInput.text.trim())) {
            alert("Please enter a valid email!");
            return false;
        }
        var navigation = new voltmx.mvc.Navigation("CheckoutShippingMethod");
        navigation.navigate();
    },
    fullNameConverter: function() {
        var firstName = this.view.CheckoutFirstNameInput.text;
        var lastName = this.view.CheckoutLastNameInput.text;
        this.view.FullNameConverter.text = firstName + " " + lastName;
        console.log(this.view.FullNameConverter.text)
    },
    getOrderSummaryData: function() {
        this.view.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice");
        this.view.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
        var cartData = voltmx.store.getItem("UpdatedCartProductList");
        if (cartData) {
            var parsedCartData = JSON.parse(cartData);
            this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
        }
    },
    preinputInfo: function() {
        this.view.CheckoutFirstNameInput.text = "Jane";
        this.view.CheckoutLastNameInput.text = "Doe";
        this.view.CheckoutCompanyInput.text = "ZaiTen Inc.";
        this.view.CheckoutAddressInput.text = "123 Main St";
        this.view.CheckoutAddressDetailInput.text = "Apt 4B";
        this.view.CheckoutZipCodeInput.text = "10001";
        this.view.CheckoutCityInput.text = "New York";
        this.view.CheckoutStateInput.text = "NY";
        this.view.CheckoutEmailInput.text = "jane.doe@example.com";
        this.view.CheckoutPhoneInput.text = "+1 555-123-4567";
        this.view.CheckoutCountryCodeInput.text = "US";
    }
});
define("CheckoutAddressControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for CheckoutContinueButton **/
    AS_Button_g2d635f049804bbabdf0f9c59fabfb0d: function AS_Button_g2d635f049804bbabdf0f9c59fabfb0d(eventobject) {
        var self = this;

        function INVOKE_SERVICE_b4e7b0a3d7b5482cb90ae42ca828867a_Callback(status, SetBillingAddress) {
            var ntf = new voltmx.mvc.Navigation("CheckoutShippingMethod");
            ntf.navigate();
        }
        self.validateAddressInput.call(this);
        if (SetBillingAddress_inputparam == undefined) {
            var SetBillingAddress_inputparam = {};
        }
        SetBillingAddress_inputparam["serviceID"] = "VendureApis$SetBillingAddress";
        SetBillingAddress_inputparam["fullname"] = self.view.FullNameConverter.text;
        SetBillingAddress_inputparam["company"] = self.view.CheckoutCompanyInput.text;
        SetBillingAddress_inputparam["streetLine1"] = self.view.CheckoutAddressInput.text;
        SetBillingAddress_inputparam["streetLine2"] = self.view.CheckoutAddressDetailInput.text;
        SetBillingAddress_inputparam["postalCode"] = self.view.CheckoutZipCodeInput.text;
        SetBillingAddress_inputparam["city"] = self.view.CheckoutCityInput.text;
        SetBillingAddress_inputparam["province"] = self.view.CheckoutStateInput.text;
        SetBillingAddress_inputparam["phoneNumber"] = self.view.CheckoutPhoneInput.text;
        SetBillingAddress_inputparam["countryCode"] = self.view.CheckoutCountryCodeInput.text;
        var SetBillingAddress_httpheaders = {};
        SetBillingAddress_inputparam["httpheaders"] = SetBillingAddress_httpheaders;
        var SetBillingAddress_httpconfigs = {};
        SetBillingAddress_inputparam["httpconfig"] = SetBillingAddress_httpconfigs;
        VendureApis$SetBillingAddress = mfintegrationsecureinvokerasync(SetBillingAddress_inputparam, "VendureApis", "SetBillingAddress", INVOKE_SERVICE_b4e7b0a3d7b5482cb90ae42ca828867a_Callback);
    },
    /** init defined for CheckoutAddress **/
    AS_Form_e65583c028c94c1f81be330e3ae684cd: function AS_Form_e65583c028c94c1f81be330e3ae684cd(eventobject) {
        var self = this;
        self.preinputInfo.call(this);
        self.getOrderSummaryData.call(this);
    },
    /** onTouchStart defined for CheckoutFIrstNameLabel **/
    AS_Label_e673e6d6d1384b80bdbc00576e52a57d: function AS_Label_e673e6d6d1384b80bdbc00576e52a57d(eventobject, x, y) {
        var self = this;
    },
    /** onTextChange defined for CheckoutLastNameInput **/
    AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c: function AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c(eventobject, changedtext) {
        var self = this;
        return self.fullNameConverter.call(this);
    },
    /** onTextChange defined for CheckoutFirstNameInput **/
    AS_TextField_fc8f24616d1248db85c523a72e177b26: function AS_TextField_fc8f24616d1248db85c523a72e177b26(eventobject, changedtext) {
        var self = this;
        return self.fullNameConverter.call(this);
    }
});
define("CheckoutAddressController", ["userCheckoutAddressController", "CheckoutAddressControllerActions"], function() {
    var controller = require("userCheckoutAddressController");
    var controllerActions = ["CheckoutAddressControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("CheckoutPaymentMethod", [],function() {
    return function(controller) {
        function addWidgetsCheckoutPaymentMethod() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ProgressBar = new CheckoutTemplate.ProgressBar({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "ProgressBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f0a1dc06dd574a",
                "top": "0dp",
                "width": "1096px",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProgressBar": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "isVisible": true
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SelectPaymentMethodContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "600dp",
                "id": "SelectPaymentMethodContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "35dp",
                "minHeight": "650dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0i312f0a4da8244",
                "top": "127dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SelectPaymentMethodContainer.setDefaultUnit(voltmx.flex.DP);
            var SelectPaymentMethodLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "SelectPaymentMethodLabel",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0j55e95ac76444c",
                "text": "Select a payment method",
                "textStyle": {},
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PaymentDetailContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "500dp",
                "id": "PaymentDetailContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "14dp",
                "minHeight": "550dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0i312f0a4da8244",
                "top": "70dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PaymentDetailContainer.setDefaultUnit(voltmx.flex.DP);
            var PaymentDetailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "PaymentDetailLabel",
                "isVisible": true,
                "left": "29dp",
                "skin": "CopydefLabel0ec056a8ef3a540",
                "text": "3. Payment Details",
                "textStyle": {},
                "top": "14dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PayPalRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "PayPalRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1,
                "skin": "checkoutPaymentRadioBtn",
                "top": "67dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var ApplePayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "ApplePayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171,
                "skin": "checkoutPaymentRadioBtn",
                "top": "120dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var GooglePayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "GooglePayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef,
                "skin": "checkoutPaymentRadioBtn",
                "top": "174dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var HSARadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "HSARadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60,
                "skin": "checkoutPaymentRadioBtn",
                "top": "227dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var FSARadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "FSARadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c,
                "skin": "checkoutPaymentRadioBtn",
                "top": "280dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var LoyaltyPtnRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "LoyaltyPtnRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb,
                "skin": "checkoutPaymentRadioBtn",
                "top": "333dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var AfterPayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "AfterPayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7,
                "skin": "checkoutPaymentRadioBtn",
                "top": "386dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var CreditDebitRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "CreditDebitRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db,
                "skin": "checkoutPaymentRadioBtn",
                "top": "439dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var PayPalImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "43dp",
                "id": "PayPalImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "67dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ApplePayImg = new voltmx.ui.Image2({
                "centerX": "35.52%",
                "height": "43dp",
                "id": "ApplePayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "applepayicon.jpg",
                "top": "120dp",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var GooglePayImg = new voltmx.ui.Image2({
                "centerX": "34.03%",
                "height": "33dp",
                "id": "GooglePayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "googlepayimg.png",
                "top": "179dp",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ClearPayImg = new voltmx.ui.Image2({
                "centerX": "35.60%",
                "height": "43dp",
                "id": "ClearPayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "clearpayimg.png",
                "top": "386dp",
                "width": "83dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var VisaImg = new voltmx.ui.Image2({
                "centerX": "55.90%",
                "height": "43dp",
                "id": "VisaImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "visaimg.jpg",
                "top": "439dp",
                "width": "47dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ApplePayLabel = new voltmx.ui.Label({
                "id": "ApplePayLabel",
                "isVisible": true,
                "left": "155dp",
                "skin": "CopydefLabel0b928db7ad4a842",
                "text": "Apple Pay",
                "textStyle": {},
                "top": "129dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var GooglePayLabel = new voltmx.ui.Label({
                "id": "GooglePayLabel",
                "isVisible": true,
                "left": "155dp",
                "skin": "CopydefLabel0ae2ee15251b146",
                "text": "Google Pay",
                "textStyle": {},
                "top": "183dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var HSALabel = new voltmx.ui.Label({
                "id": "HSALabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0gc9e313f3cfe4d",
                "text": "HSA (Health Savings Account)",
                "textStyle": {},
                "top": "238dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FSALLabel = new voltmx.ui.Label({
                "id": "FSALLabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0i33ac5d7d7ad46",
                "text": "FSA (Flexible Savings Account)",
                "textStyle": {},
                "top": "293dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var LoyaltyPointLabel = new voltmx.ui.Label({
                "id": "LoyaltyPointLabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0hc7ee27a3c574b",
                "text": "Loyalty Points (0 points available)",
                "textStyle": {},
                "top": "345dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var AfterPayLabel = new voltmx.ui.Label({
                "id": "AfterPayLabel",
                "isVisible": true,
                "left": "164dp",
                "skin": "CopydefLabel0f953a685fb3445",
                "text": "Afterpay - 4 interest-free payments",
                "textStyle": {},
                "top": "390dp",
                "width": "156dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var MasterCardImg = new voltmx.ui.Image2({
                "height": "37dp",
                "id": "MasterCardImg",
                "isVisible": true,
                "left": "220dp",
                "skin": "slImage",
                "src": "mastercardimg.png",
                "top": "442dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var AmexImg = new voltmx.ui.Image2({
                "height": "42dp",
                "id": "AmexImg",
                "isVisible": true,
                "left": "263dp",
                "skin": "slImage",
                "src": "ameximg.png",
                "top": "440dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CreditDebitLabel = new voltmx.ui.Label({
                "id": "CreditDebitLabel",
                "isVisible": true,
                "left": "65dp",
                "skin": "CopydefLabel0ja7165eb95ce45",
                "text": "Credit/Debit Card",
                "textStyle": {},
                "top": "443dp",
                "width": "85dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ApplePayDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "ApplePayDynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0eb5f6cee1c904f",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ApplePayDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ApplePayBtnImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "ApplePayBtnImg",
                "isVisible": true,
                "left": "66dp",
                "skin": "slImage",
                "src": "applepayicon.jpg",
                "top": "16dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayWithApplePayLabel = new voltmx.ui.Label({
                "id": "PayWithApplePayLabel",
                "isVisible": true,
                "left": "137dp",
                "skin": "CopydefLabel0j6bb2ff720d243",
                "text": "Pay with Apple Pay",
                "textStyle": {},
                "top": "8dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            ApplePayDynamicCheckoutCtn.add(ApplePayBtnImg, PayWithApplePayLabel);
            var GooglePayDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "GooglePayDynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "81dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c1b8cf8c9a5e49",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            GooglePayDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var GooglePayBtnImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "GooglePayBtnImg",
                "isVisible": true,
                "left": "53dp",
                "skin": "slImage",
                "src": "googlepayimg.png",
                "top": "4dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayWithGooglePayLabel = new voltmx.ui.Label({
                "id": "PayWithGooglePayLabel",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopydefLabel0b5ad45252a1547",
                "text": "Pay with Google Pay",
                "textStyle": {},
                "top": "8dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            GooglePayDynamicCheckoutCtn.add(GooglePayBtnImg, PayWithGooglePayLabel);
            var HSADynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "HSADynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "12dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b83c200512354e",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            HSADynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ContinueWithHSALabel = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "ContinueWithHSALabel",
                "isVisible": true,
                "skin": "CopydefLabel0acaa9622b75643",
                "text": "Continue with HSA",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            HSADynamicCheckoutCtn.add(ContinueWithHSALabel);
            var FSADynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "FSADynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "13dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h25f0f3b7c2c4e",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FSADynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ContinueWithFSACtn = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "ContinueWithFSACtn",
                "isVisible": true,
                "skin": "CopydefLabel0h7caa92a115447",
                "text": "Continue with FSA",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FSADynamicCheckoutCtn.add(ContinueWithFSACtn);
            var PayPalDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "115dp",
                "id": "PayPalDynamicCheckoutCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayPalDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var PayPalBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "40dp",
                "id": "PayPalBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c261b513530a45",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayPalBtn.setDefaultUnit(voltmx.flex.DP);
            var PayPalButtonImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "PayPalButtonImg",
                "isVisible": true,
                "left": "115dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "-1dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PayPalBtn.add(PayPalButtonImg);
            var CreditDebitBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "40dp",
                "id": "CreditDebitBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea,
                "skin": "CopyslFbox0d9cc4e7b492942",
                "top": "53dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreditDebitBtn.setDefaultUnit(voltmx.flex.DP);
            var WhiteCardImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "23dp",
                "id": "WhiteCardImg",
                "isVisible": true,
                "left": "60dp",
                "skin": "slImage",
                "src": "cardimg.png",
                "top": "7dp",
                "width": "37dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var DebitOrCreditCardLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "DebitOrCreditCardLabel",
                "isVisible": true,
                "left": "100dp",
                "right": "47dp",
                "skin": "CopydefLabel0da674c7a01e54d",
                "text": "Debit or Credit Card",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CreditDebitBtn.add(WhiteCardImg, DebitOrCreditCardLabel);
            var PowerByPayPalCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "id": "PowerByPayPalCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "87dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PowerByPayPalCtn.setDefaultUnit(voltmx.flex.DP);
            var PoweredByLabel = new voltmx.ui.Label({
                "id": "PoweredByLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0jd0dbb78009c4f",
                "text": "Powered by",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PoweredByImg = new voltmx.ui.Image2({
                "height": "17dp",
                "id": "PoweredByImg",
                "isVisible": true,
                "right": "0",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "0dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PowerByPayPalCtn.add(PoweredByLabel, PoweredByImg);
            var CreditCardInfoCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "977dp",
                "id": "CreditCardInfoCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c9f12273f0ac49",
                "top": "127dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreditCardInfoCtn.setDefaultUnit(voltmx.flex.DP);
            var CreditCardInfoCloseBtn = new voltmx.ui.Label({
                "id": "CreditCardInfoCloseBtn",
                "isVisible": true,
                "onTouchStart": controller.AS_Label_f477a0b0bc874c84a99126cbc4ba2978,
                "right": "0",
                "skin": "defLabel",
                "text": "X",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCardNumberInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCardNumberInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Card Number",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutExpiresInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.06%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutExpiresInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Expires",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "100dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCSCInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.13%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCSCInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "CSC",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddressCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "507dp",
                "id": "BillingAddressCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h8d721e5e7ae46",
                "top": "203dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            BillingAddressCtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutFirstNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "First Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "53dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutLastNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Last Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "103dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine1Input = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine1Input",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 1",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "153dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine2Input = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine2Input",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 2",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "203dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCityInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "City / Town /Village",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "253dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutRegionInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutRegionInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "State / Provice / Region",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "303dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutPostalCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPostalCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Postal Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "353dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutMobileInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutMobileInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Mobile",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "403dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutEmailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Email",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "453dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddress = new voltmx.ui.Label({
                "centerX": "22.07%",
                "id": "BillingAddress",
                "isVisible": true,
                "skin": "CopydefLabel0c91e23aa79db48",
                "text": "Billing address",
                "textStyle": {},
                "top": "6dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCountryDropList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27dp",
                "id": "CheckoutCountryDropList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0e54a6a07aaf646",
                "top": "6dp",
                "width": "15.22%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList.setDefaultUnit(voltmx.flex.DP);
            var CountryFlagImg = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CountryFlagImg",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "usaflagimg.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CountryListDropDownIcon = new voltmx.ui.Image2({
                "centerX": "95.46%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "CountryListDropDownIcon",
                "isVisible": true,
                "left": "70dp",
                "skin": "slImage",
                "src": "listboxarw.png",
                "top": "-3dp",
                "width": "9dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList.add(CountryFlagImg, CountryListDropDownIcon);
            BillingAddressCtn.add(CheckoutFirstNameInput, CheckoutLastNameInput, CheckoutAddressLine1Input, CheckoutAddressLine2Input, CheckoutCityInput, CheckoutRegionInput, CheckoutPostalCodeInput, CheckoutMobileInput, CheckoutEmailInput, BillingAddress, CheckoutCountryDropList);
            var ShippingAddressCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.11%",
                "clipBounds": false,
                "height": "507dp",
                "id": "ShippingAddressCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h8d721e5e7ae46",
                "top": "778dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingAddressCtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutFirstNameInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "First Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "53dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutLastNameInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Last Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "103dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine1Shipping = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine1Shipping",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 1",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "153dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine2Shipping = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine2Shipping",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 2",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "203dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCityInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "City / Town /Village",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "253dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutRegionInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutRegionInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "State / Provice / Region",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "303dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutPostalCodeInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPostalCodeInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Postal Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "353dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutMobileInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutMobileInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Mobile",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "403dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutEmailInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Email",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "453dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddress2 = new voltmx.ui.Label({
                "centerX": "25.98%",
                "id": "BillingAddress2",
                "isVisible": true,
                "skin": "CopydefLabel0c91e23aa79db48",
                "text": "Shipping address",
                "textStyle": {},
                "top": "6dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutCountryDropList2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27dp",
                "id": "CheckoutCountryDropList2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0e54a6a07aaf646",
                "top": "6dp",
                "width": "15.22%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList2.setDefaultUnit(voltmx.flex.DP);
            var CountryFlagImg2 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CountryFlagImg2",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "usaflagimg.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CountryListDropDownIcon2 = new voltmx.ui.Image2({
                "centerX": "95.46%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "CountryListDropDownIcon2",
                "isVisible": true,
                "left": "70dp",
                "skin": "slImage",
                "src": "listboxarw.png",
                "top": "-3dp",
                "width": "9dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList2.add(CountryFlagImg2, CountryListDropDownIcon2);
            ShippingAddressCtn.add(CheckoutFirstNameInput2, CheckoutLastNameInput2, CheckoutAddressLine1Shipping, CheckoutAddressLine2Shipping, CheckoutCityInput2, CheckoutRegionInput2, CheckoutPostalCodeInput2, CheckoutMobileInput2, CheckoutEmailInput2, BillingAddress2, CheckoutCountryDropList2);
            var ShipToBillingAddressCheckbox = new voltmx.ui.CheckBoxGroup({
                "height": "47dp",
                "id": "ShipToBillingAddressCheckbox",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["1", "Ship to billing address"]
                ],
                "onSelection": controller.AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c,
                "skin": "slCheckBoxGroup",
                "top": "731dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "197dp",
                "id": "PayContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f4f8ae01fd184f",
                "top": "770dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayContainer.setDefaultUnit(voltmx.flex.DP);
            var CheckoutPayBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "27dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "40dp",
                "id": "CheckoutPayBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66,
                "skin": "CopyslFbox0af13a89140874d",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutPayBtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutPayLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "centerY": "49.72%",
                "id": "CheckoutPayLabel",
                "isVisible": true,
                "skin": "CopydefLabel0b7fb471f60e24d",
                "text": "Label",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CheckoutPayBtn.add(CheckoutPayLabel);
            var PayCtnPowerByPayPalCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "3dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "PayCtnPowerByPayPalCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "89dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "170dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayCtnPowerByPayPalCtn.setDefaultUnit(voltmx.flex.DP);
            var CopyPoweredByLabel0e1efed884abd4c = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopyPoweredByLabel0e1efed884abd4c",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0jd0dbb78009c4f",
                "text": "Powered by",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyPoweredByImg0ba00abc3c5d44c = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "CopyPoweredByImg0ba00abc3c5d44c",
                "isVisible": true,
                "right": "-7dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "-9dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PayCtnPowerByPayPalCtn.add(CopyPoweredByLabel0e1efed884abd4c, CopyPoweredByImg0ba00abc3c5d44c);
            var AcknowledgeLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "AcknowledgeLabel",
                "isVisible": true,
                "left": "63dp",
                "skin": "CopydefLabel0a82ec4dd3d1240",
                "text": "You acknowledge the terms of the service PayPal provides to the seller, and agree to the privacy statement. No PayPal account required.",
                "textStyle": {},
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            PayContainer.add(CheckoutPayBtn, PayCtnPowerByPayPalCtn, AcknowledgeLabel);
            CreditCardInfoCtn.add(CreditCardInfoCloseBtn, CheckoutCardNumberInput, CheckoutExpiresInput, CheckoutCSCInput, BillingAddressCtn, ShippingAddressCtn, ShipToBillingAddressCheckbox, PayContainer);
            PayPalDynamicCheckoutCtn.add(PayPalBtn, CreditDebitBtn, PowerByPayPalCtn, CreditCardInfoCtn);
            var LoyaltyPointCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "184dp",
                "id": "LoyaltyPointCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f605e2f7e58541",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            LoyaltyPointCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var LoyaltyPointInfoCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "77dp",
                "id": "LoyaltyPointInfoCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9b06f9c765544",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            LoyaltyPointInfoCtn.setDefaultUnit(voltmx.flex.DP);
            var YourLPLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "YourLPLabel",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0dad5e82a435048",
                "text": "Your Loyalty Points: 0",
                "textStyle": {},
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PointRequireLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "PointRequireLabel",
                "isVisible": true,
                "left": "53dp",
                "skin": "CopydefLabel0fcdf46eee3f642",
                "text": "Points Required: 819",
                "textStyle": {},
                "top": "39dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            LoyaltyPointInfoCtn.add(YourLPLabel, PointRequireLabel);
            var InsufficentPointsLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "InsufficentPointsLabel",
                "isVisible": true,
                "left": "33dp",
                "skin": "CopydefLabel0dc9fc20b486b4b",
                "text": "Insufficient points. You need 819 more points.",
                "textStyle": {},
                "top": "89dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PayWithLoyaltyPointBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "PayWithLoyaltyPointBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c0c4acf930c94a",
                "top": "144dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayWithLoyaltyPointBtn.setDefaultUnit(voltmx.flex.DP);
            var Label0eb0fd313b1fe44 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0eb0fd313b1fe44",
                "isVisible": true,
                "skin": "CopydefLabel0e4da38eaf00c4b",
                "text": "Pay with Loytalty Points",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            PayWithLoyaltyPointBtn.add(Label0eb0fd313b1fe44);
            LoyaltyPointCheckoutCtn.add(LoyaltyPointInfoCtn, InsufficentPointsLabel, PayWithLoyaltyPointBtn);
            PaymentDetailContainer.add(PaymentDetailLabel, PayPalRadioBtn, ApplePayRadioBtn, GooglePayRadioBtn, HSARadioBtn, FSARadioBtn, LoyaltyPtnRadioBtn, AfterPayRadioBtn, CreditDebitRadioBtn, PayPalImg, ApplePayImg, GooglePayImg, ClearPayImg, VisaImg, ApplePayLabel, GooglePayLabel, HSALabel, FSALLabel, LoyaltyPointLabel, AfterPayLabel, MasterCardImg, AmexImg, CreditDebitLabel, ApplePayDynamicCheckoutCtn, GooglePayDynamicCheckoutCtn, HSADynamicCheckoutCtn, FSADynamicCheckoutCtn, PayPalDynamicCheckoutCtn, LoyaltyPointCheckoutCtn);
            SelectPaymentMethodContainer.add(SelectPaymentMethodLabel, PaymentDetailContainer);
            var OrderSummary = new Carousel.OrderSummary({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "356dp",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "873dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50%",
                        "top": "873dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(ProgressBar, SelectPaymentMethodContainer, OrderSummary);
        };
        return [{
            "addWidgets": addWidgetsCheckoutPaymentMethod,
            "enabledForIdleTimeout": false,
            "id": "CheckoutPaymentMethod",
            "init": controller.AS_Form_b854374401be4dce81eef98afbc6b284,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ge19a82ccf184a5393e637808b9a75cb,
            "skin": "CopyslForm0cba030fe38a749",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "eae0974787e143e8acb5bb70f9da40ab"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userCheckoutPaymentMethodController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
    },
    getOrderSummaryData: function() {
        var cartTotal = voltmx.store.getItem("CartTotalPrice");
        console.log("CartTotal: ", cartTotal);
        this.view.OrderSummary.OrderSummaryTotalLabel.text = cartTotal || "0";
        this.view.CheckoutPayLabel.text = `Pay ${cartTotal}`;
        this.view.OrderSummary.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
        var cartData = voltmx.store.getItem("CartProductList");
        if (cartData) {
            var parsedCartData = JSON.parse(cartData);
            this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
        }
    },
    selectedValue: "PayPalRadioBtn",
    selectRadio: function(widget) {
        if (widget) {
            this.selectedValue = widget.id;
            console.log("Selected Radio Button ID: " + this.selectedValue);
            this.updateRadioButtons();
        } else {
            console.log("Widget is undefined");
        }
    },
    updateRadioButtons: function() {
        var radioButtons = [
            this.view.PayPalRadioBtn,
            this.view.ApplePayRadioBtn,
            this.view.GooglePayRadioBtn,
            this.view.HSARadioBtn,
            this.view.FSARadioBtn,
            this.view.LoyaltyPtnRadioBtn,
            this.view.AfterPayRadioBtn,
            this.view.CreditDebitRadioBtn
        ];
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i]) {
                radioButtons[i].selectedKey = "";
            }
        }
        var selectedRadio = this.view[this.selectedValue];
        if (selectedRadio) {
            selectedRadio.selectedKey = selectedRadio.masterData[0][0];
        }
        this.view.forceLayout();
    },
    displayDinamicCheckoutContent: function() {
        var containerMap = {
            "PayPalRadioBtn": this.view.PayPalDynamicCheckoutCtn,
            "ApplePayRadioBtn": this.view.ApplePayDynamicCheckoutCtn,
            "GooglePayRadioBtn": this.view.GooglePayDynamicCheckoutCtn,
            "HSARadioBtn": this.view.HSADynamicCheckoutCtn,
            "FSARadioBtn": this.view.FSADynamicCheckoutCtn,
            "LoyaltyPtnRadioBtn": this.view.LoyaltyPointCheckoutCtn,
        };
        // If switching away from PayPal, reset child containers
        if (this.selectedValue === "PayPalRadioBtn") {
            this.hideCreditCardInfoInput(); // Ensure billing form is hidden
            this.view.ShippingAddressCtn.isVisible = false; // Close shipping address
            this.view.forceLayout();
        }
        // Hide all dynamic checkout containers
        for (var key in containerMap) {
            if (containerMap[key]) {
                containerMap[key].isVisible = false;
            }
        }
        var selectedContainer = containerMap[this.selectedValue];
        if (selectedContainer) {
            selectedContainer.isVisible = true;
            this.view.forceLayout();
            var containerHeight = selectedContainer.frame.height;
            var innerContainerBaseHeight = 510;
            var outerContainerBaseHeight = 600;
            var orderSummaryDistanceFormTop = 770;
            this.view.PaymentDetailContainer.height = (innerContainerBaseHeight + containerHeight) + "dp";
            this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight + containerHeight) + "dp";
            this.view.OrderSummary.top = (orderSummaryDistanceFormTop + containerHeight) + "dp";
        }
        this.view.forceLayout();
    },
    showCreditCardInfoInput: function() {
        this.view.CreditCardInfoCtn.isVisible = true;
        this.view.PayPalBtn.isVisible = false;
        this.view.PowerByPayPalCtn.isVisible = false;
        this.view.forceLayout();
        var CreditCardInfoCtnHeight = this.view.CreditCardInfoCtn.frame.height;
        var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
        var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
        var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
        this.view.PaymentDetailContainer.height = (innerContainerBaseHeight + CreditCardInfoCtnHeight) + "dp";
        this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight + CreditCardInfoCtnHeight) + "dp";
        this.view.OrderSummary.top = (orderSummaryDistanceFormTop + CreditCardInfoCtnHeight) + "dp";
        this.view.ShipToBillingAddressCheckbox.selectedKeys = ["1"];
        this.view.forceLayout();
    },
    hideCreditCardInfoInput: function() {
        var CreditCardInfoCtnHeight = this.view.CreditCardInfoCtn.frame.height;
        var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
        var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
        var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
        var checkoutPayContainerDistanceFormTop = parseInt(this.view.PayContainer.top, 10);
        var ShippingAddressCtnHeight = this.view.ShippingAddressCtn.frame.height;
        ShippingAddressCtnHeight = this.view.ShippingAddressCtn.isVisible ? this.view.ShippingAddressCtn.frame.height : 0;
        checkoutPayContainerDistanceFormTop = this.view.ShippingAddressCtn.isVisible ? (checkoutPayContainerDistanceFormTop - ShippingAddressCtnHeight) + "dp" : checkoutPayContainerDistanceFormTop;
        this.view.CreditCardInfoCtn.isVisible = false;
        this.view.PayPalBtn.isVisible = true;
        this.view.PowerByPayPalCtn.isVisible = true;
        this.view.ShippingAddressCtn.isVisible = false;
        this.view.forceLayout();
        var totalHeightToReduce = CreditCardInfoCtnHeight + ShippingAddressCtnHeight;
        this.view.PaymentDetailContainer.height = (innerContainerBaseHeight - totalHeightToReduce) + "dp";
        this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight - totalHeightToReduce) + "dp";
        this.view.OrderSummary.top = (orderSummaryDistanceFormTop - totalHeightToReduce) + "dp";
        this.view.PayContainer.top = checkoutPayContainerDistanceFormTop + "dp";
        this.view.forceLayout();
    },
    toggleCreditCardShippingAddress: function() {
        var isCurrentlyVisible = this.view.ShippingAddressCtn.isVisible;
        this.view.ShippingAddressCtn.isVisible = !isCurrentlyVisible;
        this.view.forceLayout();
        var ShippingAddressCtnHeight = this.view.ShippingAddressCtn.frame.height;
        var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
        var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
        var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
        var checkoutPayContainerDistanceFormTop = parseInt(this.view.PayContainer.top, 10);
        this.view.PaymentDetailContainer.height = isCurrentlyVisible ? (innerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (innerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
        this.view.SelectPaymentMethodContainer.height = isCurrentlyVisible ? (outerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (outerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
        this.view.OrderSummary.top = isCurrentlyVisible ? (orderSummaryDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (orderSummaryDistanceFormTop + ShippingAddressCtnHeight) + "dp";
        this.view.PayContainer.top = isCurrentlyVisible ? (checkoutPayContainerDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (checkoutPayContainerDistanceFormTop + ShippingAddressCtnHeight) + "dp";
        this.view.forceLayout();
        console.log(this.view.ShipToBillingAddressCheckbox.selectedKeys);
    },
    preinputInfo: function() {
        this.view.CheckoutCardNumberInput.text = "4111 1111 1111 1111";
        this.view.CheckoutExpiresInput.text = "12/26";
        this.view.CheckoutCSCInput.text = "123";
        this.view.CheckoutFirstNameInput.text = "John";
        this.view.CheckoutLastNameInput.text = "Doe";
        this.view.CheckoutAddressLine1Input.text = "123 Main St";
        this.view.CheckoutAddressLine2Input.text = "Apt 4B";
        this.view.CheckoutCityInput.text = "New York";
        this.view.CheckoutRegionInput.text = "IN";
        this.view.CheckoutPostalCodeInput.text = "10001";
        this.view.CheckoutMobileInput.text = "+1 555-123-4567";
        this.view.CheckoutEmailInput.text = "john.doe@example.com";
        this.view.CheckoutFirstNameInput2.text = "Emily";
        this.view.CheckoutLastNameInput2.text = "Johnson";
        this.view.CheckoutAddressLine1Shipping.text = "456 Oak Avenue";
        this.view.CheckoutAddressLine2Shipping.text = "Suite 12";
        this.view.CheckoutCityInput2.text = "Los Angeles";
        this.view.CheckoutRegionInput2.text = "IN";
        this.view.CheckoutPostalCodeInput2.text = "90015";
        this.view.CheckoutMobileInput2.text = "+1 310-987-6543";
        this.view.CheckoutEmailInput2.text = "emily.johnson@example.com";
    },
    ApiBillingAddress: function(token) {
        var CheckoutCardNumberInput = this.view.CheckoutCardNumberInput.text;
        var CheckoutExpiresInput = this.view.CheckoutExpiresInput.text;
        var CheckoutCSCInput = this.view.CheckoutCSCInput.text;
        var CheckoutFirstNameInput = this.view.CheckoutFirstNameInput.text;
        var CheckoutLastNameInput = this.view.CheckoutLastNameInput.text;
        var CheckoutAddressLine1Input = this.view.CheckoutAddressLine1Input.text;
        var CheckoutAddressLine2Input = this.view.CheckoutAddressLine2Input.text;
        var CheckoutCityInput = this.view.CheckoutCityInput.text;
        var CheckoutRegionInput = this.view.CheckoutRegionInput.text;
        var CheckoutPostalCodeInput = this.view.CheckoutPostalCodeInput.text;
        var CheckoutMobileInput = this.view.CheckoutMobileInput.text;
        var CheckoutEmailInput = this.view.CheckoutEmailInput.text;
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("Authorization", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderBillingAddress($input: CreateAddressInput!) { setOrderBillingAddress(input: $input) { ... on Order { id code state active subTotal total } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "input": {
                    "fullName": `${CheckoutFirstNameInput} ${CheckoutLastNameInput}`,
                    "company": CheckoutAddressLine1Input,
                    "streetLine1": CheckoutAddressLine1Input,
                    "streetLine2": CheckoutAddressLine2Input,
                    "city": CheckoutCityInput,
                    "province": CheckoutCardNumberInput,
                    "postalCode": CheckoutPostalCodeInput,
                    "countryCode": CheckoutRegionInput,
                    "phoneNumber": CheckoutMobileInput
                }
            }
        });
        httpclient.send(jsonStr2);
    },
    ApiShoppingAddress: function(token) {
        var CheckoutFirstNameInput2 = this.view.CheckoutFirstNameInput2.text;
        var CheckoutLastNameInput2 = this.view.CheckoutLastNameInput2.text;
        var CheckoutAddressLine1Input2 = this.view.CheckoutAddressLine1Shipping.text;
        var CheckoutAddressLine2Input2 = this.view.CheckoutAddressLine2Shipping.text;
        var CheckoutCityInput2 = this.view.CheckoutCityInput2.text;
        var CheckoutRegionInput2 = this.view.CheckoutRegionInput2.text;
        var CheckoutPostalCodeInput2 = this.view.CheckoutPostalCodeInput2.text;
        var CheckoutMobileInput2 = this.view.CheckoutMobileInput2.text;
        var CheckoutEmailInput2 = this.view.CheckoutEmailInput2.text;
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("Authorization", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderShippingAddress($input: CreateAddressInput!) { setOrderShippingAddress(input: $input) { ... on Order { id code state active subTotal total } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "input": {
                    "fullName": `${CheckoutFirstNameInput2} ${CheckoutLastNameInput2}`,
                    "company": CheckoutAddressLine1Input2,
                    "streetLine1": CheckoutAddressLine1Input2,
                    "streetLine2": CheckoutAddressLine2Input2,
                    "city": CheckoutCityInput2,
                    "province": CheckoutMobileInput2,
                    "postalCode": CheckoutPostalCodeInput2,
                    "countryCode": CheckoutRegionInput2,
                    "phoneNumber": CheckoutMobileInput2
                }
            }
        });
        httpclient.send(jsonStr2);
    },
    BtnCallApi: function() {
        var token = localStorage.getItem("vendure-auth-token");
        if (this.view.CheckoutCardNumberInput.text !== "" || this.view.CheckoutExpiresInput.text !== "" || this.view.CheckoutCSCInput.text !== "" || this.view.CheckoutFirstNameInput.text !== "" || this.view.CheckoutLastNameInput.text !== "" || this.view.CheckoutAddressLine1Input.text !== "" || this.view.CheckoutAddressLine2Input.text !== "" || this.view.CheckoutCityInput.text !== "" || this.view.CheckoutRegionInput.text !== "" || this.view.CheckoutPostalCodeInput.text !== "" || this.view.CheckoutMobileInput.text !== "" || this.view.CheckoutEmailInput.text !== "") {
            console.log("12345673211352411321`23123")
            this.ApiBillingAddress(token);
            if (this.view.ShipToBillingAddressCheckbox.selectedKeys === null) {
                if (this.view.CheckoutFirstNameInput2.text !== "" || this.view.CheckoutLastNameInput2.text !== "" || this.view.CheckoutAddressLine1Shipping.text !== "" || this.view.CheckoutAddressLine2Shipping.text !== "" || this.view.CheckoutCityInput2.text !== "" || this.view.CheckoutRegionInput2.text !== "" || this.view.CheckoutPostalCodeInput2.text !== "" || this.view.CheckoutMobileInput2.text !== "" || this.view.CheckoutEmailInput2.text !== "") {
                    console.log("asdasdasdasdadsasdadasdasdas")
                    this.ApiShoppingAddress(token);
                }
            }
            var nav = new voltmx.mvc.Navigation("CheckoutSuccessful");
            nav.navigate();
        }
    },
});
define("CheckoutPaymentMethodControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for ShipToBillingAddressCheckbox **/
    AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c: function AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c(eventobject) {
        var self = this;
        return self.toggleCreditCardShippingAddress.call(this);
    },
    /** onClick defined for CheckoutPayBtn **/
    AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66: function AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66(eventobject) {
        var self = this;
        return self.BtnCallApi.call(this);
    },
    /** onClick defined for CreditDebitBtn **/
    AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea: function AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea(eventobject) {
        var self = this;
        return self.showCreditCardInfoInput.call(this);
    },
    /** init defined for CheckoutPaymentMethod **/
    AS_Form_b854374401be4dce81eef98afbc6b284: function AS_Form_b854374401be4dce81eef98afbc6b284(eventobject) {
        var self = this;
        self.updateProgressBar.call(this);
        self.getOrderSummaryData.call(this);
        self.updateRadioButtons.call(this);
        self.preinputInfo.call(this);
    },
    /** postShow defined for CheckoutPaymentMethod **/
    AS_Form_ge19a82ccf184a5393e637808b9a75cb: function AS_Form_ge19a82ccf184a5393e637808b9a75cb(eventobject) {
        var self = this;
        return self.displayDinamicCheckoutContent.call(this);
    },
    /** onTouchStart defined for CreditCardInfoCloseBtn **/
    AS_Label_f477a0b0bc874c84a99126cbc4ba2978: function AS_Label_f477a0b0bc874c84a99126cbc4ba2978(eventobject, x, y) {
        var self = this;
        return self.hideCreditCardInfoInput.call(this);
    },
    /** onSelection defined for CreditDebitRadioBtn **/
    AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db: function AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db(eventobject) {
        var self = this;
        return self.selectRadio.call(this, eventobject);
    },
    /** onSelection defined for GooglePayRadioBtn **/
    AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef: function AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for AfterPayRadioBtn **/
    AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7: function AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7(eventobject) {
        var self = this;
        return self.selectRadio.call(this, eventobject);
    },
    /** onSelection defined for LoyaltyPtnRadioBtn **/
    AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb: function AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for PayPalRadioBtn **/
    AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1: function AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for FSARadioBtn **/
    AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c: function AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for ApplePayRadioBtn **/
    AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171: function AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for HSARadioBtn **/
    AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60: function AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    }
});
define("CheckoutPaymentMethodController", ["userCheckoutPaymentMethodController", "CheckoutPaymentMethodControllerActions"], function() {
    var controller = require("userCheckoutPaymentMethodController");
    var controllerActions = ["CheckoutPaymentMethodControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("CheckoutShippingMethod", [],function() {
    return function(controller) {
        function addWidgetsCheckoutShippingMethod() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ProgressBar = new CheckoutTemplate.ProgressBar({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "ProgressBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f0a1dc06dd574a",
                "top": "0dp",
                "width": "1096px",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProgressBar": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "50%",
                        "width": "1096px"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CheckoutShippingMethodContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "717dp",
                "id": "CheckoutShippingMethodContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c3ee750914354f",
                "top": "143dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutShippingMethodContainer.setDefaultUnit(voltmx.flex.DP);
            var SelectShippingModeContainer = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "SelectShippingModeContainer",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0a28dae36ead843",
                "text": "2. Select Shipping Mode",
                "textStyle": {},
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ShippingModeContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "163dp",
                "id": "ShippingModeContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9d55cab71a940",
                "top": "63dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingModeContainer.setDefaultUnit(voltmx.flex.DP);
            var ShippingDetailsLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "ShippingDetailsLabel",
                "isVisible": true,
                "left": "69dp",
                "skin": "CopydefLabel0j0e606a75e1e45",
                "text": "Shipping Details",
                "textStyle": {},
                "top": "17dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ShippingOptions = new voltmx.ui.RadioButtonGroup({
                "centerX": "50.00%",
                "height": "100dp",
                "id": "ShippingOptions",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["4", "Ship to my address"],
                    ["2", "Pick from Pharmacy"],
                    ["1", "Ship from Pharmacy"]
                ],
                "onSelection": controller.AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62,
                "selectedKey": "4",
                "skin": "CopyslRadioButtonGroup0c36c3965688548",
                "top": "60dp",
                "width": "90%",
                "zIndex": 1,
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ShippingModeContainer.add(ShippingDetailsLabel, ShippingOptions);
            var CheckoutShippingMethodContinueBtn = new voltmx.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "CheckoutShippingMethodContinueBtn",
                "isVisible": true,
                "left": "27dp",
                "onClick": controller.AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5,
                "skin": "CopydefBtnNormal0h7f60296abdf46",
                "text": "Continue",
                "top": "252dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var OrderSummary = new Carousel.OrderSummary({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "356dp",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "337dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50%",
                        "top": "337dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CheckoutShippingMethodContainer.add(SelectShippingModeContainer, ShippingModeContainer, CheckoutShippingMethodContinueBtn, OrderSummary);
            var MapPopupDimScreen = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "MapPopupDimScreen",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90,
                "skin": "CopyslFbox0e112e75a317e42",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            MapPopupDimScreen.setDefaultUnit(voltmx.flex.DP);
            var MapContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "457dp",
                "id": "MapContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd,
                "skin": "CopyslFbox0b62c2eb3d8e84a",
                "top": "110dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            MapContainer.setDefaultUnit(voltmx.flex.DP);
            var map1 = new com.konymp.map1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "70%",
                "id": "map1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "90%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "map1": {
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "70%",
                        "left": "10dp",
                        "top": "10dp",
                        "width": "90%"
                    },
                    "mapLocations": {
                        "centerX": "viz.val_cleared",
                        "left": "0%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ChooseNearbyShopLabel = new voltmx.ui.Label({
                "id": "ChooseNearbyShopLabel",
                "isVisible": true,
                "right": "246dp",
                "skin": "CopydefLabel0efff489c21f24a",
                "text": "Choose Nearby Shop",
                "textStyle": {},
                "top": "345dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ContinueBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "30dp",
                "id": "ContinueBtn",
                "isVisible": true,
                "left": "188dp",
                "skin": "CopydefBtnNormal0ia9552fe739348",
                "text": "Continue",
                "top": "342dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CancelBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "30dp",
                "id": "CancelBtn",
                "isVisible": true,
                "left": "308dp",
                "onClick": controller.AS_Button_b18c9e749d9d489d8206a1a8e742e304,
                "skin": "CopydefBtnNormal0g38147245b2940",
                "text": "Cancel",
                "top": "341dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NoNearByTextContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.23%",
                "clipBounds": false,
                "height": "67dp",
                "id": "NoNearByTextContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g53c543749214d",
                "top": "382dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            NoNearByTextContainer.setDefaultUnit(voltmx.flex.DP);
            var Label0b4e1e804b62e4b = new voltmx.ui.Label({
                "id": "Label0b4e1e804b62e4b",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0ea11c24994a945",
                "text": "No nearby sellers for these cart items. Choose 'Ship to my address' to continue.",
                "textStyle": {},
                "top": "11dp",
                "width": "367dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            NoNearByTextContainer.add(Label0b4e1e804b62e4b);
            MapContainer.add(map1, ChooseNearbyShopLabel, ContinueBtn, CancelBtn, NoNearByTextContainer);
            MapPopupDimScreen.add(MapContainer);
            var ShippingConfirmationDImScreen = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "ShippingConfirmationDImScreen",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "117dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e,
                "skin": "CopyslFbox0a58db5a331884b",
                "top": "161dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingConfirmationDImScreen.setDefaultUnit(voltmx.flex.DP);
            var ShippingConfirmationCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "197dp",
                "id": "ShippingConfirmationCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b,
                "skin": "CopyslFbox0a3ccb36d241741",
                "top": "217dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingConfirmationCtn.setDefaultUnit(voltmx.flex.DP);
            var SHippingConfirmationText = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "SHippingConfirmationText",
                "isVisible": true,
                "left": "64dp",
                "skin": "CopydefLabel0ff5e5bdc06fb4e",
                "text": "Is your shipping address the same as your current location?",
                "textStyle": {},
                "top": "56dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ShippingConfirmationLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "ShippingConfirmationLabel",
                "isVisible": true,
                "skin": "CopydefLabel0aa6417129e0a40",
                "text": "Shipping Confirmation",
                "textStyle": {},
                "top": "13dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var YesBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "YesBtn",
                "isVisible": true,
                "left": "95dp",
                "onClick": controller.AS_Button_aab5859389084d0eb37ed6914ef9b3c9,
                "skin": "CopydefBtnNormal0de15220c334f43",
                "text": "Yes",
                "top": "128dp",
                "width": "90dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NoBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "NoBtn",
                "isVisible": true,
                "left": "201dp",
                "onClick": controller.AS_Button_f808072056b94c02b6e04e9bd93edbc6,
                "skin": "CopydefBtnNormal0g4e4dfc0c5a343",
                "text": "No",
                "top": "128dp",
                "width": "90dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ShippingConfirmationCtn.add(SHippingConfirmationText, ShippingConfirmationLabel, YesBtn, NoBtn);
            ShippingConfirmationDImScreen.add(ShippingConfirmationCtn);
            this.add(ProgressBar, CheckoutShippingMethodContainer, MapPopupDimScreen, ShippingConfirmationDImScreen);
        };
        return [{
            "addWidgets": addWidgetsCheckoutShippingMethod,
            "enabledForIdleTimeout": false,
            "id": "CheckoutShippingMethod",
            "init": controller.AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_gd8632a162fa4fa28ccf42f542426a3a,
            "skin": "CopyslForm0ac7aa9d564f346",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "b17f76394c484295b64c306ec564fc4f"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userCheckoutShippingMethodController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
    },
    addSpaceToRadioGroup: function() {
        this.view.ShippingModeContainer.ShippingOptions.lineSpace = 10;
    },
    getOrderSummaryData: function() {
        this.view.CheckoutShippingMethodContainer.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice") || "0";
        this.view.CheckoutShippingMethodContainer.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
        var cartData = voltmx.store.getItem("CartProductList");
        if (cartData) {
            var parsedCartData = JSON.parse(cartData);
            this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
        }
    },
    showMap: function() {
        var selectedKey = this.view.ShippingOptions.selectedKey;
        if (selectedKey === "PickFormPharmacy") {
            this.view.MapPopupDimScreen.isVisible = true;
        }
    },
    showShippingConfirmation: function() {
        var selectedKey = this.view.ShippingOptions.selectedKey;
        if (selectedKey === "ShipFormPharmacy") {
            this.view.ShippingConfirmationDImScreen.isVisible = true;
        }
    },
    hideMap: function() {
        this.view.MapPopupDimScreen.isVisible = false;
    },
    stopPropagation: function() {
        event.stopPropagation();
    },
    ApiShipingMethod: function() {
        var ShippingOptions = this.view.CheckoutShippingMethodContainer.ShippingModeContainer.ShippingOptions.selectedKey;
        var httpclient = new voltmx.net.HttpRequest();
        var token = localStorage.getItem("vendure-auth-token");
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("Authorization", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderShippingMethod($shippingMethodIds: [ID!]!) { setOrderShippingMethod(shippingMethodId: $shippingMethodIds) { ... on Order { id createdAt updatedAt type orderPlacedAt code state active totalQuantity subTotal subTotalWithTax currencyCode shipping shippingWithTax total totalWithTax } ... on OrderModificationError { errorCode message } ... on IneligibleShippingMethodError { errorCode message } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "shippingMethodIds": ShippingOptions
            }
        });
        httpclient.send(jsonStr2);
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4 && httpclient.status === 200) {
                var response = JSON.parse(httpclient.response);
                var itemData = response.data;
                if (itemData) {
                    var nav = new voltmx.mvc.Navigation("CheckoutPaymentMethod");
                    nav.navigate();
                }
            }
        }
    }
});
define("CheckoutShippingMethodControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for YesBtn **/
    AS_Button_aab5859389084d0eb37ed6914ef9b3c9: function AS_Button_aab5859389084d0eb37ed6914ef9b3c9(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
        this.view.MapPopupDimScreen.isVisible = true;
    },
    /** onClick defined for CancelBtn **/
    AS_Button_b18c9e749d9d489d8206a1a8e742e304: function AS_Button_b18c9e749d9d489d8206a1a8e742e304(eventobject) {
        var self = this;
        return self.hideMap.call(this);
    },
    /** onClick defined for CheckoutShippingMethodContinueBtn **/
    AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5: function AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5(eventobject) {
        var self = this;
        return self.ApiShipingMethod.call(this);
    },
    /** onClick defined for NoBtn **/
    AS_Button_f808072056b94c02b6e04e9bd93edbc6: function AS_Button_f808072056b94c02b6e04e9bd93edbc6(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
        this.view.MapPopupDimScreen.isVisible = true;
    },
    /** onClick defined for MapPopupDimScreen **/
    AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90: function AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90(eventobject) {
        var self = this;
        return self.hideMap.call(this);
    },
    /** onClick defined for MapContainer **/
    AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd: function AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd(eventobject) {
        var self = this;
        return self.stopPropagation.call(this);
    },
    /** onClick defined for ShippingConfirmationDImScreen **/
    AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e: function AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
    },
    /** onClick defined for ShippingConfirmationCtn **/
    AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b: function AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b(eventobject) {
        var self = this;
        return self.stopPropagation.call(this);
    },
    /** postShow defined for CheckoutShippingMethod **/
    AS_Form_gd8632a162fa4fa28ccf42f542426a3a: function AS_Form_gd8632a162fa4fa28ccf42f542426a3a(eventobject) {
        var self = this;
    },
    /** init defined for CheckoutShippingMethod **/
    AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e: function AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e(eventobject) {
        var self = this;
        self.updateProgressBar.call(this);
        self.getOrderSummaryData.call(this);
    },
    /** onSelection defined for ShippingOptions **/
    AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62: function AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62(eventobject) {
        var self = this;
        self.showMap.call(this);
        self.showShippingConfirmation.call(this);
    }
});
define("CheckoutShippingMethodController", ["userCheckoutShippingMethodController", "CheckoutShippingMethodControllerActions"], function() {
    var controller = require("userCheckoutShippingMethodController");
    var controllerActions = ["CheckoutShippingMethodControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("CheckoutSuccessful", [],function() {
    return function(controller) {
        function addWidgetsCheckoutSuccessful() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ProgressBar = new CheckoutTemplate.ProgressBar({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "ProgressBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f0a1dc06dd574a",
                "top": "0dp",
                "width": "1096px",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProgressBar": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "50%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var Payment = new Popup.Payment({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "40.63%",
                "height": "400dp",
                "id": "Payment",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknPayment",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "Payment": {
                        "centerX": "50%",
                        "centerY": "40.63%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            Payment.btnGoBack.onClick = controller.AS_Button_hbc403d7f60142d6a4d9a4cef79615e6;
            this.add(ProgressBar, Payment);
        };
        return [{
            "addWidgets": addWidgetsCheckoutSuccessful,
            "enabledForIdleTimeout": false,
            "id": "CheckoutSuccessful",
            "init": controller.AS_Form_c8b711fcac4b4f44b6bc6665c15ef520,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "h13ce12c6abc4ef5b29fd2db7380a4fe"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userCheckoutSuccessfulController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft4.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle4.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight4.skin = "CopyslFbox0ab370b90781448";
    },
});
define("CheckoutSuccessfulControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGoBack **/
    AS_Button_hbc403d7f60142d6a4d9a4cef79615e6: function AS_Button_hbc403d7f60142d6a4d9a4cef79615e6(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("Home");
        ntf.navigate();
    },
    /** init defined for CheckoutSuccessful **/
    AS_Form_c8b711fcac4b4f44b6bc6665c15ef520: function AS_Form_c8b711fcac4b4f44b6bc6665c15ef520(eventobject) {
        var self = this;
        return self.updateProgressBar.call(this);
    }
});
define("CheckoutSuccessfulController", ["userCheckoutSuccessfulController", "CheckoutSuccessfulControllerActions"], function() {
    var controller = require("userCheckoutSuccessfulController");
    var controllerActions = ["CheckoutSuccessfulControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define('CheckoutTemplate/ProgressBar/ProgressBar',[],function() {
    return function(controller) {
        var ProgressBar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "136dp",
            "id": "ProgressBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "9dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f0a1dc06dd574a",
            "top": "0dp",
            "width": "1096px",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBar"), extendConfig({}, controller.args[2], "ProgressBar"));
        ProgressBar.setDefaultUnit(voltmx.flex.DP);
        var ProgressBarLeft1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarLeft1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ab370b90781448",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarLeft1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarLeft1"), extendConfig({}, controller.args[2], "ProgressBarLeft1"));
        ProgressBarLeft1.setDefaultUnit(voltmx.flex.DP);
        ProgressBarLeft1.add();
        var ProgressBarCircle1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "ProgressBarCircle1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "23dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0b75af0da92e140",
            "top": "5dp",
            "width": "50dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarCircle1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarCircle1"), extendConfig({}, controller.args[2], "ProgressBarCircle1"));
        ProgressBarCircle1.setDefaultUnit(voltmx.flex.DP);
        var CircleLabel1 = new voltmx.ui.Label(extendConfig({
            "bottom": "0",
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "CircleLabel1",
            "isVisible": true,
            "right": "0%",
            "skin": "CopydefLabel0ibfcfedc770141",
            "text": "1",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CircleLabel1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CircleLabel1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CircleLabel1"));
        ProgressBarCircle1.add(CircleLabel1);
        var ProgressBarRight1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarRight1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "67dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0b4470b7db6c440",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarRight1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarRight1"), extendConfig({}, controller.args[2], "ProgressBarRight1"));
        ProgressBarRight1.setDefaultUnit(voltmx.flex.DP);
        ProgressBarRight1.add();
        var ProgressBarLeft2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarLeft2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "92dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ce0b78b7face43",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarLeft2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarLeft2"), extendConfig({}, controller.args[2], "ProgressBarLeft2"));
        ProgressBarLeft2.setDefaultUnit(voltmx.flex.DP);
        ProgressBarLeft2.add();
        var ProgressBarCircle2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "ProgressBarCircle2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "113dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ef3775bdc8674d",
            "top": "5dp",
            "width": "50dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarCircle2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarCircle2"), extendConfig({}, controller.args[2], "ProgressBarCircle2"));
        ProgressBarCircle2.setDefaultUnit(voltmx.flex.DP);
        var CircleLabel2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "CircleLabel2",
            "isVisible": true,
            "left": 13,
            "skin": "CopydefLabel0c93bd91d89c345",
            "text": "2",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CircleLabel2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CircleLabel2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CircleLabel2"));
        ProgressBarCircle2.add(CircleLabel2);
        var ProgressBarRight2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarRight2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "157dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0j6d5b67e6de247",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarRight2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarRight2"), extendConfig({}, controller.args[2], "ProgressBarRight2"));
        ProgressBarRight2.setDefaultUnit(voltmx.flex.DP);
        ProgressBarRight2.add();
        var ProgressBarLeft3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarLeft3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "182dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ffcb51c768dd45",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarLeft3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarLeft3"), extendConfig({}, controller.args[2], "ProgressBarLeft3"));
        ProgressBarLeft3.setDefaultUnit(voltmx.flex.DP);
        ProgressBarLeft3.add();
        var ProgressBarCircle3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "ProgressBarCircle3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "203dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0fc076f27f8f64c",
            "top": "5dp",
            "width": "50dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarCircle3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarCircle3"), extendConfig({}, controller.args[2], "ProgressBarCircle3"));
        ProgressBarCircle3.setDefaultUnit(voltmx.flex.DP);
        var CircleLabel3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "CircleLabel3",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopydefLabel0acf64178341b48",
            "text": "3",
            "textStyle": {},
            "top": "9dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CircleLabel3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CircleLabel3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CircleLabel3"));
        ProgressBarCircle3.add(CircleLabel3);
        var ProgressBarRight3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarRight3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "247dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0j41a48456d9a41",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarRight3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarRight3"), extendConfig({}, controller.args[2], "ProgressBarRight3"));
        ProgressBarRight3.setDefaultUnit(voltmx.flex.DP);
        ProgressBarRight3.add();
        var ProgressBarLeft4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarLeft4",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "272dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0baf0a615df0343",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarLeft4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarLeft4"), extendConfig({}, controller.args[2], "ProgressBarLeft4"));
        ProgressBarLeft4.setDefaultUnit(voltmx.flex.DP);
        ProgressBarLeft4.add();
        var ProgressBarCircle4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "ProgressBarCircle4",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "294dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0b1937e8e993a48",
            "top": "5dp",
            "width": "50dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarCircle4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarCircle4"), extendConfig({}, controller.args[2], "ProgressBarCircle4"));
        ProgressBarCircle4.setDefaultUnit(voltmx.flex.DP);
        var CircleLabel4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "CircleLabel4",
            "isVisible": true,
            "skin": "CopydefLabel0bd667cfbb55545",
            "text": "4",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CircleLabel4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CircleLabel4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CircleLabel4"));
        ProgressBarCircle4.add(CircleLabel4);
        var ProgressBarRight4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "ProgressBarRight4",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "340dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "CopyslFbox0i4ad328c532048",
            "top": "23dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProgressBarRight4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarRight4"), extendConfig({}, controller.args[2], "ProgressBarRight4"));
        ProgressBarRight4.setDefaultUnit(voltmx.flex.DP);
        ProgressBarRight4.add();
        var ProgressBarAddressLabel = new voltmx.ui.Label(extendConfig({
            "id": "ProgressBarAddressLabel",
            "isVisible": true,
            "left": "23dp",
            "skin": "CopydefLabel0id4e2ce9c8074f",
            "text": "Address",
            "textStyle": {},
            "top": "64dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ProgressBarAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarAddressLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ProgressBarAddressLabel"));
        var ProgressBarShippingLabel = new voltmx.ui.Label(extendConfig({
            "id": "ProgressBarShippingLabel",
            "isVisible": true,
            "left": "104dp",
            "skin": "CopydefLabel0h54d6f823de949",
            "text": "Shipping Method",
            "textStyle": {},
            "top": "56dp",
            "width": "68dp",
            "zIndex": 1
        }, controller.args[0], "ProgressBarShippingLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarShippingLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ProgressBarShippingLabel"));
        var ProgressBarReviewLabel = new voltmx.ui.Label(extendConfig({
            "id": "ProgressBarReviewLabel",
            "isVisible": true,
            "left": "207dp",
            "skin": "CopydefLabel0f023d46fbfb746",
            "text": "Review",
            "textStyle": {},
            "top": "64dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ProgressBarReviewLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarReviewLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ProgressBarReviewLabel"));
        var ProgressBarPaymentLabel = new voltmx.ui.Label(extendConfig({
            "id": "ProgressBarPaymentLabel",
            "isVisible": true,
            "left": "297dp",
            "skin": "CopydefLabel0d58403b36fe146",
            "text": "Payment",
            "textStyle": {},
            "top": "64dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ProgressBarPaymentLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProgressBarPaymentLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ProgressBarPaymentLabel"));
        ProgressBar.add(ProgressBarLeft1, ProgressBarCircle1, ProgressBarRight1, ProgressBarLeft2, ProgressBarCircle2, ProgressBarRight2, ProgressBarLeft3, ProgressBarCircle3, ProgressBarRight3, ProgressBarLeft4, ProgressBarCircle4, ProgressBarRight4, ProgressBarAddressLabel, ProgressBarShippingLabel, ProgressBarReviewLabel, ProgressBarPaymentLabel);
        return ProgressBar;
    }
});
define("CheckoutTemplate/ProgressBar/userProgressBarController", [],function() {
    return {};
});
define("CheckoutTemplate/ProgressBar/ProgressBarControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CheckoutTemplate/ProgressBar/ProgressBarController", ["CheckoutTemplate/ProgressBar/userProgressBarController", "CheckoutTemplate/ProgressBar/ProgressBarControllerActions"], function() {
    var controller = require("CheckoutTemplate/ProgressBar/userProgressBarController");
    var actions = require("CheckoutTemplate/ProgressBar/ProgressBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/map1/map1',[],function() {
    return function(controller) {
        var map1 = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "map1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "map1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "map1"), extendConfig({}, controller.args[2], "map1"));
        map1.setDefaultUnit(voltmx.flex.DP);
        var mapLocations = new voltmx.ui.Map(extendConfig({
            "calloutWidth": 80,
            "defaultPinImage": "map_pin_red.png",
            "height": "100%",
            "id": "mapLocations",
            "isVisible": true,
            "left": "0%",
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "mapLocations"), extendConfig({}, controller.args[1], "mapLocations"), extendConfig({
            "mapSource": constants.MAP_SOURCE_NON_NATIVE,
            "mode": constants.MAP_VIEW_MODE_NORMAL
        }, controller.args[2], "mapLocations"));
        map1.add(mapLocations);
        return map1;
    }
});
define("com/konymp/map1/usermap1Controller", [],function() {
    return {
        addLocationsToMap: function() {
            this.view.mapLocations.locationData = [{
                lat: "40.748817",
                lon: "-73.985428",
                image: "map_pin_red.png"
            }];
        }
    };
});
define("com/konymp/map1/map1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for map1 **/
    AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0: function AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0(eventobject) {
        var self = this;
        this.addLocationsToMap();
    }
});
define("com/konymp/map1/map1Controller", ["com/konymp/map1/usermap1Controller", "com/konymp/map1/map1ControllerActions"], function() {
    var controller = require("com/konymp/map1/usermap1Controller");
    var actions = require("com/konymp/map1/map1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("CopyFBox", [],function() {
    return function(controller) {
        CopyFBox = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "400dp",
            "id": "CopyFBox",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": 0,
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox3",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox.setDefaultUnit(voltmx.flex.DP);
        var FlxFrequentlyBoughtDetail = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "396dp",
            "id": "FlxFrequentlyBoughtDetail",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox2",
            "top": "7dp",
            "width": "92%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        FlxFrequentlyBoughtDetail.setDefaultUnit(voltmx.flex.DP);
        var FBProductImage = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "160dp",
            "id": "FBProductImage",
            "isVisible": true,
            "left": "25.01%",
            "skin": "CopyCopyslImage2",
            "src": "imagedrag.png",
            "top": "17dp",
            "width": "170dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var ProductType = new voltmx.ui.Label({
            "centerX": "50.02%",
            "centerY": "54.40%",
            "id": "ProductType",
            "isVisible": true,
            "maxNumberOfLines": 2,
            "skin": "CopyCopyCopydefLabel2",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1,
            "blur": {
                "enabled": true,
                "value": 0
            }
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var ProductName = new voltmx.ui.Label({
            "centerX": "49.05%",
            "id": "ProductName",
            "isVisible": true,
            "skin": "CopyCopyCopydefLabel1",
            "text": "Label",
            "textStyle": {},
            "top": "239dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var NetWeight = new voltmx.ui.Label({
            "centerX": "49.98%",
            "id": "NetWeight",
            "isVisible": true,
            "skin": "CopyCopyCopydefLabel",
            "text": "Label",
            "textStyle": {},
            "top": "280dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var ProductPrice = new voltmx.ui.Label({
            "centerX": "49.98%",
            "id": "ProductPrice",
            "isVisible": true,
            "skin": "CopyProductPriceSegment",
            "text": "Label",
            "textStyle": {},
            "top": "317dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var HiddenId = new voltmx.ui.Label({
            "id": "HiddenId",
            "isVisible": false,
            "left": "127dp",
            "skin": "CopyLightHeartLabel",
            "text": "Label",
            "textStyle": {},
            "top": "368dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        FlxFrequentlyBoughtDetail.add(FBProductImage, ProductType, ProductName, NetWeight, ProductPrice, HiddenId);
        CopyFBox.add(FlxFrequentlyBoughtDetail);
        return CopyFBox;
    }
});
define("CopyFBox0eea1207dbf814d", [],function() {
    return function(controller) {
        CopyFBox0eea1207dbf814d = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "400dp",
            "id": "CopyFBox0eea1207dbf814d",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": 0,
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0eea1207dbf814d.setDefaultUnit(voltmx.flex.DP);
        var FlexContainer0gb5dc6d99e664d = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "396dp",
            "id": "FlexContainer0gb5dc6d99e664d",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c88e78ea87c543",
            "top": "7dp",
            "width": "92%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        FlexContainer0gb5dc6d99e664d.setDefaultUnit(voltmx.flex.DP);
        var Image0b444a437263f48 = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "160dp",
            "id": "Image0b444a437263f48",
            "isVisible": true,
            "left": "25.01%",
            "skin": "CopyslImage4",
            "src": "imagedrag.png",
            "top": "17dp",
            "width": "170dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var ProductType = new voltmx.ui.Label({
            "centerX": "50.01%",
            "id": "ProductType",
            "isVisible": true,
            "maxNumberOfLines": 2,
            "skin": "CopydefLabel0ef167a7d8fdb4c",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "214dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1,
            "blur": {
                "enabled": true,
                "value": 0
            }
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var ProductName = new voltmx.ui.Label({
            "centerX": "50.08%",
            "id": "ProductName",
            "isVisible": true,
            "skin": "CopydefLabel0a9156da2c54943",
            "text": "Label",
            "textStyle": {},
            "top": "243dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var NetWeight = new voltmx.ui.Label({
            "centerX": "49.98%",
            "id": "NetWeight",
            "isVisible": true,
            "skin": "CopydefLabel0dbb2c67782cb4b",
            "text": "Label",
            "textStyle": {},
            "top": "280dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var ProductPrice = new voltmx.ui.Label({
            "centerX": "49.98%",
            "id": "ProductPrice",
            "isVisible": true,
            "skin": "CopydefLabel0gfa9923e63214c",
            "text": "Label",
            "textStyle": {},
            "top": "317dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        FlexContainer0gb5dc6d99e664d.add(Image0b444a437263f48, ProductType, ProductName, NetWeight, ProductPrice);
        CopyFBox0eea1207dbf814d.add(FlexContainer0gb5dc6d99e664d);
        return CopyFBox0eea1207dbf814d;
    }
});
define("userCopyFBox0eea1207dbf814dController", {
    //Type your controller code here 
});
define("CopyFBox0eea1207dbf814dControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBox0eea1207dbf814dController", ["userCopyFBox0eea1207dbf814dController", "CopyFBox0eea1207dbf814dControllerActions"], function() {
    var controller = require("userCopyFBox0eea1207dbf814dController");
    var controllerActions = ["CopyFBox0eea1207dbf814dControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxController", {
    //Type your controller code here 
});
define("CopyFBoxControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxController", ["userCopyFBoxController", "CopyFBoxControllerActions"], function() {
    var controller = require("userCopyFBoxController");
    var controllerActions = ["CopyFBoxControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("CopyflxSeg2", [],function() {
    return function(controller) {
        var CopyflxSeg2 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "CopyflxSeg2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0e8caf6165cdd49",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyflxSeg2.setDefaultUnit(voltmx.flex.DP);
        var flxImg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "75%",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "right": "73%",
            "skin": "CopyCopyslFbox3",
            "width": "40%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxImg.setDefaultUnit(voltmx.flex.DP);
        var img = new voltmx.ui.Image2({
            "height": "100%",
            "id": "img",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyslImage5",
            "src": "konymp_pl_shoe_1_list.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(img);
        var lblDescription = new voltmx.ui.Label({
            "height": "22%",
            "id": "lblDescription",
            "isVisible": true,
            "right": "0",
            "skin": "CopyslLabel0a625a35ab5ef44",
            "text": "Unisex Black Runnning Shoe Product description lines",
            "textStyle": {},
            "top": "18%",
            "width": "57%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblCost = new voltmx.ui.Label({
            "id": "lblCost",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopyslLabel0f425e8b5116f4e",
            "text": "$119.95",
            "textStyle": {},
            "top": "44.17%",
            "width": "57%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var MinusIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "MinusIcon",
            "isVisible": true,
            "left": "156dp",
            "onTouchStart": controller.AS_Image_g216879dd24a43d59d3e9c14cd26082c,
            "skin": "slImage",
            "src": "minusicon.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var PlusIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "PlusIcon",
            "isVisible": true,
            "left": "273dp",
            "onTouchStart": controller.AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682,
            "skin": "slImage",
            "src": "plusicon1.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var ProductQuantity = new voltmx.ui.Label({
            "id": "ProductQuantity",
            "isVisible": true,
            "left": "217dp",
            "skin": "CopydefLabel0a691a4569d9543",
            "text": "1",
            "textStyle": {},
            "top": "123dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [4, 0, 4, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var DeleteIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "DeleteIcon",
            "isVisible": true,
            "left": "323dp",
            "skin": "slImage",
            "src": "trashicon.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxSeg2.add(flxImg, lblDescription, lblCost, MinusIcon, PlusIcon, ProductQuantity, DeleteIcon);
        return CopyflxSeg2;
    }
});
define("userCopyflxSeg2Controller", {
    //Type your controller code here 
});
define("CopyflxSeg2ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for PlusIcon **/
    AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682: function AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682(eventobject, x, y, context) {
        var self = this;
    },
    /** onTouchStart defined for MinusIcon **/
    AS_Image_g216879dd24a43d59d3e9c14cd26082c: function AS_Image_g216879dd24a43d59d3e9c14cd26082c(eventobject, x, y, context) {
        var self = this;
    }
});
define("CopyflxSeg2Controller", ["userCopyflxSeg2Controller", "CopyflxSeg2ControllerActions"], function() {
    var controller = require("userCopyflxSeg2Controller");
    var controllerActions = ["CopyflxSeg2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("CopyShoppingCart", [],function() {
    return function(controller) {
        function addWidgetsCopyShoppingCart() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ShoppingCartHeader = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ShoppingCartHeader",
                "isVisible": true,
                "skin": "CopydefLabel0f7d1000ef1394d",
                "text": "Shopping Cart",
                "textStyle": {},
                "top": "37dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutAndPromoteContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "693dp",
                "id": "CheckoutAndPromoteContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "347dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutAndPromoteContainer.setDefaultUnit(voltmx.flex.DP);
            var ProcessToCheckoutBtn = new voltmx.ui.FlexContainer({
                "centerX": "50.08%",
                "clipBounds": true,
                "height": "60dp",
                "id": "ProcessToCheckoutBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a8422f35ddd346",
                "top": "310dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.setDefaultUnit(voltmx.flex.DP);
            var ProceedToCheckoutBtn = new voltmx.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ProceedToCheckoutBtn",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_cb24f0a3a31843b4a588767cc6b9d1d5,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Proceed to Checkout",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.add(ProceedToCheckoutBtn);
            var RiteAidRewardsBtn = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "RiteAidRewardsBtn",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopydefBtnNormal0a3af852624ba40",
                "text": "Rite Aid Rewards",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInLabel = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "SignInLabel",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "defRichTextLink",
                "skin": "defRichTextNormal",
                "text": "Sign in to earn/redeem BonusCash and clipped coupons.",
                "top": "90dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInBtnCOntainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "SignInBtnCOntainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0jdc530d1e72050",
                "top": "233dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.setDefaultUnit(voltmx.flex.DP);
            var SignInBtn = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "SignInBtn",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Sign In",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.add(SignInBtn);
            var SubTotalContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "47dp",
                "id": "SubTotalContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "380dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SubTotalContainer.setDefaultUnit(voltmx.flex.DP);
            var SubtotalLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "SubtotalLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0ea921d41b8a943",
                "text": "Subtotal (1 Items)",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PriceLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "PriceLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0d8702333e2ff48",
                "text": "$7.19",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            SubTotalContainer.add(SubtotalLabel, PriceLabel);
            var TaxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "47dp",
                "id": "TaxContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "427dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            TaxContainer.setDefaultUnit(voltmx.flex.DP);
            var TaxLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0becfaea1d7da4c",
                "text": "Tax",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var TaxAmountLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxAmountLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0f9596e9ea3544a",
                "text": "10%",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            TaxContainer.add(TaxLabel, TaxAmountLabel);
            var ApplyPomoteCodeLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ApplyPomoteCodeLabel",
                "isVisible": true,
                "left": "19dp",
                "skin": "CopydefLabel0h0e12740d0ab4a",
                "text": "Apply Promote Code",
                "textStyle": {},
                "top": "495dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PromoteCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "PromoteCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "19dp",
                "placeholder": "Promo Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0f2a0c9d31f3a42",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "537dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var DonateCheckbox = new voltmx.ui.CheckBoxGroup({
                "centerX": "50.00%",
                "height": "40dp",
                "id": "DonateCheckbox",
                "isVisible": true,
                "left": "20dp",
                "masterData": [
                    ["cbg1", "Donate My Change to KidCents"]
                ],
                "skin": "CopyslCheckBoxGroup0a94c6bfd5a364f",
                "top": "597dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var EstContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.09%",
                "clipBounds": false,
                "height": "40dp",
                "id": "EstContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "643dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            EstContainer.setDefaultUnit(voltmx.flex.DP);
            var EstLabel = new voltmx.ui.Label({
                "id": "EstLabel",
                "isVisible": true,
                "left": "0",
                "skin": "defLabel",
                "text": "Est. Total",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var EstAmount = new voltmx.ui.Label({
                "id": "EstAmount",
                "isVisible": true,
                "right": "0",
                "skin": "defLabel",
                "text": "$8.19",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            EstContainer.add(EstLabel, EstAmount);
            var CreateAccountButtonContainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "CreateAccountButtonContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0jc7016e74ec242",
                "top": "160dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.setDefaultUnit(voltmx.flex.DP);
            var ButtonRound = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Create Account",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.add(ButtonRound);
            CheckoutAndPromoteContainer.add(ProcessToCheckoutBtn, RiteAidRewardsBtn, SignInLabel, SignInBtnCOntainer, SubTotalContainer, TaxContainer, ApplyPomoteCodeLabel, PromoteCodeInput, DonateCheckbox, EstContainer, CreateAccountButtonContainer);
            var RecommendedLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "RecommendedLabel",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopydefLabel0af92cc635be54f",
                "text": "Recommended for You",
                "textStyle": {},
                "top": "1070dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ProductListCarousel = new Carousel.ProductListCarousel({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "260dp",
                "id": "ProductListCarousel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1143dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProductCarousel": {
                        "data": [{
                            "CarouselPoductUnitQuantity": "",
                            "CarouselProductImg": "",
                            "CarouselProductMade": "",
                            "CarouselProductName": "",
                            "CarouselProductPrice": ""
                        }]
                    },
                    "ProductListCarousel": {
                        "height": "260dp",
                        "left": "0dp",
                        "top": "1143dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FooterDemo = new RiteAidFooter.FooterDemo({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFooterDemo",
                "top": "1403dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "FooterDemo": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "top": "1403dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CartProductList = new ListView.CartProductList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "200dp",
                "id": "CartProductList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox3",
                "top": "120dp",
                "width": "100%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "CartProductList": {
                        "height": "200dp",
                        "top": "120dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(ShoppingCartHeader, CheckoutAndPromoteContainer, RecommendedLabel, ProductListCarousel, FooterDemo, CartProductList);
        };
        return [{
            "addWidgets": addWidgetsCopyShoppingCart,
            "enabledForIdleTimeout": false,
            "id": "CopyShoppingCart",
            "init": controller.AS_Form_db4456019d814bd8b1e08186eeaf27d9,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "g2f808f3aabf4a22af7f84d9273533ed"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userCopyShoppingCartController", {
    CartProductList: [{
        lblDescription: "test",
        unitPrice: 50,
        DeleteIcon: 'trashicon.png',
        MinusIcon: 'minusicon.png',
        PlusIcon: 'plusicon.png',
        ProductQuantity: '1',
        img: 'cartproductimg.png'
    }, {
        lblDescription: "test",
        unitPrice: 50,
        DeleteIcon: 'trashicon.png',
        MinusIcon: 'minusicon.png',
        PlusIcon: 'plusicon.png',
        ProductQuantity: '1',
        img: 'cartproductimg.png'
    }, {
        lblDescription: "test",
        unitPrice: 50,
        DeleteIcon: 'trashicon.png',
        MinusIcon: 'minusicon.png',
        PlusIcon: 'plusicon.png',
        ProductQuantity: '1',
        img: 'cartproductimg.png'
    }],
    CartCarouselProductList: [{
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }],
    initProductData: function() {
        var scope = this;
        var modifiedData = [];
        for (var i = 0; i < this.CartProductList.length; i++) {
            var item = this.CartProductList[i];
            var newItem = {
                lblDescription: item.lblDescription,
                lblCost: "$" + item.unitPrice.toFixed(2),
                unitPrice: item.unitPrice,
                DeleteIcon: item.DeleteIcon,
                ProductQuantity: item.ProductQuantity,
                img: item.img,
                PlusIcon: {
                    src: item.PlusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.increaseQuantity(index);
                        };
                    })(i)
                },
                MinusIcon: {
                    src: item.MinusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.decreaseQuantity(index);
                        };
                    })(i)
                }
            };
            modifiedData.push(newItem);
        }
        this.view.CartProductList.ProductList.setData(modifiedData);
        this.view.ProductListCarousel.ProductCarousel.setData(this.CartCarouselProductList);
        this.calculateTotal();
    },
    increaseQuantity: function(rowIndex) {
        var segmentData = this.view.CartProductList.ProductList.data;
        var newQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1;
        segmentData[rowIndex].ProductQuantity = newQuantity.toString();
        segmentData[rowIndex].lblCost = "$" + (segmentData[rowIndex].unitPrice * newQuantity).toFixed(2);
        // Instead of setData(), use setDataAt() to update only the changed row
        this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
        this.calculateTotal();
        // Map the data to the new format
        var mappedData = segmentData.map(function(item) {
            return {
                OrderSummaryItemImg: item.img,
                OrderSummaryProductName: item.lblDescription,
                OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                OrderSummaryProductPrice: item.lblCost
            };
        });
        // Store the mapped cart data
        voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
    },
    decreaseQuantity: function(rowIndex) {
        var segmentData = this.view.CartProductList.ProductList.data;
        var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);
        if (currentQuantity > 1) {
            var newQuantity = currentQuantity - 1;
            segmentData[rowIndex].ProductQuantity = newQuantity.toString();
            segmentData[rowIndex].lblCost = "$" + (segmentData[rowIndex].unitPrice * newQuantity).toFixed(2);
            // Use setDataAt() to update only the modified row
            this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
            this.calculateTotal();
            // Map the data to the new format
            var mappedData = segmentData.map(function(item) {
                return {
                    OrderSummaryItemImg: item.img,
                    OrderSummaryProductName: item.lblDescription,
                    OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                    OrderSummaryProductPrice: item.lblCost
                };
            });
            // Store the mapped cart data
            voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
        }
    },
    calculateTotal: function() {
        var segmentData = this.view.CartProductList.ProductList.data;
        var totalPrice = 0;
        for (var i = 0; i < segmentData.length; i++) {
            var item = segmentData[i];
            var quantity = parseInt(item.ProductQuantity, 10);
            var unitPrice = item.unitPrice;
            totalPrice += quantity * unitPrice;
        }
        this.view.CheckoutAndPromoteContainer.
        EstContainer.EstAmount.text = "$" + totalPrice.toFixed(2);
    },
    navigateToCheckout: function() {
        var taxText = this.view.CheckoutAndPromoteContainer.TaxContainer.TaxAmountLabel.text;
        var cartTotalText = this.view.CheckoutAndPromoteContainer.EstContainer.EstAmount.text;
        // Remove "$" and "%" symbols, then convert to numbers
        var taxPercentage = parseFloat(taxText.replace("%", "").trim());
        var cartTotalPrice = parseFloat(cartTotalText.replace("$", "").trim());
        // Convert tax percentage to decimal and calculate the final total
        var taxAmount = (cartTotalPrice * taxPercentage) / 100;
        var finalTotalPrice = cartTotalPrice + taxAmount;
        // Store the updated total price
        voltmx.store.setItem("CartTotalPrice", "$" + finalTotalPrice.toFixed(2));
        voltmx.store.setItem("CartItemQuantity", this.CartProductList.length);
        var navObj = new voltmx.mvc.Navigation("CheckoutAddress");
        navObj.navigate();
    }
});
define("CopyShoppingCartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ProceedToCheckoutBtn **/
    AS_Button_cb24f0a3a31843b4a588767cc6b9d1d5: function AS_Button_cb24f0a3a31843b4a588767cc6b9d1d5(eventobject) {
        var self = this;
        return self.navigateToCheckout.call(this);
    },
    /** init defined for CopyShoppingCart **/
    AS_Form_db4456019d814bd8b1e08186eeaf27d9: function AS_Form_db4456019d814bd8b1e08186eeaf27d9(eventobject) {
        var self = this;
        return self.initProductData.call(this);
    }
});
define("CopyShoppingCartController", ["userCopyShoppingCartController", "CopyShoppingCartControllerActions"], function() {
    var controller = require("userCopyShoppingCartController");
    var controllerActions = ["CopyShoppingCartControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Dashboard", [],function() {
    return function(controller) {
        function addWidgetsDashboard() {
            this.setDefaultUnit(voltmx.flex.DP);
            var contentScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "contentScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "50dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            contentScroll.setDefaultUnit(voltmx.flex.DP);
            var lblTitle = new voltmx.ui.Label({
                "id": "lblTitle",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b33dfb3b299442",
                "text": "Account Dashboard",
                "textStyle": {},
                "top": "3%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlexContainer1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "160dp",
                "id": "FlexContainer1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "maxHeight": "220dp",
                "minHeight": 121,
                "isModalContainer": false,
                "right": "3%",
                "skin": "CopyslFbox0jc43b82480cd41",
                "top": "10%",
                "width": "94%",
                "zIndex": 10,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer1.setDefaultUnit(voltmx.flex.DP);
            var lblWelcome = new voltmx.ui.Label({
                "id": "lblWelcome",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblWelcome",
                "text": "Welcome Bonus",
                "textStyle": {},
                "top": "3%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lbldes = new voltmx.ui.Label({
                "id": "lbldes",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlbldes",
                "text": "Redeem your welcome bonus of 2000 points",
                "textStyle": {},
                "top": "20%",
                "width": "55%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlexContainerBonus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "3%",
                "clipBounds": false,
                "height": "25%",
                "id": "FlexContainerBonus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "right": "3%",
                "skin": "CopyslFbox0b099fbcfb87d40",
                "top": "65%",
                "width": "94%",
                "zIndex": 30,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerBonus.setDefaultUnit(voltmx.flex.DP);
            var lblTotalBn = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblTotalBn",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblTotalBn",
                "text": "Your Total Points:",
                "textStyle": {},
                "top": "3%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddBn = new voltmx.ui.Label({
                "height": "0%",
                "id": "lblAddBn",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblAddBn",
                "textStyle": {},
                "top": "50%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblCurnentP = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblCurnentP",
                "isVisible": true,
                "right": "3%",
                "skin": "skinlblCurnentP",
                "text": "0",
                "textStyle": {},
                "top": "3%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddingP = new voltmx.ui.Label({
                "height": "0%",
                "id": "lblAddingP",
                "isVisible": true,
                "right": "3%",
                "skin": "CopydefLabel0fa5a4eddede34c",
                "textStyle": {},
                "top": "50%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainerBonus.add(lblTotalBn, lblAddBn, lblCurnentP, lblAddingP);
            var btnAddP = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40%",
                "id": "btnAddP",
                "isVisible": true,
                "onClick": controller.AS_Button_iaa34a4aaf3f4bce8f2c618330d47268,
                "right": "3%",
                "skin": "skinbtnAddP",
                "text": "Redeem 2000 Points",
                "top": "5%",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {});
            FlexContainer1.add(lblWelcome, lbldes, FlexContainerBonus, btnAddP);
            var FlexContainer2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "550dp",
                "id": "FlexContainer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1.97%",
                "isModalContainer": false,
                "right": "3%",
                "skin": "skinFlexContainer2",
                "top": "31.99%",
                "width": "94%",
                "zIndex": 10,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer2.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0ec0403d4e6fd41 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.61%",
                "id": "FlexContainer0ec0403d4e6fd41",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0cc0bf69f41084c",
                "top": "3%",
                "width": "94%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0ec0403d4e6fd41.setDefaultUnit(voltmx.flex.DP);
            var Image0dc6020290fcf41 = new voltmx.ui.Image2({
                "height": "20%",
                "id": "Image0dc6020290fcf41",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "image.png",
                "top": "3%",
                "width": "94%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainerleft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "FlexContainerleft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "skinFlexContainerleft",
                "top": "22%",
                "width": "46.30%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerleft.setDefaultUnit(voltmx.flex.DP);
            var lblMP = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblMP",
                "isVisible": true,
                "skin": "CopydefLabel0be8edc5ff52e42",
                "text": "My Points",
                "textStyle": {},
                "top": "3%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblP = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblP",
                "isVisible": true,
                "skin": "skinlblP",
                "text": "0",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0ab7f05ba45e045 = new voltmx.ui.Label({
                "bottom": "3%",
                "centerX": "50%",
                "id": "Label0ab7f05ba45e045",
                "isVisible": true,
                "skin": "CopydefLabel0e719e189a30948",
                "text": "Activity",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainerleft.add(lblMP, lblP, Label0ab7f05ba45e045);
            var FlexContaineright = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "FlexContaineright",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "skinFlexContaineright",
                "top": "22%",
                "width": "46.30%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContaineright.setDefaultUnit(voltmx.flex.DP);
            var Label0f5596b2e18a941 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0f5596b2e18a941",
                "isVisible": true,
                "skin": "CopydefLabel0g1058167b4cc40",
                "text": "$0.00",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblBC = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblBC",
                "isVisible": true,
                "skin": "skinBonusCash",
                "text": "BonusCash",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0ecabe828325449 = new voltmx.ui.Label({
                "bottom": "0",
                "centerX": "50%",
                "id": "Label0ecabe828325449",
                "isVisible": true,
                "skin": "CopydefLabel0e4b1676a69804c",
                "text": "($00 Pending) Activity",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContaineright.add(Label0f5596b2e18a941, lblBC, Label0ecabe828325449);
            var Button0eb5f155372f14b = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "Button0eb5f155372f14b",
                "isVisible": true,
                "left": "62dp",
                "skin": "CopydefBtnNormal0ad585f095bb743",
                "text": "Convert Points to BonusCash",
                "top": "39%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0a29063fbc44c4c = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Label0a29063fbc44c4c",
                "isVisible": true,
                "skin": "CopydefLabel0d5762849de0945",
                "text": "1000 points = $2.00",
                "textStyle": {},
                "top": "59%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var btn1 = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn1",
                "isVisible": true,
                "left": "40dp",
                "skin": "CopydefBtnNormal0h128c706b97040",
                "text": "Rewards Notifications",
                "top": "62%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn2 = new voltmx.ui.Button({
                "centerX": "49.86%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn2",
                "isVisible": true,
                "left": "41dp",
                "skin": "CopydefBtnNormal0fd1221ab2c854d",
                "text": "BonusCash Challenges",
                "top": "67%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn3 = new voltmx.ui.Button({
                "centerX": "49.58%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn3",
                "isVisible": true,
                "left": "36dp",
                "skin": "CopydefBtnNormal0cac2dae4d64b4d",
                "text": "View My Weekly Ad",
                "top": "72%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn4 = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn4",
                "isVisible": true,
                "left": "36dp",
                "skin": "CopydefBtnNormal0a17f586632264f",
                "text": "Clipped Coupons $0.00",
                "top": "77%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bnt5 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "bnt5",
                "isVisible": true,
                "left": "41dp",
                "skin": "CopydefBtnNormal0j01394266b2e40",
                "text": "Online Deals",
                "top": "82%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn6 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn6",
                "isVisible": true,
                "left": "40dp",
                "skin": "CopydefBtnNormal0e2afd2c743a44a",
                "text": "KidCents Donations",
                "top": "87%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0ee459474a6034d = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "8%",
                "id": "Label0ee459474a6034d",
                "isVisible": true,
                "left": "121dp",
                "skin": "CopydefLabel0i688784fd1324b",
                "text": "Automatically sconvert Reward Points to BonusCash every 1,000 points.",
                "textStyle": {},
                "top": "50%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0cd8ec16c4ada42 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0cd8ec16c4ada42",
                "isVisible": true,
                "left": "44dp",
                "skin": "CopydefLabel0e3f45792f6cf41",
                "textStyle": {},
                "top": "67%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0jdd9156ce45c4b = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0jdd9156ce45c4b",
                "isVisible": true,
                "skin": "CopydefLabel0d0ee8ca7632f42",
                "textStyle": {},
                "top": "72%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0cd49f2f02e2f4a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0cd49f2f02e2f4a",
                "isVisible": true,
                "left": "76dp",
                "skin": "CopydefLabel0a325b60e0cae4c",
                "text": "Label",
                "textStyle": {},
                "top": "77%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0g6a0bd59fe0d47 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0g6a0bd59fe0d47",
                "isVisible": true,
                "left": "86dp",
                "skin": "CopydefLabel0d6bb634f821a44",
                "textStyle": {},
                "top": "82%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0aa96162f28cd46 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0aa96162f28cd46",
                "isVisible": true,
                "left": "78dp",
                "skin": "CopydefLabel0cfa02273611846",
                "textStyle": {},
                "top": "87%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0gd94f14c27e54a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0gd94f14c27e54a",
                "isVisible": true,
                "left": "78dp",
                "skin": "CopydefLabel0c9ea27e651b549",
                "textStyle": {},
                "top": "92%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0ec0403d4e6fd41.add(Image0dc6020290fcf41, FlexContainerleft, FlexContaineright, Button0eb5f155372f14b, Label0a29063fbc44c4c, btn1, btn2, btn3, btn4, bnt5, btn6, Label0ee459474a6034d, Label0cd8ec16c4ada42, Label0jdd9156ce45c4b, Label0cd49f2f02e2f4a, Label0g6a0bd59fe0d47, Label0aa96162f28cd46, Label0gd94f14c27e54a);
            FlexContainer2.add(FlexContainer0ec0403d4e6fd41);
            contentScroll.add(lblTitle, FlexContainer1, FlexContainer2);
            var HeaderBar = new RiteAidCommon.HeaderBar({
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBar": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(contentScroll, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsDashboard,
            "enabledForIdleTimeout": false,
            "id": "Dashboard",
            "init": controller.AS_Form_b9f7e17ac1324e5c844ab085db9e54c7,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "c2417149800147c59e6f865367cba828"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userDashboardController", {
    //Type your controller code here 
    //   test: function() {
    //     var test = this.view.FlexContainer0f9b1b0dd0e7144.lblWelcome.text;
    //     console.log("You've successfully redeemed your welcome bonus!");
    //     console.log("2,000");
    //   },
    AddPoint: function() {
        var container1 = this.view.FlexContainer1;
        container1.height = "220dp";
        var container2 = this.view.FlexContainer2;
        container2.top = "40%";
        var containerBonus = this.view.FlexContainer1.FlexContainerBonus;
        containerBonus.height = "50%";
        containerBonus.top = "45%";
        var lbldes = this.view.FlexContainer1.lbldes;
        lbldes.width = "80%";
        lbldes.text = "You've successfully redeemed your welcome bonus!";
        var lblTotalBn = this.view.FlexContainer1.FlexContainerBonus.lblTotalBn;
        lblTotalBn.height = "50%";
        var lblCurnentP = this.view.FlexContainer1.FlexContainerBonus.lblCurnentP;
        lblCurnentP.text = "2,000";
        lblCurnentP.height = "50%";
        var lblAddingP = this.view.FlexContainer1.FlexContainerBonus.lblAddingP;
        lblAddingP.text = "+2,000";
        lblAddingP.height = "50%";
        var lblAddBn = this.view.FlexContainer1.FlexContainerBonus.lblAddBn;
        lblAddBn.text = "Welcome Bonus:";
        lblAddBn.height = "50%";
        var btnAddP = this.view.FlexContainer1.btnAddP;
        btnAddP.setVisibility(false);
        var lblP = this.view.FlexContainer2.FlexContainer0ec0403d4e6fd41.FlexContainerleft.lblP;
        lblP.text = "2000";
    }
});
define("DashboardControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnAddP **/
    AS_Button_iaa34a4aaf3f4bce8f2c618330d47268: function AS_Button_iaa34a4aaf3f4bce8f2c618330d47268(eventobject) {
        var self = this;
        return self.AddPoint.call(this);
    },
    /** init defined for Dashboard **/
    AS_Form_b9f7e17ac1324e5c844ab085db9e54c7: function AS_Form_b9f7e17ac1324e5c844ab085db9e54c7(eventobject) {
        var self = this;
    }
});
define("DashboardController", ["userDashboardController", "DashboardControllerActions"], function() {
    var controller = require("userDashboardController");
    var controllerActions = ["DashboardControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Flex0f2795775352a48", [],function() {
    return function(controller) {
        var Flex0f2795775352a48 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "clipBounds": true,
            "height": "1000px",
            "id": "Flex0f2795775352a48",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b024a7dbbe2146e4a11104f090ae347c(eventobject);
            },
            "skin": "CopyslFbox3",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        Flex0f2795775352a48.setDefaultUnit(voltmx.flex.DP);
        var backgroundImg = new voltmx.ui.Image2({
            "height": "100%",
            "id": "backgroundImg",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage0c267c61b9f1e44",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Flextop = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "Flextop",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i469cad6291e4c",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        Flextop.setDefaultUnit(voltmx.flex.DP);
        var Label0ie096a2cf5e442 = new voltmx.ui.Label({
            "centerX": "50%",
            "height": "36.00%",
            "id": "Label0ie096a2cf5e442",
            "isVisible": true,
            "left": "7dp",
            "skin": "CopydefLabel0d8a4c240b1084b",
            "textStyle": {},
            "top": "20%",
            "width": "97.67%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var Button0b820f12e10ad40 = new voltmx.ui.Button({
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "Button0b820f12e10ad40",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_h39a0419d00544678f14f209ca26aa0d,
            "skin": "CopydefBtnNormal0e8978d3696064c",
            "text": "Button",
            "top": "60%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Flextop.add(Label0ie096a2cf5e442, Button0b820f12e10ad40);
        var FlexContainer0e55384438ac945 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "FlexContainer0e55384438ac945",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopyslFbox3",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        FlexContainer0e55384438ac945.setDefaultUnit(voltmx.flex.DP);
        var Image0e9df41a9488949 = new voltmx.ui.Image2({
            "height": "100%",
            "id": "Image0e9df41a9488949",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage0i9426824eda342",
            "top": "0dp",
            "width": "101%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0e55384438ac945.add(Image0e9df41a9488949);
        Flex0f2795775352a48.add(backgroundImg, Flextop, FlexContainer0e55384438ac945);
        return Flex0f2795775352a48;
    }
});
define("userFlex0f2795775352a48Controller", [],function() {
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

define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "responsiveConfig": {
                "offset": {
                    "landscape": 0,
                    "portrait": 0
                },
                "span": {
                    "landscape": 6,
                    "portrait": 12
                }
            },
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        leftHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var menu = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "menu",
            "isVisible": true,
            "left": "0dp",
            "skin": "greyMenu",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var logo = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "logo",
            "isVisible": true,
            "left": "0dp",
            "skin": "logo",
            "top": "10dp",
            "width": "66dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var logo2 = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "logo2",
            "isVisible": true,
            "left": "0dp",
            "skin": "logo2",
            "top": "10dp",
            "width": "41dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        leftHeaderGroup.add(menu, logo, logo2);
        var rightHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "rightHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        rightHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "cartHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": 30,
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        cartHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderButton = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "cartHeaderButton",
            "isVisible": true,
            "right": "0",
            "skin": "cartHeaderIcon",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var cartBadgeCount = new voltmx.ui.Label({
            "height": "10dp",
            "id": "cartBadgeCount",
            "isVisible": true,
            "right": "0",
            "skin": "cartBadgeCountStyle",
            "text": "0",
            "textStyle": {},
            "top": "10dp",
            "width": "10dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        cartHeaderGroup.add(cartHeaderButton, cartBadgeCount);
        var userHeader = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "userHeader",
            "isVisible": true,
            "right": "5dp",
            "skin": "userHeaderStyle",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        rightHeaderGroup.add(cartHeaderGroup, userHeader);
        flxSectionHeaderTemplate.add(leftHeaderGroup, rightHeaderGroup);
        return flxSectionHeaderTemplate;
    }
});
define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("FlxSeg", [],function() {
    return function(controller) {
        var FlxSeg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "FlxSeg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0e8caf6165cdd49",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        FlxSeg.setDefaultUnit(voltmx.flex.DP);
        var itemContent = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": false,
            "height": "100%",
            "id": "itemContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        itemContent.setDefaultUnit(voltmx.flex.DP);
        var flxImg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "72%",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "63%",
            "skin": "CopyCopyslFbox3",
            "width": "27%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxImg.setDefaultUnit(voltmx.flex.DP);
        var img = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "80%",
            "id": "img",
            "isVisible": true,
            "left": "28.48%",
            "skin": "CopyCopyslImage5",
            "src": "https://vendure.demo.universalcommerce.io/assets/preview/f1/bpdavryry2kptkyfej93__preview.webp",
            "top": "15%",
            "width": "75%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(img);
        var lblCost = new voltmx.ui.Label({
            "id": "lblCost",
            "isVisible": true,
            "left": "42%",
            "skin": "CopyslLabel0c9d997f5f3cc44",
            "text": "$119.95",
            "textStyle": {},
            "top": "66%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDescription = new voltmx.ui.Label({
            "height": "22%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "42%",
            "skin": "CopyslLabel0a625a35ab5ef44",
            "text": "Qunol Turmeric & Ginger Gummy - 60 ct",
            "textStyle": {},
            "top": "38%",
            "width": "42.74%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblCategory = new voltmx.ui.Label({
            "id": "lblCategory",
            "isVisible": true,
            "left": "42%",
            "skin": "CopyslLabel0c9d997f5f3cc44",
            "text": "Gummy",
            "textStyle": {},
            "top": "21%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDiscount = new voltmx.ui.Label({
            "id": "lblDiscount",
            "isVisible": true,
            "left": "16%",
            "skin": "CopydefLabel0g97a5c93500044",
            "text": "90% Off",
            "textStyle": {},
            "top": "3%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 1, 3, 1],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblCostDiscount = new voltmx.ui.Label({
            "id": "lblCostDiscount",
            "isVisible": true,
            "left": "60%",
            "skin": "lblCostDiscount",
            "text": "$5.29",
            "textStyle": {},
            "top": "66%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        itemContent.add(flxImg, lblCost, lblDescription, lblCategory, lblDiscount, lblCostDiscount);
        FlxSeg.add(itemContent);
        return FlxSeg;
    }
});
define("userFlxSegController", {
    //Type your controller code here 
});
define("FlxSegControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlxSegController", ["userFlxSegController", "FlxSegControllerActions"], function() {
    var controller = require("userFlxSegController");
    var controllerActions = ["FlxSegControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Form1", [],function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlxProductImage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "463dp",
                "id": "FlxProductImage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "40dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductImage.setDefaultUnit(voltmx.flex.DP);
            var MainProductImage = new voltmx.ui.Image2({
                "bottom": 0,
                "centerX": "50.01%",
                "height": "76.31%",
                "id": "MainProductImage",
                "isVisible": true,
                "left": 40,
                "maxWidth": "100%",
                "right": 0,
                "skin": "productiImage",
                "src": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "20dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": true
            }, {});
            var SubProductImage = new voltmx.ui.Image2({
                "height": "60dp",
                "id": "SubProductImage",
                "isVisible": true,
                "left": "0dp",
                "skin": "subProductImage",
                "src": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "403dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductImage.add(MainProductImage, SubProductImage);
            var FlxProductDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "473dp",
                "id": "FlxProductDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "543dp",
                "width": "80.02%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductDetails.setDefaultUnit(voltmx.flex.DP);
            var ProductName = new voltmx.ui.Label({
                "id": "ProductName",
                "isVisible": true,
                "left": "-9px",
                "minWidth": "100%",
                "right": "19px",
                "skin": "CopydefLabel0j1556bb5398b44",
                "text": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "textStyle": {},
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxRatings = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxRatings",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "115dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxRatings.setDefaultUnit(voltmx.flex.DP);
            var StarRating1 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslImage4",
                "src": "full_star.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating2 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating2",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopyslImage4",
                "src": "full_star.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating3 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating3",
                "isVisible": true,
                "left": "60dp",
                "skin": "CopyslImage4",
                "src": "full_star.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating4 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating4",
                "isVisible": true,
                "left": "90dp",
                "skin": "CopyslImage4",
                "src": "full_star.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating5 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating5",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopyslImage4",
                "src": "empty_star.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewersAmount = new voltmx.ui.RichText({
                "height": "17dp",
                "id": "ReviewersAmount",
                "isVisible": true,
                "left": "153dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0c36ff2bdeea340",
                "text": "(131 reviews)",
                "top": "11dp",
                "width": "30.37%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxRatings.add(StarRating1, StarRating2, StarRating3, StarRating4, StarRating5, ReviewersAmount);
            var FlxProductPrice = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "43dp",
                "id": "FlxProductPrice",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "193dp",
                "width": "66.57%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductPrice.setDefaultUnit(voltmx.flex.DP);
            var ProductPrice = new voltmx.ui.RichText({
                "id": "ProductPrice",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0f56adcd1c9db42",
                "text": "$ 16.79",
                "top": "-13dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductPrice.add(ProductPrice);
            var Description = new voltmx.ui.RichText({
                "id": "Description",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0dbe36c678f3146",
                "text": "Nature Made Vitamin D3 2000 IU Softgels (50 mcg) offer an easy way to add Vitamin D supplements to your daily routine to support bone, teeth and muscle health.",
                "top": "263dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxFavorites = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxFavorites",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0e791477bbe8f45",
                "top": "362dp",
                "width": "100.00%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFavorites.setDefaultUnit(voltmx.flex.DP);
            var FavoriteButton = new voltmx.ui.Button({
                "bottom": "20dp",
                "focusSkin": "CopyButtonSkinActive",
                "height": "30dp",
                "id": "FavoriteButton",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a,
                "right": "2dp",
                "skin": "CopyButtonSkinNormal",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteCheckText = new voltmx.ui.RichText({
                "height": "25%",
                "id": "FavoriteCheckText",
                "isVisible": true,
                "left": "43dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0g86e125cd3324a",
                "text": "Add to Favorites",
                "top": "14dp",
                "width": "50.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteHeartLight = new voltmx.ui.Label({
                "id": "FavoriteHeartLight",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopyslFontAwesomeIcon0d7f2760eec3646",
                "text": "",
                "textStyle": {},
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FavoriteHeartRed = new voltmx.ui.Label({
                "id": "FavoriteHeartRed",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopyslFontAwesomeIcon0f31af4ccb8e84a",
                "text": "",
                "textStyle": {},
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlxFavorites.add(FavoriteButton, FavoriteCheckText, FavoriteHeartLight, FavoriteHeartRed);
            var FlxModifingQuantity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "47dp",
                "id": "FlxModifingQuantity",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "415dp",
                "width": "51.81%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxModifingQuantity.setDefaultUnit(voltmx.flex.DP);
            var DecreaseQuantity = new voltmx.ui.Button({
                "height": "47dp",
                "id": "DecreaseQuantity",
                "isVisible": true,
                "left": "4dp",
                "onClick": controller.AS_Button_ge82e1bc249241e3be2af5f299263930,
                "skin": "QuantityButton",
                "text": "-",
                "top": "1dp",
                "width": "53dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IncreaseQuantity = new voltmx.ui.Button({
                "height": "47dp",
                "id": "IncreaseQuantity",
                "isVisible": true,
                "left": "137dp",
                "onClick": controller.AS_Button_b98b257415804034acf0604954e686cc,
                "skin": "QuantityButton",
                "text": "+",
                "top": "1dp",
                "width": "50dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Quantity = new voltmx.ui.Label({
                "centerX": "53.77%",
                "id": "Quantity",
                "isVisible": true,
                "left": "28.30%",
                "skin": "CopydefLabel0acd3e7bd332844",
                "text": "0",
                "textStyle": {},
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlxModifingQuantity.add(DecreaseQuantity, IncreaseQuantity, Quantity);
            var FlxAddButton = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxAddButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0cbc2605e3bd345",
                "top": "490dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxAddButton.setDefaultUnit(voltmx.flex.DP);
            var AddButton = new voltmx.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopyButtonSkinActive",
                "id": "AddButton",
                "isVisible": true,
                "left": "0dp",
                "right": "-1dp",
                "skin": "CopyButtonSkinNormal0j2337ed26baa4a",
                "text": "Add to Basket",
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxAddButton.add(AddButton);
            FlxProductDetails.add(ProductName, FlxRatings, FlxProductPrice, Description, FlxFavorites, FlxModifingQuantity, FlxAddButton);
            var FlxFrequentlyBoughtProduct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "560dp",
                "id": "FlxFrequentlyBoughtProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "1130dp",
                "width": "79.99%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFrequentlyBoughtProduct.setDefaultUnit(voltmx.flex.DP);
            var FrequentlyBoughtProductLabel = new voltmx.ui.Label({
                "id": "FrequentlyBoughtProductLabel",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopydefLabel0a5c641f9f7804d",
                "text": "Frequently Bought With",
                "textStyle": {},
                "top": "17dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxSclFrequentlyBoughtProducts = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "82.39%",
                "id": "FlxSclFrequentlyBoughtProducts",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "60dp",
                "width": "100.63%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0eea1207dbf814d', 'CopyFBox0eea1207dbf814d', 'CopyFBox0eea1207dbf814dController');
            var Segment0b857dcb40e0a4c = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Image0b444a437263f48": "https://www.riteaid.com/shop/media/catalog/product/b/t/btyhvquf9je0a3cxmcoe.jpg",
                    "NetWeight": "90 Ct",
                    "ProductName": " Skin  With Biotin Softgels",
                    "ProductPrice": "price : $19.99 ",
                    "ProductType": "Nature Made"
                }, {
                    "Image0b444a437263f48": "imagedrag.png",
                    "NetWeight": "Label",
                    "ProductName": "Label",
                    "ProductPrice": "Label",
                    "ProductType": "Label"
                }],
                "groupCells": false,
                "height": "440dp",
                "id": "Segment0b857dcb40e0a4c",
                "isVisible": true,
                "left": "13dp",
                "needPageIndicator": false,
                "pageOffDotImage": "slider_ios7.png",
                "pageOnDotImage": "slider.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0d7c6292babf647",
                "rowSkin": "Copyseg0gcbacfcbddf143",
                "rowTemplate": "CopyFBox0eea1207dbf814d",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader3",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "82828200",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "30dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "FlexContainer0gb5dc6d99e664d": "FlexContainer0gb5dc6d99e664d",
                    "Image0b444a437263f48": "Image0b444a437263f48",
                    "NetWeight": "NetWeight",
                    "ProductName": "ProductName",
                    "ProductPrice": "ProductPrice",
                    "ProductType": "ProductType"
                },
                "width": "95.24%",
                "enableHapticFeedback": true,
                "appName": "RiteAidDemo2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.add(Segment0b857dcb40e0a4c);
            var FlxProductRelatedInformations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1303dp",
                "id": "FlxProductRelatedInformations",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "610dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductRelatedInformations.setDefaultUnit(voltmx.flex.DP);
            var MoreInfo = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "MoreInfo",
                "isVisible": true,
                "left": "7dp",
                "onClick": controller.AS_Button_i8a060186d564c2da96e04f19b9ea9be,
                "skin": "CopyButtonSkinNormal",
                "top": "10dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var MoreInforLabel = new voltmx.ui.Label({
                "id": "MoreInforLabel",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "MORE INFORMATION",
                "textStyle": {},
                "top": "30dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendMoreInfo = new voltmx.ui.Label({
                "id": "ExtendMoreInfo",
                "isVisible": true,
                "left": "307dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "24dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowMorInfo = new voltmx.ui.Label({
                "id": "NarrowMorInfo",
                "isVisible": true,
                "left": "310dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "17dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxMoreInfoText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxMoreInfoText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "73dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.setDefaultUnit(voltmx.flex.DP);
            var MoreInfoText = new voltmx.ui.RichText({
                "id": "MoreInfoText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Nature Made Hair, Skin & Nails with Biotin provides essential nutrients that support healthy hair, skin and nails. \n    This supplement contains 2500mcg of Biotin along with other vital nutrients like Vitamin C, Vitamin E, and Zinc. \n    Each serving is specially formulated to support your body's natural beauty from within.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.add(MoreInfoText);
            var HowToUse = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "HowToUse",
                "isVisible": true,
                "left": "9dp",
                "onClick": controller.AS_Button_d5ee3fa39cee4e70b921993b014b78eb,
                "skin": "CopyButtonSkinNormal",
                "top": "240dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var HowToUseLabel = new voltmx.ui.Label({
                "id": "HowToUseLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "HOW TO USE",
                "textStyle": {},
                "top": "260dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendHowToUse = new voltmx.ui.Label({
                "id": "ExtendHowToUse",
                "isVisible": true,
                "left": "309dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "254dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowToUse = new voltmx.ui.Label({
                "id": "NarrowToUse",
                "isVisible": true,
                "left": "312dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "247dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxHowToUseText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxHowToUseText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "8dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "303dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.setDefaultUnit(voltmx.flex.DP);
            var HowToUseText = new voltmx.ui.RichText({
                "id": "HowToUseText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Take one softgel daily with water and a meal. \n    For best results, take at the same time each day. \n    Store in a cool, dry place out of direct sunlight. \n    Keep out of reach of children.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.add(HowToUseText);
            var Ingredients = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Ingredients",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_a1266b1b00664e1fb98315a3811d2efb,
                "skin": "CopyButtonSkinNormal",
                "top": "422dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IngredientsLabel = new voltmx.ui.Label({
                "id": "IngredientsLabel",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "INGREDIENTS",
                "textStyle": {},
                "top": "443dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendIngredients = new voltmx.ui.Label({
                "id": "ExtendIngredients",
                "isVisible": true,
                "left": "310dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "436dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowIngredients = new voltmx.ui.Label({
                "id": "NarrowIngredients",
                "isVisible": true,
                "left": "313dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "429dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxIngredientsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxIngredientsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "485dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.setDefaultUnit(voltmx.flex.DP);
            var IngredientsText = new voltmx.ui.RichText({
                "id": "IngredientsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Active Ingredients:\n    - Biotin (2500mcg)\n    - Vitamin C (60mg)\n    - Vitamin E (30IU)\n    - Zinc (15mg)\n    \n    Other Ingredients: Gelatin, Vegetable Oil, Glycerin, Water, Yellow Beeswax, Soy Lecithin.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.add(IngredientsText);
            var Safety = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Safety",
                "isVisible": true,
                "left": "11dp",
                "onClick": controller.AS_Button_da2e49ec51ba4324a1a849c2687f9e12,
                "skin": "CopyButtonSkinNormal",
                "top": "625dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SafetyLabel = new voltmx.ui.Label({
                "id": "SafetyLabel",
                "isVisible": true,
                "left": "29dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "SAFETY",
                "textStyle": {},
                "top": "645dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendSafetyLabel = new voltmx.ui.Label({
                "id": "ExtendSafetyLabel",
                "isVisible": true,
                "left": "311dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "639dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowSafetyLabel = new voltmx.ui.Label({
                "id": "NarrowSafetyLabel",
                "isVisible": true,
                "left": "314dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "632dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxSafetyText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxSafetyText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "688dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetyText.setDefaultUnit(voltmx.flex.DP);
            var SafetyText = new voltmx.ui.RichText({
                "id": "SafetyText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Consult your healthcare professional before use if you are pregnant, nursing, taking medications, or have a medical condition. \n    Discontinue use and consult your doctor if any adverse reactions occur. \n    Do not use if seal under cap is broken or missing.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSafetyText.add(SafetyText);
            var Dimensions = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Dimensions",
                "isVisible": true,
                "left": "11dp",
                "onClick": controller.AS_Button_cf1ff59972374905841b6e69f695a8ca,
                "skin": "CopyButtonSkinNormal",
                "top": "865dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var DimensionsLabel = new voltmx.ui.Label({
                "id": "DimensionsLabel",
                "isVisible": true,
                "left": "21dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "DIMENSIONS",
                "textStyle": {},
                "top": "885dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendDimensionsLabel = new voltmx.ui.Label({
                "id": "ExtendDimensionsLabel",
                "isVisible": true,
                "left": "311dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "879dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowDimensionsLabel = new voltmx.ui.Label({
                "id": "NarrowDimensionsLabel",
                "isVisible": true,
                "left": "314dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "872dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxDimensionsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDimensionsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "928dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.setDefaultUnit(voltmx.flex.DP);
            var DimensionsText = new voltmx.ui.RichText({
                "id": "DimensionsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Product Dimensions: 2.5\" x 2.5\" x 4.5\"\n    Product Weight: 3.2 oz\n    Serving Size: 1 softgel\n    Servings Per Container: 90\n    Package Type: Plastic bottle with safety seal",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.add(DimensionsText);
            var Reviews = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Reviews",
                "isVisible": true,
                "left": "13dp",
                "onClick": controller.AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d,
                "skin": "CopyButtonSkinNormal",
                "top": "1059dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewsLabel = new voltmx.ui.Label({
                "id": "ReviewsLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "REVIEWS",
                "textStyle": {},
                "top": "1079dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendReviewsLabel = new voltmx.ui.Label({
                "id": "ExtendReviewsLabel",
                "isVisible": true,
                "left": "313dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "1073dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowReviewsLabel = new voltmx.ui.Label({
                "id": "NarrowReviewsLabel",
                "isVisible": true,
                "left": "316dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "1066dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxReviewsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxReviewsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "12dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "1122dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewsText.setDefaultUnit(voltmx.flex.DP);
            var ReviewsText = new voltmx.ui.RichText({
                "id": "ReviewsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Average Rating: 4.5/5 stars\n    Total Reviews: 1,247\n    \n    Top Review:\n    \"Great results after 3 months of use. My nails are stronger and my hair feels healthier. Would definitely recommend!\" - Sarah M.\n    \n    Recent Review:\n    \"Easy to swallow and no aftertaste. Been using for a month and starting to see improvement.\" - John D.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxReviewsText.add(ReviewsText);
            FlxProductRelatedInformations.add(MoreInfo, MoreInforLabel, ExtendMoreInfo, NarrowMorInfo, FlxMoreInfoText, HowToUse, HowToUseLabel, ExtendHowToUse, NarrowToUse, FlxHowToUseText, Ingredients, IngredientsLabel, ExtendIngredients, NarrowIngredients, FlxIngredientsText, Safety, SafetyLabel, ExtendSafetyLabel, NarrowSafetyLabel, FlxSafetyText, Dimensions, DimensionsLabel, ExtendDimensionsLabel, NarrowDimensionsLabel, FlxDimensionsText, Reviews, ReviewsLabel, ExtendReviewsLabel, NarrowReviewsLabel, FlxReviewsText);
            FlxFrequentlyBoughtProduct.add(FrequentlyBoughtProductLabel, FlxSclFrequentlyBoughtProducts, FlxProductRelatedInformations);
            this.add(FlxProductImage, FlxProductDetails, FlxFrequentlyBoughtProduct);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "de3cc7bf1716453593e603a75b0ab250"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userForm1Controller", {
    onFormInit: function() {
        var self = this;
        var form = kony.application.getCurrentForm();
        if (!form) return;
        // List of all sections and buttons
        self.sections = [{
            flex: "FlxMoreInfoText",
            button: "ExtendMoreInfo"
        }, {
            flex: "FlxHowToUseText",
            button: "ExtendHowToUse"
        }, {
            flex: "FlxIngredientsText",
            button: "ExtendIngredients"
        }, {
            flex: "FlxSafetyText",
            button: "ExtendSafetyLabel"
        }, {
            flex: "FlxDimensionsText",
            button: "ExtendDimensionsLabel"
        }, {
            flex: "FlxReviewsText",
            button: "ExtendReviewsLabel"
        }];
        // Hide all text sections on load and reset button text
        self.resetSections();
        // Dynamically assign click events
        self.sections.forEach(function(section) {
            if (form[section.button]) {
                form[section.button].onClick = function() {
                    self.toggleSection(section.flex, section.button);
                };
            }
        });
    },
    resetSections: function(exceptFlex) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        this.sections.forEach(function(section) {
            if (form[section.flex] && form[section.button] && section.flex !== exceptFlex) {
                form[section.flex].isVisible = false;
                form[section.button].text = "+";
            }
        });
    },
    toggleSection: function(sectionFlex, arrowIcon) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        var content = form[sectionFlex];
        var icon = form[arrowIcon];
        if (!content || !icon) return; // Avoid errors if elements are missing
        if (content.isVisible) {
            // If already visible, hide it
            content.isVisible = false;
            icon.text = "+";
        } else {
            // First, reset all sections except this one
            this.resetSections(sectionFlex);
            // Show clicked section and change button text
            content.isVisible = true;
            icon.text = "-";
        }
    },
    increaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        this.view.Quantity.text = (currentQuantity + 1).toString();
    },
    decreaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        if (currentQuantity > 0) {
            this.view.Quantity.text = (currentQuantity - 1).toString();
        }
    },
    toggleFavorite: function() {
        if (this.isFavorite) {
            this.view.FavoriteCheckText.text = "Add to Favorites";
            this.view.FavoriteHeartRed.isVisible = false;
            this.view.FavoriteHeartLight.isVisible = true;
        } else {
            this.view.FavoriteCheckText.text = "Remove from Favorites";
            this.view.FavoriteHeartRed.isVisible = true;
            this.view.FavoriteHeartLight.isVisible = false;
        }
        this.isFavorite = !this.isFavorite; // Toggle the state
    },
    onInit: function() {
        this.view.IncreaseQuantity.onClick = this.increaseQuantity;
        this.view.DecreaseQuantity.onClick = this.decreaseQuantity;
        this.view.FavoriteButton.onClick = this.toggleFavorite.bind(this);
    }
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Ingredients **/
    AS_Button_a1266b1b00664e1fb98315a3811d2efb: function AS_Button_a1266b1b00664e1fb98315a3811d2efb(eventobject) {
        var self = this;
    },
    /** onClick defined for IncreaseQuantity **/
    AS_Button_b98b257415804034acf0604954e686cc: function AS_Button_b98b257415804034acf0604954e686cc(eventobject) {
        var self = this;
        return self.increaseQuantity.call(this);
    },
    /** onClick defined for Dimensions **/
    AS_Button_cf1ff59972374905841b6e69f695a8ca: function AS_Button_cf1ff59972374905841b6e69f695a8ca(eventobject) {
        var self = this;
    },
    /** onClick defined for HowToUse **/
    AS_Button_d5ee3fa39cee4e70b921993b014b78eb: function AS_Button_d5ee3fa39cee4e70b921993b014b78eb(eventobject) {
        var self = this;
    },
    /** onClick defined for Safety **/
    AS_Button_da2e49ec51ba4324a1a849c2687f9e12: function AS_Button_da2e49ec51ba4324a1a849c2687f9e12(eventobject) {
        var self = this;
    },
    /** onClick defined for Reviews **/
    AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d: function AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d(eventobject) {
        var self = this;
    },
    /** onClick defined for FavoriteButton **/
    AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a: function AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a(eventobject) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onClick defined for DecreaseQuantity **/
    AS_Button_ge82e1bc249241e3be2af5f299263930: function AS_Button_ge82e1bc249241e3be2af5f299263930(eventobject) {
        var self = this;
        return self.decreaseQuantity.call(this);
    },
    /** onClick defined for MoreInfo **/
    AS_Button_i8a060186d564c2da96e04f19b9ea9be: function AS_Button_i8a060186d564c2da96e04f19b9ea9be(eventobject) {
        var self = this;
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Home", [],function() {
    return function(controller) {
        function addWidgetsHome() {
            this.setDefaultUnit(voltmx.flex.DP);
            var contentScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "810dp",
                "horizontalScrollIndicator": true,
                "id": "contentScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "70dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            contentScroll.setDefaultUnit(voltmx.flex.DP);
            var Segment0a85a0f0f28a548 = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Button0b820f12e10ad40": "Shop now",
                    "Image0e9df41a9488949": "header1.png",
                    "Label0ie096a2cf5e442": "Nature Made vitamins & supplements 50% off",
                    "backgroundImg": "image.jpg"
                }, {
                    "Button0b820f12e10ad40": "Shop now",
                    "Image0e9df41a9488949": "header2.png",
                    "Label0ie096a2cf5e442": "Valentine’s Day UP TO 90% OFF",
                    "backgroundImg": "untitled4.png"
                }, {
                    "Button0b820f12e10ad40": "Schedule",
                    "Image0e9df41a9488949": "header3.png",
                    "Label0ie096a2cf5e442": "Get your flu shot TEST!!",
                    "backgroundImg": "untitled2.png"
                }],
                "groupCells": false,
                "height": "350dp",
                "id": "Segment0a85a0f0f28a548",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_i8992e512edf470ab88e6aa3bad20d0d,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "Flex0f2795775352a48",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "Button0b820f12e10ad40": "Button0b820f12e10ad40",
                    "Flex0f2795775352a48": "Flex0f2795775352a48",
                    "FlexContainer0e55384438ac945": "FlexContainer0e55384438ac945",
                    "Flextop": "Flextop",
                    "Image0e9df41a9488949": "Image0e9df41a9488949",
                    "Label0ie096a2cf5e442": "Label0ie096a2cf5e442",
                    "backgroundImg": "backgroundImg"
                },
                "width": "100%",
                "zIndex": 1,
                "enableHapticFeedback": false,
                "appName": "RiteAidDemo2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bannerImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "bannerImg",
                "isVisible": true,
                "skin": "slImage",
                "src": "header_image.png",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product1 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product1",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_1.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product2 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product2",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_2.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product3 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product3",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_3.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product4 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product4",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_4.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FooterDemo = new RiteAidFooter.FooterDemo({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "160%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFooterDemo",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            contentScroll.add(Segment0a85a0f0f28a548, bannerImg, product1, product2, product3, product4, FooterDemo);
            var HeaderBar = new RiteAidCommon.HeaderBar({
                "centerX": "50%",
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBar": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(contentScroll, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsHome,
            "enabledForIdleTimeout": false,
            "id": "Home",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_bb2d02b95471423abf3253a2859fb952,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "fb6e88e7d7c94c68aa13478d43b174b5"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
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

define('ListView/CartProductList/CartProductList',[],function() {
    return function(controller) {
        var CartProductList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "CartProductList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "CartProductList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "CartProductList"), extendConfig({}, controller.args[2], "CartProductList"));
        CartProductList.setDefaultUnit(voltmx.flex.DP);
        var ProductList = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "lblCost": "Price: $16.79",
                "lblDescription": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct"
            }, {
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://www.riteaid.com/shop/media/catalog/product/b/t/btyhvquf9je0a3cxmcoe.jpg",
                "lblCost": "Price: $19.99",
                "lblDescription": "Skin with Biotin Softgels"
            }, {
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://www.riteaid.com/shop/media/catalog/product/s/8/s8uczbbfmqpcqosjcenp.jpg",
                "lblCost": "Price: $11.99",
                "lblDescription": "Hair Skin and Nails"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "ProductList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg04e93bcaf53d242",
            "rowSkin": "Copyseg0cddf1f7e9db24a",
            "rowTemplate": "CopyflxSeg2",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "c8c7cc00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxSeg2": "CopyflxSeg2",
                "DeleteIcon": "DeleteIcon",
                "MinusIcon": "MinusIcon",
                "PlusIcon": "PlusIcon",
                "ProductQuantity": "ProductQuantity",
                "flxImg": "flxImg",
                "img": "img",
                "lblCost": "lblCost",
                "lblDescription": "lblDescription"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProductList"), extendConfig({}, controller.args[2], "ProductList"));
        CartProductList.add(ProductList);
        return CartProductList;
    }
});
define("ListView/CartProductList/userCartProductListController", [],function() {
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

define('ListView/ProductSimple/ProductSimple',[],function() {
    return function(controller) {
        var ProductSimple = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ProductSimple",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "90%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductSimple"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProductSimple"), extendConfig({}, controller.args[2], "ProductSimple"));
        ProductSimple.setDefaultUnit(voltmx.flex.DP);
        var segTemp = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "img": "fi4ohuxot842j9f5bjqg__preview.png",
                "lblCategory": "Grocery",
                "lblCost": "$11.99",
                "lblCostDiscount": "Label",
                "lblDescription": "Rite Aid Passion Fruit Triple Hydration Electrolyte Drink Mix - 3.49 oz",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/f1/bpdavryry2kptkyfej93__preview.webp",
                "lblCategory": "Gummy",
                "lblCost": "$38.39",
                "lblCostDiscount": "Label",
                "lblDescription": "Qunol Turmeric & Ginger Gummy - 60 ct",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/3e/fi4ohuxot842j9f5bjqg__preview.webp",
                "lblCategory": "Moisturizer",
                "lblCost": "$5.28",
                "lblCostDiscount": "Label",
                "lblDescription": "Olay Regenerist Vitamin C + Peptide 24 Face Moisturizer - 1.7 oz",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/8a/xfovgufizvy4rjr6sfup__preview.webp",
                "lblCategory": "Softgel",
                "lblCost": "$8.40",
                "lblCostDiscount": "Label",
                "lblDescription": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/c6/kv5nocv4wgdpifeg87l8__02__preview.webp",
                "lblCategory": "Wash",
                "lblCost": "$1.26",
                "lblCostDiscount": "Label",
                "lblDescription": "Listerine Total Care Anticavity Fluoride Mouthwash - Fresh Mint, 1 lt",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/72/n2qipva5zy4fv9irdokq__preview.webp",
                "lblCategory": "Grocery",
                "lblCost": "$9.00",
                "lblCostDiscount": "Label",
                "lblDescription": "Lindt Gourmet Truffles Box - 6.8 oz",
                "lblDiscount": "90% Off"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segTemp",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg04e93bcaf53d242",
            "rowSkin": "Copyseg0a448c8538ce24b",
            "rowTemplate": "FlxSeg",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
            "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": true,
            "separatorThickness": 5,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "FlxSeg": "FlxSeg",
                "flxImg": "flxImg",
                "img": "img",
                "itemContent": "itemContent",
                "lblCategory": "lblCategory",
                "lblCost": "lblCost",
                "lblCostDiscount": "lblCostDiscount",
                "lblDescription": "lblDescription",
                "lblDiscount": "lblDiscount"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "segTemp"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTemp"), extendConfig({}, controller.args[2], "segTemp"));
        ProductSimple.add(segTemp);
        return ProductSimple;
    }
});
define("ListView/ProductSimple/userProductSimpleController", [],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("ListView/ProductSimple/ProductSimpleControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ListView/ProductSimple/ProductSimpleController", ["ListView/ProductSimple/userProductSimpleController", "ListView/ProductSimple/ProductSimpleControllerActions"], function() {
    var controller = require("ListView/ProductSimple/userProductSimpleController");
    var actions = require("ListView/ProductSimple/ProductSimpleControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("Login", [],function() {
    return function(controller) {
        function addWidgetsLogin() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerLogin = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FlexContainerLogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.setDefaultUnit(voltmx.flex.DP);
            var labelEmail = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "labelEmail",
                "isVisible": true,
                "skin": "defLabel",
                "text": "Email address*",
                "textStyle": {},
                "top": "30%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var txtBoxEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "txtBoxEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "email@address.com",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "37%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var txtBoxPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "txtBoxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter your password",
                "secureTextEntry": true,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "52%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var labelPassword = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "labelPassword",
                "isVisible": true,
                "skin": "defLabel",
                "text": "Password*",
                "textStyle": {},
                "top": "45%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var checkBoxRmPassword = new voltmx.ui.CheckBoxGroup({
                "centerX": "50%",
                "height": "3%",
                "id": "checkBoxRmPassword",
                "isVisible": true,
                "masterData": [
                    ["RememberPassword", "Remember me"]
                ],
                "selectedKeys": ["RememberPassword"],
                "skin": "CopyslCheckBoxGroup0e0b4c61f11ef4c",
                "top": "60%",
                "width": 300,
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLogin = new voltmx.ui.Button({
                "centerX": "49%",
                "focusSkin": "defBtnFocus",
                "height": "5%",
                "id": "btnLogin",
                "isVisible": true,
                "left": "49dp",
                "onClick": controller.AS_Button_af92b84ed3e44c09b40c672ecfc740c0,
                "skin": "CopydefBtnNormal0j3fac624bb2944",
                "text": "Log in",
                "top": "65%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.add(labelEmail, txtBoxEmail, txtBoxPassword, labelPassword, checkBoxRmPassword, btnLogin);
            this.add(FlexContainerLogin);
        };
        return [{
            "addWidgets": addWidgetsLogin,
            "enabledForIdleTimeout": false,
            "id": "Login",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "fe24c9db0b3843b8b65fb7f139c8b005"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userLoginController", {
    //Type your controller code here 
    validateLogin: function(email, password) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email!");
            return false;
        }
        //         if (password ==="" || password.length < 6 || 
        //           !/[A-Z]/.test(password) ||  
        //           !/[a-z]/.test(password) ||   
        //           !/[0-9]/.test(password) || 
        //           !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        //           alert("Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character!");
        //           return false;
        //       	}
        if (password === "" || password.length < 8) {
            alert("Password must be at least 8 characters!");
            return false;
        }
        return true;
    },
    LoginApi: function() {
        var email = this.view.txtBoxEmail.text.trim();
        var password = this.view.txtBoxPassword.text.trim();
        email = "danny@cnetric.com";
        password = "12345678";
        if (this.validateLogin(email, password)) {
            var httpclient = new voltmx.net.HttpRequest();
            httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
            httpclient.setRequestHeader("Content-Type", "application/json");
            var jsonStr2 = JSON.stringify({
                "query": "mutation Login($email: String!, $password: String!) { login(username: $email, password: $password) { ... on CurrentUser { id identifier channels { id token } } ... on InvalidCredentialsError { errorCode message authenticationError } ... on NotVerifiedError { errorCode message } } }",
                "variables": {
                    "email": email,
                    "password": password
                }
            });
            httpclient.send(jsonStr2);
            httpclient.onReadyStateChange = function() {
                if (httpclient.readyState === 4 && httpclient.status === 200) {
                    var response = JSON.parse(httpclient.response);
                    var userData = response.data.login;
                    var responseHeader = httpclient.getResponseHeader('vendure-auth-token');
                    if (userData !== null && userData.identifier) {
                        voltmx.store.setItem('userData', JSON.stringify(userData));
                        localStorage.setItem("vendure-auth-token", responseHeader);
                        //         
                        //             var nav = new voltmx.mvc.Navigation("Home");
                        var nav = new voltmx.mvc.Navigation("CheckoutShippingMethod");
                        nav.navigate();
                    } else if (response.errors) {
                        alert(response.errors[0].message);
                    }
                }
            };
        }
    }
});
define("LoginControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLogin **/
    AS_Button_af92b84ed3e44c09b40c672ecfc740c0: function AS_Button_af92b84ed3e44c09b40c672ecfc740c0(eventobject) {
        var self = this;
        return self.LoginApi.call(this);
    }
});
define("LoginController", ["userLoginController", "LoginControllerActions"], function() {
    var controller = require("userLoginController");
    var controllerActions = ["LoginControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("OrderSummaryItemListCtn", [],function() {
    return function(controller) {
        var OrderSummaryItemListCtn = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100dp",
            "id": "OrderSummaryItemListCtn",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        OrderSummaryItemListCtn.setDefaultUnit(voltmx.flex.DP);
        var OrderSummaryItemImg = new voltmx.ui.Image2({
            "height": "73dp",
            "id": "OrderSummaryItemImg",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "cartproductimg.png",
            "top": "10dp",
            "width": "75dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var OrderSummaryProductName = new voltmx.ui.Label({
            "height": "50dp",
            "id": "OrderSummaryProductName",
            "isVisible": true,
            "left": "90dp",
            "skin": "CopydefLabel0g922c3fb878a40",
            "text": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
            "textStyle": {},
            "top": "10dp",
            "width": "188dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var OrderSummaryProductQty = new voltmx.ui.Label({
            "id": "OrderSummaryProductQty",
            "isVisible": true,
            "left": "90dp",
            "skin": "CopydefLabel0fe621301271c44",
            "text": "Qty 1",
            "textStyle": {},
            "top": "60dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var OrderSummaryProductPrice = new voltmx.ui.Label({
            "id": "OrderSummaryProductPrice",
            "isVisible": true,
            "right": "10dp",
            "skin": "CopydefLabel0c3a3615f377a41",
            "text": "$16.79",
            "textStyle": {},
            "top": "20dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        OrderSummaryItemListCtn.add(OrderSummaryItemImg, OrderSummaryProductName, OrderSummaryProductQty, OrderSummaryProductPrice);
        return OrderSummaryItemListCtn;
    }
});
define("userOrderSummaryItemListCtnController", {
    //Type your controller code here 
});
define("OrderSummaryItemListCtnControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("OrderSummaryItemListCtnController", ["userOrderSummaryItemListCtnController", "OrderSummaryItemListCtnControllerActions"], function() {
    var controller = require("userOrderSummaryItemListCtnController");
    var controllerActions = ["OrderSummaryItemListCtnControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define('Popup/AddProduct/AddProduct',[],function() {
    return function(controller) {
        var AddProduct = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "10%",
            "id": "AddProduct",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "sknAddProduct",
            "top": 0,
            "width": "45%",
            "zIndex": 1,
            "enableHapticFeedback": false,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "AddProduct"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AddProduct"), extendConfig({}, controller.args[2], "AddProduct"));
        AddProduct.setDefaultUnit(voltmx.flex.DP);
        var BorderLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "BorderLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "-0.06%",
            "isModalContainer": false,
            "skin": "sknBorderLeft",
            "top": "0%",
            "width": "3.06%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BorderLeft"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BorderLeft"), extendConfig({}, controller.args[2], "BorderLeft"));
        BorderLeft.setDefaultUnit(voltmx.flex.DP);
        BorderLeft.add();
        var lblProduct = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblProduct",
            "isVisible": true,
            "skin": "sknLblProduct",
            "text": "Product added to cart!",
            "textStyle": {},
            "top": "22%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblProduct"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProduct"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblProduct"));
        var lblDismiss = new voltmx.ui.Label(extendConfig({
            "id": "lblDismiss",
            "isVisible": true,
            "left": "12%",
            "skin": "sknLblDismiss",
            "text": "Dismiss",
            "textStyle": {},
            "top": "54%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDismiss"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDismiss"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblDismiss"));
        AddProduct.add(BorderLeft, lblProduct, lblDismiss);
        return AddProduct;
    }
});
define("Popup/AddProduct/userAddProductController", [],function() {
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

define('Popup/AddProductCopy/AddProductCopy',[],function() {
    return function(controller) {
        var AddProductCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "10%",
            "id": "AddProductCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopysknAddProduct",
            "top": 0,
            "width": "45%",
            "zIndex": 1,
            "enableHapticFeedback": false,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "AddProductCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AddProductCopy"), extendConfig({}, controller.args[2], "AddProductCopy"));
        AddProductCopy.setDefaultUnit(voltmx.flex.DP);
        var BorderLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "BorderLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "-0.06%",
            "isModalContainer": false,
            "skin": "CopysknBorderLeft",
            "top": "0%",
            "width": "3.06%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BorderLeft"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BorderLeft"), extendConfig({}, controller.args[2], "BorderLeft"));
        BorderLeft.setDefaultUnit(voltmx.flex.DP);
        BorderLeft.add();
        var lblProduct = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblProduct",
            "isVisible": true,
            "skin": "CopysknLblProduct",
            "text": "Product added to cart!",
            "textStyle": {},
            "top": "22%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblProduct"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProduct"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblProduct"));
        var lblDismiss = new voltmx.ui.Label(extendConfig({
            "id": "lblDismiss",
            "isVisible": true,
            "left": "12%",
            "skin": "CopysknLblDismiss",
            "text": "Dismiss",
            "textStyle": {},
            "top": "54%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDismiss"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDismiss"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblDismiss"));
        AddProductCopy.add(BorderLeft, lblProduct, lblDismiss);
        return AddProductCopy;
    }
});
define("Popup/AddProductCopy/userAddProductCopyController", [],function() {
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

define('Popup/Payment/Payment',[],function() {
    return function(controller) {
        var Payment = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "400dp",
            "id": "Payment",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknPayment",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "Payment"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Payment"), extendConfig({}, controller.args[2], "Payment"));
        Payment.setDefaultUnit(voltmx.flex.DP);
        var imgSuccess = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "120dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "CopyslImage",
            "src": "https://cdn-icons-png.flaticon.com/512/11433/11433360.png",
            "top": "26dp",
            "width": "120dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblPaymentSuccess = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPaymentSuccess",
            "isVisible": true,
            "skin": "lblPaymentSuccess",
            "text": "Payment Successful!",
            "textStyle": {},
            "top": "166dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPaymentSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentSuccess"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblPaymentSuccess"));
        var lblThanks = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblThanks",
            "isVisible": true,
            "skin": "sknLblThanks",
            "text": "Thank you for your purchase. Your payment has been successfully processed.",
            "textStyle": {},
            "top": "216dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblThanks"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThanks"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblThanks"));
        var btnGoBack = new voltmx.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnGoBack2",
            "height": "50dp",
            "id": "btnGoBack",
            "isVisible": true,
            "left": "36dp",
            "skin": "sknBtnGoBack",
            "text": "Go Back for New Order",
            "top": "315dp",
            "width": "220dp",
            "zIndex": 1
        }, controller.args[0], "btnGoBack"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGoBack"), extendConfig({}, controller.args[2], "btnGoBack"));
        Payment.add(imgSuccess, lblPaymentSuccess, lblThanks, btnGoBack);
        return Payment;
    }
});
define("Popup/Payment/userPaymentController", [],function() {
    return {};
});
define("Popup/Payment/PaymentControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Popup/Payment/PaymentController", ["Popup/Payment/userPaymentController", "Popup/Payment/PaymentControllerActions"], function() {
    var controller = require("Popup/Payment/userPaymentController");
    var actions = require("Popup/Payment/PaymentControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("PopupAddProduct", [],function() {
    return function(controller) {
        function addWidgetsPopupAddProduct() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FlexContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer.setDefaultUnit(voltmx.flex.DP);
            var BtnAdd = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "BtnAdd",
                "isVisible": true,
                "left": "50dp",
                "onClick": controller.AS_Button_bf2af23d1c3043a8b15a0e7559301c56,
                "skin": "defBtnNormal",
                "text": "Button",
                "top": "257dp",
                "width": "300dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FCPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FCPopup",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FCPopup.setDefaultUnit(voltmx.flex.DP);
            var AddProduct = new Popup.AddProduct({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "AddProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "8%",
                "skin": "sknAddProduct",
                "top": "10%",
                "width": "45%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "AddProduct": {
                        "right": "8%",
                        "top": "10%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FCPopup.add(AddProduct);
            var FooterDemo = new RiteAidFooter.FooterDemo({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "200%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFooterDemo",
                "top": "42%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "FooterDemo": {
                        "top": "42%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer.add(BtnAdd, FCPopup, FooterDemo);
            this.add(FlexContainer);
        };
        return [{
            "addWidgets": addWidgetsPopupAddProduct,
            "enabledForIdleTimeout": false,
            "id": "PopupAddProduct",
            "init": controller.AS_Form_e6663594279c467ba18a65eb3a2e03b2,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "hc5cc89bbeaa4a1399d909c75b40af06"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
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

define("ProductCarouselContainer", [],function() {
    return function(controller) {
        var ProductCarouselContainer = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "260dp",
            "id": "ProductCarouselContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        ProductCarouselContainer.setDefaultUnit(voltmx.flex.DP);
        var CarouselProductImg = new voltmx.ui.Image2({
            "centerX": "50.00%",
            "height": "150dp",
            "id": "CarouselProductImg",
            "isVisible": true,
            "left": "102dp",
            "skin": "slImage",
            "src": "cartproductimg.png",
            "top": "6dp",
            "width": "150dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var CarouselProductMade = new voltmx.ui.Label({
            "centerX": "50.00%",
            "id": "CarouselProductMade",
            "isVisible": true,
            "skin": "CopydefLabel0b3c0a6b5cc6c4c",
            "text": "Nature Made",
            "textStyle": {},
            "top": "156dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CarouselProductName = new voltmx.ui.Label({
            "centerX": "50.00%",
            "id": "CarouselProductName",
            "isVisible": true,
            "skin": "CopydefLabel0b564541bd3cd41",
            "text": "Skins with Biotin Softgels",
            "textStyle": {},
            "top": "177dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CarouselPoductUnitQuantity = new voltmx.ui.Label({
            "centerX": "50.00%",
            "id": "CarouselPoductUnitQuantity",
            "isVisible": true,
            "skin": "CopydefLabel0b1369be691a74f",
            "text": "90Ct",
            "textStyle": {},
            "top": "206dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CarouselProductPrice = new voltmx.ui.Label({
            "centerX": "50.00%",
            "id": "CarouselProductPrice",
            "isVisible": true,
            "skin": "CopydefLabel0d9b19a8422b246",
            "text": "Price: $16.79",
            "textStyle": {},
            "top": "226dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        ProductCarouselContainer.add(CarouselProductImg, CarouselProductMade, CarouselProductName, CarouselPoductUnitQuantity, CarouselProductPrice);
        return ProductCarouselContainer;
    }
});
define("userProductCarouselContainerController", {
    //Type your controller code here 
});
define("ProductCarouselContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ProductCarouselContainerController", ["userProductCarouselContainerController", "ProductCarouselContainerControllerActions"], function() {
    var controller = require("userProductCarouselContainerController");
    var controllerActions = ["ProductCarouselContainerControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ProductDetails", [],function() {
    return function(controller) {
        function addWidgetsProductDetails() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlxSclProductDetail = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "94.67%",
                "horizontalScrollIndicator": true,
                "id": "FlxSclProductDetail",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "3dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyCopyslFSbox",
                "top": "70dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclProductDetail.setDefaultUnit(voltmx.flex.DP);
            var FlxProductImage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "423dp",
                "id": "FlxProductImage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "50dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductImage.setDefaultUnit(voltmx.flex.DP);
            var MainProductImage = new voltmx.ui.Image2({
                "centerX": "50.00%",
                "height": "337dp",
                "id": "MainProductImage",
                "isVisible": true,
                "left": "0",
                "skin": "CopyProductImage",
                "src": "http://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SubProductImage = new voltmx.ui.Image2({
                "height": "60dp",
                "id": "SubProductImage",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysubProductImage",
                "top": "363dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductImage.add(MainProductImage, SubProductImage);
            var FlxProductDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "687dp",
                "id": "FlxProductDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "43dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "-3dp",
                "width": "80.02%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductDetails.setDefaultUnit(voltmx.flex.DP);
            var ProductName = new voltmx.ui.Label({
                "id": "ProductName",
                "isVisible": true,
                "left": "-9px",
                "maxNumberOfLines": 3,
                "minWidth": "100%",
                "right": "19px",
                "skin": "CopyCopydefLabel0c7eadd27df614d",
                "text": "ProductName",
                "textStyle": {},
                "top": "20dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "blur": {
                    "enabled": true,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxRatings = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxRatings",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "167dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxRatings.setDefaultUnit(voltmx.flex.DP);
            var StarRating1 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating2 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating2",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating3 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating3",
                "isVisible": true,
                "left": "60dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating4 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating4",
                "isVisible": true,
                "left": "90dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating5 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating5",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopyCopyslImage2",
                "src": "empty_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewersAmount = new voltmx.ui.RichText({
                "height": "17dp",
                "id": "ReviewersAmount",
                "isVisible": true,
                "left": "153dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyReviewsText",
                "text": "(131 reviews)",
                "top": "12dp",
                "width": "30.37%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxRatings.add(StarRating1, StarRating2, StarRating3, StarRating4, StarRating5, ReviewersAmount);
            var FlxProductPrice = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "43dp",
                "id": "FlxProductPrice",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox3",
                "top": "235dp",
                "width": "66.57%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductPrice.setDefaultUnit(voltmx.flex.DP);
            var ProductPrice = new voltmx.ui.RichText({
                "id": "ProductPrice",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyProductPriceLabel",
                "text": "$ Price",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductPrice.add(ProductPrice);
            var FlxDescription = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDescription",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "289dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDescription.setDefaultUnit(voltmx.flex.DP);
            var Description = new voltmx.ui.RichText({
                "id": "Description",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyReviewsText",
                "text": "Description",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxDescription.add(Description);
            var FlxFavorites = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxFavorites",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyFavoritesSkin",
                "top": "490dp",
                "width": "100.00%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFavorites.setDefaultUnit(voltmx.flex.DP);
            var FavoriteButton = new voltmx.ui.Button({
                "bottom": "30dp",
                "height": "45dp",
                "id": "FavoriteButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38,
                "right": "2dp",
                "skin": "CopyQuantityButton3",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteCheckText = new voltmx.ui.RichText({
                "height": "33dp",
                "id": "FavoriteCheckText",
                "isVisible": true,
                "left": "50dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "onClick": controller.AS_RichText_c9da0637d0ab4ef8b621a427563cc376,
                "skin": "CopyFavoritesText",
                "text": "Add to Favorites",
                "top": "7dp",
                "width": "50.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteHeartRed = new voltmx.ui.Label({
                "id": "FavoriteHeartRed",
                "isVisible": false,
                "left": "26dp",
                "skin": "CopyRedHeartLabel",
                "text": "",
                "textStyle": {},
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FavoriteHeartLight = new voltmx.ui.Label({
                "id": "FavoriteHeartLight",
                "isVisible": true,
                "left": "26dp",
                "skin": "CopyLightHeartLabel",
                "text": "",
                "textStyle": {},
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlxFavorites.add(FavoriteButton, FavoriteCheckText, FavoriteHeartRed, FavoriteHeartLight);
            var FlxModifingQuantity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "53dp",
                "id": "FlxModifingQuantity",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox3",
                "top": "552dp",
                "width": "58.65%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxModifingQuantity.setDefaultUnit(voltmx.flex.DP);
            var DecreaseQuantity = new voltmx.ui.Button({
                "height": "50dp",
                "id": "DecreaseQuantity",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f6a535b1a2e6434fb8d2e049c3a86139,
                "skin": "CopyQuantityButton3",
                "text": "-",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IncreaseQuantity = new voltmx.ui.Button({
                "height": "50dp",
                "id": "IncreaseQuantity",
                "isVisible": true,
                "left": "137dp",
                "onClick": controller.AS_Button_a00d8bc9602a4b0e82c76612f641c0de,
                "skin": "CopyQuantityButton3",
                "text": "+",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Quantity = new voltmx.ui.Label({
                "centerX": "48.33%",
                "id": "Quantity",
                "isVisible": true,
                "left": "26.67%",
                "skin": "CopyAmountQuantity",
                "text": "0",
                "textStyle": {},
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlxModifingQuantity.add(DecreaseQuantity, IncreaseQuantity, Quantity);
            var FlxAddButton = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxAddButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0b3cf5d1efc444f",
                "top": "611dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxAddButton.setDefaultUnit(voltmx.flex.DP);
            var AddButton = new voltmx.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopyCopyButtonSkinActive1",
                "id": "AddButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_h265e4a259bb42f79f2452d09b7c4bb2,
                "right": "-1dp",
                "skin": "CopyAddToBasketButton",
                "text": "Add to Basket",
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxAddButton.add(AddButton);
            FlxProductDetails.add(ProductName, FlxRatings, FlxProductPrice, FlxDescription, FlxFavorites, FlxModifingQuantity, FlxAddButton);
            var FlxFrequentlyBoughtProduct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1197dp",
                "id": "FlxFrequentlyBoughtProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "20dp",
                "width": "79.99%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFrequentlyBoughtProduct.setDefaultUnit(voltmx.flex.DP);
            var FrequentlyBoughtProductLabel = new voltmx.ui.Label({
                "id": "FrequentlyBoughtProductLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopydefLabel0b519b99aeb1a4b",
                "text": "Frequently Bought With",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxSclFrequentlyBoughtProducts = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "86.31%",
                "id": "FlxSclFrequentlyBoughtProducts",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "60dp",
                "width": "100.63%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox', 'CopyFBox', 'CopyFBoxController');
            var FrequentlyBoughtSegment = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "FBProductImage": "https://vendure.demo.universalcommerce.io/assets/preview/f1/bpdavryry2kptkyfej93__preview.webp",
                    "HiddenId": "57",
                    "NetWeight": "60 Ct",
                    "ProductName": "Qunol Turmeric & Ginger Gummy",
                    "ProductPrice": "price : $38.39",
                    "ProductType": "Nature Made"
                }, {
                    "FBProductImage": "http://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                    "HiddenId": "56",
                    "NetWeight": "50mcg - 90 ct",
                    "ProductName": "Nature Made Vitamin D3 Softgels",
                    "ProductPrice": "price : $16.97",
                    "ProductType": "Nature Made"
                }],
                "groupCells": false,
                "height": "440dp",
                "id": "FrequentlyBoughtSegment",
                "isVisible": true,
                "left": "13dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_c0ac1b90e494430dadf48fe178471f41,
                "pageOffDotImage": "slider_ios7.png",
                "pageOnDotImage": "slider.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg5",
                "rowSkin": "CopyFrequentlyBoughtSegment",
                "rowTemplate": "CopyFBox",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader1",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "82828200",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "30dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "FBProductImage": "FBProductImage",
                    "FlxFrequentlyBoughtDetail": "FlxFrequentlyBoughtDetail",
                    "HiddenId": "HiddenId",
                    "NetWeight": "NetWeight",
                    "ProductName": "ProductName",
                    "ProductPrice": "ProductPrice",
                    "ProductType": "ProductType"
                },
                "width": "95.24%",
                "enableHapticFeedback": true,
                "appName": "RiteAidDemo2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.add(FrequentlyBoughtSegment);
            var FlxProductRelatedInformations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1257dp",
                "id": "FlxProductRelatedInformations",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "583dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductRelatedInformations.setDefaultUnit(voltmx.flex.DP);
            var FlxMoreInfoSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": false,
                "id": "FlxMoreInfoSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoSection.setDefaultUnit(voltmx.flex.DP);
            var MoreInfo = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "MoreInfo",
                "isVisible": true,
                "left": "7dp",
                "onClick": controller.AS_Button_ed461adefb854e559727eb6cf839cbe3,
                "skin": "CopyCopyQuantityButton",
                "top": "10dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ExtendMoreInfo = new voltmx.ui.Label({
                "id": "ExtendMoreInfo",
                "isVisible": true,
                "left": "307dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "24dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var MoreInforLabel = new voltmx.ui.Label({
                "id": "MoreInforLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyRelatedInforLabel",
                "text": "MORE INFORMATION",
                "textStyle": {},
                "top": "30dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxMoreInfoText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxMoreInfoText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "73dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.setDefaultUnit(voltmx.flex.DP);
            var MoreInfoText = new voltmx.ui.RichText({
                "centerX": "50.00%",
                "id": "MoreInfoText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Nature Made Hair, Skin & Nails with Biotin provides essential nutrients that support healthy hair, skin and nails. \n    This supplement contains 2500mcg of Biotin along with other vital nutrients like Vitamin C, Vitamin E, and Zinc. \n    Each serving is specially formulated to support your body's natural beauty from within.",
                "top": "3dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.add(MoreInfoText);
            FlxMoreInfoSection.add(MoreInfo, ExtendMoreInfo, MoreInforLabel, FlxMoreInfoText);
            var FlxHowToUseSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "FlxHowToUseSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseSection.setDefaultUnit(voltmx.flex.DP);
            var HowToUse = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "HowToUse",
                "isVisible": true,
                "left": "1dp",
                "onClick": controller.AS_Button_beb86e945b66417d8976e65cb5bc522c,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var HowToUseLabel = new voltmx.ui.Label({
                "id": "HowToUseLabel",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopyRelatedInforLabel",
                "text": "HOW TO USE",
                "textStyle": {},
                "top": "28dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendHowToUse = new voltmx.ui.Label({
                "id": "ExtendHowToUse",
                "isVisible": true,
                "left": "301dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxHowToUseText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxHowToUseText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.setDefaultUnit(voltmx.flex.DP);
            var HowToUseText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "HowToUseText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Take one softgel daily with water and a meal. \n    For best results, take at the same time each day. \n    Store in a cool, dry place out of direct sunlight. \n    Keep out of reach of children.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.add(HowToUseText);
            FlxHowToUseSection.add(HowToUse, HowToUseLabel, ExtendHowToUse, FlxHowToUseText);
            var FlxIngredientSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "FlxIngredientSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientSection.setDefaultUnit(voltmx.flex.DP);
            var Ingredients = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Ingredients",
                "isVisible": true,
                "left": "4dp",
                "onClick": controller.AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IngredientsLabel = new voltmx.ui.Label({
                "id": "IngredientsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopyRelatedInforLabel",
                "text": "INGREDIENTS",
                "textStyle": {},
                "top": "30dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendIngredients = new voltmx.ui.Label({
                "id": "ExtendIngredients",
                "isVisible": true,
                "left": "304dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxIngredientsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxIngredientsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.setDefaultUnit(voltmx.flex.DP);
            var IngredientsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "IngredientsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Active Ingredients:\n    - Biotin (2500mcg)\n    - Vitamin C (60mg)\n    - Vitamin E (30IU)\n    - Zinc (15mg)\n    \n    Other Ingredients: Gelatin, Vegetable Oil, Glycerin, Water, Yellow Beeswax, Soy Lecithin.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.add(IngredientsText);
            FlxIngredientSection.add(Ingredients, IngredientsLabel, ExtendIngredients, FlxIngredientsText);
            var FlxSafetySection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": false,
                "id": "FlxSafetySection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "350dp",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetySection.setDefaultUnit(voltmx.flex.DP);
            var Safety = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Safety",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df,
                "skin": "CopyCopyQuantityButton",
                "top": "7dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SafetyLabel = new voltmx.ui.Label({
                "id": "SafetyLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyRelatedInforLabel",
                "text": "SAFETY",
                "textStyle": {},
                "top": "27dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendSafetyLabel = new voltmx.ui.Label({
                "id": "ExtendSafetyLabel",
                "isVisible": true,
                "left": "305dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "21dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxSafetyText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxSafetyText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "15dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "70dp",
                "width": "310dp",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetyText.setDefaultUnit(voltmx.flex.DP);
            var SafetyText = new voltmx.ui.RichText({
                "centerX": "50.00%",
                "id": "SafetyText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Consult your healthcare professional before use if you are pregnant, nursing, taking medications, or have a medical condition. \n    Discontinue use and consult your doctor if any adverse reactions occur. \n    Do not use if seal under cap is broken or missing.",
                "top": "15dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSafetyText.add(SafetyText);
            FlxSafetySection.add(Safety, SafetyLabel, ExtendSafetyLabel, FlxSafetyText);
            var FlxDimensionSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDimensionSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionSection.setDefaultUnit(voltmx.flex.DP);
            var Dimensions = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Dimensions",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_b9ab2535628a4434a67d5ea4e1994915,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var DimensionsLabel = new voltmx.ui.Label({
                "id": "DimensionsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopyRelatedInforLabel",
                "text": "DIMENSIONS",
                "textStyle": {},
                "top": "28dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendDimensionsLabel = new voltmx.ui.Label({
                "id": "ExtendDimensionsLabel",
                "isVisible": true,
                "left": "305dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxDimensionsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDimensionsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.setDefaultUnit(voltmx.flex.DP);
            var DimensionsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "DimensionsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Product Dimensions: 2.5\" x 2.5\" x 4.5\"\n    Product Weight: 3.2 oz\n    Serving Size: 1 softgel\n    Servings Per Container: 90\n    Package Type: Plastic bottle with safety seal",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.add(DimensionsText);
            FlxDimensionSection.add(Dimensions, DimensionsLabel, ExtendDimensionsLabel, FlxDimensionsText);
            var FlxReviewSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxReviewSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "5dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewSection.setDefaultUnit(voltmx.flex.DP);
            var Reviews = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Reviews",
                "isVisible": true,
                "left": "3dp",
                "onClick": controller.AS_Button_j4aab7925a044f12a80eb54e070616fd,
                "skin": "CopyCopyQuantityButton",
                "top": "2dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewsLabel = new voltmx.ui.Label({
                "id": "ReviewsLabel",
                "isVisible": true,
                "left": "19dp",
                "skin": "CopyRelatedInforLabel",
                "text": "REVIEWS",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ExtendReviewsLabel = new voltmx.ui.Label({
                "id": "ExtendReviewsLabel",
                "isVisible": true,
                "left": "303dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxReviewsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxReviewsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "65dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewsText.setDefaultUnit(voltmx.flex.DP);
            var ReviewsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "ReviewsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Average Rating: 4.5/5 stars\n    Total Reviews: 1,247\n    \n    Top Review:\n    \"Great results after 3 months of use. My nails are stronger and my hair feels healthier. Would definitely recommend!\" - Sarah M.\n    \n    Recent Review:\n    \"Easy to swallow and no aftertaste. Been using for a month and starting to see improvement.\" - John D.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxReviewsText.add(ReviewsText);
            FlxReviewSection.add(Reviews, ReviewsLabel, ExtendReviewsLabel, FlxReviewsText);
            FlxProductRelatedInformations.add(FlxMoreInfoSection, FlxHowToUseSection, FlxIngredientSection, FlxSafetySection, FlxDimensionSection, FlxReviewSection);
            FlxFrequentlyBoughtProduct.add(FrequentlyBoughtProductLabel, FlxSclFrequentlyBoughtProducts, FlxProductRelatedInformations);
            var FooterDemo = new RiteAidFooter.FooterDemoCopy({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "174.37%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopysknFooterDemo",
                "top": "3.78%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "FooterDemoCopy": {
                        "height": "174.37%",
                        "top": "3.78%"
                    },
                    "IconFace": {
                        "src": "icon_footer_face_1.png"
                    },
                    "IconInsta": {
                        "src": "icon_footer_insta_1.png"
                    },
                    "IconPhone": {
                        "src": "icon_footer_phone_1.png"
                    },
                    "IconPin": {
                        "src": "icon_footer_pin_1.png"
                    },
                    "IconTwitter": {
                        "src": "icon_footer_twitter_1.png"
                    },
                    "IconYtb": {
                        "src": "icon_footer_ytb_1.png"
                    },
                    "imgIcon1": {
                        "src": "icon_footer_1_1.png"
                    },
                    "imgIcon2": {
                        "src": "icon_footer_2_1.png"
                    },
                    "imgIcon3": {
                        "src": "icon_footer_3_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlxSclProductDetail.add(FlxProductImage, FlxProductDetails, FlxFrequentlyBoughtProduct, FooterDemo);
            var AddProduct = new Popup.AddProductCopy({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "AddProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopysknAddProduct",
                "top": "70dp",
                "width": "45%",
                "zIndex": 2,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "AddProductCopy": {
                        "top": "70dp",
                        "zIndex": 2
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var HeaderBar = new RiteAidCommon.HeaderBarCopy({
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d4c15f12183c4c",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBarCopy": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            HeaderBar.onCartClicked = controller.AS_UWI_e584481b40eb475695f1464aa957c8b8;
            this.add(FlxSclProductDetail, AddProduct, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsProductDetails,
            "enabledForIdleTimeout": false,
            "id": "ProductDetails",
            "init": controller.AS_Form_e32612e78cfa43ef83a5015d07d20f71,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eaf74fff6623415aa95fba732ebfe076(eventobject);
            },
            "skin": "CopyProductForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "a3b68c6cbe914e898939d8278fbe1885"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userProductDetailsController", {
    CartProductList: [],
    CartProduct: [],
    onFormInit: function() {
        var self = this;
        var form = kony.application.getCurrentForm();
        if (!form) return;
        self.sections = [{
            flex: "FlxMoreInfoText",
            button: "ExtendMoreInfo"
        }, {
            flex: "FlxHowToUseText",
            button: "ExtendHowToUse"
        }, {
            flex: "FlxIngredientsText",
            button: "ExtendIngredients"
        }, {
            flex: "FlxSafetyText",
            button: "ExtendSafetyLabel"
        }, {
            flex: "FlxDimensionsText",
            button: "ExtendDimensionsLabel"
        }, {
            flex: "FlxReviewsText",
            button: "ExtendReviewsLabel"
        }];
        self.resetSections();
        self.sections.forEach(function(section) {
            if (form[section.button]) {
                form[section.button].onClick = function() {
                    self.toggleSection(section.flex, section.button);
                };
            }
        });
    },
    resetSections: function(exceptFlex) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        this.sections.forEach(function(section) {
            if (form[section.flex] && form[section.button] && section.flex !== exceptFlex) {
                form[section.flex].isVisible = false;
                form[section.button].text = "+";
            }
        });
    },
    toggleSection: function(sectionFlex, arrowIcon) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        var content = form[sectionFlex];
        var icon = form[arrowIcon];
        if (!content || !icon) return;
        if (content.isVisible) {
            content.isVisible = false;
            icon.text = "+";
        } else {
            this.resetSections(sectionFlex);
            content.isVisible = true;
            icon.text = "-";
        }
    },
    increaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        this.view.Quantity.text = (currentQuantity + 1).toString();
    },
    decreaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        if (currentQuantity > 0) {
            this.view.Quantity.text = (currentQuantity - 1).toString();
        }
    },
    toggleFavorite: function() {
        if (this.isFavorite) {
            this.view.FavoriteCheckText.text = "Add to Favorites";
            this.view.FavoriteHeartRed.isVisible = false;
            this.view.FavoriteHeartLight.isVisible = true;
        } else {
            this.view.FavoriteCheckText.text = "Remove from Favorites";
            this.view.FavoriteHeartRed.isVisible = true;
            this.view.FavoriteHeartLight.isVisible = false;
        }
        this.isFavorite = !this.isFavorite;
    },
    //   	updateProductIdGlobal: function() {
    //     	var form = voltmx.application.getCurrentForm();
    //     	console.log('check form', form);
    //     	var selectedRowItems = this.view.FlxSclFrequentlyBoughtProducts.FrequentlyBoughtSegment.selectedRowItems;
    //     	if (selectedRowItems && selectedRowItems.length > 0) {
    //         	var hiddenId = selectedRowItems[0].HiddenId;
    //         	console.log('check hiddenId', hiddenId);
    //         	voltmx.store.setItem('product_Id', JSON.stringify(hiddenId));
    //     	}
    //       	var nav = new voltmx.mvc.Navigation('ProductList');
    //       	nav.navigate();
    //       	var productid1 = voltmx.store.getItem('product_Id');
    //       	console.log('check hiddenId AGAIN1', productid1);
    //       	var nav1 = new voltmx.mvc.Navigation('ProductDetails');
    //       	nav1.navigate();
    //       	var productid2 = voltmx.store.getItem('product_Id');
    // 	},
    updateProductIdGlobal: function() {
        var selectedRowItems = this.view.FlxSclFrequentlyBoughtProducts.FrequentlyBoughtSegment.selectedRowItems;
        if (selectedRowItems && selectedRowItems.length > 0) {
            var hiddenId = selectedRowItems[0].HiddenId;
            console.log('check hiddenId', hiddenId);
            voltmx.store.setItem('product_Id', hiddenId);
            this.GetAProduct(hiddenId);
            //         this.view.forceLayout();
        }
    },
    GetAProduct: function(product_id) {
        kony.print("ProductID: ", product_id)
        var self = this;
        var httpclient = new voltmx.net.HttpRequest();
        var url = "https://vendure.demo.universalcommerce.io/shop-api";
        httpclient.open(constants.HTTP_METHOD_POST, url);
        httpclient.setRequestHeader("Content-Type", "application/json");
        var jsonStr2 = JSON.stringify({
            "query": "query Product($productId: ID) { product(id: $productId) { id name description assets { preview } variants { id name priceWithTax currencyCode assets { preview } options { name group { name } } } } }",
            "variables": {
                "productId": product_id
            }
        });
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4) {
                if (httpclient.status === 200) {
                    var response = JSON.parse(httpclient.response);
                    kony.print("getAProductResponse: " + JSON.stringify(response));
                    var productData = response.data.product;
                    var productId = productData.id;
                    var productName = productData.name;
                    var productDescription = productData.description;
                    var productImage = productData.assets.length > 0 ? productData.assets[0].preview : "";
                    var variant = productData.variants.length > 0 ? productData.variants[0] : null;
                    var variantPrice = variant ? variant.priceWithTax / 100 : 0;
                    var currency = variant ? variant.currencyCode : "USD";
                    var productImagePreview = variant ? variant.assets[0].preview : "";
                    var form = kony.application.getCurrentForm();
                    if (!form) {
                        console.error("Form is undefined.");
                        return;
                    }
                    form.Quantity.text = "1";
                    if (form.ProductName) {
                        form.ProductName.text = productName;
                    } else {
                        console.error("ProductName label is undefined.");
                    }
                    if (form.Description) {
                        form.Description.text = productDescription;
                    } else {
                        console.error("ProductDescription label is undefined.");
                    }
                    if (form.MainProductImage) {
                        form.MainProductImage.src = productImage;
                    } else {
                        console.error("ProductImage component is undefined.");
                    }
                    //  				if (form.SubProductImage) {
                    //                     form.SubProductImage.src = productImagePreview + "?a=12345";
                    //                   	form.SubProductImage.forceLayout();
                    //                   	form.SubProductImage.id = variant.id;
                    //                 } else {
                    //                     console.error("SubImagePreview component is undefined.");
                    //                 }
                    if (form.ProductPrice) {
                        form.ProductPrice.text = currency + " " + variantPrice.toFixed(2);
                    } else {
                        console.error("ProductPrice label is undefined.");
                    }
                    if (form.ProductPrice) {
                        var displayCurrency = (currency === "USD") ? "$" : currency;
                        form.ProductPrice.text = displayCurrency + " " + variantPrice.toFixed(2);
                    } else {
                        console.error("ProductPrice label is undefined.");
                    }
                    if (form.SubProductImage) {
                        form.SubProductImage.src = productImagePreview;
                    } else {
                        console.error("SubImagePreview component is undefined.");
                    }
                    voltmx.store.setItem('product_variant_id', variant.id);
                } else {
                    console.error("Error fetching product: ", httpclient.status, httpclient.responseText);
                }
            }
        };
        httpclient.send(jsonStr2);
    },
    AddItemToCart: function() {
        var self = this;
        var httpclient = new voltmx.net.HttpRequest();
        var url = "https://vendure.demo.universalcommerce.io/shop-api";
        httpclient.open(constants.HTTP_METHOD_POST, url);
        httpclient.setRequestHeader("Content-Type", "application/json");
        var form = kony.application.getCurrentForm();
        var product_variant_id = voltmx.store.getItem('product_variant_id');
        var quantity = parseInt(form.Quantity.text, 10);
        var jsonStr2 = JSON.stringify({
            "query": "mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) { addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) { ... on Order { id lines { id linePriceWithTax quantity productVariant { id name priceWithTax assets { preview } product { assets { preview } } currencyCode } } totalWithTax totalQuantity currencyCode } } }",
            "variables": {
                "productVariantId": product_variant_id,
                "quantity": quantity
            }
        });
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4) {
                if (httpclient.status === 200) {
                    var response = JSON.parse(httpclient.response);
                    if (response.data && response.data.addItemToOrder) {
                        self.handleCartProducts(response.data);
                    }
                }
            }
        };
        httpclient.send(jsonStr2);
    },
    handleCartProducts: function(itemCart) {
        if (!itemCart) {
            return;
        }
        try {
            var storedCart = voltmx.store.getItem("add_Item_To_Cart");
            var flatArray = storedCart ? JSON.parse(storedCart).flat() : [];
            var newItems = itemCart.addItemToOrder.lines.map(item => ({
                id: item.productVariant.id,
                lblDescription: item.productVariant.name,
                unitPrice: item.productVariant.priceWithTax,
                DeleteIcon: 'trashicon.png',
                MinusIcon: 'minusicon.png',
                PlusIcon: 'plusicon.png',
                ProductQuantity: item.quantity,
                img: item.productVariant.assets[0].preview
            }));
            newItems.forEach(newItem => {
                let existingItem = flatArray.find(cartItem => cartItem.id === newItem.id);
                if (existingItem) {
                    existingItem.ProductQuantity += newItem.ProductQuantity;
                } else {
                    flatArray.push(newItem);
                }
            });
            voltmx.store.setItem('add_Item_To_Cart', JSON.stringify([flatArray]));
            console.log("Updated cart product list:", flatArray);
            var updatedCart = voltmx.store.getItem("add_Item_To_Cart");
            console.log("Check in setItem:", updatedCart);
        } catch (error) {
            console.error("JSON Parsing Error:", error);
        }
    },
    onInit: function() {
        this.view.IncreaseQuantity.onClick = this.increaseQuantity;
        this.view.DecreaseQuantity.onClick = this.decreaseQuantity;
        this.view.FavoriteButton.onClick = this.toggleFavorite.bind(this);
    }
});
define("ProductDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for IncreaseQuantity **/
    AS_Button_a00d8bc9602a4b0e82c76612f641c0de: function AS_Button_a00d8bc9602a4b0e82c76612f641c0de(eventobject) {
        var self = this;
        return self.increaseQuantity.call(this);
    },
    /** onClick defined for Dimensions **/
    AS_Button_b9ab2535628a4434a67d5ea4e1994915: function AS_Button_b9ab2535628a4434a67d5ea4e1994915(eventobject) {
        var self = this;
    },
    /** onClick defined for HowToUse **/
    AS_Button_beb86e945b66417d8976e65cb5bc522c: function AS_Button_beb86e945b66417d8976e65cb5bc522c(eventobject) {
        var self = this;
    },
    /** onClick defined for MoreInfo **/
    AS_Button_ed461adefb854e559727eb6cf839cbe3: function AS_Button_ed461adefb854e559727eb6cf839cbe3(eventobject) {
        var self = this;
    },
    /** onClick defined for DecreaseQuantity **/
    AS_Button_f6a535b1a2e6434fb8d2e049c3a86139: function AS_Button_f6a535b1a2e6434fb8d2e049c3a86139(eventobject) {
        var self = this;
        return self.decreaseQuantity.call(this);
    },
    /** onClick defined for FavoriteButton **/
    AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38: function AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38(eventobject) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onClick defined for Safety **/
    AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df: function AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df(eventobject) {
        var self = this;
    },
    /** onClick defined for AddButton **/
    AS_Button_h265e4a259bb42f79f2452d09b7c4bb2: function AS_Button_h265e4a259bb42f79f2452d09b7c4bb2(eventobject) {
        var self = this;
        self.AddItemToCart.call(this);
        self.view.AddProduct.left = "100%";
        self.view.AddProduct.isVisible = true;
        self.view.AddProduct.animate(kony.ui.createAnimation({
            "100": {
                "left": "55%",
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
                    self.view.AddProduct.animate(kony.ui.createAnimation({
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
                            self.view.AddProduct.isVisible = false;
                        }
                    });
                }, 2500);
            }
        });
    },
    /** onClick defined for Reviews **/
    AS_Button_j4aab7925a044f12a80eb54e070616fd: function AS_Button_j4aab7925a044f12a80eb54e070616fd(eventobject) {
        var self = this;
    },
    /** onClick defined for Ingredients **/
    AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3: function AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3(eventobject) {
        var self = this;
    },
    /** init defined for ProductDetails **/
    AS_Form_e32612e78cfa43ef83a5015d07d20f71: function AS_Form_e32612e78cfa43ef83a5015d07d20f71(eventobject) {
        var self = this;
        self.GetAProduct.call(this, product_Id);
        self.view.AddProduct.isVisible = false;
    },
    /** preShow defined for ProductDetails **/
    AS_Form_eaf74fff6623415aa95fba732ebfe076: function AS_Form_eaf74fff6623415aa95fba732ebfe076(eventobject) {
        var self = this;
        self.GetAProduct.call(this, product_Id);
        self.onFormInit.call(this);
        self.updateProductIdGlobal.call(this);
    },
    /** onClick defined for FavoriteCheckText **/
    AS_RichText_c9da0637d0ab4ef8b621a427563cc376: function AS_RichText_c9da0637d0ab4ef8b621a427563cc376(eventobject, linktext, attributes) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onRowClick defined for FrequentlyBoughtSegment **/
    AS_Segment_c0ac1b90e494430dadf48fe178471f41: function AS_Segment_c0ac1b90e494430dadf48fe178471f41(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.updateProductIdGlobal.call(this);
    },
    /** onCartClicked defined for HeaderBar **/
    AS_UWI_e584481b40eb475695f1464aa957c8b8: function AS_UWI_e584481b40eb475695f1464aa957c8b8(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("ShoppingCart");
        ntf.navigate();
    }
});
define("ProductDetailsController", ["userProductDetailsController", "ProductDetailsControllerActions"], function() {
    var controller = require("userProductDetailsController");
    var controllerActions = ["ProductDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ProductList", [],function() {
    return function(controller) {
        function addWidgetsProductList() {
            this.setDefaultUnit(voltmx.flex.DP);
            var Content = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "Content",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            Content.setDefaultUnit(voltmx.flex.DP);
            var ImgBanner = new voltmx.ui.Image2({
                "centerX": "50%",
                "zoomEnabled": false,
                "zoomValue": 200,
                "height": "27%",
                "id": "ImgBanner",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "image_07_rb_sunglasses_page_bottom_banner_desktop.jpg",
                "top": "0%",
                "width": "180%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ContentProductEmpty = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "ContentProductEmpty",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6.05%",
                "isModalContainer": false,
                "right": "5%",
                "skin": "slFbox",
                "top": "42.63%",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ContentProductEmpty.setDefaultUnit(voltmx.flex.DP);
            var LblContent1 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "27.81%",
                "id": "LblContent1",
                "isVisible": true,
                "maxNumberOfLines": 0,
                "skin": "LblContent1",
                "text": "Sorry, we can't find any matches to your query!",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "top": "5.30%",
                "width": "51.04%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var LblContent2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "LblContent2",
                "isVisible": true,
                "skin": "LblContent2",
                "text": "Please try another query.",
                "textStyle": {},
                "top": "32%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            ContentProductEmpty.add(LblContent1, LblContent2);
            var SearchBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 1
                },
                "centerX": "50%",
                "clipBounds": false,
                "height": "6%",
                "id": "SearchBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0h6e8c96325534e",
                "top": "24%",
                "width": "86.82%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SearchBox.setDefaultUnit(voltmx.flex.DP);
            var IconSearch = new voltmx.ui.Label({
                "centerX": 50,
                "centerY": "47.03%",
                "id": "IconSearch",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslFontAwesomeIcon0d9e6855e8c964e",
                "text": "",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var TxtSearch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "47.74%",
                "focusSkin": "CopydefTextBoxFocus0e3c65f0cd87b4f",
                "height": "80%",
                "id": "TxtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": 0,
                "onTextChange": controller.AS_TextField_f474cd1c8f024405ade2c4ede9987e79,
                "placeholder": "Categories, price, color, ...",
                "secureTextEntry": false,
                "skin": "TxtSearch",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 10,
                "width": "75.36%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0e29b6d8b7def42"
            });
            var FlexGroupIconClose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "49.38%",
                "clipBounds": false,
                "focusSkin": "CopyslFbox0d251af345e6d49",
                "height": "30.68%",
                "id": "FlexGroupIconClose",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0.00%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de,
                "skin": "CopyslFbox0caa3f98edcf246",
                "top": "15%",
                "width": "4%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexGroupIconClose.setDefaultUnit(voltmx.flex.DP);
            var IconClose = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": 16,
                "id": "IconClose",
                "isVisible": true,
                "left": 0,
                "onDownloadComplete": controller.AS_Image_a80200b704554e5fac5a144b6b0bf399,
                "skin": "CopyslImage0cb59b478283a4f",
                "src": "close.png",
                "top": 17,
                "width": 13,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexGroupIconClose.add(IconClose);
            SearchBox.add(IconSearch, TxtSearch, FlexGroupIconClose);
            var ListBoxFeature = new voltmx.ui.ListBox({
                "focusSkin": "CopydefListBoxFocus0iee66699a20042",
                "height": "5%",
                "id": "ListBoxFeature",
                "isVisible": true,
                "left": "5%",
                "masterData": [
                    ["lb1", "Featured"],
                    ["lb2", "Price (Low to High)"],
                    ["lb3", "Price (High to Low)"]
                ],
                "selectedKey": "lb1",
                "skin": "CopydefListBoxNormal0eb9f8195d1c443",
                "top": "33%",
                "width": "30%",
                "zIndex": 1,
                "enableHapticFeedback": false
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBoxPage = new voltmx.ui.ListBox({
                "focusSkin": "CopydefListBoxFocus0iee66699a20042",
                "height": "5%",
                "id": "ListBoxPage",
                "isVisible": true,
                "masterData": [
                    ["lbPage1", "16 per page"],
                    ["lbPage2", "32 per page"],
                    ["lbPage3", "64 per page"]
                ],
                "right": "5%",
                "selectedKey": "lbPage1",
                "skin": "CopydefListBoxNormal0eb9f8195d1c443",
                "top": "33%",
                "width": "27.13%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ProductSimple = new ListView.ProductSimple({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "100%",
                "id": "ProductSimple",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopyCopyslFbox3",
                "top": "40.64%",
                "width": "90%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProductSimple": {
                        "centerX": "50%",
                        "isVisible": true,
                        "left": "5%",
                        "right": "5%",
                        "top": "40.64%",
                        "width": "90%"
                    },
                    "segTemp": {
                        "data": [{
                            "img": "",
                            "lblCategory": "",
                            "lblCost": "",
                            "lblCostDiscount": "",
                            "lblDescription": "",
                            "lblDiscount": ""
                        }]
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            ProductSimple.segTemp.onRowClick = controller.AS_Segment_j58894ea400b46a1933dd1659702e5cf;
            Content.add(ImgBanner, ContentProductEmpty, SearchBox, ListBoxFeature, ListBoxPage, ProductSimple);
            var HeaderBar = new RiteAidCommon.HeaderBar({
                "centerX": "50%",
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBar": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(Content, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsProductList,
            "enabledForIdleTimeout": false,
            "id": "ProductList",
            "init": controller.AS_Form_f8c2751bca3b4d3e9d55942876fc74cb,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f6bedc297a8f4ced9496c9d769c6a595(eventobject);
            },
            "skin": "CopyslForm0a3dcebddd4be47",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "b79e93a47a8a42038218541a0de1b8ba"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userProductListController", {
    ProductList: [],
    initProductData: function() {
        var updatedProductList = [];
        var self = this;
        for (var i = 0; i < self.ProductList.length; i++) {
            var item = self.ProductList[i];
            if (item.lblCostDiscount !== '') {
                item.lblCost = {
                    text: item.lblCost,
                    textStyle: {
                        strikeThrough: true
                    }
                };
            }
            updatedProductList.push(item);
        }
        self.view.ProductSimple.segTemp.setData(updatedProductList);
    },
    fetchProducts: function() {
        var self = this;
        var url = "https://m100004273001.demo-hclvoltmx.net/services/VendureApis/GetProducts";
        var httpRequest = new voltmx.net.HttpRequest();
        httpRequest.responseType = constants.HTTP_RESPONSE_TYPE_JSON;
        httpRequest.onReadyStateChange = function() {
            if (httpRequest.readyState === constants.HTTP_READY_STATE_DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.response;
                    console.log("API Response:", response);
                    if (response && response.opstatus === 0) {
                        self.handleProducts(response.data);
                    }
                } else {
                    console.error("HTTP Error:", httpRequest.status, httpRequest.response);
                }
            }
        };
        httpRequest.open(constants.HTTP_METHOD_POST, url);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify({}));
    },
    handleProducts: function(data) {
        if (!data || !data.products || !data.products.items || !Array.isArray(data.products.items)) {
            return;
        }
        var formattedProducts = data.products.items.map(item => {
            var firstVariant = item.variants && item.variants.length > 0 ? item.variants[0] : {};
            var firstFacet = item.facetValues && item.facetValues.length > 0 ? item.facetValues[0].name : "Unknown";
            return {
                id: item.id,
                lblDescription: firstVariant.name || "No Name",
                lblCost: firstVariant.priceWithTax ? `$${(firstVariant.priceWithTax / 100).toFixed(2)}` : "N/A",
                lblCategory: firstFacet,
                lblDiscount: "",
                lblCostDiscount: "",
                img: item.featuredAsset.preview ? item.featuredAsset.preview : "default.png"
            };
        });
        this.ProductList = formattedProducts;
        console.log("Update product list:", this.ProductList);
        this.initProductData();
    }
});
define("ProductListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexGroupIconClose **/
    AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de: function AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de(eventobject) {
        var self = this;
        if (self.view.TxtSearch.text !== "") {
            self.view.TxtSearch.text = "";
            self.view.IconClose.isVisible = false;
            self.view.ContentProductEmpty.isVisible = false;
            self.view.ProductSimple.segTemp.setData(self.originalSegmentData);
        }
    },
    /** preShow defined for ProductList **/
    AS_Form_f6bedc297a8f4ced9496c9d769c6a595: function AS_Form_f6bedc297a8f4ced9496c9d769c6a595(eventobject) {
        var self = this;
        return self.initProductData.call(this);
    },
    /** init defined for ProductList **/
    AS_Form_f8c2751bca3b4d3e9d55942876fc74cb: function AS_Form_f8c2751bca3b4d3e9d55942876fc74cb(eventobject) {
        var self = this;
        return self.fetchProducts.call(this);
    },
    /** onDownloadComplete defined for IconClose **/
    AS_Image_a80200b704554e5fac5a144b6b0bf399: function AS_Image_a80200b704554e5fac5a144b6b0bf399(eventobject, imagesrc, issuccess) {
        var self = this;
        self.view.IconClose.isVisible = false;
        self.view.ContentProductEmpty.isVisible = false;
    },
    /** onRowClick defined for segTemp **/
    AS_Segment_j58894ea400b46a1933dd1659702e5cf: function AS_Segment_j58894ea400b46a1933dd1659702e5cf(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var selectedRowData = self.view.ProductSimple.segTemp.selectedRowItems[0];
        console.log("Item Product 0 : ", selectedRowData);
        if (selectedRowData) {
            product_Id = selectedRowData.id;
            console.log("Item Product: ", product_Id);
            voltmx.store.removeItem('product_Id');
            voltmx.store.setItem('product_Id', JSON.stringify(product_Id));
            console.log("Item Product 2: ", voltmx.store.getItem('product_Id'));
            var ntf = new voltmx.mvc.Navigation("ProductDetails");
            ntf.navigate({
                "variable_product_Id": product_Id,
            });
        } else {
            voltmx.print("Error: No row data found.");
        }
    },
    /** onTextChange defined for TxtSearch **/
    AS_TextField_f474cd1c8f024405ade2c4ede9987e79: function AS_TextField_f474cd1c8f024405ade2c4ede9987e79(eventobject, changedtext) {
        var self = this;
        var searchText = self.view.TxtSearch.text.trim().toLowerCase();
        if (!self.originalSegmentData) {
            self.originalSegmentData = self.view.ProductSimple.segTemp.data;
            console.log(self.originalSegmentData);
        }
        if (searchText !== "") {
            self.view.IconClose.isVisible = true;
            var filteredData = self.originalSegmentData.filter(function(item) {
                return item.lblCategory.toLowerCase().includes(searchText);
            });
            if (filteredData.length === 0) {
                self.view.ContentProductEmpty.isVisible = true;
            } else {
                self.view.ContentProductEmpty.isVisible = false;
            }
            self.view.ProductSimple.segTemp.setData(filteredData);
        } else {
            self.view.ContentProductEmpty.isVisible = false;
            self.view.IconClose.isVisible = false;
            self.view.ProductSimple.segTemp.setData(self.originalSegmentData);
        }
    }
});
define("ProductListController", ["userProductListController", "ProductListControllerActions"], function() {
    var controller = require("userProductListController");
    var controllerActions = ["ProductListControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define('RiteAidCommon/HeaderBar/HeaderBar',[],function() {
    return function(controller) {
        var HeaderBar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "50dp",
            "id": "HeaderBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "HeaderBar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderBar"), extendConfig({}, controller.args[2], "HeaderBar"));
        HeaderBar.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "leftHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "leftHeaderGroup"), extendConfig({}, controller.args[2], "leftHeaderGroup"));
        leftHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var menu = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "menu",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onMenuClicked_jeec49f4f1af422694cacfd34bc132ab,
            "skin": "slImage",
            "src": "grey_menu.png",
            "top": "18dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "menu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "menu"), extendConfig({}, controller.args[2], "menu"));
        var logo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onLogoClicked_b30e8cff55f54d98becdf63e346ab32c,
            "skin": "slImage",
            "src": "rite_aid_logo.png",
            "top": "1dp",
            "width": "66dp",
            "zIndex": 1
        }, controller.args[0], "logo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo"), extendConfig({}, controller.args[2], "logo"));
        var logo2 = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo2",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "logo_2.png",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "logo2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo2"), extendConfig({}, controller.args[2], "logo2"));
        leftHeaderGroup.add(menu, logo, logo2);
        var rightHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "rightHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "rightHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "rightHeaderGroup"), extendConfig({}, controller.args[2], "rightHeaderGroup"));
        rightHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "cartHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onCartClicked_b0b43c8f71f0486b9f6dd9d269ebc041,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": 30,
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "cartHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderGroup"), extendConfig({}, controller.args[2], "cartHeaderGroup"));
        cartHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "cartHeaderImg",
            "isVisible": true,
            "left": "2dp",
            "skin": "slImage",
            "src": "grey_cart_icon.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "cartHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderImg"), extendConfig({}, controller.args[2], "cartHeaderImg"));
        var cartBadgeCount = new voltmx.ui.Label(extendConfig({
            "height": "10dp",
            "id": "cartBadgeCount",
            "isVisible": true,
            "right": "0",
            "skin": "cartBadgeCountStyle",
            "text": "0",
            "textStyle": {},
            "top": "10dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "cartBadgeCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartBadgeCount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "cartBadgeCount"));
        cartHeaderGroup.add(cartHeaderImg, cartBadgeCount);
        var userHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "userHeaderImg",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_c8154b247778489bae1213639a65f0e3,
            "right": "0dp",
            "skin": "slImage",
            "src": "grey_user_icon.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "userHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "userHeaderImg"), extendConfig({}, controller.args[2], "userHeaderImg"));
        rightHeaderGroup.add(cartHeaderGroup, userHeaderImg);
        var ListInformation = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "0dp",
            "id": "ListInformation",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "91dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0a118b73ba0be4c",
            "top": "50dp",
            "width": "90%",
            "zIndex": 999,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ListInformation"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ListInformation"), extendConfig({}, controller.args[2], "ListInformation"));
        ListInformation.setDefaultUnit(voltmx.flex.DP);
        var FlxPharmacy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxPharmacy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c125989c693a46",
            "top": "0%",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxPharmacy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxPharmacy"), extendConfig({}, controller.args[2], "FlxPharmacy"));
        FlxPharmacy.setDefaultUnit(voltmx.flex.DP);
        var iconPharmacy = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "iconPharmacy",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__3_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "iconPharmacy"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconPharmacy"), extendConfig({}, controller.args[2], "iconPharmacy"));
        var lblPharmacy = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblPharmacy",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "Add Pharmacy Management",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblPharmacy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPharmacy"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblPharmacy"));
        var lbldesPharmacy = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesPharmacy",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlblbottom",
            "text": "Sign up to easily refill prescriptions",
            "textStyle": {},
            "top": "67%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesPharmacy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesPharmacy"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesPharmacy"));
        FlxPharmacy.add(iconPharmacy, lblPharmacy, lbldesPharmacy);
        var FlxAidPoint = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxAidPoint",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0j415cc665adf49",
            "top": "25%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxAidPoint"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxAidPoint"), extendConfig({}, controller.args[2], "FlxAidPoint"));
        FlxAidPoint.setDefaultUnit(voltmx.flex.DP);
        var iconAidPoint = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "iconAidPoint",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__4_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "iconAidPoint"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconAidPoint"), extendConfig({}, controller.args[2], "iconAidPoint"));
        var lblAidPoint = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblAidPoint",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "0 Rite Aid Points",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblAidPoint"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAidPoint"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblAidPoint"));
        var lbldesAidPoint = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesAidPoint",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlblbottom",
            "text": "$2.00 in BonusCash",
            "textStyle": {},
            "top": "67%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesAidPoint"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesAidPoint"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesAidPoint"));
        FlxAidPoint.add(iconAidPoint, lblAidPoint, lbldesAidPoint);
        var FlxAccount = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxAccount",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dc18523182da45d482867fabc1e481a0,
            "skin": "CopyslFbox0c2535f45f02344",
            "top": "50%",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxAccount"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxAccount"), extendConfig({}, controller.args[2], "FlxAccount"));
        FlxAccount.setDefaultUnit(voltmx.flex.DP);
        var IconAccount = new voltmx.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "55%",
            "id": "IconAccount",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconAccount"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconAccount"), extendConfig({}, controller.args[2], "IconAccount"));
        var lblAccount = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblAccount",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "My Account",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblAccount"));
        var lbldesAccount = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesAccount",
            "isVisible": true,
            "left": "20.04%",
            "skin": "skinlblbottom",
            "text": "Manage your settings, preferences, & more",
            "textStyle": {},
            "top": "67.00%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesAccount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesAccount"));
        FlxAccount.add(IconAccount, lblAccount, lbldesAccount);
        var FlxSignOut = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "25%",
            "id": "FlxSignOut",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "94dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ef87036e0cc740f48a1cebb92b03d908,
            "skin": "CopyslFbox0aed83f48471848",
            "top": "75%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxSignOut"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxSignOut"), extendConfig({}, controller.args[2], "FlxSignOut"));
        FlxSignOut.setDefaultUnit(voltmx.flex.DP);
        var IconSignOut = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "IconSignOut",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__5_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconSignOut"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconSignOut"), extendConfig({}, controller.args[2], "IconSignOut"));
        var lblSignOut = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "centerY": "50.00%",
            "height": "50%",
            "id": "lblSignOut",
            "isVisible": true,
            "left": "20%",
            "skin": "CopydefLabel0b507b4c2b6da45",
            "text": "Sign Out",
            "textStyle": {},
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblSignOut"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignOut"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblSignOut"));
        FlxSignOut.add(IconSignOut, lblSignOut);
        var span1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "0.50%",
            "id": "span1",
            "isVisible": true,
            "left": "147dp",
            "skin": "CopydefLabel0i48c5bd375d744",
            "textStyle": {},
            "top": "75%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "span1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "span1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "span1"));
        var spanbottom = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "0.50%",
            "id": "spanbottom",
            "isVisible": true,
            "left": "65dp",
            "skin": "CopydefLabel0ge2be11e437442",
            "textStyle": {},
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "spanbottom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "spanbottom"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "spanbottom"));
        ListInformation.add(FlxPharmacy, FlxAidPoint, FlxAccount, FlxSignOut, span1, spanbottom);
        HeaderBar.add(leftHeaderGroup, rightHeaderGroup, ListInformation);
        return HeaderBar;
    }
});
define('RiteAidCommon/HeaderBar/HeaderBarConfig',[],function() {
    return {
        "properties": [],
        "apis": [],
        "events": ["onCartClicked", "onMenuClicked", "onLogoClicked"]
    }
});
define("RiteAidCommon/HeaderBar/userHeaderBarController", [],function() {
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

define('RiteAidCommon/HeaderBarCopy/HeaderBarCopy',[],function() {
    return function(controller) {
        var HeaderBarCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "50dp",
            "id": "HeaderBarCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "HeaderBarCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderBarCopy"), extendConfig({}, controller.args[2], "HeaderBarCopy"));
        HeaderBarCopy.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "45%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "leftHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "leftHeaderGroup"), extendConfig({}, controller.args[2], "leftHeaderGroup"));
        leftHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var menu = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "menu",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onMenuClicked_ua7e40d664e14566b3383c36bc052f0e,
            "skin": "CopyslImage2",
            "src": "grey_menu_1.png",
            "top": "18dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "menu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "menu"), extendConfig({}, controller.args[2], "menu"));
        var logo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onLogoClicked_u1f0f4d95dc04a6e956cdefd3d064014,
            "skin": "CopyslImage2",
            "src": "rite_aid_logo_1.png",
            "top": "1dp",
            "width": "66dp",
            "zIndex": 1
        }, controller.args[0], "logo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo"), extendConfig({}, controller.args[2], "logo"));
        var logo2 = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo2",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage2",
            "src": "logo_2_1.png",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "logo2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo2"), extendConfig({}, controller.args[2], "logo2"));
        leftHeaderGroup.add(menu, logo, logo2);
        var rightHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "rightHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "rightHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "rightHeaderGroup"), extendConfig({}, controller.args[2], "rightHeaderGroup"));
        rightHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "cartHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onCartClicked_u2747f98edbc4e1197892fe71abe649f,
            "right": "0dp",
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": 30,
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "cartHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderGroup"), extendConfig({}, controller.args[2], "cartHeaderGroup"));
        cartHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "cartHeaderImg",
            "isVisible": true,
            "left": "2dp",
            "skin": "CopyslImage2",
            "src": "grey_cart_icon_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "cartHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderImg"), extendConfig({}, controller.args[2], "cartHeaderImg"));
        var cartBadgeCount = new voltmx.ui.Label(extendConfig({
            "height": "10dp",
            "id": "cartBadgeCount",
            "isVisible": true,
            "right": "0",
            "skin": "CopycartBadgeCountStyle",
            "text": "0",
            "textStyle": {},
            "top": "10dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "cartBadgeCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartBadgeCount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "cartBadgeCount"));
        cartHeaderGroup.add(cartHeaderImg, cartBadgeCount);
        var userHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "userHeaderImg",
            "isVisible": true,
            "onTouchStart": controller.AS_onUserClicked_u012607882ed4ff786d904291d44835f,
            "right": "0dp",
            "skin": "CopyslImage2",
            "src": "grey_user_icon_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "userHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "userHeaderImg"), extendConfig({}, controller.args[2], "userHeaderImg"));
        rightHeaderGroup.add(cartHeaderGroup, userHeaderImg);
        HeaderBarCopy.add(leftHeaderGroup, rightHeaderGroup);
        return HeaderBarCopy;
    }
});
define('RiteAidCommon/HeaderBarCopy/HeaderBarCopyConfig',[],function() {
    return {
        "properties": [],
        "apis": [],
        "events": ["onCartClicked", "onMenuClicked", "onLogoClicked", "onUserClicked"]
    }
});
define("RiteAidCommon/HeaderBarCopy/userHeaderBarCopyController", [],function() {
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

define('RiteAidFooter/FooterDemo/FooterDemo',[],function() {
    return function(controller) {
        var FooterDemo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "160%",
            "id": "FooterDemo",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFooterDemo",
            "top": "0%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FooterDemo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FooterDemo"), extendConfig({}, controller.args[2], "FooterDemo"));
        FooterDemo.setDefaultUnit(voltmx.flex.DP);
        var BoxIconContent1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknBoxIcon",
            "top": "60dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent1"), extendConfig({}, controller.args[2], "BoxIconContent1"));
        BoxIconContent1.setDefaultUnit(voltmx.flex.DP);
        var imgIcon1 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon1",
            "isVisible": true,
            "left": "10%",
            "skin": "slImage",
            "src": "icon_footer_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon1"), extendConfig({}, controller.args[2], "imgIcon1"));
        var lblContentIcon1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon1",
            "isVisible": true,
            "skin": "sknLblContentIcon1",
            "text": "Refill Prescriptions",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon1"));
        BoxIconContent1.add(imgIcon1, lblContentIcon1);
        var BoxIconContent2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknBoxIcon",
            "top": "180dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent2"), extendConfig({}, controller.args[2], "BoxIconContent2"));
        BoxIconContent2.setDefaultUnit(voltmx.flex.DP);
        var imgIcon2 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon2",
            "isVisible": true,
            "left": "10%",
            "skin": "slImage",
            "src": "icon_footer_2.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon2"), extendConfig({}, controller.args[2], "imgIcon2"));
        var lblContentIcon2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon2",
            "isVisible": true,
            "skin": "sknLblContentIcon1",
            "text": "Shop by Department",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon2"));
        BoxIconContent2.add(imgIcon2, lblContentIcon2);
        var BoxIconContent3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknBoxIcon",
            "top": "300dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent3"), extendConfig({}, controller.args[2], "BoxIconContent3"));
        BoxIconContent3.setDefaultUnit(voltmx.flex.DP);
        var imgIcon3 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon3",
            "isVisible": true,
            "left": "10%",
            "skin": "slImage",
            "src": "icon_footer_3.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon3"), extendConfig({}, controller.args[2], "imgIcon3"));
        var lblContentIcon3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon3",
            "isVisible": true,
            "skin": "sknLblContentIcon1",
            "text": "Mobile App",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon3"));
        BoxIconContent3.add(imgIcon3, lblContentIcon3);
        var BoxContentCenter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "97dp",
            "id": "BoxContentCenter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "46dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "450dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentCenter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentCenter"), extendConfig({}, controller.args[2], "BoxContentCenter"));
        BoxContentCenter.setDefaultUnit(voltmx.flex.DP);
        var FlexGroupPhone = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "15.15%",
            "id": "FlexGroupPhone",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "93.88%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlexGroupPhone"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexGroupPhone"), extendConfig({}, controller.args[2], "FlexGroupPhone"));
        FlexGroupPhone.setDefaultUnit(voltmx.flex.DP);
        var IconPhone = new voltmx.ui.Image2(extendConfig({
            "centerY": "63%",
            "height": "20dp",
            "id": "IconPhone",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "icon_footer_phone.png",
            "top": "22dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "IconPhone"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPhone"), extendConfig({}, controller.args[2], "IconPhone"));
        var LblPhone = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "LblPhone",
            "isVisible": true,
            "left": "47dp",
            "skin": "sknLblPhone",
            "text": "Call Us: 1-800-RITE-AID (1-800-748-3243)",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblPhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblPhone"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblPhone"));
        FlexGroupPhone.add(IconPhone, LblPhone);
        var LblContent = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContent",
            "isVisible": true,
            "left": "53dp",
            "skin": "sknContent",
            "text": "Hearing or Speech Disabled Dial 711 to reach us thru National Telecommunications Relay",
            "textStyle": {},
            "top": "40dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "LblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContent"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContent"));
        BoxContentCenter.add(FlexGroupPhone, LblContent);
        var BoxRiteAid = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRiteAid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "580dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRiteAid"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRiteAid"), extendConfig({}, controller.args[2], "BoxRiteAid"));
        BoxRiteAid.setDefaultUnit(voltmx.flex.DP);
        var LblTitleAbout = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleAbout",
            "isVisible": true,
            "skin": "sknLblTitle",
            "text": "About Us",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleAbout"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleAbout"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleAbout"));
        var LblContentAbout1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentAbout1",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Our Story",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout1"));
        var LblContentAbout2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentAbout2",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Careers",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout2"));
        var LblContentAbout3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout3",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Store List",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout3"));
        var LblContentAbout4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout4",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Corporate",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout4"));
        var LblContentAbout5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout5",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Legal Information",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout5"));
        BoxRiteAid.add(LblTitleAbout, LblContentAbout1, LblContentAbout2, LblContentAbout3, LblContentAbout4, LblContentAbout5);
        var BoxRite = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRite",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "753dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRite"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRite"), extendConfig({}, controller.args[2], "BoxRite"));
        BoxRite.setDefaultUnit(voltmx.flex.DP);
        var LblRiteAidReward = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblRiteAidReward",
            "isVisible": true,
            "skin": "sknLblTitle",
            "text": "Rite Aid Rewards",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblRiteAidReward"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblRiteAidReward"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblRiteAidReward"));
        var LblContentRA1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentRA1",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Rite Aid Rewards 65+",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA1"));
        var LblContentRA2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentRA2",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Rite Aid Rewards Articles",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA2"));
        var LblContentRA3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentRA3",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "KidCents",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA3"));
        BoxRite.add(LblRiteAidReward, LblContentRA1, LblContentRA2, LblContentRA3);
        var BoxHelp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "49.95%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxHelp",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "877dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxHelp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxHelp"), extendConfig({}, controller.args[2], "BoxHelp"));
        BoxHelp.setDefaultUnit(voltmx.flex.DP);
        var LblTitleHelp = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleHelp",
            "isVisible": true,
            "skin": "sknLblTitle",
            "text": "Help",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleHelp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleHelp"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleHelp"));
        var LblContentHelp1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp1",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Customer Care",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp1"));
        var LblContentHelp2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentHelp2",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Contact Us",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp2"));
        var LblContentHelp3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp3",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "FAQs",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp3"));
        var LblContentHelp4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp4",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Request Records",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp4"));
        var LblContentHelp5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.01%",
            "id": "LblContentHelp5",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Policies",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp5"));
        var LblContentHelp6 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp6",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Feedback",
            "textStyle": {},
            "top": "140dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp6"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp6"));
        var LblContentHelp7 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp7",
            "isVisible": true,
            "left": "28dp",
            "skin": "sknLblContent",
            "text": "Order Status & Returns",
            "textStyle": {},
            "top": "162dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp7"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp7"));
        BoxHelp.add(LblTitleHelp, LblContentHelp1, LblContentHelp2, LblContentHelp3, LblContentHelp4, LblContentHelp5, LblContentHelp6, LblContentHelp7);
        var BoxListIconSocial = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "33dp",
            "id": "BoxListIconSocial",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "57dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1087dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxListIconSocial"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxListIconSocial"), extendConfig({}, controller.args[2], "BoxListIconSocial"));
        BoxListIconSocial.setDefaultUnit(voltmx.flex.DP);
        var IconYtb = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconYtb",
            "isVisible": true,
            "left": "49dp",
            "skin": "slImage",
            "src": "icon_footer_ytb.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconYtb"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconYtb"), extendConfig({}, controller.args[2], "IconYtb"));
        var IconTwitter = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconTwitter",
            "isVisible": true,
            "left": "169dp",
            "skin": "slImage",
            "src": "icon_footer_twitter.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconTwitter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconTwitter"), extendConfig({}, controller.args[2], "IconTwitter"));
        var IconFace = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconFace",
            "isVisible": true,
            "left": "109dp",
            "skin": "slImage",
            "src": "icon_footer_face.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconFace"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconFace"), extendConfig({}, controller.args[2], "IconFace"));
        var IconInsta = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconInsta",
            "isVisible": true,
            "left": "229dp",
            "skin": "slImage",
            "src": "icon_footer_insta.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconInsta"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconInsta"), extendConfig({}, controller.args[2], "IconInsta"));
        var IconPin = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconPin",
            "isVisible": true,
            "left": "289dp",
            "skin": "slImage",
            "src": "icon_footer_pin.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPin"), extendConfig({}, controller.args[2], "IconPin"));
        BoxListIconSocial.add(IconYtb, IconTwitter, IconFace, IconInsta, IconPin);
        var BoxLine = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "2dp",
            "id": "BoxLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "sknLineFooter",
            "top": "1152dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxLine"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxLine"), extendConfig({}, controller.args[2], "BoxLine"));
        BoxLine.setDefaultUnit(voltmx.flex.DP);
        BoxLine.add();
        var BoxContentBottom = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "80dp",
            "id": "BoxContentBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1190dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentBottom"), extendConfig({}, controller.args[2], "BoxContentBottom"));
        BoxContentBottom.setDefaultUnit(voltmx.flex.DP);
        var ContentBottom1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "ContentBottom1",
            "isVisible": true,
            "skin": "sknLblContent",
            "text": "© 2024 Rite Aid Corp. All rights reserved.",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ContentBottom1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ContentBottom1"));
        var ContentBottom2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "58dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom2"), extendConfig({}, controller.args[2], "ContentBottom2"));
        ContentBottom2.setDefaultUnit(voltmx.flex.DP);
        var BottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "BottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblContent",
            "text": "Terms And Conditions",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomLeft"));
        var BottomCenter = new voltmx.ui.Label(extendConfig({
            "centerX": "56%",
            "id": "BottomCenter",
            "isVisible": true,
            "skin": "sknLblContent",
            "text": "Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomCenter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomCenter"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomCenter"));
        var BottomRight = new voltmx.ui.Label(extendConfig({
            "id": "BottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "sknLblContent",
            "text": "Patient Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomRight"));
        ContentBottom2.add(BottomLeft, BottomCenter, BottomRight);
        var ContentBottom3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "66%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom3"), extendConfig({}, controller.args[2], "ContentBottom3"));
        ContentBottom3.setDefaultUnit(voltmx.flex.DP);
        var CopyBottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblContent",
            "text": "Accessibility",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomLeft"));
        var CopyBottomRight = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "sknLblContent",
            "text": "Your Privacy Choices",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomRight"));
        ContentBottom3.add(CopyBottomLeft, CopyBottomRight);
        BoxContentBottom.add(ContentBottom1, ContentBottom2, ContentBottom3);
        FooterDemo.add(BoxIconContent1, BoxIconContent2, BoxIconContent3, BoxContentCenter, BoxRiteAid, BoxRite, BoxHelp, BoxListIconSocial, BoxLine, BoxContentBottom);
        return FooterDemo;
    }
});
define("RiteAidFooter/FooterDemo/userFooterDemoController", [],function() {
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

define('RiteAidFooter/FooterDemoCopy/FooterDemoCopy',[],function() {
    return function(controller) {
        var FooterDemoCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "160%",
            "id": "FooterDemoCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknFooterDemo",
            "top": "0%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FooterDemoCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FooterDemoCopy"), extendConfig({}, controller.args[2], "FooterDemoCopy"));
        FooterDemoCopy.setDefaultUnit(voltmx.flex.DP);
        var BoxIconContent1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "60dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent1"), extendConfig({}, controller.args[2], "BoxIconContent1"));
        BoxIconContent1.setDefaultUnit(voltmx.flex.DP);
        var imgIcon1 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon1",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_1_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon1"), extendConfig({}, controller.args[2], "imgIcon1"));
        var lblContentIcon1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon1",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Refill Prescriptions",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon1"));
        BoxIconContent1.add(imgIcon1, lblContentIcon1);
        var BoxIconContent2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "180dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent2"), extendConfig({}, controller.args[2], "BoxIconContent2"));
        BoxIconContent2.setDefaultUnit(voltmx.flex.DP);
        var imgIcon2 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon2",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_2_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon2"), extendConfig({}, controller.args[2], "imgIcon2"));
        var lblContentIcon2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon2",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Shop by Department",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon2"));
        BoxIconContent2.add(imgIcon2, lblContentIcon2);
        var BoxIconContent3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "300dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent3"), extendConfig({}, controller.args[2], "BoxIconContent3"));
        BoxIconContent3.setDefaultUnit(voltmx.flex.DP);
        var imgIcon3 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon3",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_3_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon3"), extendConfig({}, controller.args[2], "imgIcon3"));
        var lblContentIcon3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon3",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Mobile App",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon3"));
        BoxIconContent3.add(imgIcon3, lblContentIcon3);
        var BoxContentCenter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "97dp",
            "id": "BoxContentCenter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "46dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "450dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentCenter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentCenter"), extendConfig({}, controller.args[2], "BoxContentCenter"));
        BoxContentCenter.setDefaultUnit(voltmx.flex.DP);
        var FlexGroupPhone = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "15.15%",
            "id": "FlexGroupPhone",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "93.88%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlexGroupPhone"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexGroupPhone"), extendConfig({}, controller.args[2], "FlexGroupPhone"));
        FlexGroupPhone.setDefaultUnit(voltmx.flex.DP);
        var IconPhone = new voltmx.ui.Image2(extendConfig({
            "centerY": "63%",
            "height": "20dp",
            "id": "IconPhone",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_phone_1.png",
            "top": "22dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "IconPhone"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPhone"), extendConfig({}, controller.args[2], "IconPhone"));
        var LblPhone = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "LblPhone",
            "isVisible": true,
            "left": "47dp",
            "skin": "CopysknLblPhone",
            "text": "Call Us: 1-800-RITE-AID (1-800-748-3243)",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblPhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblPhone"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblPhone"));
        FlexGroupPhone.add(IconPhone, LblPhone);
        var LblContent = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContent",
            "isVisible": true,
            "left": "53dp",
            "skin": "CopysknContent",
            "text": "Hearing or Speech Disabled Dial 711 to reach us thru National Telecommunications Relay",
            "textStyle": {},
            "top": "40dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "LblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContent"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContent"));
        BoxContentCenter.add(FlexGroupPhone, LblContent);
        var BoxRiteAid = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRiteAid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "580dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRiteAid"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRiteAid"), extendConfig({}, controller.args[2], "BoxRiteAid"));
        BoxRiteAid.setDefaultUnit(voltmx.flex.DP);
        var LblTitleAbout = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleAbout",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "About Us",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleAbout"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleAbout"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleAbout"));
        var LblContentAbout1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentAbout1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Our Story",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout1"));
        var LblContentAbout2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentAbout2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Careers",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout2"));
        var LblContentAbout3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Store List",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout3"));
        var LblContentAbout4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout4",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Corporate",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout4"));
        var LblContentAbout5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout5",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Legal Information",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout5"));
        BoxRiteAid.add(LblTitleAbout, LblContentAbout1, LblContentAbout2, LblContentAbout3, LblContentAbout4, LblContentAbout5);
        var BoxRite = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRite",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "753dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRite"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRite"), extendConfig({}, controller.args[2], "BoxRite"));
        BoxRite.setDefaultUnit(voltmx.flex.DP);
        var LblRiteAidReward = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblRiteAidReward",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "Rite Aid Rewards",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblRiteAidReward"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblRiteAidReward"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblRiteAidReward"));
        var LblContentRA1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentRA1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Rite Aid Rewards 65+",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA1"));
        var LblContentRA2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentRA2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Rite Aid Rewards Articles",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA2"));
        var LblContentRA3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentRA3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "KidCents",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA3"));
        BoxRite.add(LblRiteAidReward, LblContentRA1, LblContentRA2, LblContentRA3);
        var BoxHelp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "49.95%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxHelp",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "877dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxHelp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxHelp"), extendConfig({}, controller.args[2], "BoxHelp"));
        BoxHelp.setDefaultUnit(voltmx.flex.DP);
        var LblTitleHelp = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleHelp",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "Help",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleHelp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleHelp"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleHelp"));
        var LblContentHelp1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Customer Care",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp1"));
        var LblContentHelp2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentHelp2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Contact Us",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp2"));
        var LblContentHelp3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "FAQs",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp3"));
        var LblContentHelp4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp4",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Request Records",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp4"));
        var LblContentHelp5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.01%",
            "id": "LblContentHelp5",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Policies",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp5"));
        var LblContentHelp6 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp6",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Feedback",
            "textStyle": {},
            "top": "140dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp6"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp6"));
        var LblContentHelp7 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp7",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Order Status & Returns",
            "textStyle": {},
            "top": "162dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp7"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp7"));
        BoxHelp.add(LblTitleHelp, LblContentHelp1, LblContentHelp2, LblContentHelp3, LblContentHelp4, LblContentHelp5, LblContentHelp6, LblContentHelp7);
        var BoxListIconSocial = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "33dp",
            "id": "BoxListIconSocial",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "57dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "1087dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxListIconSocial"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxListIconSocial"), extendConfig({}, controller.args[2], "BoxListIconSocial"));
        BoxListIconSocial.setDefaultUnit(voltmx.flex.DP);
        var IconYtb = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconYtb",
            "isVisible": true,
            "left": "49dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_ytb_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconYtb"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconYtb"), extendConfig({}, controller.args[2], "IconYtb"));
        var IconTwitter = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconTwitter",
            "isVisible": true,
            "left": "169dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_twitter_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconTwitter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconTwitter"), extendConfig({}, controller.args[2], "IconTwitter"));
        var IconFace = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconFace",
            "isVisible": true,
            "left": "109dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_face_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconFace"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconFace"), extendConfig({}, controller.args[2], "IconFace"));
        var IconInsta = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconInsta",
            "isVisible": true,
            "left": "229dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_insta_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconInsta"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconInsta"), extendConfig({}, controller.args[2], "IconInsta"));
        var IconPin = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconPin",
            "isVisible": true,
            "left": "289dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_pin_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPin"), extendConfig({}, controller.args[2], "IconPin"));
        BoxListIconSocial.add(IconYtb, IconTwitter, IconFace, IconInsta, IconPin);
        var BoxLine = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "2dp",
            "id": "BoxLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "CopysknLineFooter",
            "top": "1152dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxLine"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxLine"), extendConfig({}, controller.args[2], "BoxLine"));
        BoxLine.setDefaultUnit(voltmx.flex.DP);
        BoxLine.add();
        var BoxContentBottom = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "80dp",
            "id": "BoxContentBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "1190dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentBottom"), extendConfig({}, controller.args[2], "BoxContentBottom"));
        BoxContentBottom.setDefaultUnit(voltmx.flex.DP);
        var ContentBottom1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "ContentBottom1",
            "isVisible": true,
            "skin": "CopysknLblContent",
            "text": "© 2024 Rite Aid Corp. All rights reserved.",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ContentBottom1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ContentBottom1"));
        var ContentBottom2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "58dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom2"), extendConfig({}, controller.args[2], "ContentBottom2"));
        ContentBottom2.setDefaultUnit(voltmx.flex.DP);
        var BottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "BottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknLblContent",
            "text": "Terms And Conditions",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomLeft"));
        var BottomCenter = new voltmx.ui.Label(extendConfig({
            "centerX": "56%",
            "id": "BottomCenter",
            "isVisible": true,
            "skin": "CopysknLblContent",
            "text": "Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomCenter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomCenter"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomCenter"));
        var BottomRight = new voltmx.ui.Label(extendConfig({
            "id": "BottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "CopysknLblContent",
            "text": "Patient Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomRight"));
        ContentBottom2.add(BottomLeft, BottomCenter, BottomRight);
        var ContentBottom3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "width": "66%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom3"), extendConfig({}, controller.args[2], "ContentBottom3"));
        ContentBottom3.setDefaultUnit(voltmx.flex.DP);
        var CopyBottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknLblContent",
            "text": "Accessibility",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomLeft"));
        var CopyBottomRight = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "CopysknLblContent",
            "text": "Your Privacy Choices",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomRight"));
        ContentBottom3.add(CopyBottomLeft, CopyBottomRight);
        BoxContentBottom.add(ContentBottom1, ContentBottom2, ContentBottom3);
        FooterDemoCopy.add(BoxIconContent1, BoxIconContent2, BoxIconContent3, BoxContentCenter, BoxRiteAid, BoxRite, BoxHelp, BoxListIconSocial, BoxLine, BoxContentBottom);
        return FooterDemoCopy;
    }
});
define("RiteAidFooter/FooterDemoCopy/userFooterDemoCopyController", [],function() {
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

define("ShoppingCart", [],function() {
    return function(controller) {
        function addWidgetsShoppingCart() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ShoppingCartHeader = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ShoppingCartHeader",
                "isVisible": true,
                "skin": "CopydefLabel0f7d1000ef1394d",
                "text": "Shopping Cart",
                "textStyle": {},
                "top": "37dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CheckoutAndPromoteContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "693dp",
                "id": "CheckoutAndPromoteContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "347dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutAndPromoteContainer.setDefaultUnit(voltmx.flex.DP);
            var ProcessToCheckoutBtn = new voltmx.ui.FlexContainer({
                "centerX": "50.08%",
                "clipBounds": true,
                "height": "60dp",
                "id": "ProcessToCheckoutBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a8422f35ddd346",
                "top": "310dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.setDefaultUnit(voltmx.flex.DP);
            var ProceedToCheckoutBtn = new voltmx.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ProceedToCheckoutBtn",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_f23d0190875342bc9f3e99910c207e85,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Proceed to Checkout",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.add(ProceedToCheckoutBtn);
            var RiteAidRewardsBtn = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "RiteAidRewardsBtn",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopydefBtnNormal0a3af852624ba40",
                "text": "Rite Aid Rewards",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInLabel = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "SignInLabel",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "defRichTextLink",
                "skin": "defRichTextNormal",
                "text": "Sign in to earn/redeem BonusCash and clipped coupons.",
                "top": "90dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInBtnCOntainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "SignInBtnCOntainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0jdc530d1e72050",
                "top": "233dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.setDefaultUnit(voltmx.flex.DP);
            var SignInBtn = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "SignInBtn",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Sign In",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.add(SignInBtn);
            var SubTotalContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "47dp",
                "id": "SubTotalContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "380dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SubTotalContainer.setDefaultUnit(voltmx.flex.DP);
            var SubtotalLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "SubtotalLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0ea921d41b8a943",
                "text": "Subtotal (1 Items)",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PriceLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "PriceLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0d8702333e2ff48",
                "text": "$7.19",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            SubTotalContainer.add(SubtotalLabel, PriceLabel);
            var TaxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "47dp",
                "id": "TaxContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "427dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            TaxContainer.setDefaultUnit(voltmx.flex.DP);
            var TaxLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0becfaea1d7da4c",
                "text": "Tax",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var TaxAmountLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxAmountLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0f9596e9ea3544a",
                "text": "10%",
                "textStyle": {},
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            TaxContainer.add(TaxLabel, TaxAmountLabel);
            var ApplyPomoteCodeLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ApplyPomoteCodeLabel",
                "isVisible": true,
                "left": "19dp",
                "skin": "CopydefLabel0h0e12740d0ab4a",
                "text": "Apply Promote Code",
                "textStyle": {},
                "top": "495dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PromoteCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "PromoteCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "19dp",
                "placeholder": "Promo Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0f2a0c9d31f3a42",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "537dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var DonateCheckbox = new voltmx.ui.CheckBoxGroup({
                "centerX": "50.00%",
                "height": "40dp",
                "id": "DonateCheckbox",
                "isVisible": true,
                "left": "20dp",
                "masterData": [
                    ["cbg1", "Donate My Change to KidCents"]
                ],
                "skin": "CopyslCheckBoxGroup0a94c6bfd5a364f",
                "top": "597dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var EstContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.09%",
                "clipBounds": false,
                "height": "40dp",
                "id": "EstContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "643dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            EstContainer.setDefaultUnit(voltmx.flex.DP);
            var EstLabel = new voltmx.ui.Label({
                "id": "EstLabel",
                "isVisible": true,
                "left": "0",
                "skin": "defLabel",
                "text": "Est. Total",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var EstAmount = new voltmx.ui.Label({
                "id": "EstAmount",
                "isVisible": true,
                "right": "0",
                "skin": "defLabel",
                "text": "$8.19",
                "textStyle": {},
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            EstContainer.add(EstLabel, EstAmount);
            var CreateAccountButtonContainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "CreateAccountButtonContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0jc7016e74ec242",
                "top": "160dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.setDefaultUnit(voltmx.flex.DP);
            var ButtonRound = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Create Account",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.add(ButtonRound);
            CheckoutAndPromoteContainer.add(ProcessToCheckoutBtn, RiteAidRewardsBtn, SignInLabel, SignInBtnCOntainer, SubTotalContainer, TaxContainer, ApplyPomoteCodeLabel, PromoteCodeInput, DonateCheckbox, EstContainer, CreateAccountButtonContainer);
            var RecommendedLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "RecommendedLabel",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopydefLabel0af92cc635be54f",
                "text": "Recommended for You",
                "textStyle": {},
                "top": "1070dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ProductListCarousel = new Carousel.ProductListCarousel({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "280dp",
                "id": "ProductListCarousel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1143dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProductListCarousel": {
                        "height": "280dp",
                        "left": "0dp",
                        "top": "1143dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CartProductList = new ListView.CartProductList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.28%",
                "height": "200dp",
                "id": "CartProductList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox3",
                "top": "120dp",
                "width": "100%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "CartProductList": {
                        "centerX": "50.28%",
                        "height": "200dp",
                        "left": "1dp",
                        "top": "120dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(ShoppingCartHeader, CheckoutAndPromoteContainer, RecommendedLabel, ProductListCarousel, CartProductList);
        };
        return [{
            "addWidgets": addWidgetsShoppingCart,
            "enabledForIdleTimeout": false,
            "id": "ShoppingCart",
            "init": controller.AS_Form_bfff2beaea934b99a589bf3185308ed2,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h5482255e0214ce98ca8088ba317e43b(eventobject);
            },
            "skin": "CopyslForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "c6939cf809d44ca982d87fb479d42f13"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
define("userShoppingCartController", {
    CartProductList: [],
    CartCarouselProductList: [{
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }],
    initProductData: function() {
        var scope = this;
        var modifiedData = [];
        for (var i = 0; i < this.CartProductList.length; i++) {
            var item = this.CartProductList[i];
            var newItem = {
                lblDescription: item.lblDescription,
                lblCost: "$" + ((item.unitPrice * item.ProductQuantity) / 100).toFixed(2),
                unitPrice: item.unitPrice,
                DeleteIcon: item.DeleteIcon,
                ProductQuantity: item.ProductQuantity,
                img: item.img,
                PlusIcon: {
                    src: item.PlusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.increaseQuantity(index);
                        };
                    })(i)
                },
                MinusIcon: {
                    src: item.MinusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.decreaseQuantity(index);
                        };
                    })(i)
                }
            };
            modifiedData.push(newItem);
        }
        this.view.CartProductList.ProductList.setData(modifiedData);
        this.view.ProductListCarousel.ProductCarousel.setData(this.CartCarouselProductList);
        var mappedData = modifiedData.map(function(item) {
            return {
                OrderSummaryItemImg: item.img,
                OrderSummaryProductName: item.lblDescription,
                OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                OrderSummaryProductPrice: item.lblCost
            };
        });
        voltmx.store.setItem("CartProductList", JSON.stringify(mappedData));
        this.calculateTotal();
    },
    handleCartProducts: function() {
        var itemCart = voltmx.store.getItem("add_Item_To_Cart");
        if (!itemCart) {
            return;
        }
        try {
            var itemCartJSON = JSON.parse(itemCart);
            var flatArray = itemCartJSON.flat();
            this.CartProductList = flatArray;
            console.log("Updated cart product list:", flatArray);
        } catch (error) {
            console.error("JSON Parsing Error:", error);
        }
    },
    increaseQuantity: function(rowIndex) {
        var segmentData = this.view.CartProductList.ProductList.data;
        var newQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1;
        segmentData[rowIndex].ProductQuantity = newQuantity.toString();
        segmentData[rowIndex].lblCost = "$" + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);
        // Instead of setData(), use setDataAt() to update only the changed row
        this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
        this.calculateTotal();
        // Map the data to the new format
        var mappedData = segmentData.map(function(item) {
            return {
                OrderSummaryItemImg: item.img,
                OrderSummaryProductName: item.lblDescription,
                OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                OrderSummaryProductPrice: item.lblCost
            };
        });
        // Store the mapped cart data
        voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
    },
    decreaseQuantity: function(rowIndex) {
        var segmentData = this.view.CartProductList.ProductList.data;
        var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);
        if (currentQuantity > 1) {
            var newQuantity = currentQuantity - 1;
            segmentData[rowIndex].ProductQuantity = newQuantity.toString();
            segmentData[rowIndex].lblCost = "$" + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);
            // Use setDataAt() to update only the modified row
            this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
            this.calculateTotal();
            // Map the data to the new format
            var mappedData = segmentData.map(function(item) {
                return {
                    OrderSummaryItemImg: item.img,
                    OrderSummaryProductName: item.lblDescription,
                    OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                    OrderSummaryProductPrice: item.lblCost
                };
            });
            // Store the mapped cart data
            voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
        }
    },
    calculateTotal: function() {
        var segmentData = this.view.CartProductList.ProductList.data;
        var totalPrice = 0;
        for (var i = 0; i < segmentData.length; i++) {
            var item = segmentData[i];
            var quantity = parseInt(item.ProductQuantity, 10);
            var unitPrice = item.unitPrice;
            totalPrice += quantity * unitPrice;
        }
        this.view.CheckoutAndPromoteContainer.
        EstContainer.EstAmount.text = "$" + (totalPrice / 100).toFixed(2);
    },
    navigateToCheckout: function() {
        var taxText = this.view.CheckoutAndPromoteContainer.TaxContainer.TaxAmountLabel.text;
        var cartTotalText = this.view.CheckoutAndPromoteContainer.EstContainer.EstAmount.text;
        // Remove "$" and "%" symbols, then convert to numbers
        var taxPercentage = parseFloat(taxText.replace("%", "").trim());
        var cartTotalPrice = parseFloat(cartTotalText.replace("$", "").trim());
        // Convert tax percentage to decimal and calculate the final total
        var taxAmount = (cartTotalPrice * taxPercentage) / 100;
        var finalTotalPrice = cartTotalPrice + taxAmount;
        // Store the updated total price
        voltmx.store.setItem("CartTotalPrice", "$" + (finalTotalPrice / 100).toFixed(2));
        voltmx.store.setItem("CartItemQuantity", this.CartProductList.length);
        var navObj = new voltmx.mvc.Navigation("CheckoutAddress");
        navObj.navigate();
    },
    fetchGetOrders: function(orderId) {
        var self = this;
        console.log("Check fetchGetOrders: ", orderId);
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        var jsonStr2 = JSON.stringify({
            "query": "query GetOrder($orderId: ID!) { order(id: $orderId) { id orderPlacedAt subTotalWithTax shippingWithTax totalWithTax currencyCode state payments { metadata } customFields { deliveryType } lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } currencyCode } } shippingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } billingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } } }",
            "variables": {
                "orderId": orderId
            }
        });
        httpclient.send(jsonStr2);
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4 && httpclient.status === 200) {
                var response = JSON.parse(httpclient.response);
                console.log("check response: ", response);
                //           self.handleProducts(response.data);
            }
        };
    },
    handleOrderProducts: function(data) {
        if (!data || !data.order || !data.order.lines || !Array.isArray(data.order.lines)) {
            return;
        }
        var formattedProducts = data.order.lines.map(item => {
            return {
                id: item.productVariant.id,
                lblDescription: item.productVariant.name,
                unitPrice: item.linePriceWithTax,
                DeleteIcon: 'trashicon.png',
                MinusIcon: 'minusicon.png',
                PlusIcon: 'plusicon.png',
                ProductQuantity: item.quantity,
                img: item.productVariant.featuredAsset.preview
            };
        });
        this.CartProductList = formattedProducts;
        console.log("Update order list:", this.CartProductList);
    },
});
define("ShoppingCartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ProceedToCheckoutBtn **/
    AS_Button_f23d0190875342bc9f3e99910c207e85: function AS_Button_f23d0190875342bc9f3e99910c207e85(eventobject) {
        var self = this;
        return self.navigateToCheckout.call(this);
    },
    /** init defined for ShoppingCart **/
    AS_Form_bfff2beaea934b99a589bf3185308ed2: function AS_Form_bfff2beaea934b99a589bf3185308ed2(eventobject) {
        var self = this;
        return self.initProductData.call(this);
    },
    /** preShow defined for ShoppingCart **/
    AS_Form_h5482255e0214ce98ca8088ba317e43b: function AS_Form_h5482255e0214ce98ca8088ba317e43b(eventobject) {
        var self = this;
        self.handleCartProducts.call(this);
        self.initProductData.call(this);
    }
});
define("ShoppingCartController", ["userShoppingCartController", "ShoppingCartControllerActions"], function() {
    var controller = require("userShoppingCartController");
    var controllerActions = ["ShoppingCartControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

require(['applicationController','Carousel/OrderSummary/OrderSummary','Carousel/OrderSummary/OrderSummaryController','Carousel/ProductListCarousel/ProductListCarousel','Carousel/ProductListCarousel/ProductListCarouselController','CheckoutAddress','CheckoutAddressController','CheckoutPaymentMethod','CheckoutPaymentMethodController','CheckoutShippingMethod','CheckoutShippingMethodController','CheckoutSuccessful','CheckoutSuccessfulController','CheckoutTemplate/ProgressBar/ProgressBar','CheckoutTemplate/ProgressBar/ProgressBarController','com/konymp/map1/map1','com/konymp/map1/map1Controller','CopyFBox','CopyFBox0eea1207dbf814d','CopyFBox0eea1207dbf814dController','CopyFBoxController','CopyflxSeg2','CopyflxSeg2Controller','CopyShoppingCart','CopyShoppingCartController','Dashboard','DashboardController','Flex0f2795775352a48','Flex0f2795775352a48Controller','flxSampleRowTemplate','flxSampleRowTemplateController','flxSectionHeaderTemplate','flxSectionHeaderTemplateController','FlxSeg','FlxSegController','Form1','Form1Controller','Home','HomeController','ListView/CartProductList/CartProductList','ListView/CartProductList/CartProductListController','ListView/ProductSimple/ProductSimple','ListView/ProductSimple/ProductSimpleController','Login','LoginController','navigation/NavigationController','navigation/NavigationModel','OrderSummaryItemListCtn','OrderSummaryItemListCtnController','Popup/AddProduct/AddProduct','Popup/AddProduct/AddProductController','Popup/AddProductCopy/AddProductCopy','Popup/AddProductCopy/AddProductCopyController','Popup/Payment/Payment','Popup/Payment/PaymentController','PopupAddProduct','PopupAddProductController','ProductCarouselContainer','ProductCarouselContainerController','ProductDetails','ProductDetailsController','ProductList','ProductListController','RiteAidCommon/HeaderBar/HeaderBar','RiteAidCommon/HeaderBar/HeaderBarConfig','RiteAidCommon/HeaderBar/HeaderBarController','RiteAidCommon/HeaderBarCopy/HeaderBarCopy','RiteAidCommon/HeaderBarCopy/HeaderBarCopyConfig','RiteAidCommon/HeaderBarCopy/HeaderBarCopyController','RiteAidFooter/FooterDemo/FooterDemo','RiteAidFooter/FooterDemo/FooterDemoController','RiteAidFooter/FooterDemoCopy/FooterDemoCopy','RiteAidFooter/FooterDemoCopy/FooterDemoCopyController','ShoppingCart','ShoppingCartController'], function(){});
define("sparequirefileslist", function(){});

