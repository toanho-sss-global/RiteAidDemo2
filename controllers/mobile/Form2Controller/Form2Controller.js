define({ 
  ListOrderHistory: [],
  
  preShow: function () {
    var data = [
        { 
            lblOrderID: { text: "100" }, 
            lblDate: { text: "2025-03-10" }, 
            lblItem: { text: "1" }, 
            lblTotal: { text: "$599.99" }, 
            lblStatus: { text: "Cancelled", skin: "" }
        },
        { 
            lblOrderID: { text: "102" }, 
            lblDate: { text: "2025-03-09" }, 
            lblItem: { text: "1" }, 
            lblTotal: { text: "$1,29" }, 
            lblStatus: { text: "Cancelled", skin: "" } 
        },
        { 
            lblOrderID: { text: "103" }, 
            lblDate: { text: "2025-03-08" }, 
            lblItem: { text: "1" }, 
            lblTotal: { text: "$199.99" }, 
            lblStatus: { text: "Delivered", skin: "" } 
        },
        { 
            lblOrderID: { text: "104" }, 
            lblDate: { text: "2025-03-07" }, 
            lblItem: { text: "1" }, 
            lblTotal: { text: "$249.99" }, 
            lblStatus: { text: "PaymentSettled", skin: "" } 
        }
    ];
    
    this.ListOrderHistory = data;
    this.view.segOrderHistory.setData(this.ListOrderHistory);
},


  HandleSkinStatus: function() {
    var updatedData = this.view.segOrderHistory.data.map(function(item) {
        if (item.lblStatus.text === "Cancelled") {
            item.lblStatus.skin = "sknCancelled";
        } else if (item.lblStatus.text === "Delivered") {
            item.lblStatus.skin = "sknDelivered";
        } else {
            item.lblStatus.skin = "sknPaymentSettled";
        }
        return item;
    });

    this.view.segOrderHistory.setData(updatedData);
},


  
 GetAllOrders: function () {
    var self = this;
    var url = "https://vendure.demo.universalcommerce.io/shop-api";
    var token = localStorage.getItem("vendure-auth-token");
    token = "7be3ff5af14bffcc0efac6a47746cbc8e1b9108cbe1f894c408768ca0ccd1fae";
    var httpclient = new voltmx.net.HttpRequest();
    
    httpclient.open(constants.HTTP_METHOD_POST, url);
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization", "Bearer " + token);

    var jsonStr2 = JSON.stringify({
    "query": "query ActiveCustomer($options: OrderListOptions) { activeCustomer { orders(options: $options) { items { id orderPlacedAt totalWithTax currencyCode state lines { id linePriceWithTax quantity productVariant { id name priceWithTax featuredAsset { preview } } } } } } }",
    "variables": {
        "options": {
            "filter": {
                "active": {
                    "eq": false
                }
            },
            "sort": {
                "id": "DESC"
            }
        }
    }
	});
    
    httpclient.send(jsonStr2);
 	httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4) {
          if (httpclient.status === 200) {
            var response = JSON.parse(httpclient.response);
            console.log("Get all order response:", response);
          }
      }
 	};
  },

 });