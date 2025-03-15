define({
  validateLogin: function (email, password) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email!");
      return false;
    }

    if (password === "") {
      alert("Password must be at least 8 characters!");
      return false;
    }

    return true;

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
          var nav = new voltmx.mvc.Navigation("Home");
          nav.navigate();
          console.log("Check count item in store: ", localStorage.getItem("count-item-in-cart"));
        }
    }
  },
  
  LoginApi: function () {
//     var email = this.view.txtBoxEmail.text.trim();
//     var password = this.view.txtBoxPassword.text.trim();
    var self = this;

     var email = "danny@cnetric.com";
    var password = "12345678";
    if (this.validateLogin(email, password)) {
      var httpclient = new voltmx.net.HttpRequest();
      httpclient.open(constants.HTTP_METHOD_POST, 
                      "https://vendure.demo.universalcommerce.io/shop-api");
      httpclient.setRequestHeader("Content-Type", "application/json");

      var jsonStr2 = JSON.stringify({
        "query"    : "mutation Login($email: String!, $password: String!) { login(username: $email, password: $password) { ... on CurrentUser { id identifier channels { id token } } ... on InvalidCredentialsError { errorCode message authenticationError } ... on NotVerifiedError { errorCode message } } }",
        "variables": {
          "email"   : email,
          "password": password
        }
      });
      httpclient.send(jsonStr2);
      httpclient.onReadyStateChange = function () {
        if (httpclient.readyState === 4 && httpclient.status === 200) {
          
    	  var authToken = httpclient.getResponseHeader("vendure-auth-token");
          localStorage.setItem("vendure-auth-token", authToken);
          
          var response = JSON.parse(httpclient.response);
          var userData = response.data.login;
          if (userData !== null && userData.identifier) {
            voltmx.store.setItem('userData', JSON.stringify(userData));
          self.getCartBadgeCount();
		  
          } else if (response.errors) {
            alert(response.errors[0].message);
          }
        }
      };
    }
  },

});
 