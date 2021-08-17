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
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-money');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-money');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = getCurrentBalance();
    // deduct ways
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}


//Handle event add
document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInputField = document.getElementById('deposit-amount');
    // const depositAmountText = depositInputField.value;
    // const depositAmount = parseFloat(depositAmountText);


    //get and update diposit total
    /*
    const depositTotal = document.getElementById('deposit-money');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
     */


    // update Balance
    /*
    const balanceTotal = document.getElementById('balance-money');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    */
    const depositAmount = getInputValue('deposit-amount');
    if (depositAmount > 0) {
        updateTotalField('deposit-money', depositAmount);
        updateBalance(depositAmount, true);
    }
});
//Handle withdrow button
document.getElementById('withdrow-button').addEventListener('click', function () {

    // const withdrowInputField = document.getElementById('withdrow-amount');
    // const withdrowAmountText = withdrowInputField.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);

    //get and update withdrow total
    /*
    const withdrowTotal = document.getElementById('withdrow-money');
    const previousWithdrowTotalText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalText);
    
    withdrowTotal.innerText = previousWithdrowTotal + withdrowAmount;
    */

    //update balance after withdrow
    /*
    const balanceTotal = document.getElementById('balance-money');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrowAmount;
     */
    const withdrowAmount = getInputValue('withdrow-amount');
    const currentBalance = getCurrentBalance();
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        updateTotalField('withdrow-money', withdrowAmount);
        updateBalance(withdrowAmount, false);
    }
    if (withdrowAmount > currentBalance) {
        console.log('You cant not withdrow more then what you have in your account')
    }



    // //clear withdrow input field
    // withdrowInputField.value = '';


})