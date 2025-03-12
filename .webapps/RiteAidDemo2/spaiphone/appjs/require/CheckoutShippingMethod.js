define("CheckoutShippingMethod", function() {
    return function(controller) {
        function addWidgetsCheckoutShippingMethod() {
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
            var CheckoutShippingMethodContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "717dp",
                "id": "CheckoutShippingMethodContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c3ee750914354f",
                "top": "143dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutShippingMethodContainer.setDefaultUnit(voltmx.flex.DP);
            var SelectShippingModeContainer = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "SelectShippingModeContainer",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0a28dae36ead843",
                "text": "2. Select Shipping Mode",
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
            var ShippingModeContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "163dp",
                "id": "ShippingModeContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b9d55cab71a940",
                "top": "63dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingModeContainer.setDefaultUnit(voltmx.flex.DP);
            var ShippingDetailsLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "ShippingDetailsLabel",
                "isVisible": true,
                "left": "69dp",
                "skin": "CopydefLabel0j0e606a75e1e45",
                "text": "Shipping Details",
                "textStyle": {},
                "top": "17dp",
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
            var ShippingOptions = new voltmx.ui.RadioButtonGroup({
                "centerX": "50.00%",
                "height": "100dp",
                "id": "ShippingOptions",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["4", "Ship to my address"],
                    ["2", "Pick from Pharmacy"],
                    ["1", "Ship from Pharmacy"]
                ],
                "onSelection": controller.AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62,
                "selectedKey": "4",
                "skin": "CopyslRadioButtonGroup0c36c3965688548",
                "top": "60dp",
                "width": "90%",
                "zIndex": 1,
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ShippingModeContainer.add(ShippingDetailsLabel, ShippingOptions);
            var CheckoutShippingMethodContinueBtn = new voltmx.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "CheckoutShippingMethodContinueBtn",
                "isVisible": true,
                "left": "27dp",
                "onClick": controller.AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5,
                "skin": "CopydefBtnNormal0h7f60296abdf46",
                "text": "Continue",
                "top": "252dp",
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
                "centerX": "50%",
                "height": "356dp",
                "id": "OrderSummary",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f26e99be6f1040",
                "top": "337dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "OrderSummary": {
                        "centerX": "50%",
                        "top": "337dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CheckoutShippingMethodContainer.add(SelectShippingModeContainer, ShippingModeContainer, CheckoutShippingMethodContinueBtn, OrderSummary);
            var MapPopupDimScreen = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "MapPopupDimScreen",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90,
                "skin": "CopyslFbox0e112e75a317e42",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            MapPopupDimScreen.setDefaultUnit(voltmx.flex.DP);
            var MapContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "457dp",
                "id": "MapContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd,
                "skin": "CopyslFbox0b62c2eb3d8e84a",
                "top": "110dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            MapContainer.setDefaultUnit(voltmx.flex.DP);
            var map1 = new com.konymp.map1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "70%",
                "id": "map1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "90%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "map1": {
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "70%",
                        "left": "10dp",
                        "top": "10dp",
                        "width": "90%"
                    },
                    "mapLocations": {
                        "centerX": "viz.val_cleared",
                        "left": "0%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ChooseNearbyShopLabel = new voltmx.ui.Label({
                "id": "ChooseNearbyShopLabel",
                "isVisible": true,
                "right": "246dp",
                "skin": "CopydefLabel0efff489c21f24a",
                "text": "Choose Nearby Shop",
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
            var ContinueBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "30dp",
                "id": "ContinueBtn",
                "isVisible": true,
                "left": "188dp",
                "skin": "CopydefBtnNormal0ia9552fe739348",
                "text": "Continue",
                "top": "342dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CancelBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "30dp",
                "id": "CancelBtn",
                "isVisible": true,
                "left": "308dp",
                "onClick": controller.AS_Button_b18c9e749d9d489d8206a1a8e742e304,
                "skin": "CopydefBtnNormal0g38147245b2940",
                "text": "Cancel",
                "top": "341dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NoNearByTextContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.23%",
                "clipBounds": false,
                "height": "67dp",
                "id": "NoNearByTextContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g53c543749214d",
                "top": "382dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            NoNearByTextContainer.setDefaultUnit(voltmx.flex.DP);
            var Label0b4e1e804b62e4b = new voltmx.ui.Label({
                "id": "Label0b4e1e804b62e4b",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopydefLabel0ea11c24994a945",
                "text": "No nearby sellers for these cart items. Choose 'Ship to my address' to continue.",
                "textStyle": {},
                "top": "11dp",
                "width": "367dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            NoNearByTextContainer.add(Label0b4e1e804b62e4b);
            MapContainer.add(map1, ChooseNearbyShopLabel, ContinueBtn, CancelBtn, NoNearByTextContainer);
            MapPopupDimScreen.add(MapContainer);
            var ShippingConfirmationDImScreen = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "ShippingConfirmationDImScreen",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "117dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e,
                "skin": "CopyslFbox0a58db5a331884b",
                "top": "161dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingConfirmationDImScreen.setDefaultUnit(voltmx.flex.DP);
            var ShippingConfirmationCtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "197dp",
                "id": "ShippingConfirmationCtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b,
                "skin": "CopyslFbox0a3ccb36d241741",
                "top": "217dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ShippingConfirmationCtn.setDefaultUnit(voltmx.flex.DP);
            var SHippingConfirmationText = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "SHippingConfirmationText",
                "isVisible": true,
                "left": "64dp",
                "skin": "CopydefLabel0ff5e5bdc06fb4e",
                "text": "Is your shipping address the same as your current location?",
                "textStyle": {},
                "top": "56dp",
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
            var ShippingConfirmationLabel = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "ShippingConfirmationLabel",
                "isVisible": true,
                "skin": "CopydefLabel0aa6417129e0a40",
                "text": "Shipping Confirmation",
                "textStyle": {},
                "top": "13dp",
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
            var YesBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "YesBtn",
                "isVisible": true,
                "left": "95dp",
                "onClick": controller.AS_Button_aab5859389084d0eb37ed6914ef9b3c9,
                "skin": "CopydefBtnNormal0de15220c334f43",
                "text": "Yes",
                "top": "128dp",
                "width": "90dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var NoBtn = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "NoBtn",
                "isVisible": true,
                "left": "201dp",
                "onClick": controller.AS_Button_f808072056b94c02b6e04e9bd93edbc6,
                "skin": "CopydefBtnNormal0g4e4dfc0c5a343",
                "text": "No",
                "top": "128dp",
                "width": "90dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ShippingConfirmationCtn.add(SHippingConfirmationText, ShippingConfirmationLabel, YesBtn, NoBtn);
            ShippingConfirmationDImScreen.add(ShippingConfirmationCtn);
            this.add(ProgressBar, CheckoutShippingMethodContainer, MapPopupDimScreen, ShippingConfirmationDImScreen);
        };
        return [{
            "addWidgets": addWidgetsCheckoutShippingMethod,
            "enabledForIdleTimeout": false,
            "id": "CheckoutShippingMethod",
            "init": controller.AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_gd8632a162fa4fa28ccf42f542426a3a,
            "skin": "CopyslForm0ac7aa9d564f346",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "b17f76394c484295b64c306ec564fc4f"
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