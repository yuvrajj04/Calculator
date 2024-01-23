document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        button.addEventListener('click', () => handleButtonClick(button.innerText));
    });

    const handleButtonClick = (value) => {
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculateResult();
                break;
            case 'backspace':
                backspace();
                break;
            case 'close':
                updateDisplay('*');
                break;
            default:
                updateDisplay(value);
                break;
        }
    };

    const updateDisplay = (value) => {
        display.value += value;
    };

    const clearDisplay = () => {
        display.value = '';
    };

    const calculateResult = () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    };

    const backspace = () => {
        display.value = display.value.slice(0, -1);
    };
});
