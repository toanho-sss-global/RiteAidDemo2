define({ 
	
  preShow: function () {
    var data = [
        { 
            lblOrderID: "100", 
            lblDate: "2025-03-10", 
            lblItem: "1", 
            lblTotal: "$599.99", 
            lblStatus: "PaymentSettled" 
        },
        { 
            lblOrderID: "102", 
            lblDate: "2025-03-09", 
            lblItem: "1", 
            lblTotal: "$1,299.99", 
            lblStatus: "Cancelled" 
        },
        { 
            lblOrderID: "103", 
            lblDate: "2025-03-08", 
            lblItem: "1", 
            lblTotal: "$199.99", 
            lblStatus: "Delivered" 
        },
        { 
            lblOrderID: "104", 
            lblDate: "2025-03-07", 
            lblItem: "1", 
            lblTotal: "$249.99", 
            lblStatus: "PaymentSettled" 
        },
        { 
            lblOrderID: "105", 
            lblDate: "2025-03-06", 
            lblItem: "1", 
            lblTotal: "$499.99", 
            lblStatus: "Delivered" 
        }
    ];

    this.view.segOrderHistory.setData(data);
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