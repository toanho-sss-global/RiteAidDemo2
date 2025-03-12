define("com/konymp/map1/usermap1Controller", function() {
    return {
        addLocationsToMap: function() {
            this.view.mapLocations.locationData = [{
                lat: "40.748817",
                lon: "-73.985428",
                image: "map_pin_red.png"
            }];
        }
    };
});
define("com/konymp/map1/map1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for map1 **/
    AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0: function AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0(eventobject) {
        var self = this;
        this.addLocationsToMap();
    }
});
define("com/konymp/map1/map1Controller", ["com/konymp/map1/usermap1Controller", "com/konymp/map1/map1ControllerActions"], function() {
    var controller = require("com/konymp/map1/usermap1Controller");
    var actions = require("com/konymp/map1/map1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
