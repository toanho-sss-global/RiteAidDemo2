define("userProductListController", {
    ProductList: [],
    initProductData: function() {
        var updatedProductList = [];
        var self = this;
        for (var i = 0; i < self.ProductList.length; i++) {
            var item = self.ProductList[i];
            if (item.lblCostDiscount !== '') {
                item.lblCost = {
                    text: item.lblCost,
                    textStyle: {
                        strikeThrough: true
                    }
                };
            }
            updatedProductList.push(item);
        }
        self.view.ProductSimple.segTemp.setData(updatedProductList);
    },
    fetchProducts: function() {
        var self = this;
        var url = "https://m100004273001.demo-hclvoltmx.net/services/VendureApis/GetProducts";
        var httpRequest = new voltmx.net.HttpRequest();
        httpRequest.responseType = constants.HTTP_RESPONSE_TYPE_JSON;
        httpRequest.onReadyStateChange = function() {
            if (httpRequest.readyState === constants.HTTP_READY_STATE_DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.response;
                    console.log("API Response:", response);
                    if (response && response.opstatus === 0) {
                        self.handleProducts(response.data);
                    }
                } else {
                    console.error("HTTP Error:", httpRequest.status, httpRequest.response);
                }
            }
        };
        httpRequest.open(constants.HTTP_METHOD_POST, url);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify({}));
    },
    handleProducts: function(data) {
        if (!data || !data.products || !data.products.items || !Array.isArray(data.products.items)) {
            return;
        }
        var formattedProducts = data.products.items.map(item => {
            var firstVariant = item.variants && item.variants.length > 0 ? item.variants[0] : {};
            var firstFacet = item.facetValues && item.facetValues.length > 0 ? item.facetValues[0].name : "Unknown";
            return {
                id: item.id,
                lblDescription: firstVariant.name || "No Name",
                lblCost: firstVariant.priceWithTax ? `$${(firstVariant.priceWithTax / 100).toFixed(2)}` : "N/A",
                lblCategory: firstFacet,
                lblDiscount: "",
                lblCostDiscount: "",
                img: item.featuredAsset.preview ? item.featuredAsset.preview : "default.png"
            };
        });
        this.ProductList = formattedProducts;
        console.log("Update product list:", this.ProductList);
        this.initProductData();
    }
});
define("ProductListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexGroupIconClose **/
    AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de: function AS_FlexContainer_b932f98e2022466e9dd84b4c4aaa38de(eventobject) {
        var self = this;
        if (self.view.TxtSearch.text !== "") {
            self.view.TxtSearch.text = "";
            self.view.IconClose.isVisible = false;
            self.view.ContentProductEmpty.isVisible = false;
            self.view.ProductSimple.segTemp.setData(self.originalSegmentData);
        }
    },
    /** preShow defined for ProductList **/
    AS_Form_f6bedc297a8f4ced9496c9d769c6a595: function AS_Form_f6bedc297a8f4ced9496c9d769c6a595(eventobject) {
        var self = this;
        return self.initProductData.call(this);
    },
    /** init defined for ProductList **/
    AS_Form_f8c2751bca3b4d3e9d55942876fc74cb: function AS_Form_f8c2751bca3b4d3e9d55942876fc74cb(eventobject) {
        var self = this;
        return self.fetchProducts.call(this);
    },
    /** onDownloadComplete defined for IconClose **/
    AS_Image_a80200b704554e5fac5a144b6b0bf399: function AS_Image_a80200b704554e5fac5a144b6b0bf399(eventobject, imagesrc, issuccess) {
        var self = this;
        self.view.IconClose.isVisible = false;
        self.view.ContentProductEmpty.isVisible = false;
    },
    /** onRowClick defined for segTemp **/
    AS_Segment_j58894ea400b46a1933dd1659702e5cf: function AS_Segment_j58894ea400b46a1933dd1659702e5cf(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var selectedRowData = self.view.ProductSimple.segTemp.selectedRowItems[0];
        console.log("Item Product 0 : ", selectedRowData);
        if (selectedRowData) {
            product_Id = selectedRowData.id;
            console.log("Item Product: ", product_Id);
            voltmx.store.removeItem('product_Id');
            voltmx.store.setItem('product_Id', JSON.stringify(product_Id));
            console.log("Item Product 2: ", voltmx.store.getItem('product_Id'));
            var ntf = new voltmx.mvc.Navigation("ProductDetails");
            ntf.navigate({
                "variable_product_Id": product_Id,
            });
        } else {
            voltmx.print("Error: No row data found.");
        }
    },
    /** onTextChange defined for TxtSearch **/
    AS_TextField_f474cd1c8f024405ade2c4ede9987e79: function AS_TextField_f474cd1c8f024405ade2c4ede9987e79(eventobject, changedtext) {
        var self = this;
        var searchText = self.view.TxtSearch.text.trim().toLowerCase();
        if (!self.originalSegmentData) {
            self.originalSegmentData = self.view.ProductSimple.segTemp.data;
            console.log(self.originalSegmentData);
        }
        if (searchText !== "") {
            self.view.IconClose.isVisible = true;
            var filteredData = self.originalSegmentData.filter(function(item) {
                return item.lblCategory.toLowerCase().includes(searchText);
            });
            if (filteredData.length === 0) {
                self.view.ContentProductEmpty.isVisible = true;
            } else {
                self.view.ContentProductEmpty.isVisible = false;
            }
            self.view.ProductSimple.segTemp.setData(filteredData);
        } else {
            self.view.ContentProductEmpty.isVisible = false;
            self.view.IconClose.isVisible = false;
            self.view.ProductSimple.segTemp.setData(self.originalSegmentData);
        }
    }
});
define("ProductListController", ["userProductListController", "ProductListControllerActions"], function() {
    var controller = require("userProductListController");
    var controllerActions = ["ProductListControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
