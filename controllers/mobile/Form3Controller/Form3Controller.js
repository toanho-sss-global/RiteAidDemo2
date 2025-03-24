define({ 
  qrData: {},
  currentProductID : "",
  getCurrentProductID: function() {
    if (this.navigationContext) {
      this.currentProductID = this.navigationContext.variable_product_Id;
      console.log("Received variable_product_Id:", this.variableProductId);
    }
  },
  getOrderDetails: function () {

    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, 
                    "https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    var token = localStorage.getItem("vendure-auth-token");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);
    console.log('PRODUCT ID: ', this.currentProductID)
    var jsonStr = JSON.stringify({
      "query": "query GetOrder($orderId: ID!) { order(id: $orderId) { id orderPlacedAt subTotalWithTax shippingWithTax totalWithTax currencyCode state payments { metadata } customFields { deliveryType } lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } currencyCode } } shippingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } billingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } } }",
      "variables": {
        "orderId": this.currentProductID
      }
    });
    httpclient.send(jsonStr);


    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4) {
        if (httpclient.status === 200) {
          var response = JSON.parse(httpclient.response);
          var orderDetail = response.data.order;

          console.log("Order Detail: ", orderDetail);
          this.qrData.orderDate = orderDetail.orderPlacedAt;
          var formattedDate =  this.formatDate(orderDetail.orderPlacedAt);

          // Update UI after the response is received
          this.view.OrderStatusLabel.text = orderDetail.state;
          this.qrData.status = orderDetail.state;

          var DeliveryTypeText = orderDetail.customFields.deliveryType ? orderDetail.customFields.deliveryType : "Not Specified";
          var newDeliveryTypeText = "";
          if (DeliveryTypeText === "ship") {
            newDeliveryTypeText = DeliveryTypeText.replace("s", "S");
          } else if (DeliveryTypeText === "pickup") {
            newDeliveryTypeText = DeliveryTypeText.replace("p", "P");
          } else {
            newDeliveryTypeText = DeliveryTypeText;
          }
          
          console.log("33333333",DeliveryTypeText)
          console.log("44444444",newDeliveryTypeText)

          var skin = "";
          if (orderDetail.state === "Cancelled") {
            skin = "sknCancelled";
          } else if (orderDetail.state === "Delivered") {
            skin = "sknDelivered";
          } else {
            skin = "sknPaymentSettled";
          }
          this.view.OrderStatusLabel.skin = skin;

          this.view.OrderIDText.text = `#${orderDetail.id}`;
          this.qrData.orderId = orderDetail.id;
          this.view.OrderDateText.text = formattedDate;
          this.view.OrderSubtotalText.text = "$" + (orderDetail.subTotalWithTax / 100).toFixed(2);
          this.view.OrderShippingText.text = "$" + (orderDetail.shippingWithTax / 100).toFixed(2);
          this.view.OrderTotalPrice.text = "$" + (orderDetail.totalWithTax / 100).toFixed(2);
          this.qrData.total ="USD" + orderDetail.totalWithTax;
          this.view.DeliveryTypeText.text = newDeliveryTypeText;

          var mappedData = orderDetail.lines.map(item => ({
            ItemOrderedImg: item.productVariant.featuredAsset.preview, 
            ItemOrderedName: this.truncateText(item.productVariant.name, 7), 
            ItemOrderedQuantity: item.quantity, 
            ItemOrderedUnitPrice: "$" + (item.productVariant.priceWithTax / 100).toFixed(2),
            ItemOrderedTotalPrice: "$" + (item.linePriceWithTax / 100).toFixed(2)
          }));
          var mappedQRCodeItemData = orderDetail.lines.map(productItem => ({
            name: this.truncateText(productItem.productVariant.name, 8),
            quantity: productItem.quantity
          }));
          this.qrData.items = mappedQRCodeItemData;

          this.view.OrderDetailContainer.ItemOrderedContainer.ItemsOrderedListCtn.ItemOrderedList.setData(mappedData);

          this.view.OrderFullNameLabel.text = orderDetail.shippingAddress.fullName;
          this.view.OrderPhoneLabel.text = orderDetail.shippingAddress.phoneNumber;
          this.view.OrderAddress1Label.text = this.truncateText(orderDetail.shippingAddress.streetLine1, 10), 
            this.view.OrderAddress2Label.text = this.truncateText(orderDetail.shippingAddress.streetLine2, 10), 
            this.view.OrderCityStateZipCodeLabel.text = 
            [orderDetail.shippingAddress.city, orderDetail.shippingAddress.province, orderDetail.shippingAddress.postalCode]
            .filter(Boolean)
            .join(" ");
          this.view.OrderCountryLabel.text = orderDetail.shippingAddress.country;

          this.view.OrderFullNameLabel2.text = orderDetail.billingAddress.fullName;
          this.view.OrderPhoneLabel2.text = orderDetail.billingAddress.phoneNumber;
          this.view.OrderAddress1Label2.text = orderDetail.billingAddress.streetLine1;
          this.view.OrderAddress2Label2.text = orderDetail.billingAddress.streetLine2;
          this.view.OrderCityStateZipCode2.text = 
            [orderDetail.billingAddress.city, orderDetail.billingAddress.province, orderDetail.billingAddress.postalCode]
            .filter(Boolean)
            .join(" ");
          this.view.OrderCountryLabel2.text = orderDetail.billingAddress.country;

          var data = JSON.stringify(this.qrData);
          this.view.qrcodegenerator.dataToEncode = data.replace(/'/g, "\\'");
          this.view.qrcodegenerator.generate();
        } else {
          console.error("API Error:", httpclient.status, httpclient.responseText);
        }
      }
    }.bind(this); 

  },

  formatDate : function(isoDate) {
    const date = new Date(isoDate);
    let formattedDate = date.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Replace only the second comma with "at"
    const parts = formattedDate.split(",");
    if (parts.length === 3) {
      formattedDate = `${parts[0]},${parts[1]} at${parts[2]}`;
    }

    return formattedDate;
  },

  truncateText: function(text, wordLimit) {
    if (!text) return ""; // Handle empty text
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }

});