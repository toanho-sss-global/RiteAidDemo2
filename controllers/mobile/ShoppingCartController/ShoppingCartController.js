define({
  CartProductList: [],

  CartCarouselProductList: [
    {
      CarouselProductImg: "cartproductimg.png",
      CarouselProductMade: "Nature Made",
      CarouselProductName: 'Skin With Biotin Softgels',
      CarouselPoductUnitQuantity: '90Ct',
      CarouselProductPrice: 'Price: $16.79',
    },
    {
      CarouselProductImg: "cartproductimg.png",
      CarouselProductMade: "Nature Made",
      CarouselProductName: 'Skin With Biotin Softgels',
      CarouselPoductUnitQuantity: '90Ct',
      CarouselProductPrice: 'Price: $16.79',
    },
    {
      CarouselProductImg: "cartproductimg.png",
      CarouselProductMade: "Nature Made",
      CarouselProductName: 'Skin With Biotin Softgels',
      CarouselPoductUnitQuantity: '90Ct',
      CarouselProductPrice: 'Price: $16.79',
    }
  ],

  initProductData: function () {
    var scope = this;
    var modifiedData = [];
    for (var i = 0; i < this.CartProductList.length; i++) {
      var item = this.CartProductList[i];

      var newItem = {
        lblID: item.id_product,
        id: item.id,
        lblDescription: item.lblDescription,
        lblCost: "$" + ((item.unitPrice * item.ProductQuantity) / 100).toFixed(2),
        unitPrice: item.unitPrice,
        DeleteIcon: {
          src: item.DeleteIcon,
          onClick: (function (index) {
            return function () {
              scope.DeleteProduct(index);
            };
          })(i)
        },
        ProductQuantity: item.ProductQuantity,
        img: item.img,
        PlusIcon: {
          src: item.PlusIcon,
          onClick: (function (index) {
            return function () {
              scope.increaseQuantity(index);
            };
          })(i)
        },
        MinusIcon: {
          src: item.MinusIcon,
          onClick: (function (index) {
            return function () {
              scope.decreaseQuantity(index);
            };
          })(i)
        }
      };

      modifiedData.push(newItem);
    }

    this.view.CartProductList.ProductList.setData(modifiedData);
    this.view.ProductListCarousel.ProductCarousel
      .setData(this.CartCarouselProductList);
    var mappedData = modifiedData.map(function (subItem) {
      return {
        id: subItem.id,
        OrderSummaryItemImg: subItem.img,
        OrderSummaryProductName: subItem.lblDescription,
        OrderSummaryProductQty: "Qty " + subItem.ProductQuantity,
        OrderSummaryProductPrice: subItem.lblCost
      };
    });
    voltmx.store.setItem("CartProductList", JSON.stringify(mappedData));
    this.calculateTotal();
  },

  GetCart: function () {
    var self = this;
    var url = "https://vendure.demo.universalcommerce.io/shop-api";
    var token = localStorage.getItem("vendure-auth-token");

    var httpclient = new voltmx.net.HttpRequest();

    httpclient.open(constants.HTTP_METHOD_POST, url);
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);

    var jsonStr2 = JSON.stringify({
      "query": "query ActiveOrder { activeOrder { id lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } currencyCode } } subTotalWithTax shippingWithTax totalWithTax totalQuantity currencyCode } }",
      "variables": {}
    });

    httpclient.send(jsonStr2);
    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4) {
        if (httpclient.status === 200) {
          var response = JSON.parse(httpclient.response);
          console.log("Get cart response:", response);
          self.handleCartProducts(response.data);
        }
      }
    };
  },

  handleCartProducts: function (itemCart) {
    var self = this;
    if (!itemCart || !itemCart.activeOrder || !itemCart.activeOrder.lines) {
      return;
    }

    try {
      var formattedProducts = itemCart.activeOrder.lines.map(item => {
        return {
          id_product: item.id,
          id: item.productVariant.id,
          lblDescription: item.productVariant.name,
          unitPrice: item.productVariant.priceWithTax,
          DeleteIcon: 'trashicon.png',
          MinusIcon: 'minusicon.png',
          PlusIcon: 'plusicon.png',
          ProductQuantity: item.quantity,
          img: item.productVariant.featuredAsset.preview
        };
      });
      this.CartProductList = formattedProducts;
      console.log("Check in setItem:", this.CartProductList);
      self.initProductData();
    } catch (error) {
      console.error("Get Cart Error:", error);
    }
  },

  DeleteProduct: function (index) {
    var self = this;
    var segmentData = this.view.CartProductList.ProductList.data;
    var idDelete = segmentData[index].lblID;
    var httpclient = new voltmx.net.HttpRequest();
    var token = localStorage.getItem("vendure-auth-token");

    httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization", `Bearer ${token}`);


    var jsonStr2 = JSON.stringify({
      "query": "mutation Mutation($orderLineId: ID!) { removeOrderLine(orderLineId: $orderLineId) { ... on Order { id lines { id linePriceWithTax quantity productVariant { id name priceWithTax assets { preview } product { assets { preview } } currencyCode } } totalWithTax totalQuantity currencyCode } ... on OrderModificationError { errorCode message } } }",
      "variables": {
        "orderLineId": idDelete
      }
    });
    httpclient.send(jsonStr2);

    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4 && httpclient.status === 200) {
        var response = JSON.parse(httpclient.response);
        if (response) {
          console.log("Delete Success");
          self.GetCart();
        }
      }
    }
  },


  increaseQuantity: function (rowIndex) {
    var segmentData = this.view.CartProductList.ProductList.data;
    var newQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1;

    segmentData[rowIndex].ProductQuantity = newQuantity.toString();
    segmentData[rowIndex].lblCost = "$"
      + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);

    // Instead of setData(), use setDataAt() to update only the changed row
    this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
    this.calculateTotal();

    // Map the data to the new format
    var mappedData = segmentData.map(function (item) {
      return {
        id: item.id,
        OrderSummaryItemImg: item.img,
        OrderSummaryProductName: item.lblDescription,
        OrderSummaryProductQty: "Qty " + item.ProductQuantity,
        OrderSummaryProductPrice: item.lblCost
      };
    });

    // Store the mapped cart data
    voltmx.store.setItem("CartProductList", JSON.stringify(mappedData));
  },

  decreaseQuantity: function (rowIndex) {
    var segmentData = this.view.CartProductList.ProductList.data;
    var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);

    if (currentQuantity > 1) {
      var newQuantity = currentQuantity - 1;
      segmentData[rowIndex].ProductQuantity = newQuantity.toString();
      segmentData[rowIndex].lblCost = "$"
        + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);

      // Use setDataAt() to update only the modified row
      this.view.CartProductList.ProductList
        .setDataAt(segmentData[rowIndex], rowIndex);
      this.calculateTotal();

      // Map the data to the new format
      var mappedData = segmentData.map(function (item) {
        return {
          id: item.id,
          OrderSummaryItemImg: item.img,
          OrderSummaryProductName: item.lblDescription,
          OrderSummaryProductQty: "Qty " + item.ProductQuantity,
          OrderSummaryProductPrice: item.lblCost
        };
      });

      // Store the mapped cart data
      voltmx.store.setItem("CartProductList",
        JSON.stringify(mappedData));
    }
  },

  calculateTotal: function () {
    var segmentData = this.view.CartProductList.ProductList.data;
    var totalPrice = 0;

    for (var i = 0; i < segmentData.length; i++) {
      var item = segmentData[i];
      var quantity = parseInt(item.ProductQuantity, 10);
      var unitPrice = item.unitPrice;
      totalPrice += quantity * unitPrice;
    }
    this.view.CheckoutAndPromoteContainer.
      EstContainer.EstAmount.text = "$" + (totalPrice / 100).toFixed(2);
  },

  navigateToCheckout: function () {
    var taxText = this.view.CheckoutAndPromoteContainer
      .TaxContainer.TaxAmountLabel.text;
    var cartTotalText = this.view.CheckoutAndPromoteContainer
      .EstContainer.EstAmount.text;

    // Remove "$" and "%" symbols, then convert to numbers
    var taxPercentage = parseFloat(taxText.replace("%", "").trim());
    var cartTotalPrice = parseFloat(cartTotalText.replace("$", "").trim());

    // Convert tax percentage to decimal and calculate the final total
    var taxAmount = (cartTotalPrice * taxPercentage) / 100;
    var finalTotalPrice = cartTotalPrice + taxAmount;

    console.log("Final Total Price: ", finalTotalPrice.toFixed(2));
    // Store the updated total price correctly
    voltmx.store.setItem("CartTotalPrice", "$" + finalTotalPrice.toFixed(2));

    voltmx.store.setItem("CartItemQuantity", this.CartProductList.length);
    var navObj = new voltmx.mvc.Navigation("CheckoutAddress");
    navObj.navigate();
  },
});
