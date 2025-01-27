//step 1 add event lisener for deposite

document.getElementById('btn-deposite').addEventListener('click',function(){
    //console.log('clicked');
    //step 2 get the deposite amount from the deposite input field
    const depositeField = document.getElementById('user-deposite');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    //console.log(typeof newDepositeAmount)
    //console.log(depositeAmount);
    //step 3 get the deposite current total amount
    //for non input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

//step-4 add number to set the total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;
    

    //step-5 balance total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;





     //step-7 clear the deposite field
     depositeField.value = '';

})