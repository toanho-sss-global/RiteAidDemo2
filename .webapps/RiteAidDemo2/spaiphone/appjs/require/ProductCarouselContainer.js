define("ProductCarouselContainer", function() {
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
})