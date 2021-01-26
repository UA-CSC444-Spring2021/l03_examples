////////////////////////////////////////////////////////////////
//
// This javascript example tests out some simple examples of 
// higher order functions 
//
// Author: Joshua Levine
// Date: Jan. 25, 2020
//
////////////////////////////////////////////////////////////////



// This function shows variable scoping var vs. let vs. global
// It is intended to add all numbers 1...n
function add(n) {
  var sum = 0;
  for (let i=1; i<=n; i++) {
    sum = sum + i;
    console.log(i, sum);
  }

  console.log("i is: ", i);

  return sum;
}



// This function returns a counter that increments the 
// internal variable n, stored in the calling context
function counter() {  
  var n = 0;  //calling context
  return function() {  
    n++;     
    return n;  
  }
}



// This function creates an adder user partial evaluation
// Input x is the number that will be added to
// Inputs a,b,c are ignored
// Returns: a function that adds "x" to everything
function addByX(x,a,b,c) {  
  return function(y) {  
    return y + x;  
  }
}
