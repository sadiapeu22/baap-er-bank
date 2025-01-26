//step 1 add event lisener for deposite

document.getElementById('btn-deposite').addEventListener('click',function(){
    //console.log('clicked');
    //step 2 get the deposite amount from the deposite input field
    const depositeField = document.getElementById('user-deposite');
    const depositeAmount = depositeField.value;
    //console.log(depositeAmount);
    //step 3 get the deposite current total amount
    //for non input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const depositeTotal = depositeTotalElement.innerText;
    depositeTotalElement.innerText = depositeAmount;

})