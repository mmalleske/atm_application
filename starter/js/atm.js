$( document ).ready(function() {
    var availBalChecking = 0;
    var availBalSavings = 0;
    var transactionAmount = 0;
    $('#depositChecking').click(function() {
      transactionAmount = parseFloat($('#amountChecking').val());
      availBalChecking += transactionAmount;
      $('#checkingBalance').html("$" + availBalChecking);
      });
    $('#withdrawChecking').click(function() {
      transactionAmount = parseFloat($('#amountChecking').val());
      if(availBalChecking - transactionAmount < 0){
        overDraftProtection();
        // $('#checkingBalance').html("$" + availBalChecking);
        }
      else{
        availBalChecking -= transactionAmount;
        }
      $('#checkingBalance').html("$" + availBalChecking);
      });
    $('#depositSavings').click(function() {
      transactionAmount = parseFloat($('#amountSavings').val());
      availBalSavings += transactionAmount;
      $('#savingsBalance').html("$" + availBalSavings);
     });
    function getTransactionAmount() { //for drying code
      transactionAmount = parseFloat($('#amountChecking').val());
    }
   function overDraftProtection() {
        availBalSavings += availBalChecking;
        availBalChecking = 0;
        availBalSavings -= transactionAmount;
        $('#savingsBalance').html("$" + availBalSavings);
    }
});


//
        //Take that value and add it to the existing value in the checkingBalance div



    //Checking account withdrawl funtion

      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
