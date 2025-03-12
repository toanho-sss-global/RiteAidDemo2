define("Flex0f2795775352a48", function() {
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
})