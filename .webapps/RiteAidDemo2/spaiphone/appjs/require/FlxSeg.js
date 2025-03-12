define("FlxSeg", function() {
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
})