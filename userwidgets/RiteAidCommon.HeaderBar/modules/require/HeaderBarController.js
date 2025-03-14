define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    openMenu: function() {

    },
    openHome: function() {
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
    },
    
  };
});