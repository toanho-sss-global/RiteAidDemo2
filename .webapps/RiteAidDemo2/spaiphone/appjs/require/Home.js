define("Home", function() {
    return function(controller) {
        function addWidgetsHome() {
            this.setDefaultUnit(voltmx.flex.DP);
            var contentScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "810dp",
                "horizontalScrollIndicator": true,
                "id": "contentScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "70dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            contentScroll.setDefaultUnit(voltmx.flex.DP);
            var Segment0a85a0f0f28a548 = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Button0b820f12e10ad40": "Shop now",
                    "Image0e9df41a9488949": "header1.png",
                    "Label0ie096a2cf5e442": "Nature Made vitamins & supplements 50% off",
                    "backgroundImg": "image.jpg"
                }, {
                    "Button0b820f12e10ad40": "Shop now",
                    "Image0e9df41a9488949": "header2.png",
                    "Label0ie096a2cf5e442": "Valentine’s Day UP TO 90% OFF",
                    "backgroundImg": "untitled4.png"
                }, {
                    "Button0b820f12e10ad40": "Schedule",
                    "Image0e9df41a9488949": "header3.png",
                    "Label0ie096a2cf5e442": "Get your flu shot TEST!!",
                    "backgroundImg": "untitled2.png"
                }],
                "groupCells": false,
                "height": "350dp",
                "id": "Segment0a85a0f0f28a548",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_i8992e512edf470ab88e6aa3bad20d0d,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "Flex0f2795775352a48",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "Button0b820f12e10ad40": "Button0b820f12e10ad40",
                    "Flex0f2795775352a48": "Flex0f2795775352a48",
                    "FlexContainer0e55384438ac945": "FlexContainer0e55384438ac945",
                    "Flextop": "Flextop",
                    "Image0e9df41a9488949": "Image0e9df41a9488949",
                    "Label0ie096a2cf5e442": "Label0ie096a2cf5e442",
                    "backgroundImg": "backgroundImg"
                },
                "width": "100%",
                "zIndex": 1,
                "enableHapticFeedback": false,
                "appName": "RiteAidDemo2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var bannerImg = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "bannerImg",
                "isVisible": true,
                "skin": "slImage",
                "src": "header_image.png",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product1 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product1",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_1.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product2 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product2",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_2.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product3 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product3",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_3.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var product4 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "380dp",
                "id": "product4",
                "isVisible": true,
                "skin": "slImage",
                "src": "product_4.png",
                "top": "20dp",
                "width": "380dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FooterDemo = new RiteAidFooter.FooterDemo({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "160%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFooterDemo",
                "top": "0%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            contentScroll.add(Segment0a85a0f0f28a548, bannerImg, product1, product2, product3, product4, FooterDemo);
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
            this.add(contentScroll, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsHome,
            "enabledForIdleTimeout": false,
            "id": "Home",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_bb2d02b95471423abf3253a2859fb952,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "fb6e88e7d7c94c68aa13478d43b174b5"
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