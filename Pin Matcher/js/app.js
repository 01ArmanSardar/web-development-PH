function getPin() {
    const Pin = Math.round(Math.random() * 10000);
    const pinString = Pin + '';
    if (pinString.length == 4) {
        return Pin;
    }
    else {
        // console.log('got 3 digit and calling again', Pin);
        return getPin();
    }
}

function generetPin() {
    const pin = getPin()
    console.log(pin);
    document.getElementById('Display-Pin').value = pin
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const CalcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            CalcInput.value = '';
        }
    }
    else {

        const PreviousNumber = CalcInput.value;
        const newNumber = PreviousNumber + number
        CalcInput.value = newNumber
    }
})

document.getElementById('submit').addEventListener('click', function () {
    const pin = document.getElementById('Display-Pin').value
    const calNumber = document.getElementById('typed-numbers').value
    const sucessmesage = document.getElementById('notify-success');
    const errormesage = document.getElementById('notify-fail');
    if (pin == calNumber) {

        sucessmesage.style.display = 'block';
        errormesage.style.display = 'none';
    }
    else {
        sucessmesage.style.display = 'none';
        errormesage.style.display = 'block';
    }
})
