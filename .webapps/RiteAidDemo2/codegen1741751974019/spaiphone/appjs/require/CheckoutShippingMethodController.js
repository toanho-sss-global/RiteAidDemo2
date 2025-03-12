define("userCheckoutShippingMethodController", {
    updateProgressBar: function() {
        this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
        this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140";
        this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
    },
    addSpaceToRadioGroup: function() {
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
    showMap: function() {
        var selectedKey = this.view.ShippingOptions.selectedKey;
        if (selectedKey === "PickFormPharmacy") {
            this.view.MapPopupDimScreen.isVisible = true;
        }
    },
    showShippingConfirmation: function() {
        var selectedKey = this.view.ShippingOptions.selectedKey;
        if (selectedKey === "ShipFormPharmacy") {
            this.view.ShippingConfirmationDImScreen.isVisible = true;
        }
    },
    hideMap: function() {
        this.view.MapPopupDimScreen.isVisible = false;
    },
    stopPropagation: function() {
        event.stopPropagation();
    },
    ApiShipingMethod: function() {
        var ShippingOptions = this.view.CheckoutShippingMethodContainer.ShippingModeContainer.ShippingOptions.selectedKey;
        var httpclient = new voltmx.net.HttpRequest();
        var token = localStorage.getItem("vendure-auth-token");
        httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api");
        httpclient.setRequestHeader("Content-Type", "application/json");
        httpclient.setRequestHeader("vendure-auth-token", `Bearer ${token}`);
        var jsonStr2 = JSON.stringify({
            "query": "mutation SetOrderShippingMethod($shippingMethodIds: [ID!]!) { setOrderShippingMethod(shippingMethodId: $shippingMethodIds) { ... on Order { id createdAt updatedAt type orderPlacedAt code state active totalQuantity subTotal subTotalWithTax currencyCode shipping shippingWithTax total totalWithTax } ... on OrderModificationError { errorCode message } ... on IneligibleShippingMethodError { errorCode message } ... on NoActiveOrderError { errorCode message } } }",
            "variables": {
                "shippingMethodIds": ShippingOptions
            }
        });
        httpclient.send(jsonStr2);
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4 && httpclient.status === 200) {
                var response = JSON.parse(httpclient.response);
                var itemData = response.data;
                if (itemData) {
                    var nav = new voltmx.mvc.Navigation("CheckoutPaymentMethod");
                    nav.navigate();
                }
            }
        }
    }
});
define("CheckoutShippingMethodControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for YesBtn **/
    AS_Button_aab5859389084d0eb37ed6914ef9b3c9: function AS_Button_aab5859389084d0eb37ed6914ef9b3c9(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
        this.view.MapPopupDimScreen.isVisible = true;
    },
    /** onClick defined for CancelBtn **/
    AS_Button_b18c9e749d9d489d8206a1a8e742e304: function AS_Button_b18c9e749d9d489d8206a1a8e742e304(eventobject) {
        var self = this;
        return self.hideMap.call(this);
    },
    /** onClick defined for CheckoutShippingMethodContinueBtn **/
    AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5: function AS_Button_c8310b8722df4e5fafaf0f12b3cebbf5(eventobject) {
        var self = this;
        return self.ApiShipingMethod.call(this);
    },
    /** onClick defined for NoBtn **/
    AS_Button_f808072056b94c02b6e04e9bd93edbc6: function AS_Button_f808072056b94c02b6e04e9bd93edbc6(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
        this.view.MapPopupDimScreen.isVisible = true;
    },
    /** onClick defined for MapPopupDimScreen **/
    AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90: function AS_FlexContainer_be91d5ccdd02413ab0aaf70374fdcd90(eventobject) {
        var self = this;
        return self.hideMap.call(this);
    },
    /** onClick defined for MapContainer **/
    AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd: function AS_FlexContainer_d47ec1aff67a494ebec3c4f4bdbb14fd(eventobject) {
        var self = this;
        return self.stopPropagation.call(this);
    },
    /** onClick defined for ShippingConfirmationDImScreen **/
    AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e: function AS_FlexContainer_i4ca13c2eab0436fb3f1d2f27653c77e(eventobject) {
        var self = this;
        this.view.ShippingConfirmationDImScreen.isVisible = false;
    },
    /** onClick defined for ShippingConfirmationCtn **/
    AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b: function AS_FlexContainer_i4e64243bf35465bbe0c7916c1f6645b(eventobject) {
        var self = this;
        return self.stopPropagation.call(this);
    },
    /** postShow defined for CheckoutShippingMethod **/
    AS_Form_gd8632a162fa4fa28ccf42f542426a3a: function AS_Form_gd8632a162fa4fa28ccf42f542426a3a(eventobject) {
        var self = this;
    },
    /** init defined for CheckoutShippingMethod **/
    AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e: function AS_Form_h7c18ea9ac3340238acf7b3efc7fdb9e(eventobject) {
        var self = this;
        self.updateProgressBar.call(this);
        self.getOrderSummaryData.call(this);
    },
    /** onSelection defined for ShippingOptions **/
    AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62: function AS_RadioButtonGroup_b550a336fae347149c1adfea52495d62(eventobject) {
        var self = this;
        self.showMap.call(this);
        self.showShippingConfirmation.call(this);
    }
});
define("CheckoutShippingMethodController", ["userCheckoutShippingMethodController", "CheckoutShippingMethodControllerActions"], function() {
    var controller = require("userCheckoutShippingMethodController");
    var controllerActions = ["CheckoutShippingMethodControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
