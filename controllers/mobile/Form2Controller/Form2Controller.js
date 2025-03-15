define({ 
  ListOrderHistory: [],
  
 getAllOrders: function () {
    var self = this;
    var url = "https://vendure.demo.universalcommerce.io/shop-api";
    var token = localStorage.getItem("vendure-auth-token");
    //token = "";
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
            self.handleOrderHistory(response.data);
          }
      }
 	};
  },
  
 handleOrderHistory: function (data) {
    if (!data || !data.activeCustomer || !data.activeCustomer.orders) {
        return;
    }

    var formattedOrders = data.activeCustomer.orders.items.map(item => {
        var skin = "";
        if (item.state === "Cancelled") {
            skin = "sknCancelled";
        } else if (item.state === "Delivered") {
            skin = "sknDelivered";
        } else if (item.state === "Shipped") {
          	skin = "sknShipped";
        } else {
            skin = "sknPaymentSettled";
        }

        return {
            lblOrderID: { text: item.id }, 
            lblDate: { text: this.formatDate(item.orderPlacedAt) }, 
            lblItem: { text: item.lines.length }, 
            lblTotal: { text: (item.totalWithTax / 100).toFixed(2) }, 
            lblStatus: { text: item.state, skin: skin }
        };
    });

    this.ListOrderHistory = formattedOrders;
    this.view.segOrderHistory.setData(this.ListOrderHistory);
},
  
  formatDate: function(isoString) {
    let date = isoString ? new Date(isoString) : new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
},

 });