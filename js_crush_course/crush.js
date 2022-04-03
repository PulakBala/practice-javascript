//1. javascript console API
/*console.log("Hello World", 4 + 4, "Another log");
console.warn("this is warning");
console.error("This is an error");
*/
//2.javascript variables
//what are variables? -Containers to store data values

// var number1 = 5;
// var number2 = 5;
// console.log(number1 + number2); 

// 3. Data types in javascript
//number
// var num1 = 34;
// var num2 = 34.43;
//string
// var str1 = "Hi , I am maskhacker";
// var str2 = 'hello , I am bad boye';

//object 
// var marks = {
//     nayon : 3.65,
//     mamun: 3.76,
//     pulak: 3.45
// }

//boolean
// var a = true;
// var b = false;

//var und = undefined;
// var und;

// var n = null;

/*
At a very high level, there are two types of data types in javascript-
1. Primitive data types:undifined, null, number,string,boolean,symbol

2. Reference data types: Arrays and object
*/

// var Arrays = [1,2,3,4];  

//Operators in javascript
//Arthmetic Operators

// var a =100;
// var b = 10;
// console.log("The value of a + b", a+b);
// console.log("The value of a + b", a-b);
// console.log("The value of a + b", a*b);
// console.log("The value of a + b", a/b);

//Assignment Operators

// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

//Comparison Operators

// var x = 34;
// var y = 20;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//logical and

//logical operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//logical or

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//logical not
// console.log(!false);
// console.log(!true);

// console.log(!0)

//function in Javascript
// function avg(a , b){
//     return (a + b) /2;
// }
// c1 = avg(4,6); 
// c2 = avg(10, 2);
// console.log(c1, c2);

//conditionals in javascript

/*var age = 20;
//single if statement
if(age > 10) {
    console.log('You are a kid')
}

//if-else statement
if(age > 21) {
    console.log('You are a sexy')
} 
else {
    console.log('You are a not sexy')
}
//if-else ladder
 age = 14;
if(age > 18) {
    console.log('You are a perfect')
}
else if(age > 15) {
    console.log('it is a not guye')
}
else if(age > 12) {
    console.log('how , its possible')
}
else {
    console.log('Yes done')
}
console.log('End of ladder')
*/

 //for loop

// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++) {
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// });

// const sayName = () => {
//     if(true){
//         const Name = 'Shakil babu';
//         // console.log(Name)
//     }
//     console.log(Name);
// }
// sayName();

// for(var i=0; i<11;i++){
//     console.log('Go ' + i + ' Step');
// }

//do-while loop

// var num;
// do{
//     console.log('Inside the Loop');
//     num=prompt('Enter the number');
// } while(num<1115);
// console.log('Outside the loop');


// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }
// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// // myArr.pop();
// console.log(myArr);
// myArr.push("herry");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

//String methods in javascript

// let mylovelyString = "Harry is a good boy Harry";
// console.log( mylovelyString.length);
// console.log(mylovelyString.indexOf("boy"));
// console.log(mylovelyString);
// d = mylovelyString.replace("Harry", "Rohan");
// console.log(d);

//  call()

// var myCustom = {
//     name: 'Pulak Bala',
//     age : 23,
//     job: 'Student',
//     anotherObj: {
//         name:'Mitu',
//         age : 22,
//          value:function(){
//             console.log('My name is ' + this.name)
//         }
//     }
// }
// var anotherFunc = myCustom.anotherObj.value.bind(myCustom);
// anotherFunc();

// var nayon = {
//     name: 'Em masud',
//     year: 1998,
//     age:function(currentYear, msg){
//         console.log(msg + this.name + ' is ' + (currentYear - this.year) + ' years old!');
//     }

// }


//apply()

// var mamun = {
//     name: 'Mamun mia',
//     year: 2000
// }
// var mamunAge = nayon.year.bind(mamun, 2022);
// mamunAge(2022, 'Hello Dolly');
// mamunAge('Hello Fuck ');
// nayon.age(2022);
// nayon.age.apply(mamun,[2022, 'Hello World!']);
// anotherFunc();


//bind()


// var nayon = {
//     name: 'Em nayon',
//     dob: 1997,
//     age: function(currentYear, msg){
//         console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old');
//     }
// }
// var mamaun = {
//     name: 'Mamun mia',
//     dob: 1997
// }
// var mamaunAge = nayon.age.bind(mamaun);
// mamaunAge(2022, 'Hello World!')


//bind()

// var myObj = { 
//     name: 'Pulak Bala',
//     age :22,
//     timer: function(){
//         setTimeout(function() {
//             console.log('My name is ' + this.name);
//         }.apply(myObj), 1000)
//     }
// }
// myObj.timer();


// var a = 10, b = 20;

// console.log('Before swap: Value of a: ' + a + ' and value of b: ' + b);

// function swap(a, b) {
//    console.log('Before Swap inside function: Value of a: ' + a + ' and value of b: ' + b);
//    var temp = a;
//    a = b;
//    b = temp;
//    console.log('After Swap inside function: Value of a: ' + a + ' and value of b: ' + b);
// }

// swap(a, b);
// console.log('After swap: Value of a: ' + a + ' and value of b: ' + b);

// var obj = {
//     a: 10,
//     b: 20
//  };
 
 
//  console.log('Before swap: Value of a: ' + obj.a + ' and value of b: ' + obj.b);
 
//  function swap(obj) {
//     console.log('Before Swap inside function: Value of a: ' + obj.a + ' and value of b: ' + obj.b);
//     var temp = obj.a;
//     obj.a = obj.b;
//     obj.b = temp;
//     console.log('After Swap inside function: Value of a: ' + obj.a + ' and value of b: ' + obj.b);
//  }
 
//  swap(obj);
//  console.log('After swap: Value of a: ' + obj.a + ' and value of b: ' + obj.b);

//  swap(obj);
//  console.log('After swap: Value of a: ' + obj.a + ' and value of b: ' + obj.b);


// var oneArr = [1,2,3,4,5];
// console.log(oneArr);

// var str = 'Hi! I am pulak';
// console.dir(str);
// var str = new String('my name is mitu');
// console.dir(str);

//inheritance

// var Everything = function(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.dateOfBirth = function() {
//         console.log(this.name + ' is born in ' + (2022 - this.age));
//     }
// }

// var pulak = new Everything('Pulak Bala', 23, 'Student');

// pulak.dateOfBirth();

// var Nayon = new Everything('Em Masud  Nayon', 25, 'Student');
// Nayon.dateOfBirth();

// let Mamun = new Everything('Mamun mia', 24, 'Student');

// Mamun.dateOfBirth();


// var Personaly = function(name, age , job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// Personaly.prototype.dateOfBirth = function() {
//     console.log(this.name + ' born in ' + (2022 - this.age));
// }
// console.log(Personaly.prototype);

// var pulak = new Personaly('Pulak Bala', 23);

// Personaly.prototype.address = 'Bangladesh';
// pulak.dateOfBirth();
// console.log(pulak.job);

// var Person = function(name , age , job) {
//     this.name = name ;
//     this.age = age ;
//     this.job = job;
// }

// var Theacher = function(name , age , job , subject) {
//     this.name = name;
//     this.age = age ;
//     this.job = job;
//     this.subject = subject;
// }

// var Theacher = function(name, age ,job, subject) {
//     Person.call(this, name , age, job);
//     this.subject = subject;
// }

// var Pulak = new Theacher('Imama Hossain', 53, 'Teacher', 'CSE');
// console.log(Pulak.name);

