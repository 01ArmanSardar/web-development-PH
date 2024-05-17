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
    const pin= getPin()
    console.log(pin);
    document.getElementById('Display-Pin').value=pin
}