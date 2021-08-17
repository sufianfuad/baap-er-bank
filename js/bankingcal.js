// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const firstResult = doubleIt(5);
// const secondResult = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input value
    inputField.value = '';
    return amountValue;

}

//Handle event add
document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInputField = document.getElementById('deposit-amount');
    // const depositAmountText = depositInputField.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-amount');

    //get current diposit
    const depositTotal = document.getElementById('deposit-money');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update Balance
    const balanceTotal = document.getElementById('balance-money');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});
//Handle withdrow button
document.getElementById('withdrow-button').addEventListener('click', function () {

    // const withdrowInputField = document.getElementById('withdrow-amount');
    // const withdrowAmountText = withdrowInputField.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);

    const withdrowAmount = getInputValue('withdrow-amount');

    //update withdrow total
    const withdrowTotal = document.getElementById('withdrow-money');

    const previousWithdrowTotalText = withdrowTotal.innerText;

    const previousWithdrowTotal = parseFloat(previousWithdrowTotalText);

    withdrowTotal.innerText = previousWithdrowTotal + withdrowAmount;

    //update balance after withdrow

    const balanceTotal = document.getElementById('balance-money');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrowAmount;

    // //clear withdrow input field
    // withdrowInputField.value = '';


})