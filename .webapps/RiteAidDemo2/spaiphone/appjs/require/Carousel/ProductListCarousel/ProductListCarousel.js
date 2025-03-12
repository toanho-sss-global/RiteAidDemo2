define(function() {
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
})