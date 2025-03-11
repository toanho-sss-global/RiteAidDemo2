define({
  validateAddressInput: function () {
    var requiredFields = [
      { value: this.view.CheckoutFirstNameInput.text, name: "First Name"},
      { value: this.view.CheckoutLastNameInput.text, name: "Last Name" },
      { value: this.view.CheckoutAddressInput.text, name: "Address" },
      { value: this.view.CheckoutZipCodeInput.text, name: "Zip Code" },
      { value: this.view.CheckoutCityInput.text, name: "City" },
      { value: this.view.CheckoutStateInput.text, name: "State" },
      { value: this.view.CheckoutEmailInput.text, name: "Email" },
      { value: this.view.CheckoutPhoneInput.text, name: "Phone Number" }
    ];

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (var i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].value.trim()) {
        alert("Please fill out the " +
              requiredFields[i].name + " field!");
        return false;
      }
    }

    if (!emailPattern.test(this.view.CheckoutEmailInput.text.trim())) {
      alert("Please enter a valid email!");
      return false;
    }

    var navigation = new voltmx.mvc.Navigation("CheckoutShippingMethod");
    navigation.navigate();
  },
  fullNameConverter: function (){
    var firstName = this.view.CheckoutFirstNameInput.text;
    var lastName = this.view.CheckoutLastNameInput.text;
    this.view.FullNameConverter.text = firstName + " " +lastName;
    console.log(this.view.FullNameConverter.text)
  },
  getOrderSummaryData: function() {  
    this.view.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice");
    this.view.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
    var cartData = voltmx.store.getItem("UpdatedCartProductList");
    if (cartData) {
      var parsedCartData = JSON.parse(cartData);
      this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
    }
  },
  preinputInfo: function () {
    this.view.CheckoutFirstNameInput.text = "Jane";
    this.view.CheckoutLastNameInput.text = "Doe";
    this.view.CheckoutCompanyInput.text = "ZaiTen Inc.";
    this.view.CheckoutAddressInput.text = "123 Main St";
    this.view.CheckoutAddressDetailInput.text = "Apt 4B";
    this.view.CheckoutZipCodeInput.text = "10001";
    this.view.CheckoutCityInput.text = "New York";
    this.view.CheckoutStateInput.text = "NY";
    this.view.CheckoutEmailInput.text = "jane.doe@example.com";
    this.view.CheckoutPhoneInput.text = "+1 555-123-4567";
    this.view.CheckoutCountryCodeInput.text = "US";
}


  
});