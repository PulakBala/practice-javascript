function parentFunc() {
    var a = 5;
    function childFunction() {
        var b = 4;
        console.log('Sum: ' + (a + b));
    }
    childFunction();
}
parentFunc();