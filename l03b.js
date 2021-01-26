////////////////////////////////////////////////////////////////
//
// This javascript example tests out objects and functions
// to create them. 
//
// Author: Joshua Levine
// Date: Jan. 25, 2020
//
////////////////////////////////////////////////////////////////


//Create an instance of a class inline
let person = {
  age: 39,
  name: "Josh",
  birthday: function() {
    this.age = this.age+1;
  }
};


//A function that creates instances of class objects by 
//returning them
function makePerson(a, n) {
  let result = {
    age: a,
    name: n,
    birthday: function() {
      this.age = this.age+1
    }
  };
  return result;
}


let person1 = makePerson(39, "Josh")
