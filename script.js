let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        let result = eval(display.innerText);
        if (isNaN(result) || !isFinite(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}