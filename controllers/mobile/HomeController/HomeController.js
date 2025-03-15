
define(  [
  'ProductListController'
], function (ProductListController) {       
  return {
    ListBanner: function() {
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
          backgroundImg:  {
            src: item.data.extraImage,
          },
          Flexleft: {
            onClick: (function(index) {
              return function() {
                var nav = new voltmx.mvc.Navigation("ProductList");
                localStorage.setItem("selectedkey", "1");
                ProductListController.SelectionBox();

                nav.navigate();
              };
            })(i) 
          },
          lblDes: item.data["Headline-Text"].data.value,     
          btnBanner: {
            text: item.data.Project.data.linkElement.display.value,
            onClick: (function(index) {
              return function() {
                self.btnEvent(index);
              };
            })(i)  
          },
          imgBanner:   {
            src: `https://dx.sbx0328.play.hclsofy.com${newImg}`,
            onTouchEnd: (function(index) {
              return function() {
                var nav = new voltmx.mvc.Navigation("ProductList");
                localStorage.setItem("selectedkey", "1");
                ProductListController.SelectionBox();

                nav.navigate();
              };
            })(i)  
          }, 
        };

        modifiedData.push(bannerData);
      }

      self.view.contentScroll.Segment0a85a0f0f28a548.setData(modifiedData);
    },



    btnEvent: function(index){
      if(index === 2) {
        var nav = new voltmx.mvc.Navigation("ProductList");
        localStorage.setItem("selectedkey", "2");

        ProductListController.SelectionBox();
        nav.navigate();
      } 
    }

  };
});