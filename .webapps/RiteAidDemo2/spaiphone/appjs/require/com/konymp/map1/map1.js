define(function() {
    return function(controller) {
        var map1 = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "map1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ha1f146d1aa540959bfeb954047f2ec0(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "RiteAidDemo2"
        }, controller.args[0], "map1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "map1"), extendConfig({}, controller.args[2], "map1"));
        map1.setDefaultUnit(voltmx.flex.DP);
        var mapLocations = new voltmx.ui.Map(extendConfig({
            "calloutWidth": 80,
            "defaultPinImage": "map_pin_red.png",
            "height": "100%",
            "id": "mapLocations",
            "isVisible": true,
            "left": "0%",
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "mapLocations"), extendConfig({}, controller.args[1], "mapLocations"), extendConfig({
            "mapSource": constants.MAP_SOURCE_NON_NATIVE,
            "mode": constants.MAP_VIEW_MODE_NORMAL
        }, controller.args[2], "mapLocations"));
        map1.add(mapLocations);
        return map1;
    }
})