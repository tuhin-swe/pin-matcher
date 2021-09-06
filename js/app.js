function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function genertePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const mathchPin = document.getElementById('typed-number').value;

    const successMassage = document.getElementById('success-massage');

    const errorMassage = document.getElementById('error-massage');
    if (pin == mathchPin) {

        successMassage.style.display = 'block';
        errorMassage.style.display = 'none';
    }
    else {

        successMassage.style.display = 'none';
        errorMassage.style.display = 'block';

    }
}