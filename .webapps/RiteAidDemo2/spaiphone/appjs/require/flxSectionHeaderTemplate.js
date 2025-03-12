define("flxSectionHeaderTemplate", function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var leftHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "leftHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "responsiveConfig": {
                "offset": {
                    "landscape": 0,
                    "portrait": 0
                },
                "span": {
                    "landscape": 6,
                    "portrait": 12
                }
            },
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        leftHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var menu = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "menu",
            "isVisible": true,
            "left": "0dp",
            "skin": "greyMenu",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var logo = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "logo",
            "isVisible": true,
            "left": "0dp",
            "skin": "logo",
            "top": "10dp",
            "width": "66dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var logo2 = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "logo2",
            "isVisible": true,
            "left": "0dp",
            "skin": "logo2",
            "top": "10dp",
            "width": "41dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        leftHeaderGroup.add(menu, logo, logo2);
        var rightHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "rightHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        rightHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderGroup = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "cartHeaderGroup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": 30,
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        cartHeaderGroup.setDefaultUnit(voltmx.flex.DP);
        var cartHeaderButton = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "cartHeaderButton",
            "isVisible": true,
            "right": "0",
            "skin": "cartHeaderIcon",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var cartBadgeCount = new voltmx.ui.Label({
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
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        cartHeaderGroup.add(cartHeaderButton, cartBadgeCount);
        var userHeader = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "30dp",
            "id": "userHeader",
            "isVisible": true,
            "right": "5dp",
            "skin": "userHeaderStyle",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        rightHeaderGroup.add(cartHeaderGroup, userHeader);
        flxSectionHeaderTemplate.add(leftHeaderGroup, rightHeaderGroup);
        return flxSectionHeaderTemplate;
    }
})