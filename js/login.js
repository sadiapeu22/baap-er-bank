//step-1 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('submit button click')
    //step 2 get the email address inside the email 
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    //console.log(email, pass);
    //step 4 verify email and pass
    if(email === 'sontan@baap.com' && pass === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
    
});