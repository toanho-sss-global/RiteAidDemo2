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
      this.view.CheckoutShippingMethodContainer.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice");
      this.view.CheckoutShippingMethodContainer.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
      var cartData = voltmx.store.getItem("CartProductList");
      if (cartData) {
        var parsedCartData = JSON.parse(cartData);
        this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
      }   
    },

    showMap: function () {
      var selectedKey = this.view.ShippingOptions.selectedKey;
      if(selectedKey === "PickFormPharmacy"){
        this.view.MapPopupDimScreen.isVisible = true;
      }
    },
  showShippingConfirmation:function (){
    var selectedKey = this.view.ShippingOptions.selectedKey;
      if(selectedKey === "ShipFormPharmacy"){
        this.view.ShippingConfirmationDImScreen.isVisible = true;
      }
  },

    hideMap: function () {
        this.view.MapPopupDimScreen.isVisible = false;
},
  stopPropagation: function (){
     event.stopPropagation();
  }


});
