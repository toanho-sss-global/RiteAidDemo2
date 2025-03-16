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
    if (!data.hits || !Array.isArray(data.hits)) {
      return;
    }

    var formattedProducts = data.hits.map(item => {
      var firstVariant = item.variants && item.variants.length > 0 ? item.variants[0] : {};
      var firstFacet = item.facetValues && item.facetValues.length > 0 ? item.facetValues[0].name : "Unknown";
      var DiscountItem = item.Promotions && item.Promotions.length > 0 ? item.Promotions : [];

      var price = firstVariant.priceWithTax ? (firstVariant.priceWithTax / 100).toFixed(2) : "0";
      var Cost = parseFloat(price);
      var number = parseInt(DiscountItem[0]) || 100;
      var CostDiscount = Cost - (Cost * (number / 100));


      return {
        id: item.id,
        lblDescription: firstVariant.name || "No Name",
        lblCost: `$${Cost.toFixed(2)}`,
        lblCategory: firstFacet,
        lblDiscount: DiscountItem[0],
        lblCostDiscount: (number > 0 && number < 100) ? `$${CostDiscount.toFixed(2)}` : "",
        img: item.featuredAsset.preview ? item.featuredAsset.preview : "default.png",
        lblSpanCost: (number > 0 && number < 100) ? "------------" : "",

      };
    });

    this.ProductList = formattedProducts;
    this.initProductData();
  },

  SearchProduct: function(keywork) {
    var self = kony.mvc.getController("ProductList", true);     
    var httpclient = new voltmx.net.HttpRequest();
    var url = `https://3BP6P78G2Y-dsn.algolia.net/1/indexes/Riteaids`;

    if (keywork) {
      url +=  `?filters=Promotions:"${keywork}% off"`;
      //           url += `?query=${encodeURIComponent(keywork)}`  `?filters=Promotions:"90${keywork}% off"`;
    }  
    var token = "d3BzYWRtaW46d3BzYWRtaW4=";

    httpclient.open(constants.HTTP_METHOD_GET, url);
    httpclient.setRequestHeader("X-Algolia-API-Key", `1903a10f4bc35dca44f99e43d8c51a99`);
    httpclient.setRequestHeader("X-Algolia-Application-Id", `3BP6P78G2Y`);


    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4) {
        if (httpclient.status === 200) {
          try {
            var response = JSON.parse(httpclient.response);
            if (response) {
              self.handleProducts(response);
            }
          } catch (error) {
            return error;
          }
        } 
      }
    }
    httpclient.send();
  },


  SelectionBox: function() { 
    setTimeout(function () {    
      var self = kony.mvc.getController("ProductList", true);     

      let selectkey = localStorage.getItem("selectedkey");

      if (selectkey) {
        self.view.Content.FlexFilterGroup.ListFilter.selectedKey = selectkey;
        localStorage.removeItem("selectedkey");
      } else {
        selectkey = self.view.Content.FlexFilterGroup.ListFilter.selectedKey;
      }

      if(selectkey === "1") {
        self.SearchProduct();
      } else if(selectkey === "2") {
        self.SearchProduct(50);
      }
    }, 500);

  },



});
