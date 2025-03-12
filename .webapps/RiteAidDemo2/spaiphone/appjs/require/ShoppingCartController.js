define("userShoppingCartController", {
    CartProductList: [],
    CartCarouselProductList: [{
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }, {
        CarouselProductImg: "cartproductimg.png",
        CarouselProductMade: "Nature Made",
        CarouselProductName: 'Skin With Biotin Softgels',
        CarouselPoductUnitQuantity: '90Ct',
        CarouselProductPrice: 'Price: $16.79',
    }],
    initProductData: function() {
        var scope = this;
        var modifiedData = [];
        for (var i = 0; i < this.CartProductList.length; i++) {
            var item = this.CartProductList[i];
            var newItem = {
                lblDescription: item.lblDescription,
                lblCost: "$" + ((item.unitPrice * item.ProductQuantity) / 100).toFixed(2),
                unitPrice: item.unitPrice,
                DeleteIcon: item.DeleteIcon,
                ProductQuantity: item.ProductQuantity,
                img: item.img,
                PlusIcon: {
                    src: item.PlusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.increaseQuantity(index);
                        };
                    })(i)
                },
                MinusIcon: {
                    src: item.MinusIcon,
                    onClick: (function(index) {
                        return function() {
                            scope.decreaseQuantity(index);
                        };
                    })(i)
                }
            };
            modifiedData.push(newItem);
        }
        this.view.CartProductList.ProductList.setData(modifiedData);
        this.view.ProductListCarousel.ProductCarousel.setData(this.CartCarouselProductList);
        var mappedData = modifiedData.map(function(item) {
            return {
                OrderSummaryItemImg: item.img,
                OrderSummaryProductName: item.lblDescription,
                OrderSummaryProductQty: "Qty " + item.ProductQuantity,
                OrderSummaryProductPrice: item.lblCost
            };
        });
        voltmx.store.setItem("CartProductList", JSON.stringify(mappedData));
        this.calculateTotal();
    },
    handleCartProducts: function() {
        var itemCart = voltmx.store.getItem("add_Item_To_Cart");
        if (!itemCart) {
            return;
        }
        try {
            var itemCartJSON = JSON.parse(itemCart);
            var flatArray = itemCartJSON.flat();
            this.CartProductList = flatArray;
            console.log("Updated cart product list:", flatArray);
        } catch (error) {
            console.error("JSON Parsing Error:", error);
        }
    },
    increaseQuantity: function(rowIndex) {
        var segmentData = this.view.CartProductList.ProductList.data;
        var newQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1;
        segmentData[rowIndex].ProductQuantity = newQuantity.toString();
        segmentData[rowIndex].lblCost = "$" + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);
        // Instead of setData(), use setDataAt() to update only the changed row
        this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
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
        var segmentData = this.view.CartProductList.ProductList.data;
        var currentQuantity = parseInt(segmentData[rowIndex].ProductQuantity, 10);
        if (currentQuantity > 1) {
            var newQuantity = currentQuantity - 1;
            segmentData[rowIndex].ProductQuantity = newQuantity.toString();
            segmentData[rowIndex].lblCost = "$" + ((segmentData[rowIndex].unitPrice * newQuantity) / 100).toFixed(2);
            // Use setDataAt() to update only the modified row
            this.view.CartProductList.ProductList.setDataAt(segmentData[rowIndex], rowIndex);
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
    navigateToCheckout: function() {
        var taxText = this.view.CheckoutAndPromoteContainer.TaxContainer.TaxAmountLabel.text;
        var cartTotalText = this.view.CheckoutAndPromoteContainer.EstContainer.EstAmount.text;
        // Remove "$" and "%" symbols, then convert to numbers
        var taxPercentage = parseFloat(taxText.replace("%", "").trim());
        var cartTotalPrice = parseFloat(cartTotalText.replace("$", "").trim());
        // Convert tax percentage to decimal and calculate the final total
        var taxAmount = (cartTotalPrice * taxPercentage) / 100;
        var finalTotalPrice = cartTotalPrice + taxAmount;
        // Store the updated total price
        voltmx.store.setItem("CartTotalPrice", "$" + (finalTotalPrice / 100).toFixed(2));
        voltmx.store.setItem("CartItemQuantity", this.CartProductList.length);
        var navObj = new voltmx.mvc.Navigation("CheckoutAddress");
        navObj.navigate();
    },
    fetchGetOrders: function(orderId) {
        var self = this;
        console.log("Check fetchGetOrders: ", orderId);
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        var jsonStr2 = JSON.stringify({
            "query": "query GetOrder($orderId: ID!) { order(id: $orderId) { id orderPlacedAt subTotalWithTax shippingWithTax totalWithTax currencyCode state payments { metadata } customFields { deliveryType } lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } currencyCode } } shippingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } billingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } } }",
            "variables": {
                "orderId": orderId
            }
        });
        httpclient.send(jsonStr2);
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4 && httpclient.status === 200) {
                var response = JSON.parse(httpclient.response);
                console.log("check response: ", response);
                //           self.handleProducts(response.data);
            }
        };
    },
    handleOrderProducts: function(data) {
        if (!data || !data.order || !data.order.lines || !Array.isArray(data.order.lines)) {
            return;
        }
        var formattedProducts = data.order.lines.map(item => {
            return {
                id: item.productVariant.id,
                lblDescription: item.productVariant.name,
                unitPrice: item.linePriceWithTax,
                DeleteIcon: 'trashicon.png',
                MinusIcon: 'minusicon.png',
                PlusIcon: 'plusicon.png',
                ProductQuantity: item.quantity,
                img: item.productVariant.featuredAsset.preview
            };
        });
        this.CartProductList = formattedProducts;
        console.log("Update order list:", this.CartProductList);
    },
});
define("ShoppingCartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ProceedToCheckoutBtn **/
    AS_Button_f23d0190875342bc9f3e99910c207e85: function AS_Button_f23d0190875342bc9f3e99910c207e85(eventobject) {
        var self = this;
        return self.navigateToCheckout.call(this);
    },
    /** init defined for ShoppingCart **/
    AS_Form_bfff2beaea934b99a589bf3185308ed2: function AS_Form_bfff2beaea934b99a589bf3185308ed2(eventobject) {
        var self = this;
        return self.initProductData.call(this);
    },
    /** preShow defined for ShoppingCart **/
    AS_Form_h5482255e0214ce98ca8088ba317e43b: function AS_Form_h5482255e0214ce98ca8088ba317e43b(eventobject) {
        var self = this;
        self.handleCartProducts.call(this);
        self.initProductData.call(this);
    }
});
define("ShoppingCartController", ["userShoppingCartController", "ShoppingCartControllerActions"], function() {
    var controller = require("userShoppingCartController");
    var controllerActions = ["ShoppingCartControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
