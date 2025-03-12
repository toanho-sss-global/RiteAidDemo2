define("userProductDetailsController", {
    CartProductList: [],
    CartProduct: [],
    onFormInit: function() {
        var self = this;
        var form = kony.application.getCurrentForm();
        if (!form) return;
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
        self.resetSections();
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
        if (!content || !icon) return;
        if (content.isVisible) {
            content.isVisible = false;
            icon.text = "+";
        } else {
            this.resetSections(sectionFlex);
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
        this.isFavorite = !this.isFavorite;
    },
    //   	updateProductIdGlobal: function() {
    //     	var form = voltmx.application.getCurrentForm();
    //     	console.log('check form', form);
    //     	var selectedRowItems = this.view.FlxSclFrequentlyBoughtProducts.FrequentlyBoughtSegment.selectedRowItems;
    //     	if (selectedRowItems && selectedRowItems.length > 0) {
    //         	var hiddenId = selectedRowItems[0].HiddenId;
    //         	console.log('check hiddenId', hiddenId);
    //         	voltmx.store.setItem('product_Id', JSON.stringify(hiddenId));
    //     	}
    //       	var nav = new voltmx.mvc.Navigation('ProductList');
    //       	nav.navigate();
    //       	var productid1 = voltmx.store.getItem('product_Id');
    //       	console.log('check hiddenId AGAIN1', productid1);
    //       	var nav1 = new voltmx.mvc.Navigation('ProductDetails');
    //       	nav1.navigate();
    //       	var productid2 = voltmx.store.getItem('product_Id');
    // 	},
    updateProductIdGlobal: function() {
        var selectedRowItems = this.view.FlxSclFrequentlyBoughtProducts.FrequentlyBoughtSegment.selectedRowItems;
        if (selectedRowItems && selectedRowItems.length > 0) {
            var hiddenId = selectedRowItems[0].HiddenId;
            console.log('check hiddenId', hiddenId);
            voltmx.store.setItem('product_Id', hiddenId);
            this.GetAProduct(hiddenId);
            //         this.view.forceLayout();
        }
    },
    GetAProduct: function(product_id) {
        kony.print("ProductID: ", product_id)
        var self = this;
        var httpclient = new voltmx.net.HttpRequest();
        var url = "https://vendure.demo.universalcommerce.io/shop-api";
        httpclient.open(constants.HTTP_METHOD_POST, url);
        httpclient.setRequestHeader("Content-Type", "application/json");
        var jsonStr2 = JSON.stringify({
            "query": "query Product($productId: ID) { product(id: $productId) { id name description assets { preview } variants { id name priceWithTax currencyCode assets { preview } options { name group { name } } } } }",
            "variables": {
                "productId": product_id
            }
        });
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4) {
                if (httpclient.status === 200) {
                    var response = JSON.parse(httpclient.response);
                    kony.print("getAProductResponse: " + JSON.stringify(response));
                    var productData = response.data.product;
                    var productId = productData.id;
                    var productName = productData.name;
                    var productDescription = productData.description;
                    var productImage = productData.assets.length > 0 ? productData.assets[0].preview : "";
                    var variant = productData.variants.length > 0 ? productData.variants[0] : null;
                    var variantPrice = variant ? variant.priceWithTax / 100 : 0;
                    var currency = variant ? variant.currencyCode : "USD";
                    var productImagePreview = variant ? variant.assets[0].preview : "";
                    var form = kony.application.getCurrentForm();
                    if (!form) {
                        console.error("Form is undefined.");
                        return;
                    }
                    form.Quantity.text = "1";
                    if (form.ProductName) {
                        form.ProductName.text = productName;
                    } else {
                        console.error("ProductName label is undefined.");
                    }
                    if (form.Description) {
                        form.Description.text = productDescription;
                    } else {
                        console.error("ProductDescription label is undefined.");
                    }
                    if (form.MainProductImage) {
                        form.MainProductImage.src = productImage;
                    } else {
                        console.error("ProductImage component is undefined.");
                    }
                    //  				if (form.SubProductImage) {
                    //                     form.SubProductImage.src = productImagePreview + "?a=12345";
                    //                   	form.SubProductImage.forceLayout();
                    //                   	form.SubProductImage.id = variant.id;
                    //                 } else {
                    //                     console.error("SubImagePreview component is undefined.");
                    //                 }
                    if (form.ProductPrice) {
                        form.ProductPrice.text = currency + " " + variantPrice.toFixed(2);
                    } else {
                        console.error("ProductPrice label is undefined.");
                    }
                    if (form.ProductPrice) {
                        var displayCurrency = (currency === "USD") ? "$" : currency;
                        form.ProductPrice.text = displayCurrency + " " + variantPrice.toFixed(2);
                    } else {
                        console.error("ProductPrice label is undefined.");
                    }
                    if (form.SubProductImage) {
                        form.SubProductImage.src = productImagePreview;
                    } else {
                        console.error("SubImagePreview component is undefined.");
                    }
                    voltmx.store.setItem('product_variant_id', variant.id);
                } else {
                    console.error("Error fetching product: ", httpclient.status, httpclient.responseText);
                }
            }
        };
        httpclient.send(jsonStr2);
    },
    AddItemToCart: function() {
        var self = this;
        var httpclient = new voltmx.net.HttpRequest();
        var url = "https://vendure.demo.universalcommerce.io/shop-api";
        httpclient.open(constants.HTTP_METHOD_POST, url);
        httpclient.setRequestHeader("Content-Type", "application/json");
        var form = kony.application.getCurrentForm();
        var product_variant_id = voltmx.store.getItem('product_variant_id');
        var quantity = parseInt(form.Quantity.text, 10);
        var jsonStr2 = JSON.stringify({
            "query": "mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) { addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) { ... on Order { id lines { id linePriceWithTax quantity productVariant { id name priceWithTax assets { preview } product { assets { preview } } currencyCode } } totalWithTax totalQuantity currencyCode } } }",
            "variables": {
                "productVariantId": product_variant_id,
                "quantity": quantity
            }
        });
        httpclient.onReadyStateChange = function() {
            if (httpclient.readyState === 4) {
                if (httpclient.status === 200) {
                    var response = JSON.parse(httpclient.response);
                    if (response.data && response.data.addItemToOrder) {
                        self.handleCartProducts(response.data);
                    }
                }
            }
        };
        httpclient.send(jsonStr2);
    },
    handleCartProducts: function(itemCart) {
        if (!itemCart) {
            return;
        }
        try {
            var storedCart = voltmx.store.getItem("add_Item_To_Cart");
            var flatArray = storedCart ? JSON.parse(storedCart).flat() : [];
            var newItems = itemCart.addItemToOrder.lines.map(item => ({
                id: item.productVariant.id,
                lblDescription: item.productVariant.name,
                unitPrice: item.productVariant.priceWithTax,
                DeleteIcon: 'trashicon.png',
                MinusIcon: 'minusicon.png',
                PlusIcon: 'plusicon.png',
                ProductQuantity: item.quantity,
                img: item.productVariant.assets[0].preview
            }));
            newItems.forEach(newItem => {
                let existingItem = flatArray.find(cartItem => cartItem.id === newItem.id);
                if (existingItem) {
                    existingItem.ProductQuantity += newItem.ProductQuantity;
                } else {
                    flatArray.push(newItem);
                }
            });
            voltmx.store.setItem('add_Item_To_Cart', JSON.stringify([flatArray]));
            console.log("Updated cart product list:", flatArray);
            var updatedCart = voltmx.store.getItem("add_Item_To_Cart");
            console.log("Check in setItem:", updatedCart);
        } catch (error) {
            console.error("JSON Parsing Error:", error);
        }
    },
    onInit: function() {
        this.view.IncreaseQuantity.onClick = this.increaseQuantity;
        this.view.DecreaseQuantity.onClick = this.decreaseQuantity;
        this.view.FavoriteButton.onClick = this.toggleFavorite.bind(this);
    }
});
define("ProductDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for IncreaseQuantity **/
    AS_Button_a00d8bc9602a4b0e82c76612f641c0de: function AS_Button_a00d8bc9602a4b0e82c76612f641c0de(eventobject) {
        var self = this;
        return self.increaseQuantity.call(this);
    },
    /** onClick defined for Dimensions **/
    AS_Button_b9ab2535628a4434a67d5ea4e1994915: function AS_Button_b9ab2535628a4434a67d5ea4e1994915(eventobject) {
        var self = this;
    },
    /** onClick defined for HowToUse **/
    AS_Button_beb86e945b66417d8976e65cb5bc522c: function AS_Button_beb86e945b66417d8976e65cb5bc522c(eventobject) {
        var self = this;
    },
    /** onClick defined for MoreInfo **/
    AS_Button_ed461adefb854e559727eb6cf839cbe3: function AS_Button_ed461adefb854e559727eb6cf839cbe3(eventobject) {
        var self = this;
    },
    /** onClick defined for DecreaseQuantity **/
    AS_Button_f6a535b1a2e6434fb8d2e049c3a86139: function AS_Button_f6a535b1a2e6434fb8d2e049c3a86139(eventobject) {
        var self = this;
        return self.decreaseQuantity.call(this);
    },
    /** onClick defined for FavoriteButton **/
    AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38: function AS_Button_f9b9dfaef18848a1ab6fe7316f9b9e38(eventobject) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onClick defined for Safety **/
    AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df: function AS_Button_g5a7a9b3ddd447bb8aa2cf134042d0df(eventobject) {
        var self = this;
    },
    /** onClick defined for AddButton **/
    AS_Button_h265e4a259bb42f79f2452d09b7c4bb2: function AS_Button_h265e4a259bb42f79f2452d09b7c4bb2(eventobject) {
        var self = this;
        self.AddItemToCart.call(this);
        self.view.AddProduct.left = "100%";
        self.view.AddProduct.isVisible = true;
        self.view.AddProduct.animate(kony.ui.createAnimation({
            "100": {
                "left": "55%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_IN_OUT
                }
            }
        }), {
            "delay": 0,
            "duration": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        }, {
            "animationEnd": function() {
                setTimeout(function() {
                    self.view.AddProduct.animate(kony.ui.createAnimation({
                        "100": {
                            "left": "100%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE_IN_OUT
                            }
                        }
                    }), {
                        "delay": 0,
                        "duration": 0.3,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS
                    }, {
                        "animationEnd": function() {
                            self.view.AddProduct.isVisible = false;
                        }
                    });
                }, 2500);
            }
        });
    },
    /** onClick defined for Reviews **/
    AS_Button_j4aab7925a044f12a80eb54e070616fd: function AS_Button_j4aab7925a044f12a80eb54e070616fd(eventobject) {
        var self = this;
    },
    /** onClick defined for Ingredients **/
    AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3: function AS_Button_jdbc81c72f9949ea92fd8eeae1beb0c3(eventobject) {
        var self = this;
    },
    /** init defined for ProductDetails **/
    AS_Form_e32612e78cfa43ef83a5015d07d20f71: function AS_Form_e32612e78cfa43ef83a5015d07d20f71(eventobject) {
        var self = this;
        self.GetAProduct.call(this, product_Id);
        self.view.AddProduct.isVisible = false;
    },
    /** preShow defined for ProductDetails **/
    AS_Form_eaf74fff6623415aa95fba732ebfe076: function AS_Form_eaf74fff6623415aa95fba732ebfe076(eventobject) {
        var self = this;
        self.GetAProduct.call(this, product_Id);
        self.onFormInit.call(this);
        self.updateProductIdGlobal.call(this);
    },
    /** onClick defined for FavoriteCheckText **/
    AS_RichText_c9da0637d0ab4ef8b621a427563cc376: function AS_RichText_c9da0637d0ab4ef8b621a427563cc376(eventobject, linktext, attributes) {
        var self = this;
        return self.toggleFavorite.call(this);
    },
    /** onRowClick defined for FrequentlyBoughtSegment **/
    AS_Segment_c0ac1b90e494430dadf48fe178471f41: function AS_Segment_c0ac1b90e494430dadf48fe178471f41(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.updateProductIdGlobal.call(this);
    },
    /** onCartClicked defined for HeaderBar **/
    AS_UWI_e584481b40eb475695f1464aa957c8b8: function AS_UWI_e584481b40eb475695f1464aa957c8b8(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("ShoppingCart");
        ntf.navigate();
    }
});
define("ProductDetailsController", ["userProductDetailsController", "ProductDetailsControllerActions"], function() {
    var controller = require("userProductDetailsController");
    var controllerActions = ["ProductDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
