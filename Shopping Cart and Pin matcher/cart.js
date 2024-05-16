console.log('js File added');

function updateCaseNumber(button_id, is_plus) {
    document.getElementById(button_id).addEventListener('click', function () {
        const caseQuantity = document.getElementById('case-number')
        let caseQuantityNumber = caseQuantity.value;
        if (is_plus == true) {caseQuantityNumber  = parseInt(caseQuantityNumber) + 1 }
        else if (caseQuantityNumber > 0) {
            caseQuantityNumber  = parseInt(caseQuantityNumber) - 1
        }
        caseQuantity.value=caseQuantityNumber
        const caseTotal = document.getElementById('case-total')
    
    caseTotal.innerText = caseQuantityNumber * 59
    })
    

}
increaseCaseNumber = updateCaseNumber('plus-button-case', true)
decraseCaseNumber = updateCaseNumber('minus-button-case', false)

// document.getElementById('plus-button-case').addEventListener('click', function () {
//     const caseQuantity = document.getElementById('case-number')
//     const caseQuantityNumber = caseQuantity.value;
//     caseQuantity.value = parseInt(caseQuantityNumber) + 1


// })

// document.getElementById('minus-button-case').addEventListener('click', function () {
//     const caseQuantity = document.getElementById('case-number')
//     const caseQuantityNumber = caseQuantity.value;
//     caseQuantity.value = parseInt(caseQuantityNumber) - 1


// })

