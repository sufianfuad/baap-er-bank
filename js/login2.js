document.getElementById('submit-button').addEventListener('click', function () {

    const emailInput = document.getElementById('email');
    const userEmail = emailInput.value;
    // console.log('Submitted', userEmail);

    //get password

    const getPassword = document.getElementById('pass');
    const passwordUser = getPassword.value;

    //condition

    if (userEmail == 'sontan@baap.com' && passwordUser == 'pass') {
        // console.log('valid User');

        // TO Connect another HTML page!
        window.location.href = 'secondbanking.html'
    }
});
