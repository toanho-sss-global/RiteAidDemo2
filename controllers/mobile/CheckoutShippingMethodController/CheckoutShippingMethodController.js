define({ 
  storeLocation    : [],
  updateProgressBar: function () {
    this.view.ProgressBar.ProgressBarLeft2.skin = "CopyslFbox0ab370b90781448";
    this.view.ProgressBar.ProgressBarCircle2.skin = "CopyslFbox0b75af0da92e140"; 
    this.view.ProgressBar.ProgressBarRight2.skin = "CopyslFbox0ab370b90781448";
  },

  addSpaceToRadioGroup: function (){
    this.view.ShippingModeContainer.ShippingOptions.lineSpace = 10;
  },

  getOrderSummaryData: function() {  
    this.view.CheckoutShippingMethodContainer.OrderSummary.OrderSummaryTotal.text = voltmx.store.getItem("CartTotalPrice") || "0";
    this.view.CheckoutShippingMethodContainer.OrderSummary.InMyCartCtn.InMyCartQuantity.text = "In My Cart | " + voltmx.store.getItem("CartItemQuantity") + " Items";
    var cartData = voltmx.store.getItem("CartProductList");
    if (cartData) {
      var parsedCartData = JSON.parse(cartData);
      this.view.OrderSummary.OrderSummaryItemList.setData(parsedCartData);
    }   
  },

  showMap: function () {
    var selectedKey = this.view.ShippingOptions.selectedKey;
    if(selectedKey === "2"){
      this.view.MapPopupDimScreen.isVisible = true;
    }
  },
  showShippingConfirmation: function() {
    var selectedKey = this.view.ShippingOptions.selectedKey;
    if(selectedKey === "1"){
      this.view.ShippingConfirmationDImScreen.isVisible = true;
    }
  },

  hideMap: function () {
    this.view.MapPopupDimScreen.isVisible = false;
  },
  stopPropagation: function (){
    event.stopPropagation();
  },
  ApiShipingMethod: function() {
    var ShippingOptions = this.view.CheckoutShippingMethodContainer.ShippingModeContainer.ShippingOptions.selectedKey;
    var httpclient = new voltmx.net.HttpRequest();
    var token =  localStorage.getItem("vendure-auth-token");

    httpclient.open(constants.HTTP_METHOD_POST,"https://vendure.demo.universalcommerce.io/shop-api");
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader("Authorization",`Bearer ${token}`);
    console.log("checkout shipping method token: ", token)
    var jsonStr2 = JSON.stringify({
      "query": "mutation SetOrderShippingMethod($shippingMethodIds: [ID!]!) { setOrderShippingMethod(shippingMethodId: $shippingMethodIds) { ... on Order { id createdAt updatedAt type orderPlacedAt code state active totalQuantity subTotal subTotalWithTax currencyCode shipping shippingWithTax total totalWithTax } ... on OrderModificationError { errorCode message } ... on IneligibleShippingMethodError { errorCode message } ... on NoActiveOrderError { errorCode message } } }",
      "variables": {
        "shippingMethodIds": ShippingOptions
      }
    });
    httpclient.send(jsonStr2);

    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4 && httpclient.status === 200) {
        var response = JSON.parse(httpclient.response);
        var itemData = response.data;
        if(itemData) {
          var nav = new voltmx.mvc.Navigation("CheckoutPaymentMethod");
          nav.navigate();
        }
      }
    }
  },
  GetDataStoreLocation: function() {
    this.ApiLoginAdmin();
  },
  ApiLoginAdmin: function() {
    var httpclient = new voltmx.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_POST, ADMIN_SERVICE_API_URL);
    httpclient.setRequestHeader("Content-Type", "application/json");
    var jsonStr2 = JSON.stringify({
      "query": "mutation ($username: String!, $password: String!) { login(username: $username, password: $password, rememberMe: true) { ... on CurrentUser { id identifier channels { id token code permissions } } } }",
      "variables": {
        "username": "superadmin",
        "password": "superadmin",
      }
    });
    httpclient.send(jsonStr2);
    httpclient.onReadyStateChange = function() {
      if (httpclient.readyState === 4 && httpclient.status === 200) {
        var response = JSON.parse(httpclient.response);
        var loginData = response.data;
        if(loginData) {
          var adminAuthToken =
              httpclient.getResponseHeader("vendure-auth-token");
          localStorage.setItem("admin-vendure-auth-token", adminAuthToken);
          var cartData = voltmx.store.getItem("CartProductList");
          if (!cartData) {
            return;
          }
          var arrayVariant = JSON.parse(cartData).map(item => item.id);
          var httpclient2 = new voltmx.net.HttpRequest();
          httpclient2.open(constants.HTTP_METHOD_POST, ADMIN_SERVICE_API_URL);
          httpclient2.setRequestHeader("Content-Type", "application/json");
          httpclient2.setRequestHeader("Authorization",`Bearer ${adminAuthToken}`);

          var queryBody = JSON.stringify({
            "query": "query GetProductVariants($ids: [String!]!) { productVariants(options: { filter: { id: { in: $ids } } }) { items { id name sku price featuredAsset { preview } channels { id token code seller { id name customFields { googleMapLink latitude longitude } } } } } }",
            "variables": {
              "ids": arrayVariant,
            }
          });
          httpclient2.send(queryBody);
          httpclient2.onReadyStateChange = function () {
            if (httpclient2.readyState === 4 && httpclient2.status === 200) {
              var response2 = JSON.parse(httpclient2.response);
              if(response2 && response2.data) {
                console.log("Response Api Map: ", response2)
                this.storeLocation = 
                      response2.data.productVariants.items.map(item => {
                  const channels = 
                        item.channels.filter(channel => 
                    channel.seller && channel.seller.customFields
                    && channel.seller.customFields.googleMapLink);
                  return {
                    id           : item.id,
                    name         : item.name,
                    featuredAsset: item.featuredAsset.preview,
                    locations     : channels.map(channel => {
                      return {
                        googleMapLink: channel.seller.customFields.googleMapLink,
                        latitude     : channel.seller.customFields.latitude,
                        longitude    : channel.seller.customFields.longitude,
                      }
                    }
                  )}
                });
              }
            }
          }.bind(this);
        }
      }
    }.bind(this);
  },

  onSelectMethod: function() {
    var ShippingOptions =
        this.view.ShippingModeContainer.ShippingOptions.selectedKey;
    if (ShippingOptions === 4) {
      this.ApiShipingMethod();
    } else {
      this.generateGoogleMapUI();
    }
  },

  generateGoogleMapUI: function() {
    //The below function is the callback function for onPinClick event.
    function onPinClickCallBck(map) {
      alert("onPinClick event triggered");
    }

    //Defining the map properties
    var mapBasicConf = {
      id             : "map1",
      provider       : constants.MAP_PROVIDER_GOOGLE,
      mapKey         : GOOGLE_MAP_API_KEY, //Provide your own Google map key.
      defaultPinImage: "map_pin_red.png",
      isVisible      : true,
      onPinClick     : onPinClickCallBck
    };

    var mapLayoutConf = {
      margin         : [0, 0, 0, 0],
      containerWeight: 100,
      widgetAlignment: constants.WIDGET_ALIGN_CENTER,
      padding        : [0, 0, 0, 0],
      hExpand        : false,
      vExpand        : false
    };

    var mapPSPConf = {
      mode               : constants.MAP_VIEW_MODE_NORMAL,
      showCurrentLocation: constants.MAP_VIEW_SHOW_CURRENT_LOCATION_AS_PIN
    };
    //Creating the map with the properties defined above.
    var map = new voltmx.ui.Map(mapBasicConf, mapLayoutConf, mapPSPConf);
    // Adding Location map to the view
    var location = [];
    for (let index = 0; index < this.storeLocation.length; index++) {
      const item = this.storeLocation[index];
      for (let j = 0; j < item.locations.length; j++) {
        const locationItem = item.locations[j];
        location.push({
          lat  : locationItem.latitude,
          lon  : locationItem.longitude,
          name : item.name,
          desc : item.id,
          image: 'map_pin_blue.png'
        });
      }
    }
    voltmx.location.getCurrentPosition(function (position) {
      console.log('Response Location: ', position);
    }, function (error) {
      console.log("Error Location: " + error);
    },
    {
      enableHighAccuracy: true, 
      timeout: 5000
    }
    );
    location.push({
        lat  : 10.800883,
        lon  : 106.650431,
        name : 'My Location',
        desc : '',
        image: 'map_pin_red.png'
      });
    map.locationData = location;
    this.view.mapViewGroup.add(map);
  },



});
