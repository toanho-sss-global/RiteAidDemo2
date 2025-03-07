define({  
    CartProductList: [  
        { lblDescription : "test", 
         unitPrice      : 50,
         DeleteIcon     : 'trashicon.png',
         MinusIcon      : 'minusicon.png',
         PlusIcon       : 'plusicon.png',
         ProductQuantity: '1',
         img            : 'cartproductimg.png' },
        { lblDescription : "test",
         unitPrice	     : 50, 
         DeleteIcon     : 'trashicon.png',
         MinusIcon      : 'minusicon.png',
         PlusIcon       : 'plusicon.png', 
         ProductQuantity: '1', 
         img            : 'cartproductimg.png' }, 
        { lblDescription : "test",
         unitPrice      : 50,
         DeleteIcon     : 'trashicon.png',
         MinusIcon      : 'minusicon.png',
         PlusIcon       : 'plusicon.png',
         ProductQuantity: '1',
         img            : 'cartproductimg.png' }
    ],
  
  CartCarouselProductList:[
     { CarouselProductImg : "cartproductimg.png", 
         CarouselProductMade     : "Nature Made",
          CarouselProductName   : 'Skin With Biotin Softgels',
         CarouselPoductUnitQuantity      : '90Ct',
         CarouselProductPrice      : 'Price: $16.79',},
       { CarouselProductImg : "cartproductimg.png", 
         CarouselProductMade     : "Nature Made",
          CarouselProductName   : 'Skin With Biotin Softgels',
         CarouselPoductUnitQuantity      : '90Ct',
         CarouselProductPrice      : 'Price: $16.79',},
       { CarouselProductImg : "cartproductimg.png", 
         CarouselProductMade     : "Nature Made",
          CarouselProductName   : 'Skin With Biotin Softgels',
         CarouselPoductUnitQuantity      : '90Ct',
         CarouselProductPrice      : 'Price: $16.79',}
  ],

    initProductData: function () {  
        var scope = this;

        var modifiedData = [];
        for (var i = 0; i < this.CartProductList.length; i++) {
            var item = this.CartProductList[i];

            var newItem = {
                lblDescription : item.lblDescription,
                lblCost        : "$" + item.unitPrice.toFixed(2),
                unitPrice      : item.unitPrice, 
                DeleteIcon     : item.DeleteIcon,
                ProductQuantity: item.ProductQuantity,
                img            : item.img,
                PlusIcon       : {
                    src    : item.PlusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.increaseQuantity(index);
                        };
                    })(i)
                },
                MinusIcon: {
                    src    : item.MinusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.decreaseQuantity(index);
                        };
                    })(i)
                }
            };

            modifiedData.push(newItem);
        }

        this.view.ProductSimple.segTemp.setData(modifiedData);
      	this.view.ProductListCarousel.ProductCarousel.setData(this.CartCarouselProductList);
      this.calculateTotal();
    },

    increaseQuantity: function(rowIndex) {

    var segmentData = this.view.ProductSimple.segTemp.data;


    var newQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1;
    segmentData[rowIndex].ProductQuantity = newQuantity.toString();

    var unitPrice = segmentData[rowIndex].unitPrice;  
    segmentData[rowIndex].lblCost = "$" + (unitPrice * newQuantity);

    this.view.ProductSimple.segTemp.setDataAt(segmentData[rowIndex], rowIndex);
      this.calculateTotal();
},

decreaseQuantity: function(rowIndex) {

    var segmentData = this.view.ProductSimple.segTemp.data;


    var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);
    if (currentQuantity > 1) {
        var newQuantity = currentQuantity - 1;
        segmentData[rowIndex].ProductQuantity = newQuantity.toString();

        var unitPrice = segmentData[rowIndex].unitPrice;  
        segmentData[rowIndex].lblCost = "$" + (unitPrice * newQuantity);

        this.view.ProductSimple.segTemp
          .setDataAt(segmentData[rowIndex], rowIndex);
     this.calculateTotal();
    }
},
 calculateTotal: function() {
    var segmentData = this.view.ProductSimple.segTemp.data;
    var totalPrice = 0;

    for (var i = 0; i < segmentData.length; i++) {
        var item = segmentData[i];
        var quantity = parseInt(item.ProductQuantity, 10);
        var unitPrice = item.unitPrice;
        totalPrice += quantity * unitPrice;
    }
  
        this.view.CheckoutAndPromoteContainer.
        EstContainer.EstAmount.text = "$" + totalPrice.toFixed(2);
}

});
