define({ 
  getCartBadgeCount: function () {
    var self = this;
    var url = "https://vendure.demo.universalcommerce.io/shop-api";
    var token = localStorage.getItem("vendure-auth-token");

    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, url);
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);

    var jsonStr2 = JSON.stringify({
        "query": "query ActiveOrder { activeOrder { id lines { productVariant { id } } } }"
    });

    httpclient.send(jsonStr2);
    httpclient.onReadyStateChange = function () {
        if (httpclient.readyState === 4 && httpclient.status === 200) {
            var response = JSON.parse(httpclient.response);
            var countItem = 0;
            if (response.data && response.data.activeOrder && response.data.activeOrder.lines) {
                countItem = response.data.activeOrder.lines.length;
            }
            localStorage.setItem("count-item-in-cart", countItem);
        }
    };
},
  
    updateProgressBar: function () {
      this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarLeft3.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle3.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight3.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarLeft4.skin = "CopyslFbox0ab370b90781448";
      this.view.ProgressBar.ProgressBarCircle4.skin = "CopyslFbox0b75af0da92e140"; 
      this.view.ProgressBar.ProgressBarRight4.skin = "CopyslFbox0ab370b90781448";
    },
  
  transitionOrderState: function (){
    var httpclient = new voltmx.net.HttpRequest();
    var token =  localStorage.getItem("vendure-auth-token");

    httpclient.open(constants.HTTP_METHOD_POST,"https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization",`Bearer ${token}`);

    var jsonStr2 = JSON.stringify({
    "query": "mutation TransitionOrderToState($state: String!) { transitionOrderToState(state: $state) { ... on Order { id code state active subTotal total totalQuantity shipping shippingAddress { streetLine1 streetLine2 province postalCode country } } ... on OrderStateTransitionError { errorCode message fromState toState transitionError } } }",
    "variables": {
//         "state": "AddingItems"
        "state": "ArrangingPayment"
    }
});
     httpclient.send(jsonStr2);
    console.log("Change order status run");
  },
  
   settleOrderPayment: function (){
    var httpclient = new voltmx.net.HttpRequest();
    var token =  localStorage.getItem("vendure-auth-token");

    httpclient.open(constants.HTTP_METHOD_POST,"https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization",`Bearer ${token}`);

    var jsonStr2 = JSON.stringify({
    "query": "mutation { addPaymentToOrder(input: { method: \"connected-payment-method\", metadata: {} }) { ... on Order { id code type state active billingAddress { country postalCode province streetLine1 streetLine2 } totalQuantity totalWithTax subTotalWithTax shippingWithTax customer { firstName phoneNumber emailAddress } orderPlacedAt } ... on OrderPaymentStateError { errorCode message } ... on IneligiblePaymentMethodError { errorCode message eligibilityCheckerMessage } ... on PaymentFailedError { errorCode message paymentErrorMessage } ... on PaymentDeclinedError { errorCode message paymentErrorMessage } ... on OrderStateTransitionError { errorCode message transitionError fromState toState } ... on NoActiveOrderError { errorCode message } } }"
});
     httpclient.send(jsonStr2);
    console.log("SETTLE order status run");
  },
  
});

