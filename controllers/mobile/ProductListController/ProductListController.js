define({
  ProductList: [],
  
  getCartBadgeCount: function () {
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
    }
  },

  initProductData: function () {
    var updatedProductList = [];
    var self = this;

    for (var i = 0; i < self.ProductList.length; i++) {
      var item = self.ProductList[i];

      if (item.lblCostDiscount !== '') {
        item.lblCost = {
          text     : item.lblCost,
          textStyle: {
            strikeThrough: true
          }
        };
      }

      updatedProductList.push(item);
    }

    self.view.ProductSimple.segTemp.setData(updatedProductList);
  },

  fetchProducts: function () {
    var self = this;
    var url = "https://m100004273001.demo-hclvoltmx.net/services/VendureApis/GetProducts";

    var httpRequest = new voltmx.net.HttpRequest();
    httpRequest.responseType = constants.HTTP_RESPONSE_TYPE_JSON;

    httpRequest.onReadyStateChange = function () {
      if (httpRequest.readyState === constants.HTTP_READY_STATE_DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.response;
          console.log("API Response:", response);

          if (response && response.data && response.data.products) {
            self.handleProducts(response.data);
          }
        } else {
          console.error("HTTP Error:", httpRequest.status, httpRequest.response);
        }
      }
    };

    httpRequest.open(constants.HTTP_METHOD_POST, url);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify({}));
  },

  handleProducts: function (data) {
    if (!data.products.items || !Array.isArray(data.products.items)) {
      return;
    }

    var formattedProducts = data.products.items.map(item => {
      var firstVariant = item.variants && item.variants.length > 0 ? item.variants[0] : {};
      var firstFacet = item.facetValues && item.facetValues.length > 0 ? item.facetValues[0].name : "Unknown";

      return {
        id: item.id,
        lblDescription: firstVariant.name || "No Name",
        lblCost: firstVariant.priceWithTax ? `$${(firstVariant.priceWithTax / 100).toFixed(2)}` : "N/A",
        lblCategory: firstFacet,
        lblDiscount: "",
        lblCostDiscount: "",
        img: item.featuredAsset.preview ? item.featuredAsset.preview : "default.png"
      };
    });

    this.ProductList = formattedProducts;
    console.log("Update product list:", this.ProductList);

    this.initProductData();
  }
});
