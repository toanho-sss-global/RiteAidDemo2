define("CheckoutAddress", function() {
    return function(controller) {
        function addWidgetsCheckoutAddress() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ShippingDetailsLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ShippingDetailsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopydefLabel0c8d3b8bfca234b",
                "text": "1. Shipping Details",
                "textStyle": {},
                "top": "120dp",
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
                        "centerX": "50%",
                        "width": "1096px"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CheckoutFIrstNameLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutFIrstNameLabel",
                "isVisible": true,
                "left": "32dp",
                "onTouchStart": controller.AS_Label_e673e6d6d1384b80bdbc00576e52a57d,
                "skin": "CopydefLabel0c0b0f04da4a04b",
                "text": "First Name",
                "textStyle": {},
                "top": "189dp",
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
            var CheckoutFirstNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutFirstNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "onTextChange": controller.AS_TextField_fc8f24616d1248db85c523a72e177b26,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d343d588bda647",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "221dp",
                "width": "90%",
                "zIndex": 1,
                "enableHapticFeedback": false
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
            var CheckoutLastNameLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutLastNameLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0ca069beaf1fa4e",
                "text": "Last Name",
                "textStyle": {},
                "top": "285dp",
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
            var CheckoutLastNameInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutLastNameInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "onTextChange": controller.AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c,
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0df1aa50e904b4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "318dp",
                "width": "90%",
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
            var CheckoutCompanyLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutCompanyLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0b6e721f6ee0142",
                "text": "Add Company Name (Optional)+",
                "textStyle": {},
                "top": "388dp",
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
            var CheckoutCompanyInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCompanyInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0f00c9376174a4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "424dp",
                "width": "90%",
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
            var CheckoutAddressLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutAddressLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0d2e1657ff67b47",
                "text": "Street Address",
                "textStyle": {},
                "top": "498dp",
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
            var CheckoutAddressInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0a74c1794125348",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "531dp",
                "width": "90%",
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
            var CheckoutAddessDetailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutAddessDetailLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0j1251d5f7b9f41",
                "text": "Add Apt/Suite/Floor (Optional)+",
                "textStyle": {},
                "top": "611dp",
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
            var CheckoutAddressDetailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutAddressDetailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0j6bfbb8767c64a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "644dp",
                "width": "90%",
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
            var CheckoutZipCodeLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutZipCodeLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0d564b14070114a",
                "text": "Zip Code",
                "textStyle": {},
                "top": "718dp",
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
            var CheckoutZipCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutZipCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0h336216f77ab47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "751dp",
                "width": "90%",
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
            var CheckoutCityLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutCityLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0h7f6b7ac202d44",
                "text": "City",
                "textStyle": {},
                "top": "828dp",
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
            var CheckoutCityInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCityInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0b10fc8f9224b45",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "861dp",
                "width": "90%",
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
            var CheckoutStateLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutStateLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0f96f41a0233e4f",
                "text": "State",
                "textStyle": {},
                "top": "934dp",
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
            var CheckoutStateInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutStateInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "32dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ba02eadc2eff42",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "964dp",
                "width": "90%",
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
            var CheckoutEmailLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CheckoutEmailLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0j192c6800f5d44",
                "text": "Email Address",
                "textStyle": {},
                "top": "1038dp",
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
            var CheckoutEmailInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutEmailInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0a1a79f20956543",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1068dp",
                "width": "90%",
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
            var ChekoutPhoneLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ChekoutPhoneLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0i9e81a3a066148",
                "text": "Phone Number",
                "textStyle": {},
                "top": "1141dp",
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
            var CheckoutCountryCodeLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "CheckoutCountryCodeLabel",
                "isVisible": true,
                "left": "32dp",
                "skin": "CopydefLabel0i9e81a3a066148",
                "text": "Country Code",
                "textStyle": {},
                "top": "1243dp",
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
            var CheckoutPhoneInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutPhoneInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d6bea144eafe4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1171dp",
                "width": "90%",
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
            var CheckoutCountryCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CheckoutCountryCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d6bea144eafe4a",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1277dp",
                "width": "90%",
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
            var CheckoutColorBlock = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.16%",
                "clipBounds": false,
                "height": "50dp",
                "id": "CheckoutColorBlock",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1d2855ee7d348",
                "top": "1359dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutColorBlock.setDefaultUnit(voltmx.flex.DP);
            CheckoutColorBlock.add();
            var CheckoutContinueButton = new voltmx.ui.Button({
                "centerX": "50.16%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "CheckoutContinueButton",
                "isVisible": true,
                "left": "21dp",
                "onClick": controller.AS_Button_g2d635f049804bbabdf0f9c59fabfb0d,
                "skin": "CopydefBtnNormal0i0944cb0c6ae46",
                "text": "Continue",
                "top": "1439dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var OrderSummary = new Carousel.OrderSummary({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.16%",
                "height": "43.31%",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "1534dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50.16%",
                        "height": "43.31%",
                        "top": "1534dp"
                    },
                    "OrderSummaryItemList": {
                        "data": [{
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }, {
                            "OrderSummaryItemImg": "cartproductimg.png",
                            "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                            "OrderSummaryProductPrice": "$16.79",
                            "OrderSummaryProductQty": "Label"
                        }]
                    },
                    "OrderSummaryLabel": {
                        "centerX": "50%",
                        "top": "13dp"
                    },
                    "ShipToAddressLabel": {
                        "left": "19dp",
                        "top": "177dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FullNameConverter = new voltmx.ui.Label({
                "id": "FullNameConverter",
                "isVisible": false,
                "left": "104dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {},
                "top": "1371dp",
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
            this.add(ShippingDetailsLabel, ProgressBar, CheckoutFIrstNameLabel, CheckoutFirstNameInput, CheckoutLastNameLabel, CheckoutLastNameInput, CheckoutCompanyLabel, CheckoutCompanyInput, CheckoutAddressLabel, CheckoutAddressInput, CheckoutAddessDetailLabel, CheckoutAddressDetailInput, CheckoutZipCodeLabel, CheckoutZipCodeInput, CheckoutCityLabel, CheckoutCityInput, CheckoutStateLabel, CheckoutStateInput, CheckoutEmailLabel, CheckoutEmailInput, ChekoutPhoneLabel, CheckoutCountryCodeLabel, CheckoutPhoneInput, CheckoutCountryCodeInput, CheckoutColorBlock, CheckoutContinueButton, OrderSummary, FullNameConverter);
        };
        return [{
            "addWidgets": addWidgetsCheckoutAddress,
            "enabledForIdleTimeout": false,
            "id": "CheckoutAddress",
            "init": controller.AS_Form_e65583c028c94c1f81be330e3ae684cd,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0b78efbf101814f",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "a0f2ba1a2db44238ae888c9c0e565544"
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