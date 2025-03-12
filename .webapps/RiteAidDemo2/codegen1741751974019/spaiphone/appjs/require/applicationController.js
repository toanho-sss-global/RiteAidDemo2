define({
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