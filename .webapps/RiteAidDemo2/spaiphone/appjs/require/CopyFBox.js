define("CopyFBox", function() {
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
})