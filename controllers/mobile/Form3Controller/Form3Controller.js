define({ 
  qrData: {
    "orderId"  : "203",
    "orderDate": "2025-03-13T07:53:13.082Z",
    "status"   : "PaymentSettled",
    "total"    : "USD 1919.40",
    "items"    : [
      {
        "name"    : "Qunol Turmeric & Ginger Gummy - 60 ct",
        "quantity": 40
      },
      {
        "name"    : "Listerine Total Care Anticavity Fluoride Mouthwash - Fresh Mint, 1 lt",
        "quantity": 34
      },
      {
        "name"    : "Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
        "quantity": 46
      },
      {
        "name"    : "Mott's 100% Original Apple Juice Boxes, 6.75 fl oz - 8 pk",
        "quantity": 3
      }
    ],
    "shipping": {
      "name"   : "AA BB",
      "address": "13 adk, HCM"
    }
  },
  getOrderDetails: function () {
    var data = JSON.stringify(this.qrData);
    console.log("DATA STRING: ", data);
	this.view.qrcodegenerator.dataToEncode = data.replace(/'/g, "\\'");
    this.view.qrcodegenerator.generate();
    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, 
                    "https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    var token = localStorage.getItem("vendure-auth-token");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);
    var jsonStr = JSON.stringify({
      "query": "query GetOrder($orderId: ID!) { order(id: $orderId) { id orderPlacedAt subTotalWithTax shippingWithTax totalWithTax currencyCode state payments { metadata } customFields { deliveryType } lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } currencyCode } } shippingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } billingAddress { fullName phoneNumber streetLine1 streetLine2 city province postalCode countryCode country } } }",
      "variables": {
        "orderId": "112"
      }
    });
    httpclient.send(jsonStr);

    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4) {
        if (httpclient.status === 200) {
          var response = JSON.parse(httpclient.response);
          var orderDetail = response.data.order;

          console.log("Order Detail: ", orderDetail);
          var formattedDate =  this.formatDate(orderDetail.orderPlacedAt);

          // Update UI after the response is received
          this.view.OrderStatusLabel.text = orderDetail.state;
          this.view.OrderIDText.text = orderDetail.id;
          this.view.OrderDateText.text = formattedDate;
          this.view.OrderSubtotalText.text = "$" + orderDetail.subTotalWithTax;
          this.view.OrderShippingText.text = "$" + orderDetail.shippingWithTax;
          this.view.OrderTotalPrice.text = "$" + orderDetail.totalWithTax;
          this.view.DeliveryTypeText.text = orderDetail.state;
          var mappedData = orderDetail.lines.map(item => ({
            ItemOrderedImg: item.productVariant.featuredAsset.preview, 
            ItemOrderedName: this.truncateText(item.productVariant.name, 8), 
            ItemOrderedQuantity: item.quantity, 
            ItemOrderedUnitPrice: "$" + (item.productVariant.priceWithTax / 100).toFixed(2),
            ItemOrderedTotalPrice: "$" + (item.linePriceWithTax / 100).toFixed(2)
          }));
          this.view.OrderDetailContainer.ItemOrderedContainer.ItemsOrderedListCtn.ItemOrderedList.setData(mappedData);

          this.view.OrderFullNameLabel.text = orderDetail.shippingAddress.fullName;
          this.view.OrderPhoneLabel.text = orderDetail.shippingAddress.phoneNumber;
          this.view.OrderAddress1Label.text = orderDetail.shippingAddress.streetLine1;
          this.view.OrderAddress2Label.text = orderDetail.shippingAddress.streetLine2;
          this.view.OrderCityStateZipCodeLabel.text =
            orderDetail.shippingAddress.city + ", " + orderDetail.shippingAddress.province + " " + orderDetail.shippingAddress.postalCode;
          this.view.OrderCountryLabel.text = orderDetail.shippingAddress.country;

          this.view.OrderFullNameLabel2.text = orderDetail.billingAddress.fullName;
          this.view.OrderPhoneLabel2.text = orderDetail.billingAddress.phoneNumber;
          this.view.OrderAddress1Label2.text = orderDetail.billingAddress.streetLine1;
          this.view.OrderAddress2Label2.text = orderDetail.billingAddress.streetLine2;
          this.view.OrderCityStateZipCode2.text =
            orderDetail.billingAddress.city + ", " + orderDetail.billingAddress.province + " " + orderDetail.billingAddress.postalCode;
          this.view.OrderCountryLabel2.text = orderDetail.billingAddress.country;
        } else {
          console.error("API Error:", httpclient.status, httpclient.responseText);
        }
      }
    }.bind(this); // Ensure `this` refers to the current object

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