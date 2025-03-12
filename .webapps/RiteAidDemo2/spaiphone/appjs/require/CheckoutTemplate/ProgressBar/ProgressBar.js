define(function() {
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
})