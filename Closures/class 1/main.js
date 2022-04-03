

function closuresDemo() {
    var x = 10;
    return function() {
        var y = 20;
        console.log('Sum: ' + (x + y));
    }
}
var aVar = closuresDemo();
var total = aVar();
console.log(total);