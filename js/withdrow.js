document.getElementById('btn-withdrow').addEventListener('click', function(){

    const newWithdrowAmount = getInputFieldValueById('withdrow-field');

    const previousWithdrowTotal = getTextElementValueById('withdrow-total');

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;

    setTextElementValueById('withdrow-total', newWithdrowTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');

    const totalbalance = previousBalanceTotal - newWithdrowAmount;

    setTextElementValueById('balance-total', totalbalance);
})