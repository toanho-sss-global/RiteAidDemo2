define({ 

 //Type your controller code here 
validateLogin: function() {
        var email = this.view.txtBoxEmail.text.trim();
        var password = this.view.txtBoxPassword.text.trim();
  
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email==="" || !emailPattern.test(email)) {
            alert("Please enter a valid email!");
            return false;
        }
  
        
        if (password ==="" || password.length < 6 || 
          !/[A-Z]/.test(password) ||  
          !/[a-z]/.test(password) ||   
          !/[0-9]/.test(password) || 
          !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          alert("Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character!");
          return false;
      	}
  			
  		if(email !== "email@gmail.com") {
            alert("Invalid email!");
          return false;
        }
  
        if(password !== "!Admin00") {
            alert("Invalid password!");
          return false;
        }

       return true;

    },
  
    isLogin: function() {
        if (this.validateLogin()) {
          alert("Login successful!");
          var navigation = new voltmx.mvc.Navigation("Home");
          navigation.navigate();
        }
  	}
  

 });