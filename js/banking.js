//handle event add button 
document.getElementById('deposit-button').addEventListener('click', function () {

    /* ======================================================================== */

    //get the amount deposit
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    /* ======================================================================== */

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;

    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
    /* ======================================================================== */

    //Update Account belence
    const balanceTotal = document.getElementById('total-balance');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    /* ======================================================================== */

    //clear the deposit input field
    depositInput.value = '';
});
/* ======================================================================== */

//Handle withdrow event

document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-amount');

    const withdrowAmountText = withdrowInput.value;

    const newWithdrowAmount = parseFloat(withdrowAmountText);

    console.log(newWithdrowAmount)
    /* ======================================================================== */

    //set withdrow total
    const withdrowTotal = document.getElementById('total-withdrow');

    const previousWithdrowText = withdrowTotal.innerText;

    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;

    withdrowTotal.innerText = newWithdrowTotal;
    /* ======================================================================== */

    //update balance
    const balanceTotal = document.getElementById('total-balance');

    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalancetotal = previousBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newBalancetotal;
    /* ======================================================================== */

    //clear withdow input
    withdrowInput.value = '';
});