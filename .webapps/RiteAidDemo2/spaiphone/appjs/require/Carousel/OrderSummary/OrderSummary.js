define(function() {
    return function(controller) {
        var OrderSummary = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "356dp",
            "id": "OrderSummary",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f26e99be6f1040",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "OrderSummary"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "OrderSummary"), extendConfig({}, controller.args[2], "OrderSummary"));
        OrderSummary.setDefaultUnit(voltmx.flex.DP);
        var OrderSummaryLabel = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "OrderSummaryLabel",
            "isVisible": true,
            "left": "32dp",
            "skin": "defLabel",
            "text": "Order Summary",
            "textStyle": {},
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "OrderSummaryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryLabel"));
        var OrderSummaryTotalLabel = new voltmx.ui.Label(extendConfig({
            "id": "OrderSummaryTotalLabel",
            "isVisible": true,
            "left": "19dp",
            "skin": "CopydefLabel0d0f4f0b048dd41",
            "text": "Est. Total",
            "textStyle": {},
            "top": "79dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "OrderSummaryTotalLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryTotalLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryTotalLabel"));
        var OrderSummaryTotal = new voltmx.ui.Label(extendConfig({
            "id": "OrderSummaryTotal",
            "isVisible": true,
            "right": "20dp",
            "skin": "CopydefLabel0fc02044f65e747",
            "text": "$8.19",
            "textStyle": {},
            "top": "79dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "OrderSummaryTotal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryTotal"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "OrderSummaryTotal"));
        var InMyCartCtn = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "37dp",
            "id": "InMyCartCtn",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0h4d45619755a41",
            "top": "127dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "InMyCartCtn"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "InMyCartCtn"), extendConfig({}, controller.args[2], "InMyCartCtn"));
        InMyCartCtn.setDefaultUnit(voltmx.flex.DP);
        var InMyCartQuantity = new voltmx.ui.Label(extendConfig({
            "id": "InMyCartQuantity",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopydefLabel0j7d1c107d00c4a",
            "text": "In My Cart | 1 Items",
            "textStyle": {},
            "top": "7dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "InMyCartQuantity"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "InMyCartQuantity"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "InMyCartQuantity"));
        var InMyCartDetail = new voltmx.ui.Label(extendConfig({
            "id": "InMyCartDetail",
            "isVisible": true,
            "right": 10,
            "skin": "CopydefLabel0i732171cad3a4a",
            "text": "Details^",
            "textStyle": {},
            "top": "7dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "InMyCartDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "InMyCartDetail"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "InMyCartDetail"));
        InMyCartCtn.add(InMyCartQuantity, InMyCartDetail);
        var OrderSummaryItemList = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "49.96%",
            "data": [{
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }, {
                "OrderSummaryItemImg": "cartproductimg.png",
                "OrderSummaryProductName": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
                "OrderSummaryProductPrice": "$16.79",
                "OrderSummaryProductQty": "Label"
            }],
            "groupCells": false,
            "height": "100dp",
            "id": "OrderSummaryItemList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "OrderSummaryItemListCtn",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "237dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "OrderSummaryItemImg": "OrderSummaryItemImg",
                "OrderSummaryItemListCtn": "OrderSummaryItemListCtn",
                "OrderSummaryProductName": "OrderSummaryProductName",
                "OrderSummaryProductPrice": "OrderSummaryProductPrice",
                "OrderSummaryProductQty": "OrderSummaryProductQty"
            },
            "width": "90%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, controller.args[0], "OrderSummaryItemList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "OrderSummaryItemList"), extendConfig({}, controller.args[2], "OrderSummaryItemList"));
        var ShipToAddressLabel = new voltmx.ui.Label(extendConfig({
            "id": "ShipToAddressLabel",
            "isVisible": true,
            "left": "19dp",
            "skin": "CopydefLabel0hf58eb5a59694b",
            "text": "Ship to Address ",
            "textStyle": {},
            "top": "193dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "ShipToAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ShipToAddressLabel"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "ShipToAddressLabel"));
        OrderSummary.add(OrderSummaryLabel, OrderSummaryTotalLabel, OrderSummaryTotal, InMyCartCtn, OrderSummaryItemList, ShipToAddressLabel);
        return OrderSummary;
    }
})