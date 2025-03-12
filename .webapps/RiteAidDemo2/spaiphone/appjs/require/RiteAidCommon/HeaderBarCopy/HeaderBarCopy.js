define(function() {
    return function(controller) {
        var HeaderBarCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "50dp",
            "id": "HeaderBarCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "HeaderBarCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderBarCopy"), extendConfig({}, controller.args[2], "HeaderBarCopy"));
        HeaderBarCopy.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "45%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "leftHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "leftHeaderGroup"), extendConfig({}, controller.args[2], "leftHeaderGroup"));
        leftHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var menu = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "menu",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onMenuClicked_ua7e40d664e14566b3383c36bc052f0e,
            "skin": "CopyslImage2",
            "src": "grey_menu_1.png",
            "top": "18dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "menu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "menu"), extendConfig({}, controller.args[2], "menu"));
        var logo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_onLogoClicked_u1f0f4d95dc04a6e956cdefd3d064014,
            "skin": "CopyslImage2",
            "src": "rite_aid_logo_1.png",
            "top": "1dp",
            "width": "66dp",
            "zIndex": 1
        }, controller.args[0], "logo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo"), extendConfig({}, controller.args[2], "logo"));
        var logo2 = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "logo2",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage2",
            "src": "logo_2_1.png",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "logo2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "logo2"), extendConfig({}, controller.args[2], "logo2"));
        leftHeaderGroup.add(menu, logo, logo2);
        var rightHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "rightHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "rightHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "rightHeaderGroup"), extendConfig({}, controller.args[2], "rightHeaderGroup"));
        rightHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "cartHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onCartClicked_u2747f98edbc4e1197892fe71abe649f,
            "right": "0dp",
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": 30,
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "cartHeaderGroup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderGroup"), extendConfig({}, controller.args[2], "cartHeaderGroup"));
        cartHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "cartHeaderImg",
            "isVisible": true,
            "left": "2dp",
            "skin": "CopyslImage2",
            "src": "grey_cart_icon_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "cartHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartHeaderImg"), extendConfig({}, controller.args[2], "cartHeaderImg"));
        var cartBadgeCount = new voltmx.ui.Label(extendConfig({
            "height": "10dp",
            "id": "cartBadgeCount",
            "isVisible": true,
            "right": "0",
            "skin": "CopycartBadgeCountStyle",
            "text": "0",
            "textStyle": {},
            "top": "10dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "cartBadgeCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "cartBadgeCount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "cartBadgeCount"));
        cartHeaderGroup.add(cartHeaderImg, cartBadgeCount);
        var userHeaderImg = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "userHeaderImg",
            "isVisible": true,
            "onTouchStart": controller.AS_onUserClicked_u012607882ed4ff786d904291d44835f,
            "right": "0dp",
            "skin": "CopyslImage2",
            "src": "grey_user_icon_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "userHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "userHeaderImg"), extendConfig({}, controller.args[2], "userHeaderImg"));
        rightHeaderGroup.add(cartHeaderGroup, userHeaderImg);
        HeaderBarCopy.add(leftHeaderGroup, rightHeaderGroup);
        return HeaderBarCopy;
    }
})