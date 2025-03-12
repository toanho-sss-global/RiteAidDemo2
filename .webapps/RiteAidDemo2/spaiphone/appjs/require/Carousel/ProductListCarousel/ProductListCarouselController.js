define("Carousel/ProductListCarousel/userProductListCarouselController", function() {
    return {};
});
define("Carousel/ProductListCarousel/ProductListCarouselControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Carousel/ProductListCarousel/ProductListCarouselController", ["Carousel/ProductListCarousel/userProductListCarouselController", "Carousel/ProductListCarousel/ProductListCarouselControllerActions"], function() {
    var controller = require("Carousel/ProductListCarousel/userProductListCarouselController");
    var actions = require("Carousel/ProductListCarousel/ProductListCarouselControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
