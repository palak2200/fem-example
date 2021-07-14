/*
write some code that declares two variables , character and timesToRepeat .
using a loop , repeat that character that many times and then console.log it.
Example , if i had charcter = "f"
and timeToRepeat = 5, it'd console.log
"fffff"
*/
const character = 'a';
const timesToRepeat = 5;
let answer =" ";
for (let i = 0; i<timesToRepeat; i++) {
    
    answer +=character;
} ;
console.log(answer);


function addTwo(number){ /* addTwo is a function*/
    return number +2;

}
const finalAnswer = addTwo(5);
console.log(finalAnswer);

/* Scope
 function addFive(number){
     
    const someVariable = "you can't see me outside this function";
    return number +5;

}
addFive(10); 
console.log(someVariable);   addTwo is a function*/

/*

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope
*/

  
