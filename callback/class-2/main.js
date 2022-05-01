function display (some) {
    document.getElementById("demo").innerHTML = some;
}

function calculator(num1, num2) {
    let sum = num1 + num2;
    display (sum);
}
 calculator(4,4);