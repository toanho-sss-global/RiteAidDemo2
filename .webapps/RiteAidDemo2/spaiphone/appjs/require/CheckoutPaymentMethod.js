define("CheckoutPaymentMethod", function() {
    return function(controller) {
        function addWidgetsCheckoutPaymentMethod() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ProgressBar = new CheckoutTemplate.ProgressBar({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "id": "ProgressBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f0a1dc06dd574a",
                "top": "0dp",
                "width": "1096px",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProgressBar": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "isVisible": true
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SelectPaymentMethodContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "600dp",
                "id": "SelectPaymentMethodContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "35dp",
                "minHeight": "650dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0i312f0a4da8244",
                "top": "127dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SelectPaymentMethodContainer.setDefaultUnit(voltmx.flex.DP);
            var SelectPaymentMethodLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "SelectPaymentMethodLabel",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0j55e95ac76444c",
                "text": "Select a payment method",
                "textStyle": {},
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PaymentDetailContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "500dp",
                "id": "PaymentDetailContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "14dp",
                "minHeight": "550dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0i312f0a4da8244",
                "top": "70dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PaymentDetailContainer.setDefaultUnit(voltmx.flex.DP);
            var PaymentDetailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "PaymentDetailLabel",
                "isVisible": true,
                "left": "29dp",
                "skin": "CopydefLabel0ec056a8ef3a540",
                "text": "3. Payment Details",
                "textStyle": {},
                "top": "14dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PayPalRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "PayPalRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1,
                "skin": "checkoutPaymentRadioBtn",
                "top": "67dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var ApplePayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "ApplePayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171,
                "skin": "checkoutPaymentRadioBtn",
                "top": "120dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var GooglePayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "GooglePayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef,
                "skin": "checkoutPaymentRadioBtn",
                "top": "174dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var HSARadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "HSARadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60,
                "skin": "checkoutPaymentRadioBtn",
                "top": "227dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var FSARadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "FSARadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c,
                "skin": "checkoutPaymentRadioBtn",
                "top": "280dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var LoyaltyPtnRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "LoyaltyPtnRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb,
                "skin": "checkoutPaymentRadioBtn",
                "top": "333dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var AfterPayRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "AfterPayRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7,
                "skin": "checkoutPaymentRadioBtn",
                "top": "386dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var CreditDebitRadioBtn = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "43dp",
                "id": "CreditDebitRadioBtn",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["PayPalPay", "."]
                ],
                "onSelection": controller.AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db,
                "skin": "checkoutPaymentRadioBtn",
                "top": "439dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [10, 10, 10, 10],
                "paddingInPixel": true
            }, {});
            var PayPalImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "43dp",
                "id": "PayPalImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "67dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ApplePayImg = new voltmx.ui.Image2({
                "centerX": "35.52%",
                "height": "43dp",
                "id": "ApplePayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "applepayicon.jpg",
                "top": "120dp",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var GooglePayImg = new voltmx.ui.Image2({
                "centerX": "34.03%",
                "height": "33dp",
                "id": "GooglePayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "googlepayimg.png",
                "top": "179dp",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ClearPayImg = new voltmx.ui.Image2({
                "centerX": "35.60%",
                "height": "43dp",
                "id": "ClearPayImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "clearpayimg.png",
                "top": "386dp",
                "width": "83dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var VisaImg = new voltmx.ui.Image2({
                "centerX": "55.90%",
                "height": "43dp",
                "id": "VisaImg",
                "isVisible": true,
                "left": "82dp",
                "skin": "slImage",
                "src": "visaimg.jpg",
                "top": "439dp",
                "width": "47dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ApplePayLabel = new voltmx.ui.Label({
                "id": "ApplePayLabel",
                "isVisible": true,
                "left": "155dp",
                "skin": "CopydefLabel0b928db7ad4a842",
                "text": "Apple Pay",
                "textStyle": {},
                "top": "129dp",
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
            var GooglePayLabel = new voltmx.ui.Label({
                "id": "GooglePayLabel",
                "isVisible": true,
                "left": "155dp",
                "skin": "CopydefLabel0ae2ee15251b146",
                "text": "Google Pay",
                "textStyle": {},
                "top": "183dp",
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
            var HSALabel = new voltmx.ui.Label({
                "id": "HSALabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0gc9e313f3cfe4d",
                "text": "HSA (Health Savings Account)",
                "textStyle": {},
                "top": "238dp",
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
            var FSALLabel = new voltmx.ui.Label({
                "id": "FSALLabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0i33ac5d7d7ad46",
                "text": "FSA (Flexible Savings Account)",
                "textStyle": {},
                "top": "293dp",
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
            var LoyaltyPointLabel = new voltmx.ui.Label({
                "id": "LoyaltyPointLabel",
                "isVisible": true,
                "left": "67dp",
                "skin": "CopydefLabel0hc7ee27a3c574b",
                "text": "Loyalty Points (0 points available)",
                "textStyle": {},
                "top": "345dp",
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
            var AfterPayLabel = new voltmx.ui.Label({
                "id": "AfterPayLabel",
                "isVisible": true,
                "left": "164dp",
                "skin": "CopydefLabel0f953a685fb3445",
                "text": "Afterpay - 4 interest-free payments",
                "textStyle": {},
                "top": "390dp",
                "width": "156dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var MasterCardImg = new voltmx.ui.Image2({
                "height": "37dp",
                "id": "MasterCardImg",
                "isVisible": true,
                "left": "220dp",
                "skin": "slImage",
                "src": "mastercardimg.png",
                "top": "442dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var AmexImg = new voltmx.ui.Image2({
                "height": "42dp",
                "id": "AmexImg",
                "isVisible": true,
                "left": "263dp",
                "skin": "slImage",
                "src": "ameximg.png",
                "top": "440dp",
                "width": "38dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CreditDebitLabel = new voltmx.ui.Label({
                "id": "CreditDebitLabel",
                "isVisible": true,
                "left": "65dp",
                "skin": "CopydefLabel0ja7165eb95ce45",
                "text": "Credit/Debit Card",
                "textStyle": {},
                "top": "443dp",
                "width": "85dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ApplePayDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "ApplePayDynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0eb5f6cee1c904f",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ApplePayDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ApplePayBtnImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "ApplePayBtnImg",
                "isVisible": true,
                "left": "66dp",
                "skin": "slImage",
                "src": "applepayicon.jpg",
                "top": "16dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayWithApplePayLabel = new voltmx.ui.Label({
                "id": "PayWithApplePayLabel",
                "isVisible": true,
                "left": "137dp",
                "skin": "CopydefLabel0j6bb2ff720d243",
                "text": "Pay with Apple Pay",
                "textStyle": {},
                "top": "8dp",
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
            ApplePayDynamicCheckoutCtn.add(ApplePayBtnImg, PayWithApplePayLabel);
            var GooglePayDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "GooglePayDynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "81dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c1b8cf8c9a5e49",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            GooglePayDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var GooglePayBtnImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "GooglePayBtnImg",
                "isVisible": true,
                "left": "53dp",
                "skin": "slImage",
                "src": "googlepayimg.png",
                "top": "4dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayWithGooglePayLabel = new voltmx.ui.Label({
                "id": "PayWithGooglePayLabel",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopydefLabel0b5ad45252a1547",
                "text": "Pay with Google Pay",
                "textStyle": {},
                "top": "8dp",
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
            GooglePayDynamicCheckoutCtn.add(GooglePayBtnImg, PayWithGooglePayLabel);
            var HSADynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "HSADynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "12dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b83c200512354e",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            HSADynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ContinueWithHSALabel = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "ContinueWithHSALabel",
                "isVisible": true,
                "skin": "CopydefLabel0acaa9622b75643",
                "text": "Continue with HSA",
                "textStyle": {},
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
            HSADynamicCheckoutCtn.add(ContinueWithHSALabel);
            var FSADynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "FSADynamicCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "13dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h25f0f3b7c2c4e",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FSADynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var ContinueWithFSACtn = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "ContinueWithFSACtn",
                "isVisible": true,
                "skin": "CopydefLabel0h7caa92a115447",
                "text": "Continue with FSA",
                "textStyle": {},
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
            FSADynamicCheckoutCtn.add(ContinueWithFSACtn);
            var PayPalDynamicCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "115dp",
                "id": "PayPalDynamicCheckoutCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayPalDynamicCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var PayPalBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "40dp",
                "id": "PayPalBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c261b513530a45",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayPalBtn.setDefaultUnit(voltmx.flex.DP);
            var PayPalButtonImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "PayPalButtonImg",
                "isVisible": true,
                "left": "115dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "-1dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PayPalBtn.add(PayPalButtonImg);
            var CreditDebitBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "40dp",
                "id": "CreditDebitBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea,
                "skin": "CopyslFbox0d9cc4e7b492942",
                "top": "53dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreditDebitBtn.setDefaultUnit(voltmx.flex.DP);
            var WhiteCardImg = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "23dp",
                "id": "WhiteCardImg",
                "isVisible": true,
                "left": "60dp",
                "skin": "slImage",
                "src": "cardimg.png",
                "top": "7dp",
                "width": "37dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var DebitOrCreditCardLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "DebitOrCreditCardLabel",
                "isVisible": true,
                "left": "100dp",
                "right": "47dp",
                "skin": "CopydefLabel0da674c7a01e54d",
                "text": "Debit or Credit Card",
                "textStyle": {},
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
            CreditDebitBtn.add(WhiteCardImg, DebitOrCreditCardLabel);
            var PowerByPayPalCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "id": "PowerByPayPalCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "87dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PowerByPayPalCtn.setDefaultUnit(voltmx.flex.DP);
            var PoweredByLabel = new voltmx.ui.Label({
                "id": "PoweredByLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0jd0dbb78009c4f",
                "text": "Powered by",
                "textStyle": {},
                "top": "0dp",
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
            var PoweredByImg = new voltmx.ui.Image2({
                "height": "17dp",
                "id": "PoweredByImg",
                "isVisible": true,
                "right": "0",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "0dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PowerByPayPalCtn.add(PoweredByLabel, PoweredByImg);
            var CreditCardInfoCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "977dp",
                "id": "CreditCardInfoCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c9f12273f0ac49",
                "top": "127dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreditCardInfoCtn.setDefaultUnit(voltmx.flex.DP);
            var CreditCardInfoCloseBtn = new voltmx.ui.Label({
                "id": "CreditCardInfoCloseBtn",
                "isVisible": true,
                "onTouchStart": controller.AS_Label_f477a0b0bc874c84a99126cbc4ba2978,
                "right": "0",
                "skin": "defLabel",
                "text": "X",
                "textStyle": {},
                "top": "0dp",
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
            var CheckoutCardNumberInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCardNumberInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Card Number",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutExpiresInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.06%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutExpiresInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Expires",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "100dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCSCInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.13%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCSCInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "CSC",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddressCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "507dp",
                "id": "BillingAddressCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h8d721e5e7ae46",
                "top": "203dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            BillingAddressCtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutFirstNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "First Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "53dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutLastNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Last Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "103dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine1Input = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine1Input",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 1",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "153dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine2Input = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine2Input",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 2",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "203dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCityInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "City / Town /Village",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "253dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutRegionInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutRegionInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "State / Provice / Region",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "303dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutPostalCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPostalCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Postal Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "353dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutMobileInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutMobileInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Mobile",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "403dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutEmailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Email",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "453dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddress = new voltmx.ui.Label({
                "centerX": "22.07%",
                "id": "BillingAddress",
                "isVisible": true,
                "skin": "CopydefLabel0c91e23aa79db48",
                "text": "Billing address",
                "textStyle": {},
                "top": "6dp",
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
            var CheckoutCountryDropList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27dp",
                "id": "CheckoutCountryDropList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0e54a6a07aaf646",
                "top": "6dp",
                "width": "15.22%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList.setDefaultUnit(voltmx.flex.DP);
            var CountryFlagImg = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CountryFlagImg",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "usaflagimg.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CountryListDropDownIcon = new voltmx.ui.Image2({
                "centerX": "95.46%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "CountryListDropDownIcon",
                "isVisible": true,
                "left": "70dp",
                "skin": "slImage",
                "src": "listboxarw.png",
                "top": "-3dp",
                "width": "9dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList.add(CountryFlagImg, CountryListDropDownIcon);
            BillingAddressCtn.add(CheckoutFirstNameInput, CheckoutLastNameInput, CheckoutAddressLine1Input, CheckoutAddressLine2Input, CheckoutCityInput, CheckoutRegionInput, CheckoutPostalCodeInput, CheckoutMobileInput, CheckoutEmailInput, BillingAddress, CheckoutCountryDropList);
            var ShippingAddressCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.11%",
                "clipBounds": false,
                "height": "507dp",
                "id": "ShippingAddressCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h8d721e5e7ae46",
                "top": "778dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingAddressCtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutFirstNameInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "First Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "53dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutLastNameInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Last Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "103dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine1Shipping = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine1Shipping",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 1",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "153dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutAddressLine2Shipping = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressLine2Shipping",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Address Line 2",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "203dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutCityInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "City / Town /Village",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "253dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutRegionInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutRegionInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "State / Provice / Region",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "303dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutPostalCodeInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPostalCodeInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Postal Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "353dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutMobileInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutMobileInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Mobile",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "403dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var CheckoutEmailInput2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "7dp",
                "placeholder": "Email",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0da2f0a56c91c46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "453dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var BillingAddress2 = new voltmx.ui.Label({
                "centerX": "25.98%",
                "id": "BillingAddress2",
                "isVisible": true,
                "skin": "CopydefLabel0c91e23aa79db48",
                "text": "Shipping address",
                "textStyle": {},
                "top": "6dp",
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
            var CheckoutCountryDropList2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27dp",
                "id": "CheckoutCountryDropList2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0e54a6a07aaf646",
                "top": "6dp",
                "width": "15.22%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList2.setDefaultUnit(voltmx.flex.DP);
            var CountryFlagImg2 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CountryFlagImg2",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "usaflagimg.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CountryListDropDownIcon2 = new voltmx.ui.Image2({
                "centerX": "95.46%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "CountryListDropDownIcon2",
                "isVisible": true,
                "left": "70dp",
                "skin": "slImage",
                "src": "listboxarw.png",
                "top": "-3dp",
                "width": "9dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CheckoutCountryDropList2.add(CountryFlagImg2, CountryListDropDownIcon2);
            ShippingAddressCtn.add(CheckoutFirstNameInput2, CheckoutLastNameInput2, CheckoutAddressLine1Shipping, CheckoutAddressLine2Shipping, CheckoutCityInput2, CheckoutRegionInput2, CheckoutPostalCodeInput2, CheckoutMobileInput2, CheckoutEmailInput2, BillingAddress2, CheckoutCountryDropList2);
            var ShipToBillingAddressCheckbox = new voltmx.ui.CheckBoxGroup({
                "height": "47dp",
                "id": "ShipToBillingAddressCheckbox",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["1", "Ship to billing address"]
                ],
                "onSelection": controller.AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c,
                "skin": "slCheckBoxGroup",
                "top": "731dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PayContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "197dp",
                "id": "PayContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f4f8ae01fd184f",
                "top": "770dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayContainer.setDefaultUnit(voltmx.flex.DP);
            var CheckoutPayBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "27dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "40dp",
                "id": "CheckoutPayBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66,
                "skin": "CopyslFbox0af13a89140874d",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutPayBtn.setDefaultUnit(voltmx.flex.DP);
            var CheckoutPayLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "centerY": "49.72%",
                "id": "CheckoutPayLabel",
                "isVisible": true,
                "skin": "CopydefLabel0b7fb471f60e24d",
                "text": "Label",
                "textStyle": {},
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
            CheckoutPayBtn.add(CheckoutPayLabel);
            var PayCtnPowerByPayPalCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "3dp",
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "PayCtnPowerByPayPalCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "89dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "170dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayCtnPowerByPayPalCtn.setDefaultUnit(voltmx.flex.DP);
            var CopyPoweredByLabel0e1efed884abd4c = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopyPoweredByLabel0e1efed884abd4c",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0jd0dbb78009c4f",
                "text": "Powered by",
                "textStyle": {},
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
            var CopyPoweredByImg0ba00abc3c5d44c = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "CopyPoweredByImg0ba00abc3c5d44c",
                "isVisible": true,
                "right": "-7dp",
                "skin": "slImage",
                "src": "paypalimg.png",
                "top": "-9dp",
                "width": "63dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PayCtnPowerByPayPalCtn.add(CopyPoweredByLabel0e1efed884abd4c, CopyPoweredByImg0ba00abc3c5d44c);
            var AcknowledgeLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "AcknowledgeLabel",
                "isVisible": true,
                "left": "63dp",
                "skin": "CopydefLabel0a82ec4dd3d1240",
                "text": "You acknowledge the terms of the service PayPal provides to the seller, and agree to the privacy statement. No PayPal account required.",
                "textStyle": {},
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            PayContainer.add(CheckoutPayBtn, PayCtnPowerByPayPalCtn, AcknowledgeLabel);
            CreditCardInfoCtn.add(CreditCardInfoCloseBtn, CheckoutCardNumberInput, CheckoutExpiresInput, CheckoutCSCInput, BillingAddressCtn, ShippingAddressCtn, ShipToBillingAddressCheckbox, PayContainer);
            PayPalDynamicCheckoutCtn.add(PayPalBtn, CreditDebitBtn, PowerByPayPalCtn, CreditCardInfoCtn);
            var LoyaltyPointCheckoutCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "184dp",
                "id": "LoyaltyPointCheckoutCtn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f605e2f7e58541",
                "top": "497dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            LoyaltyPointCheckoutCtn.setDefaultUnit(voltmx.flex.DP);
            var LoyaltyPointInfoCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "77dp",
                "id": "LoyaltyPointInfoCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9b06f9c765544",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            LoyaltyPointInfoCtn.setDefaultUnit(voltmx.flex.DP);
            var YourLPLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "YourLPLabel",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0dad5e82a435048",
                "text": "Your Loyalty Points: 0",
                "textStyle": {},
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PointRequireLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "PointRequireLabel",
                "isVisible": true,
                "left": "53dp",
                "skin": "CopydefLabel0fcdf46eee3f642",
                "text": "Points Required: 819",
                "textStyle": {},
                "top": "39dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            LoyaltyPointInfoCtn.add(YourLPLabel, PointRequireLabel);
            var InsufficentPointsLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "InsufficentPointsLabel",
                "isVisible": true,
                "left": "33dp",
                "skin": "CopydefLabel0dc9fc20b486b4b",
                "text": "Insufficient points. You need 819 more points.",
                "textStyle": {},
                "top": "89dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var PayWithLoyaltyPointBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "PayWithLoyaltyPointBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c0c4acf930c94a",
                "top": "144dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            PayWithLoyaltyPointBtn.setDefaultUnit(voltmx.flex.DP);
            var Label0eb0fd313b1fe44 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0eb0fd313b1fe44",
                "isVisible": true,
                "skin": "CopydefLabel0e4da38eaf00c4b",
                "text": "Pay with Loytalty Points",
                "textStyle": {},
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
            PayWithLoyaltyPointBtn.add(Label0eb0fd313b1fe44);
            LoyaltyPointCheckoutCtn.add(LoyaltyPointInfoCtn, InsufficentPointsLabel, PayWithLoyaltyPointBtn);
            PaymentDetailContainer.add(PaymentDetailLabel, PayPalRadioBtn, ApplePayRadioBtn, GooglePayRadioBtn, HSARadioBtn, FSARadioBtn, LoyaltyPtnRadioBtn, AfterPayRadioBtn, CreditDebitRadioBtn, PayPalImg, ApplePayImg, GooglePayImg, ClearPayImg, VisaImg, ApplePayLabel, GooglePayLabel, HSALabel, FSALLabel, LoyaltyPointLabel, AfterPayLabel, MasterCardImg, AmexImg, CreditDebitLabel, ApplePayDynamicCheckoutCtn, GooglePayDynamicCheckoutCtn, HSADynamicCheckoutCtn, FSADynamicCheckoutCtn, PayPalDynamicCheckoutCtn, LoyaltyPointCheckoutCtn);
            SelectPaymentMethodContainer.add(SelectPaymentMethodLabel, PaymentDetailContainer);
            var OrderSummary = new Carousel.OrderSummary({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "356dp",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "873dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50%",
                        "top": "873dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(ProgressBar, SelectPaymentMethodContainer, OrderSummary);
        };
        return [{
            "addWidgets": addWidgetsCheckoutPaymentMethod,
            "enabledForIdleTimeout": false,
            "id": "CheckoutPaymentMethod",
            "init": controller.AS_Form_b854374401be4dce81eef98afbc6b284,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ge19a82ccf184a5393e637808b9a75cb,
            "skin": "CopyslForm0cba030fe38a749",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "eae0974787e143e8acb5bb70f9da40ab"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});