 /*
1. add event handler with the withdraw button
2. get the withdraw from the withdraw input field
also make sure to conver the input into a number by using parsefloat

3. get previous withdraw total
4. calculate total withdraw amount
4. set total withdraw amount
5. get previous balance total
6. calculate new balance total
 */
 
 
 document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2 
    const withdrawField = document.getElementById('withdaw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    //step 3
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step 4


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawtotalElement.innerText = currentWithdrawTotal;


    //step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    //step 6 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    //step 7 clear input field
    withdrawField.value = '';


 })