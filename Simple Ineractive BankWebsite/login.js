document.getElementById('login-submit').addEventListener('click', function () {
    const emailfield = document.getElementById(
        'user-email'
    )
    const userEmail = emailfield.value;
    console.log(userEmail);


    const passwordfield = document.getElementById(
        'user-password'
    )
    const userpass = passwordfield.value;

    if (userEmail == 'abc@gmail.com' && userpass == '123') {
        window.location.href = 'banking.html'
    }



});


