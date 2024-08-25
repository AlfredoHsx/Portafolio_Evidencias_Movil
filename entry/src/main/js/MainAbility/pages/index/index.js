import window from '@ohos.window';

export default {
    data: {
        result: '0',
        firstOperand: null,
        operator: null,
    },
    onInit() {
        // No necesitamos inicializar nada aquí por ahora
    },
    onDigitClick(digit) {
        if (this.result === '0') {
            this.result = digit;
        } else {
            this.result += digit;
        }
    },
    onOperatorClick(operator) {
        this.firstOperand = parseFloat(this.result); // Almacenamos el primer operando
        this.operator = operator;
        this.result = '0'; // Limpiamos la pantalla para el segundo operando
    },
    onEqualClick() {
        const secondOperand = parseFloat(this.result);

        if (this.operator && this.firstOperand !== null) {
            switch (this.operator) {
                case '+':
                    this.result = (this.firstOperand + secondOperand).toString();
                    break;
                case '-':
                    this.result = (this.firstOperand - secondOperand).toString();
                    break;
                case '*':
                    this.result = (this.firstOperand * secondOperand).toString();
                    break;
                case '/':
                    if (secondOperand === 0) {
                        this.result = 'Error: División por cero';
                    } else {
                        this.result = (this.firstOperand / secondOperand).toString();
                    }
                    break;
            }

            this.firstOperand = null;
            this.operator = null;
        }
    },
    onClearClick() {
        this.result = '0';
        this.firstOperand = null;
        this.operator = null;
    }

};