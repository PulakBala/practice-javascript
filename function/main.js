function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it iteresting? Yes it is Mr.' + name);
}
function hello(age) {
    console.log('I am passed through argument and my age is:' + age);

}

callMyName('Pulak Bala', hello);