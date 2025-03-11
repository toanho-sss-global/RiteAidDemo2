define({ 
  updateProgressBar: function () {
      this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
    },

    getOrderSummaryData: function() {  
      this.view.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice");
       this.view.CheckoutPayLabel.text = "Pay " + voltmx.store.getItem("CartTotalPrice");
      this.view.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
      var cartData = voltmx.store.getItem("CartProductList");
      if (cartData) {
        var parsedCartData = JSON.parse(cartData);
        this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
      }   
    },
  
   selectedValue: "PayPalRadioBtn", 

  selectRadio: function (widget) {
    if (widget) {
      this.selectedValue = widget.id;
      console.log("Selected Radio Button ID: " + this.selectedValue);
      this.updateRadioButtons(); 
    } else {
      console.log("Widget is undefined");
    }
  },

  updateRadioButtons: function () {
    var radioButtons = [
      this.view.PayPalRadioBtn,
      this.view.ApplePayRadioBtn,
      this.view.GooglePayRadioBtn,
      this.view.HSARadioBtn,
      this.view.FSARadioBtn,
      this.view.LoyaltyPtnRadioBtn,
      this.view.AfterPayRadioBtn,
      this.view.CreditDebitRadioBtn
    ];

    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i]) {
        radioButtons[i].selectedKey = "";
      }
    }


    var selectedRadio = this.view[this.selectedValue];
    if (selectedRadio) {
      selectedRadio.selectedKey = selectedRadio.masterData[0][0];
    }

    this.view.forceLayout();
  },
  
 displayDinamicCheckoutContent: function () {
    var containerMap = {
        "PayPalRadioBtn": this.view.PayPalDynamicCheckoutCtn,
        "ApplePayRadioBtn": this.view.ApplePayDynamicCheckoutCtn,
        "GooglePayRadioBtn": this.view.GooglePayDynamicCheckoutCtn,
        "HSARadioBtn": this.view.HSADynamicCheckoutCtn,
        "FSARadioBtn": this.view.FSADynamicCheckoutCtn,
        "LoyaltyPtnRadioBtn": this.view.LoyaltyPointCheckoutCtn,
    };

    // If switching away from PayPal, reset child containers
    if (this.selectedValue === "PayPalRadioBtn") {
        this.hideCreditCardInfoInput(); // Ensure billing form is hidden
        this.view.ShippingAddressCtn.isVisible = false; // Close shipping address
        this.view.forceLayout();
    }

    // Hide all dynamic checkout containers
    for (var key in containerMap) {
        if (containerMap[key]) {
            containerMap[key].isVisible = false;
        }
    }

    var selectedContainer = containerMap[this.selectedValue];
    if (selectedContainer) {
        selectedContainer.isVisible = true;
        this.view.forceLayout();

        var containerHeight = selectedContainer.frame.height;
        var innerContainerBaseHeight = 510;
        var outerContainerBaseHeight = 600;
        var orderSummaryDistanceFormTop = 770;

        this.view.PaymentDetailContainer.height = (innerContainerBaseHeight + containerHeight) + "dp";
        this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight + containerHeight) + "dp";
        this.view.OrderSummary.top = (orderSummaryDistanceFormTop + containerHeight) + "dp";
    }

    this.view.forceLayout();
},

  showCreditCardInfoInput:function (){
    this.view.CreditCardInfoCtn.isVisible = true;
    this.view.PayPalBtn.isVisible = false;
    this.view.PowerByPayPalCtn.isVisible = false;
    this.view.forceLayout();

    var CreditCardInfoCtnHeight = this.view.CreditCardInfoCtn.frame.height;
    var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height; 
    var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
    var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
 
    this.view.PaymentDetailContainer.height = (innerContainerBaseHeight + CreditCardInfoCtnHeight) + "dp"; 
    this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight + CreditCardInfoCtnHeight) + "dp"; 
    this.view.OrderSummary.top =  (orderSummaryDistanceFormTop + CreditCardInfoCtnHeight) + "dp"; 
    this.view.ShipToBillingAddressCheckbox.selectedKeys = ["1"];
	this.view.forceLayout();
  },
  
  hideCreditCardInfoInput: function () {
    var CreditCardInfoCtnHeight = this.view.CreditCardInfoCtn.frame.height;
    var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height; 
    var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
    var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
     var checkoutPayContainerDistanceFormTop =  parseInt(this.view.PayContainer.top, 10);
    var ShippingAddressCtnHeight = this.view.ShippingAddressCtn.frame.height;
    
    ShippingAddressCtnHeight = this.view.ShippingAddressCtn.isVisible ? this.view.ShippingAddressCtn.frame.height : 0;
    checkoutPayContainerDistanceFormTop = this.view.ShippingAddressCtn.isVisible ? (checkoutPayContainerDistanceFormTop - ShippingAddressCtnHeight) + "dp" : checkoutPayContainerDistanceFormTop;
    
    this.view.CreditCardInfoCtn.isVisible = false;
    this.view.PayPalBtn.isVisible = true;
    this.view.PowerByPayPalCtn.isVisible = true;
    this.view.ShippingAddressCtn.isVisible = false;

    this.view.forceLayout();
  
    var totalHeightToReduce = CreditCardInfoCtnHeight + ShippingAddressCtnHeight;

    this.view.PaymentDetailContainer.height = (innerContainerBaseHeight - totalHeightToReduce) + "dp"; 
    this.view.SelectPaymentMethodContainer.height = (outerContainerBaseHeight - totalHeightToReduce) + "dp"; 
    this.view.OrderSummary.top = (orderSummaryDistanceFormTop - totalHeightToReduce) + "dp"; 
	this.view.PayContainer.top = checkoutPayContainerDistanceFormTop + "dp";
    
    this.view.forceLayout();
},
  
 toggleCreditCardShippingAddress: function () {
    var isCurrentlyVisible = this.view.ShippingAddressCtn.isVisible;
    this.view.ShippingAddressCtn.isVisible = !isCurrentlyVisible;
    this.view.forceLayout();

    var ShippingAddressCtnHeight = this.view.ShippingAddressCtn.frame.height;
    var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
    var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
    var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
   var checkoutPayContainerDistanceFormTop =  parseInt(this.view.PayContainer.top, 10);

    this.view.PaymentDetailContainer.height = isCurrentlyVisible ? (innerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (innerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
    this.view.SelectPaymentMethodContainer.height = isCurrentlyVisible ? (outerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (outerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
    this.view.OrderSummary.top = isCurrentlyVisible ? (orderSummaryDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (orderSummaryDistanceFormTop + ShippingAddressCtnHeight) + "dp";
	this.view.PayContainer.top = isCurrentlyVisible ? (checkoutPayContainerDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (checkoutPayContainerDistanceFormTop + ShippingAddressCtnHeight) + "dp";
    this.view.forceLayout();
   console.log(this.view.ShipToBillingAddressCheckbox);
},
  
  preinputInfo:function(){
    this.view.CheckoutCardNumberInput.text = "4111 1111 1111 1111";
    this.view.CheckoutExpiresInput.text = "12/26";
    this.view.CheckoutCSCInput.text = "123";
    this.view.CheckoutFirstNameInput.text = "John";
    this.view.CheckoutLastNameInput.text = "Doe";
    this.view.CheckoutAddressLine1Input.text = "123 Main St";
    this.view.CheckoutAddressLine2Input.text = "Apt 4B";
    this.view.CheckoutCityInput.text = "New York";
    this.view.CheckoutRegionInput.text = "NY";
    this.view.CheckoutPostalCodeInput.text = "10001";
    this.view.CheckoutMobileInput.text = "+1 555-123-4567";
    this.view.CheckoutEmailInput.text = "john.doe@example.com";
    
    this.view.CheckoutFirstNameInput2.text = "Emily";
    this.view.CheckoutLastNameInput2.text = "Johnson";
    this.view.CheckoutAddressLine1Shipping.text = "456 Oak Avenue";
    this.view.CheckoutAddressLine2Shipping.text = "Suite 12";
    this.view.CheckoutCityInput2.text = "Los Angeles";
    this.view.CheckoutRegionInput2.text = "CA";
    this.view.CheckoutPostalCodeInput2.text = "90015";
    this.view.CheckoutMobileInput2.text = "+1 310-987-6543";
    this.view.CheckoutEmailInput2.text = "emily.johnson@example.com";
}


 });