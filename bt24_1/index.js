function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');
    var errorElement = document.getElementById('error');

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Error: Vui lòng nhập số hợp lệ.';
        resultElement.textContent = '';
    } else if (operation === '/' && num2 === 0) {
        errorElement.textContent = 'Error: Number B không thể bằng 0. Vui lòng nhập lại!';
        resultElement.textContent = '';
    } else {
        errorElement.textContent = '';
        var result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'khong duoc!';
        }
        resultElement.textContent = 'Result: '+ result;
    }
}