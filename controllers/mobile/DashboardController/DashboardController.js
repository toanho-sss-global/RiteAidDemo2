define({ 

 //Type your controller code here 
//   test: function() {
//     var test = this.view.FlexContainer0f9b1b0dd0e7144.lblWelcome.text;
//     console.log("You've successfully redeemed your welcome bonus!");
//     console.log("2,000");
//   },
    
  AddPoint: function() {
    var container1 = this.view.FlexContainer1;
    container1.height = "220dp";
    
    var container2 = this.view.FlexContainer2;
    container2.top = "40%";
    
    var containerBonus = this.view.FlexContainer1.FlexContainerBonus;
    containerBonus.height = "50%";
    containerBonus.top = "45%";
    
    var lbldes = this.view.FlexContainer1.lbldes;
    lbldes.width = "80%";
    lbldes.text = "You've successfully redeemed your welcome bonus!";

    var lblTotalBn = this.view.FlexContainer1.FlexContainerBonus.lblTotalBn;
    lblTotalBn.height = "50%"; 

    var lblCurnentP = this.view
    .FlexContainer1.FlexContainerBonus.lblCurnentP;
    lblCurnentP.text = "2,000";
    lblCurnentP.height = "50%";
    
    var lblAddingP = this.view
    .FlexContainer1.FlexContainerBonus.lblAddingP;
    lblAddingP.text = "+2,000";
    lblAddingP.height = "50%";
    
    var lblAddBn = this.view
    .FlexContainer1.FlexContainerBonus.lblAddBn;
    lblAddBn.text = "Welcome Bonus:";
    lblAddBn.height = "50%";
    
    var btnAddP = this.view.FlexContainer1.btnAddP;
    btnAddP.setVisibility(false);
    
    var lblP = this.view.FlexContainer2.FlexContainer0ec0403d4e6fd41.FlexContainerleft.lblP;
    lblP.text = "2000";
  }
 });