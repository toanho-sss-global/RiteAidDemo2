define(function() {
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
})