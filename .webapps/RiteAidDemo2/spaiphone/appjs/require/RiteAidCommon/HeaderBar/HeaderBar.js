define(function() {
    return function(controller) {
        var HeaderBar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "50dp",
            "id": "HeaderBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "HeaderBar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderBar"), extendConfig({}, controller.args[2], "HeaderBar"));
        HeaderBar.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "onTouchStart": controller.AS_onMenuClicked_jeec49f4f1af422694cacfd34bc132ab,
            "skin": "slImage",
            "src": "grey_menu.png",
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
            "onTouchStart": controller.AS_onLogoClicked_b30e8cff55f54d98becdf63e346ab32c,
            "skin": "slImage",
            "src": "rite_aid_logo.png",
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
            "skin": "slImage",
            "src": "logo_2.png",
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
            "skin": "slFbox",
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
            "onClick": controller.AS_onCartClicked_b0b43c8f71f0486b9f6dd9d269ebc041,
            "right": "0dp",
            "skin": "slFbox",
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
            "skin": "slImage",
            "src": "grey_cart_icon.png",
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
            "skin": "cartBadgeCountStyle",
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
            "onTouchStart": controller.AS_Image_c8154b247778489bae1213639a65f0e3,
            "right": "0dp",
            "skin": "slImage",
            "src": "grey_user_icon.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "userHeaderImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "userHeaderImg"), extendConfig({}, controller.args[2], "userHeaderImg"));
        rightHeaderGroup.add(cartHeaderGroup, userHeaderImg);
        var ListInformation = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "0dp",
            "id": "ListInformation",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "91dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0a118b73ba0be4c",
            "top": "50dp",
            "width": "90%",
            "zIndex": 999,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ListInformation"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ListInformation"), extendConfig({}, controller.args[2], "ListInformation"));
        ListInformation.setDefaultUnit(voltmx.flex.DP);
        var FlxPharmacy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxPharmacy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c125989c693a46",
            "top": "0%",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxPharmacy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxPharmacy"), extendConfig({}, controller.args[2], "FlxPharmacy"));
        FlxPharmacy.setDefaultUnit(voltmx.flex.DP);
        var iconPharmacy = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "iconPharmacy",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__3_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "iconPharmacy"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconPharmacy"), extendConfig({}, controller.args[2], "iconPharmacy"));
        var lblPharmacy = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblPharmacy",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "Add Pharmacy Management",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblPharmacy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPharmacy"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblPharmacy"));
        var lbldesPharmacy = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesPharmacy",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlblbottom",
            "text": "Sign up to easily refill prescriptions",
            "textStyle": {},
            "top": "67%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesPharmacy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesPharmacy"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesPharmacy"));
        FlxPharmacy.add(iconPharmacy, lblPharmacy, lbldesPharmacy);
        var FlxAidPoint = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxAidPoint",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0j415cc665adf49",
            "top": "25%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxAidPoint"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxAidPoint"), extendConfig({}, controller.args[2], "FlxAidPoint"));
        FlxAidPoint.setDefaultUnit(voltmx.flex.DP);
        var iconAidPoint = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "iconAidPoint",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__4_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "iconAidPoint"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconAidPoint"), extendConfig({}, controller.args[2], "iconAidPoint"));
        var lblAidPoint = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblAidPoint",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "0 Rite Aid Points",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblAidPoint"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAidPoint"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblAidPoint"));
        var lbldesAidPoint = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesAidPoint",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlblbottom",
            "text": "$2.00 in BonusCash",
            "textStyle": {},
            "top": "67%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesAidPoint"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesAidPoint"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesAidPoint"));
        FlxAidPoint.add(iconAidPoint, lblAidPoint, lbldesAidPoint);
        var FlxAccount = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25%",
            "id": "FlxAccount",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dc18523182da45d482867fabc1e481a0,
            "skin": "CopyslFbox0c2535f45f02344",
            "top": "50%",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxAccount"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxAccount"), extendConfig({}, controller.args[2], "FlxAccount"));
        FlxAccount.setDefaultUnit(voltmx.flex.DP);
        var IconAccount = new voltmx.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "55%",
            "id": "IconAccount",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconAccount"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconAccount"), extendConfig({}, controller.args[2], "IconAccount"));
        var lblAccount = new voltmx.ui.Label(extendConfig({
            "height": "65%",
            "id": "lblAccount",
            "isVisible": true,
            "left": "20%",
            "skin": "skinlbltop",
            "text": "My Account",
            "textStyle": {},
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblAccount"));
        var lbldesAccount = new voltmx.ui.Label(extendConfig({
            "height": "30%",
            "id": "lbldesAccount",
            "isVisible": true,
            "left": "20.04%",
            "skin": "skinlblbottom",
            "text": "Manage your settings, preferences, & more",
            "textStyle": {},
            "top": "67.00%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lbldesAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbldesAccount"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lbldesAccount"));
        FlxAccount.add(IconAccount, lblAccount, lbldesAccount);
        var FlxSignOut = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "25%",
            "id": "FlxSignOut",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "94dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ef87036e0cc740f48a1cebb92b03d908,
            "skin": "CopyslFbox0aed83f48471848",
            "top": "75%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlxSignOut"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlxSignOut"), extendConfig({}, controller.args[2], "FlxSignOut"));
        FlxSignOut.setDefaultUnit(voltmx.flex.DP);
        var IconSignOut = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "55%",
            "id": "IconSignOut",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "svgviewer_png_output__5_.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconSignOut"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconSignOut"), extendConfig({}, controller.args[2], "IconSignOut"));
        var lblSignOut = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "centerY": "50.00%",
            "height": "50%",
            "id": "lblSignOut",
            "isVisible": true,
            "left": "20%",
            "skin": "CopydefLabel0b507b4c2b6da45",
            "text": "Sign Out",
            "textStyle": {},
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblSignOut"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSignOut"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblSignOut"));
        FlxSignOut.add(IconSignOut, lblSignOut);
        var span1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "0.50%",
            "id": "span1",
            "isVisible": true,
            "left": "147dp",
            "skin": "CopydefLabel0i48c5bd375d744",
            "textStyle": {},
            "top": "75%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "span1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "span1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "span1"));
        var spanbottom = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "0.50%",
            "id": "spanbottom",
            "isVisible": true,
            "left": "65dp",
            "skin": "CopydefLabel0ge2be11e437442",
            "textStyle": {},
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "spanbottom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "spanbottom"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "spanbottom"));
        ListInformation.add(FlxPharmacy, FlxAidPoint, FlxAccount, FlxSignOut, span1, spanbottom);
        HeaderBar.add(leftHeaderGroup, rightHeaderGroup, ListInformation);
        return HeaderBar;
    }
})