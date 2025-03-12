define("CheckoutSuccessful", function() {
    return function(controller) {
        function addWidgetsCheckoutSuccessful() {
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
                        "centerX": "50%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var Payment = new Popup.Payment({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "40.63%",
                "height": "400dp",
                "id": "Payment",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknPayment",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "Payment": {
                        "centerX": "50%",
                        "centerY": "40.63%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            Payment.btnGoBack.onClick = controller.AS_Button_hbc403d7f60142d6a4d9a4cef79615e6;
            this.add(ProgressBar, Payment);
        };
        return [{
            "addWidgets": addWidgetsCheckoutSuccessful,
            "enabledForIdleTimeout": false,
            "id": "CheckoutSuccessful",
            "init": controller.AS_Form_c8b711fcac4b4f44b6bc6665c15ef520,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "h13ce12c6abc4ef5b29fd2db7380a4fe"
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