define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
		},
      
       setData: function() {
         var navigation = new voltmx.mvc.Navigation("Login");
        navigation.navigate();
        }
	};
});