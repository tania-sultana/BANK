 document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button clicked');
    const emailField = document.getElementById('user email');
    const email = emailField.value;
    const emailPassword = document.getElementById('user password');
    const password = emailPassword.value;
    if(email === 'tania@bank.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }

 })