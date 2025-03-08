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
    segmentData[rowIndex].lblCost = "$" + (segmentData[rowIndex].unitPrice * newQuantity).toFixed(2);

    // Instead of setData(), use setDataAt() to update only the changed row
    this.view.ProductSimple.segTemp.setDataAt(segmentData[rowIndex], rowIndex);
    this.calculateTotal();

    // Map the data to the new format
    var mappedData = segmentData.map(function(item) {
        return {
            OrderSummaryItemImg: item.img, 
            OrderSummaryProductName: item.lblDescription,
            OrderSummaryProductQty: "Qty " + item.ProductQuantity,  
            OrderSummaryProductPrice: item.lblCost
        };
    });

    // Store the mapped cart data
    voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
},




decreaseQuantity: function(rowIndex) {
    var segmentData = this.view.ProductSimple.segTemp.data;
    var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);

    if (currentQuantity > 1) {
        var newQuantity = currentQuantity - 1;
        segmentData[rowIndex].ProductQuantity = newQuantity.toString();
        segmentData[rowIndex].lblCost = "$" + (segmentData[rowIndex].unitPrice * newQuantity).toFixed(2);

        // Use setDataAt() to update only the modified row
        this.view.ProductSimple.segTemp.setDataAt(segmentData[rowIndex], rowIndex);
        this.calculateTotal();

        // Map the data to the new format
        var mappedData = segmentData.map(function(item) {
            return {
                OrderSummaryItemImg: item.img, 
                OrderSummaryProductName: item.lblDescription,
                OrderSummaryProductQty: "Qty " + item.ProductQuantity,  
                OrderSummaryProductPrice: item.lblCost
            };
        });

        // Store the mapped cart data
        voltmx.store.setItem("UpdatedCartProductList", JSON.stringify(mappedData));
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
},
  
  navigateToCheckout:function () {
  var taxText = this.view.CheckoutAndPromoteContainer.TaxContainer.TaxAmountLabel.text;
var cartTotalText = this.view.CheckoutAndPromoteContainer.EstContainer.EstAmount.text;

// Remove "$" and "%" symbols, then convert to numbers
var taxPercentage = parseFloat(taxText.replace("%", "").trim());
var cartTotalPrice = parseFloat(cartTotalText.replace("$", "").trim());

// Convert tax percentage to decimal and calculate the final total
var taxAmount = (cartTotalPrice * taxPercentage) / 100;
var finalTotalPrice = cartTotalPrice + taxAmount;

// Store the updated total price
voltmx.store.setItem("CartTotalPrice", "$" + finalTotalPrice.toFixed(2));

    voltmx.store.setItem("CartItemQuantity",this.CartProductList.length);
    var navObj = new voltmx.mvc.Navigation("CheckoutAddress");
	navObj.navigate();
  }

});
