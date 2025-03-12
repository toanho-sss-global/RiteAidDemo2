define(function() {
    return function(controller) {
        var FooterDemoCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "160%",
            "id": "FooterDemoCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknFooterDemo",
            "top": "0%",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FooterDemoCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FooterDemoCopy"), extendConfig({}, controller.args[2], "FooterDemoCopy"));
        FooterDemoCopy.setDefaultUnit(voltmx.flex.DP);
        var BoxIconContent1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "60dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent1"), extendConfig({}, controller.args[2], "BoxIconContent1"));
        BoxIconContent1.setDefaultUnit(voltmx.flex.DP);
        var imgIcon1 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon1",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_1_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon1"), extendConfig({}, controller.args[2], "imgIcon1"));
        var lblContentIcon1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon1",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Refill Prescriptions",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon1"));
        BoxIconContent1.add(imgIcon1, lblContentIcon1);
        var BoxIconContent2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "180dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent2"), extendConfig({}, controller.args[2], "BoxIconContent2"));
        BoxIconContent2.setDefaultUnit(voltmx.flex.DP);
        var imgIcon2 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon2",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_2_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon2"), extendConfig({}, controller.args[2], "imgIcon2"));
        var lblContentIcon2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon2",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Shop by Department",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon2"));
        BoxIconContent2.add(imgIcon2, lblContentIcon2);
        var BoxIconContent3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100dp",
            "id": "BoxIconContent3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "CopysknBoxIcon",
            "top": "300dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxIconContent3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxIconContent3"), extendConfig({}, controller.args[2], "BoxIconContent3"));
        BoxIconContent3.setDefaultUnit(voltmx.flex.DP);
        var imgIcon3 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "37%",
            "id": "imgIcon3",
            "isVisible": true,
            "left": "10%",
            "skin": "CopyslImage2",
            "src": "icon_footer_3_1.png",
            "top": "15%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgIcon3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon3"), extendConfig({}, controller.args[2], "imgIcon3"));
        var lblContentIcon3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentIcon3",
            "isVisible": true,
            "skin": "CopysknLblContentIcon",
            "text": "Mobile App",
            "textStyle": {},
            "top": "60%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentIcon3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentIcon3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblContentIcon3"));
        BoxIconContent3.add(imgIcon3, lblContentIcon3);
        var BoxContentCenter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "97dp",
            "id": "BoxContentCenter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "46dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "450dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentCenter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentCenter"), extendConfig({}, controller.args[2], "BoxContentCenter"));
        BoxContentCenter.setDefaultUnit(voltmx.flex.DP);
        var FlexGroupPhone = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "15.15%",
            "id": "FlexGroupPhone",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "0dp",
            "width": "93.88%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "FlexGroupPhone"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexGroupPhone"), extendConfig({}, controller.args[2], "FlexGroupPhone"));
        FlexGroupPhone.setDefaultUnit(voltmx.flex.DP);
        var IconPhone = new voltmx.ui.Image2(extendConfig({
            "centerY": "63%",
            "height": "20dp",
            "id": "IconPhone",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_phone_1.png",
            "top": "22dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "IconPhone"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPhone"), extendConfig({}, controller.args[2], "IconPhone"));
        var LblPhone = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "LblPhone",
            "isVisible": true,
            "left": "47dp",
            "skin": "CopysknLblPhone",
            "text": "Call Us: 1-800-RITE-AID (1-800-748-3243)",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "LblPhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblPhone"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblPhone"));
        FlexGroupPhone.add(IconPhone, LblPhone);
        var LblContent = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContent",
            "isVisible": true,
            "left": "53dp",
            "skin": "CopysknContent",
            "text": "Hearing or Speech Disabled Dial 711 to reach us thru National Telecommunications Relay",
            "textStyle": {},
            "top": "40dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "LblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContent"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContent"));
        BoxContentCenter.add(FlexGroupPhone, LblContent);
        var BoxRiteAid = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRiteAid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "580dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRiteAid"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRiteAid"), extendConfig({}, controller.args[2], "BoxRiteAid"));
        BoxRiteAid.setDefaultUnit(voltmx.flex.DP);
        var LblTitleAbout = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleAbout",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "About Us",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleAbout"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleAbout"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleAbout"));
        var LblContentAbout1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentAbout1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Our Story",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout1"));
        var LblContentAbout2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentAbout2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Careers",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout2"));
        var LblContentAbout3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Store List",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout3"));
        var LblContentAbout4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout4",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Corporate",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout4"));
        var LblContentAbout5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentAbout5",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Legal Information",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentAbout5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentAbout5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentAbout5"));
        BoxRiteAid.add(LblTitleAbout, LblContentAbout1, LblContentAbout2, LblContentAbout3, LblContentAbout4, LblContentAbout5);
        var BoxRite = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxRite",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "753dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxRite"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxRite"), extendConfig({}, controller.args[2], "BoxRite"));
        BoxRite.setDefaultUnit(voltmx.flex.DP);
        var LblRiteAidReward = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblRiteAidReward",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "Rite Aid Rewards",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblRiteAidReward"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblRiteAidReward"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblRiteAidReward"));
        var LblContentRA1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentRA1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Rite Aid Rewards 65+",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA1"));
        var LblContentRA2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentRA2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Rite Aid Rewards Articles",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA2"));
        var LblContentRA3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentRA3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "KidCents",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentRA3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentRA3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentRA3"));
        BoxRite.add(LblRiteAidReward, LblContentRA1, LblContentRA2, LblContentRA3);
        var BoxHelp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "49.95%",
            "clipBounds": false,
            "height": "147dp",
            "id": "BoxHelp",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "877dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxHelp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxHelp"), extendConfig({}, controller.args[2], "BoxHelp"));
        BoxHelp.setDefaultUnit(voltmx.flex.DP);
        var LblTitleHelp = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblTitleHelp",
            "isVisible": true,
            "skin": "CopysknLblTitle",
            "text": "Help",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblTitleHelp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, controller.args[1], "LblTitleHelp"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblTitleHelp"));
        var LblContentHelp1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Customer Care",
            "textStyle": {},
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp1"));
        var LblContentHelp2 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "LblContentHelp2",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Contact Us",
            "textStyle": {},
            "top": "52dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp2"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp2"));
        var LblContentHelp3 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp3",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "FAQs",
            "textStyle": {},
            "top": "74dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp3"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp3"));
        var LblContentHelp4 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp4",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Request Records",
            "textStyle": {},
            "top": "96dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp4"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp4"));
        var LblContentHelp5 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.01%",
            "id": "LblContentHelp5",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Policies",
            "textStyle": {},
            "top": "118dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp5"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp5"));
        var LblContentHelp6 = new voltmx.ui.Label(extendConfig({
            "centerX": "50.04%",
            "id": "LblContentHelp6",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Feedback",
            "textStyle": {},
            "top": "140dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp6"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp6"));
        var LblContentHelp7 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "LblContentHelp7",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopysknLblContent",
            "text": "Order Status & Returns",
            "textStyle": {},
            "top": "162dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "LblContentHelp7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblContentHelp7"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "LblContentHelp7"));
        BoxHelp.add(LblTitleHelp, LblContentHelp1, LblContentHelp2, LblContentHelp3, LblContentHelp4, LblContentHelp5, LblContentHelp6, LblContentHelp7);
        var BoxListIconSocial = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "33dp",
            "id": "BoxListIconSocial",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "57dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "1087dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxListIconSocial"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxListIconSocial"), extendConfig({}, controller.args[2], "BoxListIconSocial"));
        BoxListIconSocial.setDefaultUnit(voltmx.flex.DP);
        var IconYtb = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconYtb",
            "isVisible": true,
            "left": "49dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_ytb_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconYtb"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconYtb"), extendConfig({}, controller.args[2], "IconYtb"));
        var IconTwitter = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconTwitter",
            "isVisible": true,
            "left": "169dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_twitter_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconTwitter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconTwitter"), extendConfig({}, controller.args[2], "IconTwitter"));
        var IconFace = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconFace",
            "isVisible": true,
            "left": "109dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_face_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconFace"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconFace"), extendConfig({}, controller.args[2], "IconFace"));
        var IconInsta = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconInsta",
            "isVisible": true,
            "left": "229dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_insta_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconInsta"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconInsta"), extendConfig({}, controller.args[2], "IconInsta"));
        var IconPin = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "IconPin",
            "isVisible": true,
            "left": "289dp",
            "skin": "CopyslImage2",
            "src": "icon_footer_pin_1.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "IconPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "IconPin"), extendConfig({}, controller.args[2], "IconPin"));
        BoxListIconSocial.add(IconYtb, IconTwitter, IconFace, IconInsta, IconPin);
        var BoxLine = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "2dp",
            "id": "BoxLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "CopysknLineFooter",
            "top": "1152dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxLine"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxLine"), extendConfig({}, controller.args[2], "BoxLine"));
        BoxLine.setDefaultUnit(voltmx.flex.DP);
        BoxLine.add();
        var BoxContentBottom = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "80dp",
            "id": "BoxContentBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "1190dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "BoxContentBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BoxContentBottom"), extendConfig({}, controller.args[2], "BoxContentBottom"));
        BoxContentBottom.setDefaultUnit(voltmx.flex.DP);
        var ContentBottom1 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "ContentBottom1",
            "isVisible": true,
            "skin": "CopysknLblContent",
            "text": "© 2024 Rite Aid Corp. All rights reserved.",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ContentBottom1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom1"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ContentBottom1"));
        var ContentBottom2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "top": "58dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom2"), extendConfig({}, controller.args[2], "ContentBottom2"));
        ContentBottom2.setDefaultUnit(voltmx.flex.DP);
        var BottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "BottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknLblContent",
            "text": "Terms And Conditions",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomLeft"));
        var BottomCenter = new voltmx.ui.Label(extendConfig({
            "centerX": "56%",
            "id": "BottomCenter",
            "isVisible": true,
            "skin": "CopysknLblContent",
            "text": "Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomCenter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomCenter"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomCenter"));
        var BottomRight = new voltmx.ui.Label(extendConfig({
            "id": "BottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "CopysknLblContent",
            "text": "Patient Privacy",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "BottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "BottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "BottomRight"));
        ContentBottom2.add(BottomLeft, BottomCenter, BottomRight);
        var ContentBottom3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "ContentBottom3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "41dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4c15f12183c4c",
            "width": "66%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ContentBottom3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ContentBottom3"), extendConfig({}, controller.args[2], "ContentBottom3"));
        ContentBottom3.setDefaultUnit(voltmx.flex.DP);
        var CopyBottomLeft = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomLeft",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknLblContent",
            "text": "Accessibility",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomLeft"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomLeft"));
        var CopyBottomRight = new voltmx.ui.Label(extendConfig({
            "id": "CopyBottomRight",
            "isVisible": true,
            "right": "0",
            "skin": "CopysknLblContent",
            "text": "Your Privacy Choices",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyBottomRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyBottomRight"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyBottomRight"));
        ContentBottom3.add(CopyBottomLeft, CopyBottomRight);
        BoxContentBottom.add(ContentBottom1, ContentBottom2, ContentBottom3);
        FooterDemoCopy.add(BoxIconContent1, BoxIconContent2, BoxIconContent3, BoxContentCenter, BoxRiteAid, BoxRite, BoxHelp, BoxListIconSocial, BoxLine, BoxContentBottom);
        return FooterDemoCopy;
    }
})