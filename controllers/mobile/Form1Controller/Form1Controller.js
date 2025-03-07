define({
    onFormInit: function() {
        var self = this;
        var form = kony.application.getCurrentForm();
        if (!form) return;

        // List of all sections and buttons
        self.sections = [
            { flex: "FlxMoreInfoText", button: "ExtendMoreInfo" },
            { flex: "FlxHowToUseText", button: "ExtendHowToUse" },
            { flex: "FlxIngredientsText", button: "ExtendIngredients" },
            { flex: "FlxSafetyText", button: "ExtendSafetyLabel" },
            { flex: "FlxDimensionsText", button: "ExtendDimensionsLabel" },
            { flex: "FlxReviewsText", button: "ExtendReviewsLabel" }
        ];

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
            if (form[section.flex]
                && form[section.button] 
                && section.flex !== exceptFlex) {
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
 