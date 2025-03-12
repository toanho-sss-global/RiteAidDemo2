define("PopupAddProduct", function() {
    return function(controller) {
        function addWidgetsPopupAddProduct() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FlexContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer.setDefaultUnit(voltmx.flex.DP);
            var BtnAdd = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "BtnAdd",
                "isVisible": true,
                "left": "50dp",
                "onClick": controller.AS_Button_bf2af23d1c3043a8b15a0e7559301c56,
                "skin": "defBtnNormal",
                "text": "Button",
                "top": "257dp",
                "width": "300dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FCPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FCPopup",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FCPopup.setDefaultUnit(voltmx.flex.DP);
            var AddProduct = new Popup.AddProduct({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "AddProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "8%",
                "skin": "sknAddProduct",
                "top": "10%",
                "width": "45%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "AddProduct": {
                        "right": "8%",
                        "top": "10%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FCPopup.add(AddProduct);
            var FooterDemo = new RiteAidFooter.FooterDemo({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "200%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFooterDemo",
                "top": "42%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "FooterDemo": {
                        "top": "42%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer.add(BtnAdd, FCPopup, FooterDemo);
            this.add(FlexContainer);
        };
        return [{
            "addWidgets": addWidgetsPopupAddProduct,
            "enabledForIdleTimeout": false,
            "id": "PopupAddProduct",
            "init": controller.AS_Form_e6663594279c467ba18a65eb3a2e03b2,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "hc5cc89bbeaa4a1399d909c75b40af06"
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