

var PersonOnly = function(name, age , job ) {
    this.name = name ;
    this.age  = age;
    this.job  = job;
}

PersonOnly.prototype.dateOfBirth = function () {
    console.log(this.name + ' born in ' +  (2000 - this.age));
}

var pulak = new PersonOnly ('Pulak Bala', 1, 'Child');

PersonOnly.prototype.address = 'Bangladesh';
console.log(pulak.dateOfBirth());
console.log(pulak.address);