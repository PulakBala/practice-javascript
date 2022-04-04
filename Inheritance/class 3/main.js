var GeneralPeople = function(name, age, job) { 
    this.name = name;
    this.age = age;
    this.job = job;
 }

 var Athlete = function(name, age, job, prize) {
    GeneralPeople.call(this);
    this.prize = 100;
 }



 console.log(GeneralPeople);
 console.log(Athlete)