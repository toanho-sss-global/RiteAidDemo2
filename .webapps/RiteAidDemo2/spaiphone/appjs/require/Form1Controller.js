define("userForm1Controller", {
    onFormInit: function() {
        var self = this;
        var form = kony.application.getCurrentForm();
        if (!form) return;
        // List of all sections and buttons
        self.sections = [{
            flex: "FlxMoreInfoText",
            button: "ExtendMoreInfo"
        }, {
            flex: "FlxHowToUseText",
            button: "ExtendHowToUse"
        }, {
            flex: "FlxIngredientsText",
            button: "ExtendIngredients"
        }, {
            flex: "FlxSafetyText",
            button: "ExtendSafetyLabel"
        }, {
            flex: "FlxDimensionsText",
            button: "ExtendDimensionsLabel"
        }, {
            flex: "FlxReviewsText",
            button: "ExtendReviewsLabel"
        }];
        // Hide all text sections on load and reset button text
        self.resetSections();
        // Dynamically assign click events
        self.sections.forEach(function(section) {
            if (form[section.button]) {
                form[section.button].onClick = function() {
                    self.toggleSection(section.flex, section.button);
                };
            }
        });
    },
    resetSections: function(exceptFlex) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        this.sections.forEach(function(section) {
            if (form[section.flex] && form[section.button] && section.flex !== exceptFlex) {
                form[section.flex].isVisible = false;
                form[section.button].text = "+";
            }
        });
    },
    toggleSection: function(sectionFlex, arrowIcon) {
        var form = kony.application.getCurrentForm();
        if (!form) return;
        var content = form[sectionFlex];
        var icon = form[arrowIcon];
        if (!content || !icon) return; // Avoid errors if elements are missing
        if (content.isVisible) {
            // If already visible, hide it
            content.isVisible = false;
            icon.text = "+";
        } else {
            // First, reset all sections except this one
            this.resetSections(sectionFlex);
            // Show clicked section and change button text
            content.isVisible = true;
            icon.text = "-";
        }
    },
    increaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        this.view.Quantity.text = (currentQuantity + 1).toString();
    },
    decreaseQuantity: function() {
        var currentQuantity = parseInt(this.view.Quantity.text);
        if (currentQuantity > 0) {
            this.view.Quantity.text = (currentQuantity - 1).toString();
        }
    },
    toggleFavorite: function() {
        if (this.isFavorite) {
            this.view.FavoriteCheckText.text = "Add to Favorites";
            this.view.FavoriteHeartRed.isVisible = false;
            this.view.FavoriteHeartLight.isVisible = true;
        } else {
            this.view.FavoriteCheckText.text = "Remove from Favorites";
            this.view.FavoriteHeartRed.isVisible = true;
            this.view.FavoriteHeartLight.isVisible = false;
        }
        this.isFavorite = !this.isFavorite; // Toggle the state
    },
    onInit: function() {
        this.view.IncreaseQuantity.onClick = this.increaseQuantity;
        this.view.DecreaseQuantity.onClick = this.decreaseQuantity;
        this.view.FavoriteButton.onClick = this.toggleFavorite.bind(this);
    }
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Ingredients **/
    AS_Button_a1266b1b00664e1fb98315a3811d2efb: function AS_Button_a1266b1b00664e1fb98315a3811d2efb(eventobject) {
        var self = this;
    },
    /** onClick defined for IncreaseQuantity **/
    AS_Button_b98b257415804034acf0604954e686cc: function AS_Button_b98b257415804034acf0604954e686cc(eventobject) {
        var self = this;
        return self.increaseQuantity.call(this);
    },
    /** onClick defined for Dimensions **/
    AS_Button_cf1ff59972374905841b6e69f695a8ca: function AS_Button_cf1ff59972374905841b6e69f695a8ca(eventobject) {
        var self = this;
    },
    /** onClick defined for HowToUse **/
    AS_Button_d5ee3fa39cee4e70b921993b014b78eb: function AS_Button_d5ee3fa39cee4e70b921993b014b78eb(eventobject) {
        var self = this;
    },
    /** onClick defined for Safety **/
    AS_Button_da2e49ec51ba4324a1a849c2687f9e12: function AS_Button_da2e49ec51ba4324a1a849c2687f9e12(eventobject) {
        var self = this;
    },
    /** onClick defined for Reviews **/
    AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d: function AS_Button_e181a0a24f5e4d7d8f2635c333e9fe5d(eventobject) {
        var self = this;
    },
    /** onClick defined for FavoriteButton **/
    AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a: function AS_Button_e280b801acac44b5bfc6ffdcb3d1b76a(eventobject) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onClick defined for DecreaseQuantity **/
    AS_Button_ge82e1bc249241e3be2af5f299263930: function AS_Button_ge82e1bc249241e3be2af5f299263930(eventobject) {
        var self = this;
        return self.decreaseQuantity.call(this);
    },
    /** onClick defined for MoreInfo **/
    AS_Button_i8a060186d564c2da96e04f19b9ea9be: function AS_Button_i8a060186d564c2da96e04f19b9ea9be(eventobject) {
        var self = this;
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
