define({ 
  storeLocation    : [],
  selectedLocation : null,
  selectedIndex    : -1,
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
        "shippingMethodIds": 4,
      }
    });
    httpclient.send(jsonStr2);

    httpclient.onReadyStateChange = function () {
      if (httpclient.readyState === 4 && httpclient.status === 200) {
        var response = JSON.parse(httpclient.response);
        var itemData = response.data;
        if(itemData) {
          this.hideMap();
          this.hideConfirmationSameLocation();
          voltmx.store.setItem("CartTotalPrice", (itemData.setOrderShippingMethod.totalWithTax /100).toFixed(2)); 
          var nav = new voltmx.mvc.Navigation("CheckoutPaymentMethod");
          nav.navigate();
        }
      }
    }.bind(this);
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
                        sellerId     : channel.seller.id,
                        sellerName   : channel.seller.name,
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
  hideConfirmationSameLocation: function() {
    this.view.ShippingConfirmationDImScreen.isVisible = false;
  },
  showConfirmationSameLocation: function() {
    this.view.ShippingConfirmationDImScreen.isVisible = true;
  },

  onSelectMethod: function() {
    var ShippingOptions =
        this.view.ShippingModeContainer.ShippingOptions.selectedKey;
    console.log('ShippingOtions: ', ShippingOptions);
    if (ShippingOptions === "2") {
      this.view.MapPopupDimScreen.isVisible = true;
      this.generateGoogleMapUI();
    } else if (ShippingOptions === "1") {
      this.showConfirmationSameLocation();
      
    }
  },
  generateGoogleMapUI: function() {
    var self = this;
    //The below function is the callback function for onPinClick event.
    function onPinClickCallBck(map) {
      console.log("onPinClick event triggered");
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
    const myLocation = {
      lat     : 10.800883,
      lon  	  : 106.650431,
      name    : 'My Location',
      desc    : '',
      distance: null,
      image   : 'map_pin_red.png'
    };
    for (let index = 0; index < this.storeLocation.length; index++) {
      const item = this.storeLocation[index];
      for (let j = 0; j < item.locations.length; j++) {
        const locationItem = item.locations[j];
        var distance = this.getDistance({
          lat: locationItem.latitude,
          lon: locationItem.longitude,
        }, myLocation);
        // Add Item to Locaiton Array
        let isExisted =
            location.filter(e => e.desc === locationItem.sellerId).length > 0;
        if (!isExisted) {
          location.push({
            lat  : locationItem.latitude,
            lon  : locationItem.longitude,
            distance,
            url  : locationItem.googleMapLink,
            name : locationItem.sellerName,
            desc : locationItem.sellerId,
            image: 'map_pin_blue.png'
          });
        }
      }
    }
    voltmx.location.getCurrentPosition(function (position) {
      console.log('Response Location: ', position);
    }, function (error) {
      console.log("Error Location: " + error);
    },
    {
      enableHighAccuracy: true, 
      timeout: 5000,
    });
    if(location.length > 0) {
      // Set Data to Segment
      var storeData = location.map(e => ({
        MapUrl      : `https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${e.lon},${e.lat}&z=8&l=map&size=400,200&pt=${e.lon},${e.lat},pm2rdl`,
        StoreName   : e.name,
        Distance    : 'Distance: ' + e.distance,
        ViewBtnLabel: 'View on Google Maps',
        markerImg   : 'map_pin_white.png',
        url         : e.url,
        GroupBtn    : {
          onClick: function () {
            voltmx.application.openURL(e.url);
          },
        },
        onSelectLayer: {
          isVisible: false,
          onClick  : function () {
            var segmentData = self.view.MapStoreLocation.data;
            var rowIndex = self.view.MapStoreLocation.selectedRowIndex[1];
            segmentData[rowIndex].onSelectLayer.isVisible 
              = !segmentData[rowIndex].onSelectLayer.isVisible;
            segmentData[rowIndex].onSelectLayer.isSelected = "";
            self.view.MapStoreLocation.setData(segmentData);
            self.selectedLocation = null;
            self.selectedIndex = -1;
            self.onTriggerContinueAction();
          },
        },
        isSelected: 'Selected',
      }));
      this.view.MapStoreLocation.setData(storeData);
      this.view.MapStoreLocation.onRowDisplay = this.onRowDisplayHandler;
      console.log("Store Data: ", storeData);
      // Set Data to Map
      location.push(myLocation);
      map.locationData = location;
      this.view.mapViewGroup.add(map);
      // Trigger Show UI
      this.view.StoreMapListGroup.isVisible = true;
      this.view.NoNearByTextContainer = false;
    } else {
      this.view.NoNearByTextContainer = true;
      this.view.StoreMapListGroup.isVisible = false;
    }
  },
  onRowClicked: function() {
    var segmentData = this.view.MapStoreLocation.data;
    var rowIndex = this.view.MapStoreLocation.selectedRowIndex[1];
    if(this.selectedLocation) {
      // Clear Current Selection
      segmentData[this.selectedIndex].onSelectLayer.isVisible = false;
      segmentData[this.selectedIndex].onSelectLayer.isSelected = "";
    }
    segmentData[rowIndex].onSelectLayer.isVisible 
      = !segmentData[rowIndex].onSelectLayer.isVisible;
    segmentData[rowIndex].onSelectLayer.isSelected = "Selected";

    this.view.MapStoreLocation.setData(segmentData);
    this.selectedLocation = segmentData[rowIndex];
    this.selectedIndex = rowIndex;
    
    this.onTriggerContinueAction();
  },
  getDistance: function (srcLocation, targetLocation) {
    const lat1 = srcLocation.lat;
    const lon1 = srcLocation.lon;
    const lat2 = targetLocation.lat;
    const lon2 = targetLocation.lon;
    function toRad(value) {
        return value * Math.PI / 180;
    }

    var R = 6371; // Radius of Earth in km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
	if(distance < 0.1) {
      return (distance * 1000).toFixed(0) + 'm';
    }
    return distance.toFixed(1) + 'km'; // in km
  },
  onTriggerContinueAction: function() {
    var self = this;
    if(this.selectedLocation) {
      console.log("ACTIVE BUTTON");
      self.view.ContinueBtn.skin = "actionContBtnActive";
      self.view.ContinueBtn.onClick = function() {
        this.ApiShipingMethod();
      }.bind(this);
      self.view.forceLayout();
    } else {
      console.log("DEACTIVE BUTTON");
      self.view.ContinueBtn.skin = "actionContBtnDeactive"; 
      self.view.ContinueBtn.onClick = function() {
        console.log("Disabled Action");
      }
      self.view.forceLayout();
    }
  },
});
