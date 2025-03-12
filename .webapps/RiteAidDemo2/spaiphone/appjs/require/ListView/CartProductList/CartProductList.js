define(function() {
    return function(controller) {
        var CartProductList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "CartProductList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "CartProductList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "CartProductList"), extendConfig({}, controller.args[2], "CartProductList"));
        CartProductList.setDefaultUnit(voltmx.flex.DP);
        var ProductList = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/d8/xfovgufizvy4rjr6sfup-fotor-20250225162552__preview.png",
                "lblCost": "Price: $16.79",
                "lblDescription": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct"
            }, {
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://www.riteaid.com/shop/media/catalog/product/b/t/btyhvquf9je0a3cxmcoe.jpg",
                "lblCost": "Price: $19.99",
                "lblDescription": "Skin with Biotin Softgels"
            }, {
                "DeleteIcon": "trashicon.png",
                "MinusIcon": "minusicon.png",
                "PlusIcon": "plusicon.png",
                "ProductQuantity": "1",
                "img": "https://www.riteaid.com/shop/media/catalog/product/s/8/s8uczbbfmqpcqosjcenp.jpg",
                "lblCost": "Price: $11.99",
                "lblDescription": "Hair Skin and Nails"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "ProductList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg04e93bcaf53d242",
            "rowSkin": "Copyseg0cddf1f7e9db24a",
            "rowTemplate": "CopyflxSeg2",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "c8c7cc00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxSeg2": "CopyflxSeg2",
                "DeleteIcon": "DeleteIcon",
                "MinusIcon": "MinusIcon",
                "PlusIcon": "PlusIcon",
                "ProductQuantity": "ProductQuantity",
                "flxImg": "flxImg",
                "img": "img",
                "lblCost": "lblCost",
                "lblDescription": "lblDescription"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ProductList"), extendConfig({}, controller.args[2], "ProductList"));
        CartProductList.add(ProductList);
        return CartProductList;
    }
})