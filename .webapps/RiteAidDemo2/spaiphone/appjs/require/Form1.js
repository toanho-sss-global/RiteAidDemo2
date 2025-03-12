define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlxProductImage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "463dp",
                "id": "FlxProductImage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "40dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductImage.setDefaultUnit(voltmx.flex.DP);
            var MainProductImage = new voltmx.ui.Image2({
                "bottom": 0,
                "centerX": "50.01%",
                "height": "76.31%",
                "id": "MainProductImage",
                "isVisible": true,
                "left": 40,
                "maxWidth": "100%",
                "right": 0,
                "skin": "productiImage",
                "src": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "20dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": true
            }, {});
            var SubProductImage = new voltmx.ui.Image2({
                "height": "60dp",
                "id": "SubProductImage",
                "isVisible": true,
                "left": "0dp",
                "skin": "subProductImage",
                "src": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "top": "403dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductImage.add(MainProductImage, SubProductImage);
            var FlxProductDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "473dp",
                "id": "FlxProductDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "543dp",
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
                "minWidth": "100%",
                "right": "19px",
                "skin": "CopydefLabel0j1556bb5398b44",
                "text": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "textStyle": {},
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "115dp",
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
                "skin": "CopyslImage4",
                "src": "full_star.png",
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
                "skin": "CopyslImage4",
                "src": "full_star.png",
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
                "skin": "CopyslImage4",
                "src": "full_star.png",
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
                "skin": "CopyslImage4",
                "src": "full_star.png",
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
                "skin": "CopyslImage4",
                "src": "empty_star.png",
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
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0c36ff2bdeea340",
                "text": "(131 reviews)",
                "top": "11dp",
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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "193dp",
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
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0f56adcd1c9db42",
                "text": "$ 16.79",
                "top": "-13dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxProductPrice.add(ProductPrice);
            var Description = new voltmx.ui.RichText({
                "id": "Description",
                "isVisible": true,
                "left": "0dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0dbe36c678f3146",
                "text": "Nature Made Vitamin D3 2000 IU Softgels (50 mcg) offer an easy way to add Vitamin D supplements to your daily routine to support bone, teeth and muscle health.",
                "top": "263dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxFavorites = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "FlxFavorites",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0e791477bbe8f45",
                "top": "362dp",
                "width": "100.00%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxFavorites.setDefaultUnit(voltmx.flex.DP);
            var FavoriteButton = new voltmx.ui.Button({
                "bottom": "20dp",
                "focusSkin": "CopyButtonSkinActive",
                "height": "30dp",
                "id": "FavoriteButton",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a,
                "right": "2dp",
                "skin": "CopyButtonSkinNormal",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteCheckText = new voltmx.ui.RichText({
                "height": "25%",
                "id": "FavoriteCheckText",
                "isVisible": true,
                "left": "43dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0g86e125cd3324a",
                "text": "Add to Favorites",
                "top": "14dp",
                "width": "50.83%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FavoriteHeartLight = new voltmx.ui.Label({
                "id": "FavoriteHeartLight",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopyslFontAwesomeIcon0d7f2760eec3646",
                "text": "",
                "textStyle": {},
                "top": "15dp",
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
            var FavoriteHeartRed = new voltmx.ui.Label({
                "id": "FavoriteHeartRed",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopyslFontAwesomeIcon0f31af4ccb8e84a",
                "text": "",
                "textStyle": {},
                "top": "15dp",
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
            FlxFavorites.add(FavoriteButton, FavoriteCheckText, FavoriteHeartLight, FavoriteHeartRed);
            var FlxModifingQuantity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "47dp",
                "id": "FlxModifingQuantity",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "415dp",
                "width": "51.81%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxModifingQuantity.setDefaultUnit(voltmx.flex.DP);
            var DecreaseQuantity = new voltmx.ui.Button({
                "height": "47dp",
                "id": "DecreaseQuantity",
                "isVisible": true,
                "left": "4dp",
                "onClick": controller.AS_Button_ge82e1bc249241e3be2af5f299263930,
                "skin": "QuantityButton",
                "text": "-",
                "top": "1dp",
                "width": "53dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var IncreaseQuantity = new voltmx.ui.Button({
                "height": "47dp",
                "id": "IncreaseQuantity",
                "isVisible": true,
                "left": "137dp",
                "onClick": controller.AS_Button_b98b257415804034acf0604954e686cc,
                "skin": "QuantityButton",
                "text": "+",
                "top": "1dp",
                "width": "50dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Quantity = new voltmx.ui.Label({
                "centerX": "53.77%",
                "id": "Quantity",
                "isVisible": true,
                "left": "28.30%",
                "skin": "CopydefLabel0acd3e7bd332844",
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
                "skin": "slFbox0cbc2605e3bd345",
                "top": "490dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxAddButton.setDefaultUnit(voltmx.flex.DP);
            var AddButton = new voltmx.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopyButtonSkinActive",
                "id": "AddButton",
                "isVisible": true,
                "left": "0dp",
                "right": "-1dp",
                "skin": "CopyButtonSkinNormal0j2337ed26baa4a",
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
            FlxProductDetails.add(ProductName, FlxRatings, FlxProductPrice, Description, FlxFavorites, FlxModifingQuantity, FlxAddButton);
            var FlxFrequentlyBoughtProduct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "560dp",
                "id": "FlxFrequentlyBoughtProduct",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "42dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "1130dp",
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
                "left": "30dp",
                "skin": "CopydefLabel0a5c641f9f7804d",
                "text": "Frequently Bought With",
                "textStyle": {},
                "top": "17dp",
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
                "height": "82.39%",
                "id": "FlxSclFrequentlyBoughtProducts",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "60dp",
                "width": "100.63%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSclFrequentlyBoughtProducts.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0eea1207dbf814d', 'CopyFBox0eea1207dbf814d', 'CopyFBox0eea1207dbf814dController');
            var Segment0b857dcb40e0a4c = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Image0b444a437263f48": "https://www.riteaid.com/shop/media/catalog/product/b/t/btyhvquf9je0a3cxmcoe.jpg",
                    "NetWeight": "90 Ct",
                    "ProductName": " Skin  With Biotin Softgels",
                    "ProductPrice": "price : $19.99 ",
                    "ProductType": "Nature Made"
                }, {
                    "Image0b444a437263f48": "imagedrag.png",
                    "NetWeight": "Label",
                    "ProductName": "Label",
                    "ProductPrice": "Label",
                    "ProductType": "Label"
                }],
                "groupCells": false,
                "height": "440dp",
                "id": "Segment0b857dcb40e0a4c",
                "isVisible": true,
                "left": "13dp",
                "needPageIndicator": false,
                "pageOffDotImage": "slider_ios7.png",
                "pageOnDotImage": "slider.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0d7c6292babf647",
                "rowSkin": "Copyseg0gcbacfcbddf143",
                "rowTemplate": "CopyFBox0eea1207dbf814d",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader3",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "82828200",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "30dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "FlexContainer0gb5dc6d99e664d": "FlexContainer0gb5dc6d99e664d",
                    "Image0b444a437263f48": "Image0b444a437263f48",
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
            FlxSclFrequentlyBoughtProducts.add(Segment0b857dcb40e0a4c);
            var FlxProductRelatedInformations = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1303dp",
                "id": "FlxProductRelatedInformations",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "610dp",
                "width": "100%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxProductRelatedInformations.setDefaultUnit(voltmx.flex.DP);
            var MoreInfo = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "MoreInfo",
                "isVisible": true,
                "left": "7dp",
                "onClick": controller.AS_Button_i8a060186d564c2da96e04f19b9ea9be,
                "skin": "CopyButtonSkinNormal",
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
            var MoreInforLabel = new voltmx.ui.Label({
                "id": "MoreInforLabel",
                "isVisible": true,
                "left": "22dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
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
            var ExtendMoreInfo = new voltmx.ui.Label({
                "id": "ExtendMoreInfo",
                "isVisible": true,
                "left": "307dp",
                "skin": "CopydefLabel0a02838ef55a84e",
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
            var NarrowMorInfo = new voltmx.ui.Label({
                "id": "NarrowMorInfo",
                "isVisible": true,
                "left": "310dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "17dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
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
                "skin": "CopyCopyslFbox",
                "top": "73dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.setDefaultUnit(voltmx.flex.DP);
            var MoreInfoText = new voltmx.ui.RichText({
                "id": "MoreInfoText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Nature Made Hair, Skin & Nails with Biotin provides essential nutrients that support healthy hair, skin and nails. \n    This supplement contains 2500mcg of Biotin along with other vital nutrients like Vitamin C, Vitamin E, and Zinc. \n    Each serving is specially formulated to support your body's natural beauty from within.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxMoreInfoText.add(MoreInfoText);
            var HowToUse = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "HowToUse",
                "isVisible": true,
                "left": "9dp",
                "onClick": controller.AS_Button_d5ee3fa39cee4e70b921993b014b78eb,
                "skin": "CopyButtonSkinNormal",
                "top": "240dp",
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
                "left": "23dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "HOW TO USE",
                "textStyle": {},
                "top": "260dp",
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
                "left": "309dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "254dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowToUse = new voltmx.ui.Label({
                "id": "NarrowToUse",
                "isVisible": true,
                "left": "312dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "247dp",
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
                "left": "8dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "303dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.setDefaultUnit(voltmx.flex.DP);
            var HowToUseText = new voltmx.ui.RichText({
                "id": "HowToUseText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Take one softgel daily with water and a meal. \n    For best results, take at the same time each day. \n    Store in a cool, dry place out of direct sunlight. \n    Keep out of reach of children.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxHowToUseText.add(HowToUseText);
            var Ingredients = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Ingredients",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_a1266b1b00664e1fb98315a3811d2efb,
                "skin": "CopyButtonSkinNormal",
                "top": "422dp",
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
                "left": "30dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "INGREDIENTS",
                "textStyle": {},
                "top": "443dp",
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
                "left": "310dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "436dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowIngredients = new voltmx.ui.Label({
                "id": "NarrowIngredients",
                "isVisible": true,
                "left": "313dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "429dp",
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
                "left": "9dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "485dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.setDefaultUnit(voltmx.flex.DP);
            var IngredientsText = new voltmx.ui.RichText({
                "id": "IngredientsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Active Ingredients:\n    - Biotin (2500mcg)\n    - Vitamin C (60mg)\n    - Vitamin E (30IU)\n    - Zinc (15mg)\n    \n    Other Ingredients: Gelatin, Vegetable Oil, Glycerin, Water, Yellow Beeswax, Soy Lecithin.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxIngredientsText.add(IngredientsText);
            var Safety = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Safety",
                "isVisible": true,
                "left": "11dp",
                "onClick": controller.AS_Button_da2e49ec51ba4324a1a849c2687f9e12,
                "skin": "CopyButtonSkinNormal",
                "top": "625dp",
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
                "left": "29dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "SAFETY",
                "textStyle": {},
                "top": "645dp",
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
                "left": "311dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "639dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowSafetyLabel = new voltmx.ui.Label({
                "id": "NarrowSafetyLabel",
                "isVisible": true,
                "left": "314dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "632dp",
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
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "688dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxSafetyText.setDefaultUnit(voltmx.flex.DP);
            var SafetyText = new voltmx.ui.RichText({
                "id": "SafetyText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Consult your healthcare professional before use if you are pregnant, nursing, taking medications, or have a medical condition. \n    Discontinue use and consult your doctor if any adverse reactions occur. \n    Do not use if seal under cap is broken or missing.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxSafetyText.add(SafetyText);
            var Dimensions = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Dimensions",
                "isVisible": true,
                "left": "11dp",
                "onClick": controller.AS_Button_cf1ff59972374905841b6e69f695a8ca,
                "skin": "CopyButtonSkinNormal",
                "top": "865dp",
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
                "left": "21dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "DIMENSIONS",
                "textStyle": {},
                "top": "885dp",
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
                "left": "311dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "879dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowDimensionsLabel = new voltmx.ui.Label({
                "id": "NarrowDimensionsLabel",
                "isVisible": true,
                "left": "314dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "872dp",
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
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "928dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.setDefaultUnit(voltmx.flex.DP);
            var DimensionsText = new voltmx.ui.RichText({
                "id": "DimensionsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Product Dimensions: 2.5\" x 2.5\" x 4.5\"\n    Product Weight: 3.2 oz\n    Serving Size: 1 softgel\n    Servings Per Container: 90\n    Package Type: Plastic bottle with safety seal",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxDimensionsText.add(DimensionsText);
            var Reviews = new voltmx.ui.Button({
                "focusSkin": "CopyButtonSkinActive",
                "height": "63dp",
                "id": "Reviews",
                "isVisible": true,
                "left": "13dp",
                "onClick": controller.AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d,
                "skin": "CopyButtonSkinNormal",
                "top": "1059dp",
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
                "left": "23dp",
                "skin": "CopydefLabel0adc6dba82ebe4d",
                "text": "REVIEWS",
                "textStyle": {},
                "top": "1079dp",
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
                "left": "313dp",
                "skin": "CopydefLabel0a02838ef55a84e",
                "text": "+",
                "textStyle": {},
                "top": "1073dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NarrowReviewsLabel = new voltmx.ui.Label({
                "id": "NarrowReviewsLabel",
                "isVisible": true,
                "left": "316dp",
                "skin": "CopydefLabel0cbd059b03ead4f",
                "text": "-",
                "textStyle": {},
                "top": "1066dp",
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
                "left": "12dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "1122dp",
                "width": "97.05%",
                "appName": "RiteAidDemo2"
            }, {
                "paddingInPixel": false
            }, {});
            FlxReviewsText.setDefaultUnit(voltmx.flex.DP);
            var ReviewsText = new voltmx.ui.RichText({
                "id": "ReviewsText",
                "isVisible": true,
                "left": "17dp",
                "linkSkin": "CopydefRichTextLink",
                "skin": "CopydefRichTextNormal0cd32ced9b38649",
                "text": "Average Rating: 4.5/5 stars\n    Total Reviews: 1,247\n    \n    Top Review:\n    \"Great results after 3 months of use. My nails are stronger and my hair feels healthier. Would definitely recommend!\" - Sarah M.\n    \n    Recent Review:\n    \"Easy to swallow and no aftertaste. Been using for a month and starting to see improvement.\" - John D.",
                "top": "13dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxReviewsText.add(ReviewsText);
            FlxProductRelatedInformations.add(MoreInfo, MoreInforLabel, ExtendMoreInfo, NarrowMorInfo, FlxMoreInfoText, HowToUse, HowToUseLabel, ExtendHowToUse, NarrowToUse, FlxHowToUseText, Ingredients, IngredientsLabel, ExtendIngredients, NarrowIngredients, FlxIngredientsText, Safety, SafetyLabel, ExtendSafetyLabel, NarrowSafetyLabel, FlxSafetyText, Dimensions, DimensionsLabel, ExtendDimensionsLabel, NarrowDimensionsLabel, FlxDimensionsText, Reviews, ReviewsLabel, ExtendReviewsLabel, NarrowReviewsLabel, FlxReviewsText);
            FlxFrequentlyBoughtProduct.add(FrequentlyBoughtProductLabel, FlxSclFrequentlyBoughtProducts, FlxProductRelatedInformations);
            this.add(FlxProductImage, FlxProductDetails, FlxFrequentlyBoughtProduct);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "RiteAidDemo2",
            "info": {
                "kuid": "de3cc7bf1716453593e603a75b0ab250"
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