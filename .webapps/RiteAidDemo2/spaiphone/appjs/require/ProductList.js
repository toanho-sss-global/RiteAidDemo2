define("ProductList", function() {
    return function(controller) {
        function addWidgetsProductList() {
            this.setDefaultUnit(voltmx.flex.DP);
            var Content = new voltmx.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "Content",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            Content.setDefaultUnit(voltmx.flex.DP);
            var ImgBanner = new voltmx.ui.Image2({
                "centerX": "50%",
                "zoomEnabled": false,
                "zoomValue": 200,
                "height": "27%",
                "id": "ImgBanner",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "image_07_rb_sunglasses_page_bottom_banner_desktop.jpg",
                "top": "0%",
                "width": "180%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ContentProductEmpty = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "ContentProductEmpty",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6.05%",
                "isModalContainer": false,
                "right": "5%",
                "skin": "slFbox",
                "top": "42.63%",
                "width": "90%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            ContentProductEmpty.setDefaultUnit(voltmx.flex.DP);
            var LblContent1 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "27.81%",
                "id": "LblContent1",
                "isVisible": true,
                "maxNumberOfLines": 0,
                "skin": "LblContent1",
                "text": "Sorry, we can't find any matches to your query!",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "top": "5.30%",
                "width": "51.04%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var LblContent2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "LblContent2",
                "isVisible": true,
                "skin": "LblContent2",
                "text": "Please try another query.",
                "textStyle": {},
                "top": "32%",
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
            ContentProductEmpty.add(LblContent1, LblContent2);
            var SearchBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 1
                },
                "centerX": "50%",
                "clipBounds": false,
                "height": "6%",
                "id": "SearchBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0h6e8c96325534e",
                "top": "24%",
                "width": "86.82%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            SearchBox.setDefaultUnit(voltmx.flex.DP);
            var IconSearch = new voltmx.ui.Label({
                "centerX": 50,
                "centerY": "47.03%",
                "id": "IconSearch",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslFontAwesomeIcon0d9e6855e8c964e",
                "text": "",
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
            var TxtSearch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "47.74%",
                "focusSkin": "CopydefTextBoxFocus0e3c65f0cd87b4f",
                "height": "80%",
                "id": "TxtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": 0,
                "onTextChange": controller.AS_TextField_f474cd1c8f024405ade2c4ede9987e79,
                "placeholder": "Categories, price, color, ...",
                "secureTextEntry": false,
                "skin": "TxtSearch",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 10,
                "width": "75.36%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0e29b6d8b7def42"
            });
            var FlexGroupIconClose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "49.38%",
                "clipBounds": false,
                "focusSkin": "CopyslFbox0d251af345e6d49",
                "height": "30.68%",
                "id": "FlexGroupIconClose",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0.00%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de,
                "skin": "CopyslFbox0caa3f98edcf246",
                "top": "15%",
                "width": "4%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexGroupIconClose.setDefaultUnit(voltmx.flex.DP);
            var IconClose = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": 16,
                "id": "IconClose",
                "isVisible": true,
                "left": 0,
                "onDownloadComplete": controller.AS_Image_a80200b704554e5fac5a144b6b0bf399,
                "skin": "CopyslImage0cb59b478283a4f",
                "src": "close.png",
                "top": 17,
                "width": 13,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexGroupIconClose.add(IconClose);
            SearchBox.add(IconSearch, TxtSearch, FlexGroupIconClose);
            var ListBoxFeature = new voltmx.ui.ListBox({
                "focusSkin": "CopydefListBoxFocus0iee66699a20042",
                "height": "5%",
                "id": "ListBoxFeature",
                "isVisible": true,
                "left": "5%",
                "masterData": [
                    ["lb1", "Featured"],
                    ["lb2", "Price (Low to High)"],
                    ["lb3", "Price (High to Low)"]
                ],
                "selectedKey": "lb1",
                "skin": "CopydefListBoxNormal0eb9f8195d1c443",
                "top": "33%",
                "width": "30%",
                "zIndex": 1,
                "enableHapticFeedback": false
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBoxPage = new voltmx.ui.ListBox({
                "focusSkin": "CopydefListBoxFocus0iee66699a20042",
                "height": "5%",
                "id": "ListBoxPage",
                "isVisible": true,
                "masterData": [
                    ["lbPage1", "16 per page"],
                    ["lbPage2", "32 per page"],
                    ["lbPage3", "64 per page"]
                ],
                "right": "5%",
                "selectedKey": "lbPage1",
                "skin": "CopydefListBoxNormal0eb9f8195d1c443",
                "top": "33%",
                "width": "27.13%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ProductSimple = new ListView.ProductSimple({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "100%",
                "id": "ProductSimple",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopyCopyslFbox3",
                "top": "40.64%",
                "width": "90%",
                "appName": "RiteAidDemo2",
                "overrides": {
                    "ProductSimple": {
                        "centerX": "50%",
                        "isVisible": true,
                        "left": "5%",
                        "right": "5%",
                        "top": "40.64%",
                        "width": "90%"
                    },
                    "segTemp": {
                        "data": [{
                            "img": "",
                            "lblCategory": "",
                            "lblCost": "",
                            "lblCostDiscount": "",
                            "lblDescription": "",
                            "lblDiscount": ""
                        }]
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            ProductSimple.segTemp.onRowClick = controller.AS_Segment_j58894ea400b46a1933dd1659702e5cf;
            Content.add(ImgBanner, ContentProductEmpty, SearchBox, ListBoxFeature, ListBoxPage, ProductSimple);
            var HeaderBar = new RiteAidCommon.HeaderBar({
                "centerX": "50%",
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
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(Content, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsProductList,
            "enabledForIdleTimeout": false,
            "id": "ProductList",
            "init": controller.AS_Form_f8c2751bca3b4d3e9d55942876fc74cb,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f6bedc297a8f4ced9496c9d769c6a595(eventobject);
            },
            "skin": "CopyslForm0a3dcebddd4be47",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "b79e93a47a8a42038218541a0de1b8ba"
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