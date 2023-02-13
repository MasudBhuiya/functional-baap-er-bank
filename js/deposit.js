
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');

    const totalbalance = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', totalbalance);
})