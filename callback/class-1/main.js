function myDisplay(some) {
    document.getElementById("demo").innerHTML = some;
}
function myFirst() {
    myDisplay("Hello");
}
function mySecond() {
    myDisplay("GoodBye");
}
myFirst();
mySecond();