define("userCheckoutPaymentMethodController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
    },
    getOrderSummaryData: function() {
        var cartTotal = voltmx.store.getItem("CartTotalPrice");
        console.log("CartTotal: ", cartTotal);
        this.view.OrderSummary.OrderSummaryTotalLabel.text = cartTotal || "0";
        this.view.CheckoutPayLabel.text = `Pay ${cartTotal}`;
        this.view.OrderSummary.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
        var cartData = voltmx.store.getItem("CartProductList");
        if (cartData) {
            var parsedCartData = JSON.parse(cartData);
            this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
        }
    },
    selectedValue: "PayPalRadioBtn",
    selectRadio: function(widget) {
        if (widget) {
            this.selectedValue = widget.id;
            console.log("Selected Radio Button ID: " + this.selectedValue);
            this.updateRadioButtons();
        } else {
            console.log("Widget is undefined");
        }
    },
    updateRadioButtons: function() {
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
    displayDinamicCheckoutContent: function() {
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
    showCreditCardInfoInput: function() {
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
        this.view.OrderSummary.top = (orderSummaryDistanceFormTop + CreditCardInfoCtnHeight) + "dp";
        this.view.ShipToBillingAddressCheckbox.selectedKeys = ["1"];
        this.view.forceLayout();
    },
    hideCreditCardInfoInput: function() {
        var CreditCardInfoCtnHeight = this.view.CreditCardInfoCtn.frame.height;
        var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
        var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
        var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
        var checkoutPayContainerDistanceFormTop = parseInt(this.view.PayContainer.top, 10);
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
    toggleCreditCardShippingAddress: function() {
        var isCurrentlyVisible = this.view.ShippingAddressCtn.isVisible;
        this.view.ShippingAddressCtn.isVisible = !isCurrentlyVisible;
        this.view.forceLayout();
        var ShippingAddressCtnHeight = this.view.ShippingAddressCtn.frame.height;
        var innerContainerBaseHeight = this.view.PaymentDetailContainer.frame.height;
        var outerContainerBaseHeight = this.view.SelectPaymentMethodContainer.frame.height;
        var orderSummaryDistanceFormTop = parseInt(this.view.OrderSummary.top, 10);
        var checkoutPayContainerDistanceFormTop = parseInt(this.view.PayContainer.top, 10);
        this.view.PaymentDetailContainer.height = isCurrentlyVisible ? (innerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (innerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
        this.view.SelectPaymentMethodContainer.height = isCurrentlyVisible ? (outerContainerBaseHeight - ShippingAddressCtnHeight) + "dp" : (outerContainerBaseHeight + ShippingAddressCtnHeight) + "dp";
        this.view.OrderSummary.top = isCurrentlyVisible ? (orderSummaryDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (orderSummaryDistanceFormTop + ShippingAddressCtnHeight) + "dp";
        this.view.PayContainer.top = isCurrentlyVisible ? (checkoutPayContainerDistanceFormTop - ShippingAddressCtnHeight) + "dp" : (checkoutPayContainerDistanceFormTop + ShippingAddressCtnHeight) + "dp";
        this.view.forceLayout();
        console.log(this.view.ShipToBillingAddressCheckbox.selectedKeys);
    },
    preinputInfo: function() {
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
        this.view.CheckoutRegionInput2.text = "IN";
        this.view.CheckoutPostalCodeInput2.text = "90015";
        this.view.CheckoutMobileInput2.text = "+1 310-987-6543";
        this.view.CheckoutEmailInput2.text = "emily.johnson@example.com";
    },
    ApiBillingAddress: function(token) {
        var CheckoutCardNumberInput = this.view.CheckoutCardNumberInput.text;
        var CheckoutExpiresInput = this.view.CheckoutExpiresInput.text;
        var CheckoutCSCInput = this.view.CheckoutCSCInput.text;
        var CheckoutFirstNameInput = this.view.CheckoutFirstNameInput.text;
        var CheckoutLastNameInput = this.view.CheckoutLastNameInput.text;
        var CheckoutAddressLine1Input = this.view.CheckoutAddressLine1Input.text;
        var CheckoutAddressLine2Input = this.view.CheckoutAddressLine2Input.text;
        var CheckoutCityInput = this.view.CheckoutCityInput.text;
        var CheckoutRegionInput = this.view.CheckoutRegionInput.text;
        var CheckoutPostalCodeInput = this.view.CheckoutPostalCodeInput.text;
        var CheckoutMobileInput = this.view.CheckoutMobileInput.text;
        var CheckoutEmailInput = this.view.CheckoutEmailInput.text;
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("Authorization", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderBillingAddress($input: CreateAddressInput!) { setOrderBillingAddress(input: $input) { ... on Order { id code state active subTotal total } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "input": {
                    "fullName": `${CheckoutFirstNameInput} ${CheckoutLastNameInput}`,
                    "company": CheckoutAddressLine1Input,
                    "streetLine1": CheckoutAddressLine1Input,
                    "streetLine2": CheckoutAddressLine2Input,
                    "city": CheckoutCityInput,
                    "province": CheckoutCardNumberInput,
                    "postalCode": CheckoutPostalCodeInput,
                    "countryCode": CheckoutRegionInput,
                    "phoneNumber": CheckoutMobileInput
                }
            }
        });
        httpclient.send(jsonStr2);
    },
    ApiShoppingAddress: function(token) {
        var CheckoutFirstNameInput2 = this.view.CheckoutFirstNameInput2.text;
        var CheckoutLastNameInput2 = this.view.CheckoutLastNameInput2.text;
        var CheckoutAddressLine1Input2 = this.view.CheckoutAddressLine1Shipping.text;
        var CheckoutAddressLine2Input2 = this.view.CheckoutAddressLine2Shipping.text;
        var CheckoutCityInput2 = this.view.CheckoutCityInput2.text;
        var CheckoutRegionInput2 = this.view.CheckoutRegionInput2.text;
        var CheckoutPostalCodeInput2 = this.view.CheckoutPostalCodeInput2.text;
        var CheckoutMobileInput2 = this.view.CheckoutMobileInput2.text;
        var CheckoutEmailInput2 = this.view.CheckoutEmailInput2.text;
        var httpclient = new voltmx.net.HttpRequest();
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("Authorization", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderShippingAddress($input: CreateAddressInput!) { setOrderShippingAddress(input: $input) { ... on Order { id code state active subTotal total } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "input": {
                    "fullName": `${CheckoutFirstNameInput2} ${CheckoutLastNameInput2}`,
                    "company": CheckoutAddressLine1Input2,
                    "streetLine1": CheckoutAddressLine1Input2,
                    "streetLine2": CheckoutAddressLine2Input2,
                    "city": CheckoutCityInput2,
                    "province": CheckoutMobileInput2,
                    "postalCode": CheckoutPostalCodeInput2,
                    "countryCode": CheckoutRegionInput2,
                    "phoneNumber": CheckoutMobileInput2
                }
            }
        });
        httpclient.send(jsonStr2);
    },
    BtnCallApi: function() {
        var token = localStorage.getItem("vendure-auth-token");
        if (this.view.CheckoutCardNumberInput.text !== "" || this.view.CheckoutExpiresInput.text !== "" || this.view.CheckoutCSCInput.text !== "" || this.view.CheckoutFirstNameInput.text !== "" || this.view.CheckoutLastNameInput.text !== "" || this.view.CheckoutAddressLine1Input.text !== "" || this.view.CheckoutAddressLine2Input.text !== "" || this.view.CheckoutCityInput.text !== "" || this.view.CheckoutRegionInput.text !== "" || this.view.CheckoutPostalCodeInput.text !== "" || this.view.CheckoutMobileInput.text !== "" || this.view.CheckoutEmailInput.text !== "") {
            console.log("12345673211352411321`23123")
            this.ApiBillingAddress(token);
            if (this.view.ShipToBillingAddressCheckbox.selectedKeys === null) {
                if (this.view.CheckoutFirstNameInput2.text !== "" || this.view.CheckoutLastNameInput2.text !== "" || this.view.CheckoutAddressLine1Shipping.text !== "" || this.view.CheckoutAddressLine2Shipping.text !== "" || this.view.CheckoutCityInput2.text !== "" || this.view.CheckoutRegionInput2.text !== "" || this.view.CheckoutPostalCodeInput2.text !== "" || this.view.CheckoutMobileInput2.text !== "" || this.view.CheckoutEmailInput2.text !== "") {
                    console.log("asdasdasdasdadsasdadasdasdas")
                    this.ApiShoppingAddress(token);
                }
            }
            var nav = new voltmx.mvc.Navigation("CheckoutSuccessful");
            nav.navigate();
        }
    },
});
define("CheckoutPaymentMethodControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for ShipToBillingAddressCheckbox **/
    AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c: function AS_CheckBoxGroup_h0221158e1b647b2bcd0965b0d8e6a9c(eventobject) {
        var self = this;
        return self.toggleCreditCardShippingAddress.call(this);
    },
    /** onClick defined for CheckoutPayBtn **/
    AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66: function AS_FlexContainer_b355d8d8b91e4c1e8a1c9b301988ca66(eventobject) {
        var self = this;
        return self.BtnCallApi.call(this);
    },
    /** onClick defined for CreditDebitBtn **/
    AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea: function AS_FlexContainer_d6ddff66a8e043e0944b2005a2967bea(eventobject) {
        var self = this;
        return self.showCreditCardInfoInput.call(this);
    },
    /** init defined for CheckoutPaymentMethod **/
    AS_Form_b854374401be4dce81eef98afbc6b284: function AS_Form_b854374401be4dce81eef98afbc6b284(eventobject) {
        var self = this;
        self.updateProgressBar.call(this);
        self.getOrderSummaryData.call(this);
        self.updateRadioButtons.call(this);
        self.preinputInfo.call(this);
    },
    /** postShow defined for CheckoutPaymentMethod **/
    AS_Form_ge19a82ccf184a5393e637808b9a75cb: function AS_Form_ge19a82ccf184a5393e637808b9a75cb(eventobject) {
        var self = this;
        return self.displayDinamicCheckoutContent.call(this);
    },
    /** onTouchStart defined for CreditCardInfoCloseBtn **/
    AS_Label_f477a0b0bc874c84a99126cbc4ba2978: function AS_Label_f477a0b0bc874c84a99126cbc4ba2978(eventobject, x, y) {
        var self = this;
        return self.hideCreditCardInfoInput.call(this);
    },
    /** onSelection defined for CreditDebitRadioBtn **/
    AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db: function AS_RadioButtonGroup_bfdf4ac8838840f9b7f64fb35b1978db(eventobject) {
        var self = this;
        return self.selectRadio.call(this, eventobject);
    },
    /** onSelection defined for GooglePayRadioBtn **/
    AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef: function AS_RadioButtonGroup_c4804de9b4604df287225476c9791fef(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for AfterPayRadioBtn **/
    AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7: function AS_RadioButtonGroup_e17a38cc903c4f9997b4a0526b9de7d7(eventobject) {
        var self = this;
        return self.selectRadio.call(this, eventobject);
    },
    /** onSelection defined for LoyaltyPtnRadioBtn **/
    AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb: function AS_RadioButtonGroup_ed494c97f30946c78b87cbb6079cffeb(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for PayPalRadioBtn **/
    AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1: function AS_RadioButtonGroup_f307eff992814734868a0335523c4cc1(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for FSARadioBtn **/
    AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c: function AS_RadioButtonGroup_fde92bb7330a45ee998b38ff8c8f8a8c(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for ApplePayRadioBtn **/
    AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171: function AS_RadioButtonGroup_g463edce18414d1395637f3cf84f6171(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    },
    /** onSelection defined for HSARadioBtn **/
    AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60: function AS_RadioButtonGroup_hfb01920c6af4b7a86af95c7fd447b60(eventobject) {
        var self = this;
        self.selectRadio.call(this, eventobject);
        self.displayDinamicCheckoutContent.call(this);
    }
});
define("CheckoutPaymentMethodController", ["userCheckoutPaymentMethodController", "CheckoutPaymentMethodControllerActions"], function() {
    var controller = require("userCheckoutPaymentMethodController");
    var controllerActions = ["CheckoutPaymentMethodControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
