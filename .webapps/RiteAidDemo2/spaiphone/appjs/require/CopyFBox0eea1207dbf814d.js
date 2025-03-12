define("CopyFBox0eea1207dbf814d", function() {
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
})