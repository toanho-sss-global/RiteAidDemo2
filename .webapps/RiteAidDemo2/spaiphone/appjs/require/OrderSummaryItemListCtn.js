define("OrderSummaryItemListCtn", function() {
    return function(controller) {
        var OrderSummaryItemListCtn = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100dp",
            "id": "OrderSummaryItemListCtn",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        OrderSummaryItemListCtn.setDefaultUnit(voltmx.flex.DP);
        var OrderSummaryItemImg = new voltmx.ui.Image2({
            "height": "73dp",
            "id": "OrderSummaryItemImg",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "cartproductimg.png",
            "top": "10dp",
            "width": "75dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var OrderSummaryProductName = new voltmx.ui.Label({
            "height": "50dp",
            "id": "OrderSummaryProductName",
            "isVisible": true,
            "left": "90dp",
            "skin": "CopydefLabel0g922c3fb878a40",
            "text": "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
            "textStyle": {},
            "top": "10dp",
            "width": "188dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var OrderSummaryProductQty = new voltmx.ui.Label({
            "id": "OrderSummaryProductQty",
            "isVisible": true,
            "left": "90dp",
            "skin": "CopydefLabel0fe621301271c44",
            "text": "Qty 1",
            "textStyle": {},
            "top": "60dp",
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
        var OrderSummaryProductPrice = new voltmx.ui.Label({
            "id": "OrderSummaryProductPrice",
            "isVisible": true,
            "right": "10dp",
            "skin": "CopydefLabel0c3a3615f377a41",
            "text": "$16.79",
            "textStyle": {},
            "top": "20dp",
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
        OrderSummaryItemListCtn.add(OrderSummaryItemImg, OrderSummaryProductName, OrderSummaryProductQty, OrderSummaryProductPrice);
        return OrderSummaryItemListCtn;
    }
})