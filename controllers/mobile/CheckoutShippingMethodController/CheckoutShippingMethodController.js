define({ 
    updateProgressBar: function () {
      this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
    },

    addSpaceToRadioGroup: function (){
      this.view.ShippingModeContainer.ShippingOptions.lineSpace = 10;
    },

    getOrderSummaryData: function() {  
      this.view.CheckoutShippingMethodContainer.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice") || "0";
      this.view.CheckoutShippingMethodContainer.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
      var cartData = voltmx.store.getItem("CartProductList");
      if (cartData) {
        var parsedCartData = JSON.parse(cartData);
        this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
      }   
    },

    showMap: function () {
      var selectedKey = this.view.ShippingOptions.selectedKey;
      if(selectedKey === "2"){
        this.view.MapPopupDimScreen.isVisible = true;
      }
    },
  showShippingConfirmation:function (){
    var selectedKey = this.view.ShippingOptions.selectedKey;
      if(selectedKey === "1"){
        this.view.ShippingConfirmationDImScreen.isVisible = true;
      }
  },

    hideMap: function () {
        this.view.MapPopupDimScreen.isVisible = false;
},
  stopPropagation: function (){
     event.stopPropagation();
  },
  
  ApiShipingMethod: function() {
    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST,"https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    
    var jsonStr2 = JSON.stringify({
    "query": "mutation SetOrderShippingMethod($shippingMethodIds: [ID!]!) { setOrderShippingMethod(shippingMethodId: $shippingMethodIds) { ... on Order { id createdAt updatedAt type orderPlacedAt code state active totalQuantity subTotal subTotalWithTax currencyCode shipping shippingWithTax total totalWithTax } ... on OrderModificationError { errorCode message } ... on IneligibleShippingMethodError { errorCode message } ... on NoActiveOrderError { errorCode message } } }",
    "variables": {
        "shippingMethodIds": "4"
    }
    });
    httpclient.send(jsonStr2);
    
    httpclient.onReadyStateChange = function () {
        if (httpclient.readyState === 4 && httpclient.status === 200) {
          var response = JSON.parse(httpclient.response);
           var itemData = response.data;
          if(itemData) {
            var nav = new voltmx.mvc.Navigation("CheckoutPaymentMethod");
            nav.navigate();
          }
        }
  	}
  },
  
  getPickUpStore: function (){
     var cartDataJson = voltmx.store.getItem("CartProductList");
    cartData = JSON.parse(cartDataJson);
   
    
    
    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST,"https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    console.log("cart data", cartData);
    var selectedKey = this.view.ShippingOptions.selectedKey;
      if(selectedKey === "2"){
         var idsList = JSON.stringify(cartData.map(item => item.id.toString()));
    var getPickupStoresJson = JSON.stringify({
  "query": "query GetProductVariants($ids: [String!]!) { productVariants(options: { filter: { id: { in: $ids } } }) { items { id name sku price featuredAsset { preview } channels { id token code seller { id name customFields { googleMapLink latitude longitude } } } } } }",
  "variables": {
    "ids": "[\"92\", \"90\", \"89\"]"
  }
});
    httpclient.send(getPickupStoresJson);
      }
  }



});
