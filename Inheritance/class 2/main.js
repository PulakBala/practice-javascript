
var Person = function(name , age , job) {
    this.name = name ;
    this.age = age ;
    this.job = job;
}

var Teacher = function(name, age , job , subject) {
     Person.call(this,name,age,job);
     this.subject = subject;
}

var Rabeya = new Teacher( 'Rabyea Mam', 53, 'Teacher', 'CSE' );

console.log(Rabeya.name, Rabeya.age,Rabeya.job,Rabeya.subject);