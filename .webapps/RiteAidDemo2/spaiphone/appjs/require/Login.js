define("Login", function() {
    return function(controller) {
        function addWidgetsLogin() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerLogin = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "FlexContainerLogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.setDefaultUnit(voltmx.flex.DP);
            var labelEmail = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "labelEmail",
                "isVisible": true,
                "skin": "defLabel",
                "text": "Email address*",
                "textStyle": {},
                "top": "30%",
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
            var txtBoxEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "txtBoxEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "email@address.com",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "37%",
                "width": "300dp",
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
            var txtBoxPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "5%",
                "id": "txtBoxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter your password",
                "secureTextEntry": true,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "52%",
                "width": "300dp",
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
            var labelPassword = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "labelPassword",
                "isVisible": true,
                "skin": "defLabel",
                "text": "Password*",
                "textStyle": {},
                "top": "45%",
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
            var checkBoxRmPassword = new voltmx.ui.CheckBoxGroup({
                "centerX": "50%",
                "height": "3%",
                "id": "checkBoxRmPassword",
                "isVisible": true,
                "masterData": [
                    ["RememberPassword", "Remember me"]
                ],
                "selectedKeys": ["RememberPassword"],
                "skin": "CopyslCheckBoxGroup0e0b4c61f11ef4c",
                "top": "60%",
                "width": 300,
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLogin = new voltmx.ui.Button({
                "centerX": "49%",
                "focusSkin": "defBtnFocus",
                "height": "5%",
                "id": "btnLogin",
                "isVisible": true,
                "left": "49dp",
                "onClick": controller.AS_Button_af92b84ed3e44c09b40c672ecfc740c0,
                "skin": "CopydefBtnNormal0j3fac624bb2944",
                "text": "Log in",
                "top": "65%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.add(labelEmail, txtBoxEmail, txtBoxPassword, labelPassword, checkBoxRmPassword, btnLogin);
            this.add(FlexContainerLogin);
        };
        return [{
            "addWidgets": addWidgetsLogin,
            "enabledForIdleTimeout": false,
            "id": "Login",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "fe24c9db0b3843b8b65fb7f139c8b005"
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