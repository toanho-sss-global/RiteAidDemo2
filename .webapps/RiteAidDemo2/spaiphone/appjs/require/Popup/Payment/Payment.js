define(function() {
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
})