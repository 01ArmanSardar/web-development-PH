function getInputValue(idname) {
    const Input = document.getElementById(idname);
    const AmountText = Input.value;
    const amountt = parseFloat(AmountText)
    Input.value = ''
    return amountt
}

// deposit part
document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('depositTK');
    // const depositamount = parseFloat(depositInput.value);
    const depositamount = getInputValue('deposit-input');
    const previousDepositToalText = document.getElementById('Deposit-total').innerText
    const previousDepositToalAmount = parseFloat(previousDepositToalText)
    const updatedDepositTotal = depositamount + previousDepositToalAmount

    const finalDepositTotalAmount = document.getElementById('Deposit-total').innerText = updatedDepositTotal

    const ToalBalanceText = document.getElementById('toatl_balance').innerText
    const ToalBalanceAmount = parseFloat(ToalBalanceText)
    const updatedBalanceTotalAmount = ToalBalanceAmount + depositamount

    const finalBalanceTotalAmount = document.getElementById('toatl_balance').innerText = updatedBalanceTotalAmount;

});


// withdraw part

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrwainputText=document.getElementById('withdraw-input').value;
    // const withdrwainputAmount=parseFloat(withdrwainputText);

    const withdrawAmount = getInputValue('withdraw-input')

    const withdrawtotalText = document.getElementById('withdrawTotal').innerText
    const withdrawtotalamount = parseFloat(withdrawtotalText)

    const updatedwithdrawtotal = withdrawtotalamount + withdrawAmount
    const finaleitdrawAmount = updatedwithdrawtotal
    const finalWithdrawAmount = document.getElementById('withdrawTotal').innerText = finaleitdrawAmount

    const toatl_balanceText = document.getElementById('toatl_balance').innerText
    const totalbalanceamount = parseFloat(toatl_balanceText)
    const afterWithdrawtotalBalance = totalbalanceamount - withdrawAmount

    const finalBalanceafterWithdraw = document.getElementById('toatl_balance').innerText = afterWithdrawtotalBalance




})