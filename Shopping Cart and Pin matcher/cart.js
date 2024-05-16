console.log('js File added');

function updateDetalis(button_id, QuantityId, price, Total, is_plus) {
    document.getElementById(button_id).addEventListener('click', function () {
        const productQuantity = document.getElementById(QuantityId)
        let ProductQuantityNumber = productQuantity.value;
        if (is_plus == true) { ProductQuantityNumber = parseInt(ProductQuantityNumber) + 1 }
        else if (ProductQuantityNumber > 0) {
            ProductQuantityNumber = parseInt(ProductQuantityNumber) - 1
        }
        productQuantity.value = ProductQuantityNumber
        const productToal = document.getElementById(Total)

        productToal.innerText = ProductQuantityNumber * price
    })


}
increaseCaseDetails = updateDetalis('plus-button-case', 'case-number', 59, 'case-total', true)
decraseCaseDetails = updateDetalis('minus-button-case', 'case-number', 59, 'case-total', false)

increasePhonedetails = updateDetalis('phone-plus', 'phone-number', 1219, 'phone-total', true)
decreasePhonedetails = updateDetalis('phone-minus', 'phone-number', 1219, 'phone-total', false)

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

