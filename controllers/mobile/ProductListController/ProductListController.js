define({ 
  
ProductList: [  
        {
         lblDescription: "Rite Aid Passion Fruit Triple Hydration Electrolyte Drink Mix - 3.49 oz",
         lblCost: "$11.99",
         lblCategory: 'Grocery',
         lblDiscount: '80% Off',
         lblCostDiscount: '$9.99', 
         img: 'fi4ohuxot842j9f5bjqg__preview.png'
        },
        {
         lblDescription:"Qunol Turmeric & Ginger Gummy - 60 ct",
          lblCost:"$12.99",
          lblCategory: 'Wash',
          lblDiscount: '', 
          lblCostDiscount: '', 
          img: 'fi4ohuxot842j9f5bjqg__preview.png'
        },
        {
         lblDescription:"Olay Regenerist Vitamin C + Peptide 24 Face Moisturizer - 1.7 oz",
         lblCost:"$13.99",
          lblCategory: 'Softgel',
          lblDiscount: '', 
          lblCostDiscount: '', 
          img: 'fi4ohuxot842j9f5bjqg__preview.png'
        },
        {
          lblDescription:"Nature Made Vitamin D3 Softgels, 50mcg - 90 ct",
          lblCost:"$14.99", 
          lblCategory: 'Moisturizer', 
          lblDiscount: '90% Off', 
          lblCostDiscount: '$19.99', 
          img: 'fi4ohuxot842j9f5bjqg__preview.png'},
        {
         lblDescription:"Listerine Total Care Anticavity Fluoride Mouthwash - Fresh Mint, 1 lt",
          lblCost:"$15.99", 
          lblCategory: 'Gummy', 
          lblDiscount: '', 
          lblCostDiscount: '', 
          img: 'fi4ohuxot842j9f5bjqg__preview.png'
        },
        {
         lblDescription:"Lindt Gourmet Truffles Box - 6.8 oz",
          lblCost:"$16.99", 
          lblCategory: 'Grocery', 
          lblDiscount: '', 
          lblCostDiscount: '', 
          img: 'fi4ohuxot842j9f5bjqg__preview.png'
        },
    ],
  
   	initProductData: function () {
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
    console.log(updatedProductList);
}


  
  
  
 });