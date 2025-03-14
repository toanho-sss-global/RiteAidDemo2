define({
  ProductList: [],

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
    var url = "https://3BP6P78G2Y-dsn.algolia.net/1/indexes/Riteaids";

    var httpRequest = new voltmx.net.HttpRequest();
    httpRequest.responseType = constants.HTTP_RESPONSE_TYPE_JSON;

    httpRequest.onReadyStateChange = function () {
      if (httpRequest.readyState === constants.HTTP_READY_STATE_DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.response;
          console.log(response);

          if (response) {
            self.handleProducts(response);
          }
        } else {
          console.error("HTTP Error:", httpRequest.status, httpRequest.response);
        }
      }
    };

    httpRequest.open(constants.HTTP_METHOD_GET, url);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("X-Algolia-API-Key", `1903a10f4bc35dca44f99e43d8c51a99`);
    httpRequest.setRequestHeader("X-Algolia-Application-Id", `3BP6P78G2Y`);
    httpRequest.send();
  },

  handleProducts: function (data) {
   if (!data || !data.hits || !Array.isArray(data.hits)) {
      return;
    }

    var formattedProducts = data.hits.map(item => {
    var firstVariant = item.variants && item.variants.length > 0 ? item.variants[0] : {};
    var firstFacet = item.facetValues && item.facetValues.length > 0 ? item.facetValues[0].name : "Unknown";
	var DiscountItem = item.Promotions && item.Promotions.length > 0 ? item.Promotions : [];
      
    var price = firstVariant.priceWithTax ? (firstVariant.priceWithTax / 100).toFixed(2) : "0";
 	var Cost = parseFloat(price);
    var number = parseInt(DiscountItem[0]) || 100;
   	var CostDiscount = Cost * (number / 100);
 
      
      return {
        id: item.id,
        lblDescription: firstVariant.name || "No Name",
        lblCost: `$${Cost.toFixed(2)}`,
        lblCategory: firstFacet,
        lblDiscount: DiscountItem[0],
        lblCostDiscount: (number > 0 && number < 100) ? `$${CostDiscount.toFixed(2)}` : "",
        img: item.featuredAsset.preview ? item.featuredAsset.preview : "default.png",
    	lblSpanCost: (number > 0 && number < 100) ? "----------------" : "",

      };
    });

    this.ProductList = formattedProducts;
    console.log("Update product list:", this.ProductList);

    this.initProductData();
  },
  
  
  SearchProduct: function(keywork) {
      var httpclient = new voltmx.net.HttpRequest();
            var url = `https://3BP6P78G2Y-dsn.algolia.net/1/indexes/Riteaids/?query=${keywork}`;
            var token = "d3BzYWRtaW46d3BzYWRtaW4=";

            httpclient.open(constants.HTTP_METHOD_GET, url);
            httpclient.setRequestHeader("X-Algolia-API-Key", `1903a10f4bc35dca44f99e43d8c51a99`);
            httpclient.setRequestHeader("X-Algolia-Application-Id", `3BP6P78G2Y`);
    
      
            httpclient.onReadyStateChange = function () {
                if (httpclient.readyState === 4) {
                    if (httpclient.status === 200) {
                        try {
                            var response = JSON.parse(httpclient.response);
                            console.log(response);
                        } catch (error) {
                            reject("JSON Parse Error: " + error);
                        }
                    } 
                }
            };
            httpclient.send();
  },

});
