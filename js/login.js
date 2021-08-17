document.getElementById('submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-mail');
    const emailUser = emailField.value;
    // console.log(emailUser);

    //get user password 

    const passwordField = document.getElementById('user-pass');
    const userPassword = passwordField.value;

    if (emailUser == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})
