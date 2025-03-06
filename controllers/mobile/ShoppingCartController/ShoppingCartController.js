define({  
    CartProductList: [  
        {lblDescription:"test",lblCost:"$99", DeleteIcon: 'trashicon.png', MinusIcon: 'minusicon.png', PlusIcon: 'plusicon.png', ProductQuantity: '1', img: 'cartproductimg.png'},
        {lblDescription:"test",lblCost:"$99", DeleteIcon: 'trashicon.png', MinusIcon: 'minusicon.png', PlusIcon: 'plusicon.png', ProductQuantity: '1', img: 'cartproductimg.png' }, 
        {lblDescription:"test",lblCost:"$99", DeleteIcon: 'trashicon.png', MinusIcon: 'minusicon.png', PlusIcon: 'plusicon.png', ProductQuantity: '1', img: 'cartproductimg.png' }
    ],
    
   	initProductData:function () {  
        this.view.ProductSimple.segTemp.setData(this.CartProductList);
      	var segmentData =  this.view.ProductSimple.segTemp.data;
		console.log(segmentData);
    },
  
  	increaseQuantity: function(rowIndex) {
        var segmentData = this.view.ProductSimple.segTemp.data;
        
        if (segmentData[rowIndex]) {
            // Convert string to number before incrementing
            segmentData[rowIndex].ProductQuantity = (parseInt(segmentData[rowIndex].ProductQuantity, 10) + 1).toString();
            
            // Update segment with new data
            this.view.ProductSimple.segTemp.setData(segmentData);
        }
    },

    decreaseQuantity: function(rowIndex) {
        var segmentData = this.view.ProductSimple.segTemp.data;
        
        if (segmentData[rowIndex] && parseInt(segmentData[rowIndex].ProductQuantity, 10) > 1) {
            // Convert string to number before decrementing
            segmentData[rowIndex].ProductQuantity = (parseInt(segmentData[rowIndex].ProductQuantity, 10) - 1).toString();
            
            // Update segment with new data
            this.view.ProductSimple.segTemp.setData(segmentData);
        }
    }
});
