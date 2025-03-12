define("Dashboard", function() {
    return function(controller) {
        function addWidgetsDashboard() {
            this.setDefaultUnit(voltmx.flex.DP);
            var contentScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "contentScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "50dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            contentScroll.setDefaultUnit(voltmx.flex.DP);
            var lblTitle = new voltmx.ui.Label({
                "id": "lblTitle",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b33dfb3b299442",
                "text": "Account Dashboard",
                "textStyle": {},
                "top": "3%",
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
            var FlexContainer1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "160dp",
                "id": "FlexContainer1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "maxHeight": "220dp",
                "minHeight": 121,
                "isModalContainer": false,
                "right": "3%",
                "skin": "CopyslFbox0jc43b82480cd41",
                "top": "10%",
                "width": "94%",
                "zIndex": 10,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer1.setDefaultUnit(voltmx.flex.DP);
            var lblWelcome = new voltmx.ui.Label({
                "id": "lblWelcome",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblWelcome",
                "text": "Welcome Bonus",
                "textStyle": {},
                "top": "3%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lbldes = new voltmx.ui.Label({
                "id": "lbldes",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlbldes",
                "text": "Redeem your welcome bonus of 2000 points",
                "textStyle": {},
                "top": "20%",
                "width": "55%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlexContainerBonus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "3%",
                "clipBounds": false,
                "height": "25%",
                "id": "FlexContainerBonus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "right": "3%",
                "skin": "CopyslFbox0b099fbcfb87d40",
                "top": "65%",
                "width": "94%",
                "zIndex": 30,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerBonus.setDefaultUnit(voltmx.flex.DP);
            var lblTotalBn = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblTotalBn",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblTotalBn",
                "text": "Your Total Points:",
                "textStyle": {},
                "top": "3%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddBn = new voltmx.ui.Label({
                "height": "0%",
                "id": "lblAddBn",
                "isVisible": true,
                "left": "3%",
                "skin": "skinlblAddBn",
                "textStyle": {},
                "top": "50%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblCurnentP = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblCurnentP",
                "isVisible": true,
                "right": "3%",
                "skin": "skinlblCurnentP",
                "text": "0",
                "textStyle": {},
                "top": "3%",
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
            var lblAddingP = new voltmx.ui.Label({
                "height": "0%",
                "id": "lblAddingP",
                "isVisible": true,
                "right": "3%",
                "skin": "CopydefLabel0fa5a4eddede34c",
                "textStyle": {},
                "top": "50%",
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
            FlexContainerBonus.add(lblTotalBn, lblAddBn, lblCurnentP, lblAddingP);
            var btnAddP = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "40%",
                "id": "btnAddP",
                "isVisible": true,
                "onClick": controller.AS_Button_iaa34a4aaf3f4bce8f2c618330d47268,
                "right": "3%",
                "skin": "skinbtnAddP",
                "text": "Redeem 2000 Points",
                "top": "5%",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {});
            FlexContainer1.add(lblWelcome, lbldes, FlexContainerBonus, btnAddP);
            var FlexContainer2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "550dp",
                "id": "FlexContainer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1.97%",
                "isModalContainer": false,
                "right": "3%",
                "skin": "skinFlexContainer2",
                "top": "31.99%",
                "width": "94%",
                "zIndex": 10,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer2.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0ec0403d4e6fd41 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.61%",
                "id": "FlexContainer0ec0403d4e6fd41",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0cc0bf69f41084c",
                "top": "3%",
                "width": "94%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0ec0403d4e6fd41.setDefaultUnit(voltmx.flex.DP);
            var Image0dc6020290fcf41 = new voltmx.ui.Image2({
                "height": "20%",
                "id": "Image0dc6020290fcf41",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "image.png",
                "top": "3%",
                "width": "94%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainerleft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "FlexContainerleft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "skinFlexContainerleft",
                "top": "22%",
                "width": "46.30%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerleft.setDefaultUnit(voltmx.flex.DP);
            var lblMP = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblMP",
                "isVisible": true,
                "skin": "CopydefLabel0be8edc5ff52e42",
                "text": "My Points",
                "textStyle": {},
                "top": "3%",
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
            var lblP = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblP",
                "isVisible": true,
                "skin": "skinlblP",
                "text": "0",
                "textStyle": {},
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
            var Label0ab7f05ba45e045 = new voltmx.ui.Label({
                "bottom": "3%",
                "centerX": "50%",
                "id": "Label0ab7f05ba45e045",
                "isVisible": true,
                "skin": "CopydefLabel0e719e189a30948",
                "text": "Activity",
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
            FlexContainerleft.add(lblMP, lblP, Label0ab7f05ba45e045);
            var FlexContaineright = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "FlexContaineright",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "skinFlexContaineright",
                "top": "22%",
                "width": "46.30%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContaineright.setDefaultUnit(voltmx.flex.DP);
            var Label0f5596b2e18a941 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0f5596b2e18a941",
                "isVisible": true,
                "skin": "CopydefLabel0g1058167b4cc40",
                "text": "$0.00",
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
            var lblBC = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblBC",
                "isVisible": true,
                "skin": "skinBonusCash",
                "text": "BonusCash",
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
            var Label0ecabe828325449 = new voltmx.ui.Label({
                "bottom": "0",
                "centerX": "50%",
                "id": "Label0ecabe828325449",
                "isVisible": true,
                "skin": "CopydefLabel0e4b1676a69804c",
                "text": "($00 Pending) Activity",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContaineright.add(Label0f5596b2e18a941, lblBC, Label0ecabe828325449);
            var Button0eb5f155372f14b = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "Button0eb5f155372f14b",
                "isVisible": true,
                "left": "62dp",
                "skin": "CopydefBtnNormal0ad585f095bb743",
                "text": "Convert Points to BonusCash",
                "top": "39%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0a29063fbc44c4c = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Label0a29063fbc44c4c",
                "isVisible": true,
                "skin": "CopydefLabel0d5762849de0945",
                "text": "1000 points = $2.00",
                "textStyle": {},
                "top": "59%",
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
            var btn1 = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn1",
                "isVisible": true,
                "left": "40dp",
                "skin": "CopydefBtnNormal0h128c706b97040",
                "text": "Rewards Notifications",
                "top": "62%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn2 = new voltmx.ui.Button({
                "centerX": "49.86%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn2",
                "isVisible": true,
                "left": "41dp",
                "skin": "CopydefBtnNormal0fd1221ab2c854d",
                "text": "BonusCash Challenges",
                "top": "67%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn3 = new voltmx.ui.Button({
                "centerX": "49.58%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn3",
                "isVisible": true,
                "left": "36dp",
                "skin": "CopydefBtnNormal0cac2dae4d64b4d",
                "text": "View My Weekly Ad",
                "top": "72%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn4 = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn4",
                "isVisible": true,
                "left": "36dp",
                "skin": "CopydefBtnNormal0a17f586632264f",
                "text": "Clipped Coupons $0.00",
                "top": "77%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bnt5 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "bnt5",
                "isVisible": true,
                "left": "41dp",
                "skin": "CopydefBtnNormal0j01394266b2e40",
                "text": "Online Deals",
                "top": "82%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btn6 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "25dp",
                "id": "btn6",
                "isVisible": true,
                "left": "40dp",
                "skin": "CopydefBtnNormal0e2afd2c743a44a",
                "text": "KidCents Donations",
                "top": "87%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0ee459474a6034d = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "8%",
                "id": "Label0ee459474a6034d",
                "isVisible": true,
                "left": "121dp",
                "skin": "CopydefLabel0i688784fd1324b",
                "text": "Automatically sconvert Reward Points to BonusCash every 1,000 points.",
                "textStyle": {},
                "top": "50%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0cd8ec16c4ada42 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0cd8ec16c4ada42",
                "isVisible": true,
                "left": "44dp",
                "skin": "CopydefLabel0e3f45792f6cf41",
                "textStyle": {},
                "top": "67%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0jdd9156ce45c4b = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0jdd9156ce45c4b",
                "isVisible": true,
                "skin": "CopydefLabel0d0ee8ca7632f42",
                "textStyle": {},
                "top": "72%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0cd49f2f02e2f4a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0cd49f2f02e2f4a",
                "isVisible": true,
                "left": "76dp",
                "skin": "CopydefLabel0a325b60e0cae4c",
                "text": "Label",
                "textStyle": {},
                "top": "77%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0g6a0bd59fe0d47 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0g6a0bd59fe0d47",
                "isVisible": true,
                "left": "86dp",
                "skin": "CopydefLabel0d6bb634f821a44",
                "textStyle": {},
                "top": "82%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0aa96162f28cd46 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0aa96162f28cd46",
                "isVisible": true,
                "left": "78dp",
                "skin": "CopydefLabel0cfa02273611846",
                "textStyle": {},
                "top": "87%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0gd94f14c27e54a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "Label0gd94f14c27e54a",
                "isVisible": true,
                "left": "78dp",
                "skin": "CopydefLabel0c9ea27e651b549",
                "textStyle": {},
                "top": "92%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0ec0403d4e6fd41.add(Image0dc6020290fcf41, FlexContainerleft, FlexContaineright, Button0eb5f155372f14b, Label0a29063fbc44c4c, btn1, btn2, btn3, btn4, bnt5, btn6, Label0ee459474a6034d, Label0cd8ec16c4ada42, Label0jdd9156ce45c4b, Label0cd49f2f02e2f4a, Label0g6a0bd59fe0d47, Label0aa96162f28cd46, Label0gd94f14c27e54a);
            FlexContainer2.add(FlexContainer0ec0403d4e6fd41);
            contentScroll.add(lblTitle, FlexContainer1, FlexContainer2);
            var HeaderBar = new RiteAidCommon.HeaderBar({
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBar": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(contentScroll, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsDashboard,
            "enabledForIdleTimeout": false,
            "id": "Dashboard",
            "init": controller.AS_Form_b9f7e17ac1324e5c844ab085db9e54c7,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "c2417149800147c59e6f865367cba828"
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