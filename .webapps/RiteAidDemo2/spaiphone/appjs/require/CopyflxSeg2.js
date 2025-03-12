define("CopyflxSeg2", function() {
    return function(controller) {
        var CopyflxSeg2 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "CopyflxSeg2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0e8caf6165cdd49",
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyflxSeg2.setDefaultUnit(voltmx.flex.DP);
        var flxImg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "75%",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "right": "73%",
            "skin": "CopyCopyslFbox3",
            "width": "40%",
            "zIndex": 1,
            "appName": "RiteAidDemo2"
        }, {
            "paddingInPixel": false
        }, {});
        flxImg.setDefaultUnit(voltmx.flex.DP);
        var img = new voltmx.ui.Image2({
            "height": "100%",
            "id": "img",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyslImage5",
            "src": "konymp_pl_shoe_1_list.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(img);
        var lblDescription = new voltmx.ui.Label({
            "height": "22%",
            "id": "lblDescription",
            "isVisible": true,
            "right": "0",
            "skin": "CopyslLabel0a625a35ab5ef44",
            "text": "Unisex Black Runnning Shoe Product description lines",
            "textStyle": {},
            "top": "18%",
            "width": "57%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblCost = new voltmx.ui.Label({
            "id": "lblCost",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopyslLabel0f425e8b5116f4e",
            "text": "$119.95",
            "textStyle": {},
            "top": "44.17%",
            "width": "57%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var MinusIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "MinusIcon",
            "isVisible": true,
            "left": "156dp",
            "onTouchStart": controller.AS_Image_g216879dd24a43d59d3e9c14cd26082c,
            "skin": "slImage",
            "src": "minusicon.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var PlusIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "PlusIcon",
            "isVisible": true,
            "left": "273dp",
            "onTouchStart": controller.AS_Image_a2b87f19c9c44e6193c7fbc5cfb7d682,
            "skin": "slImage",
            "src": "plusicon1.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var ProductQuantity = new voltmx.ui.Label({
            "id": "ProductQuantity",
            "isVisible": true,
            "left": "217dp",
            "skin": "CopydefLabel0a691a4569d9543",
            "text": "1",
            "textStyle": {},
            "top": "123dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [4, 0, 4, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var DeleteIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "DeleteIcon",
            "isVisible": true,
            "left": "323dp",
            "skin": "slImage",
            "src": "trashicon.png",
            "top": "112dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxSeg2.add(flxImg, lblDescription, lblCost, MinusIcon, PlusIcon, ProductQuantity, DeleteIcon);
        return CopyflxSeg2;
    }
})