define("ShoppingCart", function() {
    return function(controller) {
        function addWidgetsShoppingCart() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ShoppingCartHeader = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ShoppingCartHeader",
                "isVisible": true,
                "skin": "CopydefLabel0f7d1000ef1394d",
                "text": "Shopping Cart",
                "textStyle": {},
                "top": "37dp",
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
            var CheckoutAndPromoteContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "693dp",
                "id": "CheckoutAndPromoteContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "347dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CheckoutAndPromoteContainer.setDefaultUnit(voltmx.flex.DP);
            var ProcessToCheckoutBtn = new voltmx.ui.FlexContainer({
                "centerX": "50.08%",
                "clipBounds": true,
                "height": "60dp",
                "id": "ProcessToCheckoutBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a8422f35ddd346",
                "top": "310dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.setDefaultUnit(voltmx.flex.DP);
            var ProceedToCheckoutBtn = new voltmx.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ProceedToCheckoutBtn",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_f23d0190875342bc9f3e99910c207e85,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Proceed to Checkout",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ProcessToCheckoutBtn.add(ProceedToCheckoutBtn);
            var RiteAidRewardsBtn = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "RiteAidRewardsBtn",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopydefBtnNormal0a3af852624ba40",
                "text": "Rite Aid Rewards",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInLabel = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "SignInLabel",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "defRichTextLink",
                "skin": "defRichTextNormal",
                "text": "Sign in to earn/redeem BonusCash and clipped coupons.",
                "top": "90dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SignInBtnCOntainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "SignInBtnCOntainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0jdc530d1e72050",
                "top": "233dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.setDefaultUnit(voltmx.flex.DP);
            var SignInBtn = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "SignInBtn",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Sign In",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            SignInBtnCOntainer.add(SignInBtn);
            var SubTotalContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "47dp",
                "id": "SubTotalContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "380dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SubTotalContainer.setDefaultUnit(voltmx.flex.DP);
            var SubtotalLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "SubtotalLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0ea921d41b8a943",
                "text": "Subtotal (1 Items)",
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
            var PriceLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "PriceLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0d8702333e2ff48",
                "text": "$7.19",
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
            SubTotalContainer.add(SubtotalLabel, PriceLabel);
            var TaxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "clipBounds": false,
                "height": "47dp",
                "id": "TaxContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b4e7c1ce4f2147",
                "top": "427dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            TaxContainer.setDefaultUnit(voltmx.flex.DP);
            var TaxLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0becfaea1d7da4c",
                "text": "Tax",
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
            var TaxAmountLabel = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "TaxAmountLabel",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopydefLabel0f9596e9ea3544a",
                "text": "10%",
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
            TaxContainer.add(TaxLabel, TaxAmountLabel);
            var ApplyPomoteCodeLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "ApplyPomoteCodeLabel",
                "isVisible": true,
                "left": "19dp",
                "skin": "CopydefLabel0h0e12740d0ab4a",
                "text": "Apply Promote Code",
                "textStyle": {},
                "top": "495dp",
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
            var PromoteCodeInput = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "PromoteCodeInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "19dp",
                "placeholder": "Promo Code",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0f2a0c9d31f3a42",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "537dp",
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
            var DonateCheckbox = new voltmx.ui.CheckBoxGroup({
                "centerX": "50.00%",
                "height": "40dp",
                "id": "DonateCheckbox",
                "isVisible": true,
                "left": "20dp",
                "masterData": [
                    ["cbg1", "Donate My Change to KidCents"]
                ],
                "skin": "CopyslCheckBoxGroup0a94c6bfd5a364f",
                "top": "597dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var EstContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.09%",
                "clipBounds": false,
                "height": "40dp",
                "id": "EstContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "643dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            EstContainer.setDefaultUnit(voltmx.flex.DP);
            var EstLabel = new voltmx.ui.Label({
                "id": "EstLabel",
                "isVisible": true,
                "left": "0",
                "skin": "defLabel",
                "text": "Est. Total",
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
            var EstAmount = new voltmx.ui.Label({
                "id": "EstAmount",
                "isVisible": true,
                "right": "0",
                "skin": "defLabel",
                "text": "$8.19",
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
            EstContainer.add(EstLabel, EstAmount);
            var CreateAccountButtonContainer = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "CreateAccountButtonContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0jc7016e74ec242",
                "top": "160dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.setDefaultUnit(voltmx.flex.DP);
            var ButtonRound = new voltmx.ui.Button({
                "bottom": "5dp",
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonSkinActive",
                "height": "100%",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "Copys0cae82086dc2e49",
                "text": "Create Account",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CreateAccountButtonContainer.add(ButtonRound);
            CheckoutAndPromoteContainer.add(ProcessToCheckoutBtn, RiteAidRewardsBtn, SignInLabel, SignInBtnCOntainer, SubTotalContainer, TaxContainer, ApplyPomoteCodeLabel, PromoteCodeInput, DonateCheckbox, EstContainer, CreateAccountButtonContainer);
            var RecommendedLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "RecommendedLabel",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopydefLabel0af92cc635be54f",
                "text": "Recommended for You",
                "textStyle": {},
                "top": "1070dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var ProductListCarousel = new Carousel.ProductListCarousel({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "280dp",
                "id": "ProductListCarousel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1143dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProductListCarousel": {
                        "height": "280dp",
                        "left": "0dp",
                        "top": "1143dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CartProductList = new ListView.CartProductList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.28%",
                "height": "200dp",
                "id": "CartProductList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox3",
                "top": "120dp",
                "width": "100%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "CartProductList": {
                        "centerX": "50.28%",
                        "height": "200dp",
                        "left": "1dp",
                        "top": "120dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(ShoppingCartHeader, CheckoutAndPromoteContainer, RecommendedLabel, ProductListCarousel, CartProductList);
        };
        return [{
            "addWidgets": addWidgetsShoppingCart,
            "enabledForIdleTimeout": false,
            "id": "ShoppingCart",
            "init": controller.AS_Form_bfff2beaea934b99a589bf3185308ed2,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h5482255e0214ce98ca8088ba317e43b(eventobject);
            },
            "skin": "CopyslForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "c6939cf809d44ca982d87fb479d42f13"
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