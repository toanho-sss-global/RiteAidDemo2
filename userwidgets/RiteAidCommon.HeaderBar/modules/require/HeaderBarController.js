define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
// 		this.getCartBadgeCount();
//       	setInterval(() => {
//     		this.getCartBadgeCount();
//   		}, 1000);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    openMenu: function() {

    },
    openHome: function() {
    },
    
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
//           if (this.view.cartBadgeCount) {
//             this.view.cartBadgeCount.text = countItem.toString();
//             this.view.forceLayout();
//           }
        }
    }
  },

    checkIsLogin: function() {
      var userData = voltmx.store.getItem('userData');
      if (userData) {
        return true;
      } else {
        return false;
      }
    },
    handleMoveOnUserClicked: function () {
      var information = this.view.ListInformation;
      var page = "Login";
      if(this.checkIsLogin()) {
        if(information.height === "220dp") {
          information.height = "0dp";
        } else {
          information.height = "220dp";
        }

        this.view.forceLayout(); 

      } else {
        var nav = new voltmx.mvc.Navigation(page);
        nav.navigate();  
      }
    },

    NavDashboard: function() {
      if(this.checkIsLogin()) {
        var nav = new voltmx.mvc.Navigation("Dashboard");
        nav.navigate();  
      }
    },

    Logout: function() {
      if(this.checkIsLogin()) {
        voltmx.store.removeItem('userData');

        var nav = new voltmx.mvc.Navigation("Login");
        nav.navigate();  
      }
    }
  };
});