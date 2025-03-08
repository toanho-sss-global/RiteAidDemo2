define({ 
 //Type your controller code here 
validateLogin: function(email, password) {

  
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email==="" || !emailPattern.test(email)) {
            alert("Please enter a valid email!");
            return false;
        }

//         if (password ==="" || password.length < 6 || 
//           !/[A-Z]/.test(password) ||  
//           !/[a-z]/.test(password) ||   
//           !/[0-9]/.test(password) || 
//           !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//           alert("Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character!");
//           return false;
//       	}
  
   if (password ==="" ) {
          alert("Password must be at least 8 characters!");
          return false;
      	}
  		
       return true;

    },
  
  
  LoginApi: function(){
    var email = this.view.txtBoxEmail.text.trim();
        var password = this.view.txtBoxPassword.text.trim();
    
    if (this.validateLogin(email, password)) {
       var httpclient = new voltmx.net.HttpRequest();  
       httpclient.open(constants.HTTP_METHOD_POST, "https://vendure.demo.universalcommerce.io/shop-api" );  
       httpclient.setRequestHeader("Content-Type", "application/json");  

    
      var jsonStr2 = JSON.stringify({
        "query": "mutation Login($email: String!, $password: String!) { login(username: $email, password: $password) { ... on CurrentUser { id identifier channels { id token } } ... on InvalidCredentialsError { errorCode message authenticationError } ... on NotVerifiedError { errorCode message } } }",
        "variables": {
          "email": email,
          "password": password
        }
      }); 
		httpclient.send(jsonStr2);
      
       httpclient.onReadyStateChange = function() {
                if (httpclient.readyState === 4 && httpclient.status === 200) {
                  
                    var response = JSON.parse(httpclient.response);
                    if (response.data.login.identifier === email) {
                        var nav = new voltmx.mvc.Navigation("Home");
                        nav.navigate();
                    } else if (response.errors) {
                         alert(response.errors[0].message);
                    }
                }
            };
    }
   
  }

 });


