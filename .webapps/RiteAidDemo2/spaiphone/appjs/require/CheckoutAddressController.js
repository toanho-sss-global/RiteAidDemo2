define("userCheckoutAddressController", {
    validateAddressInput: function() {
        var requiredFields = [{
            value: this.view.CheckoutFirstNameInput.text,
            name: "First Name"
        }, {
            value: this.view.CheckoutLastNameInput.text,
            name: "Last Name"
        }, {
            value: this.view.CheckoutAddressInput.text,
            name: "Address"
        }, {
            value: this.view.CheckoutZipCodeInput.text,
            name: "Zip Code"
        }, {
            value: this.view.CheckoutCityInput.text,
            name: "City"
        }, {
            value: this.view.CheckoutStateInput.text,
            name: "State"
        }, {
            value: this.view.CheckoutEmailInput.text,
            name: "Email"
        }, {
            value: this.view.CheckoutPhoneInput.text,
            name: "Phone Number"
        }];
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        for (var i = 0; i < requiredFields.length; i++) {
            if (!requiredFields[i].value.trim()) {
                alert("Please fill out the " + requiredFields[i].name + " field!");
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
    fullNameConverter: function() {
        var firstName = this.view.CheckoutFirstNameInput.text;
        var lastName = this.view.CheckoutLastNameInput.text;
        this.view.FullNameConverter.text = firstName + " " + lastName;
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
    preinputInfo: function() {
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
define("CheckoutAddressControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for CheckoutContinueButton **/
    AS_Button_g2d635f049804bbabdf0f9c59fabfb0d: function AS_Button_g2d635f049804bbabdf0f9c59fabfb0d(eventobject) {
        var self = this;

        function INVOKE_SERVICE_b4e7b0a3d7b5482cb90ae42ca828867a_Callback(status, SetBillingAddress) {
            var ntf = new voltmx.mvc.Navigation("CheckoutShippingMethod");
            ntf.navigate();
        }
        self.validateAddressInput.call(this);
        if (SetBillingAddress_inputparam == undefined) {
            var SetBillingAddress_inputparam = {};
        }
        SetBillingAddress_inputparam["serviceID"] = "VendureApis$SetBillingAddress";
        SetBillingAddress_inputparam["fullname"] = self.view.FullNameConverter.text;
        SetBillingAddress_inputparam["company"] = self.view.CheckoutCompanyInput.text;
        SetBillingAddress_inputparam["streetLine1"] = self.view.CheckoutAddressInput.text;
        SetBillingAddress_inputparam["streetLine2"] = self.view.CheckoutAddressDetailInput.text;
        SetBillingAddress_inputparam["postalCode"] = self.view.CheckoutZipCodeInput.text;
        SetBillingAddress_inputparam["city"] = self.view.CheckoutCityInput.text;
        SetBillingAddress_inputparam["province"] = self.view.CheckoutStateInput.text;
        SetBillingAddress_inputparam["phoneNumber"] = self.view.CheckoutPhoneInput.text;
        SetBillingAddress_inputparam["countryCode"] = self.view.CheckoutCountryCodeInput.text;
        var SetBillingAddress_httpheaders = {};
        SetBillingAddress_inputparam["httpheaders"] = SetBillingAddress_httpheaders;
        var SetBillingAddress_httpconfigs = {};
        SetBillingAddress_inputparam["httpconfig"] = SetBillingAddress_httpconfigs;
        VendureApis$SetBillingAddress = mfintegrationsecureinvokerasync(SetBillingAddress_inputparam, "VendureApis", "SetBillingAddress", INVOKE_SERVICE_b4e7b0a3d7b5482cb90ae42ca828867a_Callback);
    },
    /** init defined for CheckoutAddress **/
    AS_Form_e65583c028c94c1f81be330e3ae684cd: function AS_Form_e65583c028c94c1f81be330e3ae684cd(eventobject) {
        var self = this;
        self.preinputInfo.call(this);
        self.getOrderSummaryData.call(this);
    },
    /** onTouchStart defined for CheckoutFIrstNameLabel **/
    AS_Label_e673e6d6d1384b80bdbc00576e52a57d: function AS_Label_e673e6d6d1384b80bdbc00576e52a57d(eventobject, x, y) {
        var self = this;
    },
    /** onTextChange defined for CheckoutLastNameInput **/
    AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c: function AS_TextField_ed8c554a4db145de93eeaa7cb69c7e7c(eventobject, changedtext) {
        var self = this;
        return self.fullNameConverter.call(this);
    },
    /** onTextChange defined for CheckoutFirstNameInput **/
    AS_TextField_fc8f24616d1248db85c523a72e177b26: function AS_TextField_fc8f24616d1248db85c523a72e177b26(eventobject, changedtext) {
        var self = this;
        return self.fullNameConverter.call(this);
    }
});
define("CheckoutAddressController", ["userCheckoutAddressController", "CheckoutAddressControllerActions"], function() {
    var controller = require("userCheckoutAddressController");
    var controllerActions = ["CheckoutAddressControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
