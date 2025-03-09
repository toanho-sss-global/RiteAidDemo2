
define({ 

 //Type your controller code here 
	checkIsLogin: function () {
      var userData = voltmx.store.getItem('userData');
      if (userData) {
        return true;
      } else {
        return false;
      }
    },
	handleMoveOnUserClicked: function () {
      console.log("User Clicked");
      var page = "Login";
      if(this.checkIsLogin()) {
		page = "Dashboard"
      }
      var nav = new voltmx.mvc.Navigation(page);
      nav.navigate();
    }
 });