define(function() {
    return function(controller) {
        var ProductSimple = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ProductSimple",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "90%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "ProductSimple"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ProductSimple"), extendConfig({}, controller.args[2], "ProductSimple"));
        ProductSimple.setDefaultUnit(voltmx.flex.DP);
        var segTemp = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "img": "fi4ohuxot842j9f5bjqg__preview.png",
                "lblCategory": "Grocery",
                "lblCost": "$11.99",
                "lblCostDiscount": "Label",
                "lblDescription": "Rite Aid Passion Fruit Triple Hydration Electrolyte Drink Mix - 3.49 oz",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/f1/bpdavryry2kptkyfej93__preview.webp",
                "lblCategory": "Gummy",
                "lblCost": "$38.39",
                "lblCostDiscount": "Label",
                "lblDescription": "Qunol Turmeric & Ginger Gummy - 60 ct",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/3e/fi4ohuxot842j9f5bjqg__preview.webp",
                "lblCategory": "Moisturizer",
                "lblCost": "$5.28",
                "lblCostDiscount": "Label",
                "lblDescription": "Olay Regenerist Vitamin C + Peptide 24 Face Moisturizer - 1.7 oz",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/8a/xfovgufizvy4rjr6sfup__preview.webp",
                "lblCategory": "Softgel",
                "lblCost": "$8.40",
                "lblCostDiscount": "Label",
                "lblDescription": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/c6/kv5nocv4wgdpifeg87l8__02__preview.webp",
                "lblCategory": "Wash",
                "lblCost": "$1.26",
                "lblCostDiscount": "Label",
                "lblDescription": "Listerine Total Care Anticavity Fluoride Mouthwash - Fresh Mint, 1 lt",
                "lblDiscount": "90% Off"
            }, {
                "img": "https://vendure.demo.universalcommerce.io/assets/preview/72/n2qipva5zy4fv9irdokq__preview.webp",
                "lblCategory": "Grocery",
                "lblCost": "$9.00",
                "lblCostDiscount": "Label",
                "lblDescription": "Lindt Gourmet Truffles Box - 6.8 oz",
                "lblDiscount": "90% Off"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segTemp",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg04e93bcaf53d242",
            "rowSkin": "Copyseg0a448c8538ce24b",
            "rowTemplate": "FlxSeg",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
            "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": true,
            "separatorThickness": 5,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "FlxSeg": "FlxSeg",
                "flxImg": "flxImg",
                "img": "img",
                "itemContent": "itemContent",
                "lblCategory": "lblCategory",
                "lblCost": "lblCost",
                "lblCostDiscount": "lblCostDiscount",
                "lblDescription": "lblDescription",
                "lblDiscount": "lblDiscount"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "segTemp"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTemp"), extendConfig({}, controller.args[2], "segTemp"));
        ProductSimple.add(segTemp);
        return ProductSimple;
    }
})