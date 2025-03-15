
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
  
    ListBanner: function() {
      console.log('START GET LIST BANNER');      
      var httpclient = new voltmx.net.HttpRequest();
      httpclient.open(constants.HTTP_METHOD_POST,"https://dx.sbx0328.play.hclsofy.com/dx/api/core/v1/graphql");
      httpclient.setRequestHeader("Content-Type", "application/json");
      var jsonStr2 = JSON.stringify({
    "query": "query AccessContents($parentID: [String]) { accessContents(accessType: dxrest, parentID: $parentID) { contents { id name } } }",
    "variables": {
        "parentID": [
            "2524b5cb-0beb-4e42-ae9f-ec80f07169cc"
        ]
    }
});

      httpclient.onReadyStateChange = function () {
        console.log('Response:', httpclient.response);
          if (httpclient.readyState === 4 && httpclient.status === 200) {
            var response = JSON.parse(httpclient.response);
            if(response) {
              var content = response.data.accessContents.contents;
               this.BannerID(content);
            }
          }
      }.bind(this);
     httpclient.send(jsonStr2);

  },
  
  BannerID: function(content) {
    if (!content) return;
    var self = this;
    try{
      var detail = content.map(item => {
      return {
        id_banner: item.id,
      };
    });
      var Banners = detail;
 self.BannerDetail(Banners);
    }catch (error) {
        return error;
    }
  },
  
BannerDetail: function (Banners) {
    if (!Banners || !Array.isArray(Banners)) return;

    let requests = Banners.map((banner) => {
        return new Promise((resolve, reject) => {
            var httpclient = new voltmx.net.HttpRequest();
            var url = `https://dx.sbx0328.play.hclsofy.com/wps/mycontenthandler/!ut/p/digest!dzhKaWXH6JldF_pw5XELZg/wcmrest-v2/contents/${banner.id_banner}`;
            var token = "d3BzYWRtaW46d3BzYWRtaW4=";

            httpclient.open(constants.HTTP_METHOD_GET, url);
            httpclient.setRequestHeader("Authorization", `Basic ${token}`);

            httpclient.onReadyStateChange = function () {
                if (httpclient.readyState === 4) {
                    if (httpclient.status === 200) {
                        try {
                            var response = JSON.parse(httpclient.response);
                            resolve(response);
                        } catch (error) {
                            reject("JSON Parse Error: " + error);
                        }
                    } else {
                        reject("HTTP Error: " + httpclient.status);
                    }
                }
            };
            httpclient.send();
        });
    });

    return Promise.all(requests)
        .then(results => {
            return this.AddImage(results); 
        })
        .catch((error) => {
            return error;
        });
},
   
  AddImage: function(results) {
    let externalImages = {
      "bb6adf5b-b508-4971-951e-7425f66bb405": "untitled2.png",
      "edbac152-7763-499d-9667-5157833415a1": "image.jpg",
      "ae880424-b155-4177-8237-11270c2a26e8": "untitled4.png",
    };
    for (let i = 0; i < results.length; i++) {
        let itemId = results[i].id.toString();
          results[i].data.extraImage = externalImages[itemId] ;
    }
    this.initProductData(results);
  },
  
  Custom:function(image) {
    var str2 = "myconnect";
    var Newimg = image.replace(str2, "connect");
    return Newimg;
  },
  
initProductData: function(results) {
     var self = this;
    var modifiedData = [];
  
  for (var i = 0; i < results.length; i++) {
      var item = results[i];
      var image = item.data["Slide-Image"].data.image.resourceUri.value;
      var newImg = this.Custom(image);
      
    
        let bannerData = {
            backgroundImg: item.data.extraImage,
            lblDes: item.data["Headline-Text"].data.value,     
            btnBanner: {
              text: item.data.Project.data.linkElement.display.value,
              onClick: (function(index) {
              return function() {
                self.btnEvent(index);
              };
            })(i)  
      },
            imgBanner: `https://dx.sbx0328.play.hclsofy.com${newImg}` ,  
    };
      modifiedData.push(bannerData);
    }

    self.view.contentScroll.Segment0a85a0f0f28a548.setData(modifiedData);
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
  
btnEvent: function(index){
  if(index == 2) {
    this.SearchProduct(90);
  }
}
  
 });