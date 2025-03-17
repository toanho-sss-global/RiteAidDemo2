define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
		setInterval(() => {
                var count = localStorage.getItem("count-item-in-cart");
                this.view.cartBadgeCount.text = String(count);
            }, 1000);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    openPage: function(pageName) {
      this.view.ListInformation.height = "0dp";
      var navigateController = new voltmx.mvc.Navigation(pageName);
      navigateController.navigate();
    },
    openHome: function() {
      this.openPage("Home");
    },
        openCart: function() {
      this.openPage("ShoppingCart");
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
        information.height = "0dp";
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