define("ProductDetails", function() {
    return function(controller) {
        function addWidgetsProductDetails() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlxSclProductDetail = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "94.67%",
                "horizontalScrollIndicator": true,
                "id": "FlxSclProductDetail",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "3dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyCopyslFSbox",
                "top": "70dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclProductDetail.setDefaultUnit(voltmx.flex.DP);
            var FlxProductImage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "423dp",
                "id": "FlxProductImage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "50dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductImage.setDefaultUnit(voltmx.flex.DP);
            var MainProductImage = new voltmx.ui.Image2({
                "centerX": "50.00%",
                "height": "337dp",
                "id": "MainProductImage",
                "isVisible": true,
                "left": "0",
                "skin": "CopyProductImage",
                "src": "http://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SubProductImage = new voltmx.ui.Image2({
                "height": "60dp",
                "id": "SubProductImage",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysubProductImage",
                "top": "363dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductImage.add(MainProductImage, SubProductImage);
            var FlxProductDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "687dp",
                "id": "FlxProductDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "43dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "-3dp",
                "width": "80.02%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductDetails.setDefaultUnit(voltmx.flex.DP);
            var ProductName = new voltmx.ui.Label({
                "id": "ProductName",
                "isVisible": true,
                "left": "-9px",
                "maxNumberOfLines": 3,
                "minWidth": "100%",
                "right": "19px",
                "skin": "CopyCopydefLabel0c7eadd27df614d",
                "text": "ProductName",
                "textStyle": {},
                "top": "20dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "blur": {
                    "enabled": true,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxRatings = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxRatings",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "167dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxRatings.setDefaultUnit(voltmx.flex.DP);
            var StarRating1 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating2 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating2",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating3 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating3",
                "isVisible": true,
                "left": "60dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating4 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating4",
                "isVisible": true,
                "left": "90dp",
                "skin": "CopyCopyslImage2",
                "src": "full_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var StarRating5 = new voltmx.ui.Image2({
                "height": "20dp",
                "id": "StarRating5",
                "isVisible": true,
                "left": "120dp",
                "skin": "CopyCopyslImage2",
                "src": "empty_star_2_1.png",
                "top": "10dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewersAmount = new voltmx.ui.RichText({
                "height": "17dp",
                "id": "ReviewersAmount",
                "isVisible": true,
                "left": "153dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyReviewsText",
                "text": "(131 reviews)",
                "top": "12dp",
                "width": "30.37%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxRatings.add(StarRating1, StarRating2, StarRating3, StarRating4, StarRating5, ReviewersAmount);
            var FlxProductPrice = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "43dp",
                "id": "FlxProductPrice",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox3",
                "top": "235dp",
                "width": "66.57%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductPrice.setDefaultUnit(voltmx.flex.DP);
            var ProductPrice = new voltmx.ui.RichText({
                "id": "ProductPrice",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyProductPriceLabel",
                "text": "$ Price",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductPrice.add(ProductPrice);
            var FlxDescription = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDescription",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "289dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDescription.setDefaultUnit(voltmx.flex.DP);
            var Description = new voltmx.ui.RichText({
                "id": "Description",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyReviewsText",
                "text": "Description",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxDescription.add(Description);
            var FlxFavorites = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxFavorites",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyFavoritesSkin",
                "top": "490dp",
                "width": "100.00%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFavorites.setDefaultUnit(voltmx.flex.DP);
            var FavoriteButton = new voltmx.ui.Button({
                "bottom": "30dp",
                "height": "45dp",
                "id": "FavoriteButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38,
                "right": "2dp",
                "skin": "CopyQuantityButton3",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteCheckText = new voltmx.ui.RichText({
                "height": "33dp",
                "id": "FavoriteCheckText",
                "isVisible": true,
                "left": "50dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "onClick": controller.AS_RichText_c9da0637d0ab4ef8b621a427563cc376,
                "skin": "CopyFavoritesText",
                "text": "Add to Favorites",
                "top": "7dp",
                "width": "50.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteHeartRed = new voltmx.ui.Label({
                "id": "FavoriteHeartRed",
                "isVisible": false,
                "left": "26dp",
                "skin": "CopyRedHeartLabel",
                "text": "",
                "textStyle": {},
                "top": "16dp",
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
            var FavoriteHeartLight = new voltmx.ui.Label({
                "id": "FavoriteHeartLight",
                "isVisible": true,
                "left": "26dp",
                "skin": "CopyLightHeartLabel",
                "text": "",
                "textStyle": {},
                "top": "16dp",
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
            FlxFavorites.add(FavoriteButton, FavoriteCheckText, FavoriteHeartRed, FavoriteHeartLight);
            var FlxModifingQuantity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "53dp",
                "id": "FlxModifingQuantity",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox3",
                "top": "552dp",
                "width": "58.65%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxModifingQuantity.setDefaultUnit(voltmx.flex.DP);
            var DecreaseQuantity = new voltmx.ui.Button({
                "height": "50dp",
                "id": "DecreaseQuantity",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f6a535b1a2e6434fb8d2e049c3a86139,
                "skin": "CopyQuantityButton3",
                "text": "-",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IncreaseQuantity = new voltmx.ui.Button({
                "height": "50dp",
                "id": "IncreaseQuantity",
                "isVisible": true,
                "left": "137dp",
                "onClick": controller.AS_Button_a00d8bc9602a4b0e82c76612f641c0de,
                "skin": "CopyQuantityButton3",
                "text": "+",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Quantity = new voltmx.ui.Label({
                "centerX": "48.33%",
                "id": "Quantity",
                "isVisible": true,
                "left": "26.67%",
                "skin": "CopyAmountQuantity",
                "text": "0",
                "textStyle": {},
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlxModifingQuantity.add(DecreaseQuantity, IncreaseQuantity, Quantity);
            var FlxAddButton = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxAddButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0b3cf5d1efc444f",
                "top": "611dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxAddButton.setDefaultUnit(voltmx.flex.DP);
            var AddButton = new voltmx.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopyCopyButtonSkinActive1",
                "id": "AddButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_h265e4a259bb42f79f2452d09b7c4bb2,
                "right": "-1dp",
                "skin": "CopyAddToBasketButton",
                "text": "Add to Basket",
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxAddButton.add(AddButton);
            FlxProductDetails.add(ProductName, FlxRatings, FlxProductPrice, FlxDescription, FlxFavorites, FlxModifingQuantity, FlxAddButton);
            var FlxFrequentlyBoughtProduct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1197dp",
                "id": "FlxFrequentlyBoughtProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "20dp",
                "width": "79.99%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFrequentlyBoughtProduct.setDefaultUnit(voltmx.flex.DP);
            var FrequentlyBoughtProductLabel = new voltmx.ui.Label({
                "id": "FrequentlyBoughtProductLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopydefLabel0b519b99aeb1a4b",
                "text": "Frequently Bought With",
                "textStyle": {},
                "top": "0dp",
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
            var FlxSclFrequentlyBoughtProducts = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "86.31%",
                "id": "FlxSclFrequentlyBoughtProducts",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "60dp",
                "width": "100.63%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox', 'CopyFBox', 'CopyFBoxController');
            var FrequentlyBoughtSegment = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "FBProductImage": "https://vendure.demo.universalcommerce.io/assets/preview/f1/bpdavryry2kptkyfej93__preview.webp",
                    "HiddenId": "57",
                    "NetWeight": "60 Ct",
                    "ProductName": "Qunol Turmeric & Ginger Gummy",
                    "ProductPrice": "price : $38.39",
                    "ProductType": "Nature Made"
                }, {
                    "FBProductImage": "http://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                    "HiddenId": "56",
                    "NetWeight": "50mcg - 90 ct",
                    "ProductName": "Nature Made Vitamin D3 Softgels",
                    "ProductPrice": "price : $16.97",
                    "ProductType": "Nature Made"
                }],
                "groupCells": false,
                "height": "440dp",
                "id": "FrequentlyBoughtSegment",
                "isVisible": true,
                "left": "13dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_c0ac1b90e494430dadf48fe178471f41,
                "pageOffDotImage": "slider_ios7.png",
                "pageOnDotImage": "slider.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg5",
                "rowSkin": "CopyFrequentlyBoughtSegment",
                "rowTemplate": "CopyFBox",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader1",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "82828200",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "30dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "FBProductImage": "FBProductImage",
                    "FlxFrequentlyBoughtDetail": "FlxFrequentlyBoughtDetail",
                    "HiddenId": "HiddenId",
                    "NetWeight": "NetWeight",
                    "ProductName": "ProductName",
                    "ProductPrice": "ProductPrice",
                    "ProductType": "ProductType"
                },
                "width": "95.24%",
                "enableHapticFeedback": true,
                "appName": "RiteAidDemo2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.add(FrequentlyBoughtSegment);
            var FlxProductRelatedInformations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1257dp",
                "id": "FlxProductRelatedInformations",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "583dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductRelatedInformations.setDefaultUnit(voltmx.flex.DP);
            var FlxMoreInfoSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": false,
                "id": "FlxMoreInfoSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoSection.setDefaultUnit(voltmx.flex.DP);
            var MoreInfo = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "MoreInfo",
                "isVisible": true,
                "left": "7dp",
                "onClick": controller.AS_Button_ed461adefb854e559727eb6cf839cbe3,
                "skin": "CopyCopyQuantityButton",
                "top": "10dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ExtendMoreInfo = new voltmx.ui.Label({
                "id": "ExtendMoreInfo",
                "isVisible": true,
                "left": "307dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "24dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var MoreInforLabel = new voltmx.ui.Label({
                "id": "MoreInforLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyRelatedInforLabel",
                "text": "MORE INFORMATION",
                "textStyle": {},
                "top": "30dp",
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
            var FlxMoreInfoText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxMoreInfoText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "73dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.setDefaultUnit(voltmx.flex.DP);
            var MoreInfoText = new voltmx.ui.RichText({
                "centerX": "50.00%",
                "id": "MoreInfoText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Nature Made Hair, Skin & Nails with Biotin provides essential nutrients that support healthy hair, skin and nails. \n    This supplement contains 2500mcg of Biotin along with other vital nutrients like Vitamin C, Vitamin E, and Zinc. \n    Each serving is specially formulated to support your body's natural beauty from within.",
                "top": "3dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.add(MoreInfoText);
            FlxMoreInfoSection.add(MoreInfo, ExtendMoreInfo, MoreInforLabel, FlxMoreInfoText);
            var FlxHowToUseSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "FlxHowToUseSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseSection.setDefaultUnit(voltmx.flex.DP);
            var HowToUse = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "HowToUse",
                "isVisible": true,
                "left": "1dp",
                "onClick": controller.AS_Button_beb86e945b66417d8976e65cb5bc522c,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var HowToUseLabel = new voltmx.ui.Label({
                "id": "HowToUseLabel",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopyRelatedInforLabel",
                "text": "HOW TO USE",
                "textStyle": {},
                "top": "28dp",
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
            var ExtendHowToUse = new voltmx.ui.Label({
                "id": "ExtendHowToUse",
                "isVisible": true,
                "left": "301dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxHowToUseText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxHowToUseText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.setDefaultUnit(voltmx.flex.DP);
            var HowToUseText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "HowToUseText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Take one softgel daily with water and a meal. \n    For best results, take at the same time each day. \n    Store in a cool, dry place out of direct sunlight. \n    Keep out of reach of children.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.add(HowToUseText);
            FlxHowToUseSection.add(HowToUse, HowToUseLabel, ExtendHowToUse, FlxHowToUseText);
            var FlxIngredientSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "FlxIngredientSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientSection.setDefaultUnit(voltmx.flex.DP);
            var Ingredients = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Ingredients",
                "isVisible": true,
                "left": "4dp",
                "onClick": controller.AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IngredientsLabel = new voltmx.ui.Label({
                "id": "IngredientsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopyRelatedInforLabel",
                "text": "INGREDIENTS",
                "textStyle": {},
                "top": "30dp",
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
            var ExtendIngredients = new voltmx.ui.Label({
                "id": "ExtendIngredients",
                "isVisible": true,
                "left": "304dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxIngredientsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxIngredientsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.setDefaultUnit(voltmx.flex.DP);
            var IngredientsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "IngredientsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Active Ingredients:\n    - Biotin (2500mcg)\n    - Vitamin C (60mg)\n    - Vitamin E (30IU)\n    - Zinc (15mg)\n    \n    Other Ingredients: Gelatin, Vegetable Oil, Glycerin, Water, Yellow Beeswax, Soy Lecithin.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.add(IngredientsText);
            FlxIngredientSection.add(Ingredients, IngredientsLabel, ExtendIngredients, FlxIngredientsText);
            var FlxSafetySection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": false,
                "id": "FlxSafetySection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "350dp",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetySection.setDefaultUnit(voltmx.flex.DP);
            var Safety = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Safety",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df,
                "skin": "CopyCopyQuantityButton",
                "top": "7dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SafetyLabel = new voltmx.ui.Label({
                "id": "SafetyLabel",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopyRelatedInforLabel",
                "text": "SAFETY",
                "textStyle": {},
                "top": "27dp",
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
            var ExtendSafetyLabel = new voltmx.ui.Label({
                "id": "ExtendSafetyLabel",
                "isVisible": true,
                "left": "305dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "21dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxSafetyText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxSafetyText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "15dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "70dp",
                "width": "310dp",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetyText.setDefaultUnit(voltmx.flex.DP);
            var SafetyText = new voltmx.ui.RichText({
                "centerX": "50.00%",
                "id": "SafetyText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Consult your healthcare professional before use if you are pregnant, nursing, taking medications, or have a medical condition. \n    Discontinue use and consult your doctor if any adverse reactions occur. \n    Do not use if seal under cap is broken or missing.",
                "top": "15dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSafetyText.add(SafetyText);
            FlxSafetySection.add(Safety, SafetyLabel, ExtendSafetyLabel, FlxSafetyText);
            var FlxDimensionSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDimensionSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "0dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionSection.setDefaultUnit(voltmx.flex.DP);
            var Dimensions = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Dimensions",
                "isVisible": true,
                "left": "5dp",
                "onClick": controller.AS_Button_b9ab2535628a4434a67d5ea4e1994915,
                "skin": "CopyCopyQuantityButton",
                "top": "8dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var DimensionsLabel = new voltmx.ui.Label({
                "id": "DimensionsLabel",
                "isVisible": true,
                "left": "24dp",
                "skin": "CopyRelatedInforLabel",
                "text": "DIMENSIONS",
                "textStyle": {},
                "top": "28dp",
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
            var ExtendDimensionsLabel = new voltmx.ui.Label({
                "id": "ExtendDimensionsLabel",
                "isVisible": true,
                "left": "305dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "22dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxDimensionsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxDimensionsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "71dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.setDefaultUnit(voltmx.flex.DP);
            var DimensionsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "DimensionsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Product Dimensions: 2.5\" x 2.5\" x 4.5\"\n    Product Weight: 3.2 oz\n    Serving Size: 1 softgel\n    Servings Per Container: 90\n    Package Type: Plastic bottle with safety seal",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.add(DimensionsText);
            FlxDimensionSection.add(Dimensions, DimensionsLabel, ExtendDimensionsLabel, FlxDimensionsText);
            var FlxReviewSection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxReviewSection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h76c21e8bc7a47",
                "top": "5dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewSection.setDefaultUnit(voltmx.flex.DP);
            var Reviews = new voltmx.ui.Button({
                "focusSkin": "CopyCopyButtonSkinActive1",
                "height": "63dp",
                "id": "Reviews",
                "isVisible": true,
                "left": "3dp",
                "onClick": controller.AS_Button_j4aab7925a044f12a80eb54e070616fd,
                "skin": "CopyCopyQuantityButton",
                "top": "2dp",
                "width": "329dp",
                "enableHapticFeedback": false,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ReviewsLabel = new voltmx.ui.Label({
                "id": "ReviewsLabel",
                "isVisible": true,
                "left": "19dp",
                "skin": "CopyRelatedInforLabel",
                "text": "REVIEWS",
                "textStyle": {},
                "top": "22dp",
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
            var ExtendReviewsLabel = new voltmx.ui.Label({
                "id": "ExtendReviewsLabel",
                "isVisible": true,
                "left": "303dp",
                "skin": "CopyExtendInfoLabel",
                "text": "+",
                "textStyle": {},
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlxReviewsText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlxReviewsText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f7be2b1e141c4a",
                "top": "65dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewsText.setDefaultUnit(voltmx.flex.DP);
            var ReviewsText = new voltmx.ui.RichText({
                "centerX": "50%",
                "id": "ReviewsText",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "CopyCopydefRichTextLink1",
                "skin": "CopyInfoText",
                "text": "Average Rating: 4.5/5 stars\n    Total Reviews: 1,247\n    \n    Top Review:\n    \"Great results after 3 months of use. My nails are stronger and my hair feels healthier. Would definitely recommend!\" - Sarah M.\n    \n    Recent Review:\n    \"Easy to swallow and no aftertaste. Been using for a month and starting to see improvement.\" - John D.",
                "top": "15dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxReviewsText.add(ReviewsText);
            FlxReviewSection.add(Reviews, ReviewsLabel, ExtendReviewsLabel, FlxReviewsText);
            FlxProductRelatedInformations.add(FlxMoreInfoSection, FlxHowToUseSection, FlxIngredientSection, FlxSafetySection, FlxDimensionSection, FlxReviewSection);
            FlxFrequentlyBoughtProduct.add(FrequentlyBoughtProductLabel, FlxSclFrequentlyBoughtProducts, FlxProductRelatedInformations);
            var FooterDemo = new RiteAidFooter.FooterDemoCopy({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "height": "174.37%",
                "id": "FooterDemo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopysknFooterDemo",
                "top": "3.78%",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "FooterDemoCopy": {
                        "height": "174.37%",
                        "top": "3.78%"
                    },
                    "IconFace": {
                        "src": "icon_footer_face_1.png"
                    },
                    "IconInsta": {
                        "src": "icon_footer_insta_1.png"
                    },
                    "IconPhone": {
                        "src": "icon_footer_phone_1.png"
                    },
                    "IconPin": {
                        "src": "icon_footer_pin_1.png"
                    },
                    "IconTwitter": {
                        "src": "icon_footer_twitter_1.png"
                    },
                    "IconYtb": {
                        "src": "icon_footer_ytb_1.png"
                    },
                    "imgIcon1": {
                        "src": "icon_footer_1_1.png"
                    },
                    "imgIcon2": {
                        "src": "icon_footer_2_1.png"
                    },
                    "imgIcon3": {
                        "src": "icon_footer_3_1.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlxSclProductDetail.add(FlxProductImage, FlxProductDetails, FlxFrequentlyBoughtProduct, FooterDemo);
            var AddProduct = new Popup.AddProductCopy({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "AddProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopysknAddProduct",
                "top": "70dp",
                "width": "45%",
                "zIndex": 2,
                "appName": "RiteAidDemo2",
                "overrides": {
                    "AddProductCopy": {
                        "top": "70dp",
                        "zIndex": 2
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var HeaderBar = new RiteAidCommon.HeaderBarCopy({
                "height": "50dp",
                "id": "HeaderBar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d4c15f12183c4c",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2",
                "viewType": "HeaderBar",
                "overrides": {
                    "HeaderBarCopy": {
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
            HeaderBar.onCartClicked = controller.AS_UWI_e584481b40eb475695f1464aa957c8b8;
            this.add(FlxSclProductDetail, AddProduct, HeaderBar);
        };
        return [{
            "addWidgets": addWidgetsProductDetails,
            "enabledForIdleTimeout": false,
            "id": "ProductDetails",
            "init": controller.AS_Form_e32612e78cfa43ef83a5015d07d20f71,
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eaf74fff6623415aa95fba732ebfe076(eventobject);
            },
            "skin": "CopyProductForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "a3b68c6cbe914e898939d8278fbe1885"
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