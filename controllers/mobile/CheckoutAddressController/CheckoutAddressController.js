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

  getOrderSummaryData: function() {  
    this.view.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice");
    console.log("XXXXXXXXXXXXXXXXXXXXX get total price in checkout address: ", voltmx.store.getItem("CartTotalPrice"));
    this.view.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
    var cartData = voltmx.store.getItem("CartProductList");
    if (cartData) {
      var parsedCartData = JSON.parse(cartData);
      this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
    }
  },

  setCustomerAddress: function () {
    var firstName = this.view.CheckoutFirstNameInput.text;
    var lastName = this.view.CheckoutLastNameInput.text;
    var fullName = firstName + " " + lastName;

    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, 
                    "https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    var token = localStorage.getItem("vendure-auth-token");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);
	console.log("checkout address token: ",token);
    var jsonStr2 = JSON.stringify({
      "query": "mutation CreateCustomerAddress($input: CreateAddressInput!) { createCustomerAddress(input: $input) { id createdAt updatedAt fullName company streetLine1 streetLine2 city province postalCode country { code name } phoneNumber defaultShippingAddress defaultBillingAddress } }",
      "variables": {
        "input": {
          "fullName": fullName,
          "company": this.view.CheckoutCompanyInput.text,
          "streetLine1": this.view.CheckoutAddressInput.text,
          "streetLine2": this.view.CheckoutAddressDetailInput.text,
          "city": this.view.CheckoutCityInput.text,
          "province": this.view.CheckoutStateInput.text,
          "postalCode": this.view.CheckoutZipCodeInput.text,
          "countryCode": this.view.CheckoutCountryCodeInput.text,
          "phoneNumber": this.view.CheckoutPhoneInput.text,
          "defaultShippingAddress": false,
          "defaultBillingAddress": false
        }
      }
    });
    httpclient.send(jsonStr2);

    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4 && httpclient.status === 200) {
        var nav = new voltmx.mvc.Navigation("CheckoutShippingMethod");
        nav.navigate();
      }
    };
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
