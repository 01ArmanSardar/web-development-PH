console.log('js File added');

document.getElementById('plus-button-case').addEventListener('click', function () {
    const caseQuantity = document.getElementById('case-number')
    const caseQuantityNumber = caseQuantity.value;
    caseQuantity.value = parseInt(caseQuantityNumber) + 1


})