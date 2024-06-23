/*
    In JavaScript, this keyword refers to the current context or scope within which code is executing. Its value is determined by how a 
    function is called, and it can dynamically change depending on the invocation context.

*/

// 1. Use the method:

// const person = {
//     name : "JavaScript",
//     age : 1995,
//     greet : function(){
//         console.log(`This is a ${this.name} and born in ${this.age}`);
//     }
// }

// person.greet();


// 2. Use the function:
// const greeting = function(){
//     console.log(`This is a ${this.name}`);
// }

// const person = {
//     name : "Amith",
//     SayHello : greeting
// }

// const p1 = {
//     name: "Knelly"
// }

// greeting();         // This is a undefined
// person.SayHello();  // This is a Amith
// greeting.call(p1);  // This is a Knelly



/*
    In non-strict mode, this refers to the global object (e.g., window in browsers, global in Node.js), representing the global scope.
    In strict mode, this is undefined when used alone outside of any function or object context. This behavior prevents accidental use 
    of the global object and encourages safer coding practices

*/
// 3.Using the alone:

// console.log(this);  // {} repersent the window object.  Non-Strict Mode.



// 4.Implicit Biniding.
// const per1 = {
//     name:"rams",
//     age:30,
//     say : function(){
//         console.log(`Hello, my name is '${this.name}' and age is ${this.age}`);
//     }
// }
// per1.say();


// 5.Explicity Binding.
/*      When we explicitly bind this keyword using the " call(), bind(), or apply() method " then this keyword default reference is changed to 
        the object called using the above-specified methods.*/

// function ageVerfiy(){
//     if(this.age > 18){
//         console.log(`Yes, You can drive.`);
//     }else{
//         console.log(`No, you cann't drive.`);
//     }
// }
// const p1 = {age:21};
// const p2 = {age : 17};
// ageVerfiy.call(p1);
// ageVerfiy.call(p2);



//  6.Default Biniding :-  When this keyword is used in global scope this is set to window object.
// const age = 20 ;
// function verfiy(){
//     console.log(this.age);
// }
// verfiy();   //  undefined



//  Arrow function biniding :  When this is used in the arrow function then this has lexical scope so without the function keyword 
//                             this is unable to refer to the object in the outer scope. 


// let obj = {
//     name : "krish",
//     age : 30,
//     greet : () => {
//         return `Hello, I'm ${this.age} years of old`;
//     } 
// }

// console.log( obj.greet());



'use strict';
// x = 3.24;       //  will throe an error.

// p = {p1:"one",p2:"two"}


'use strict'
let y = 90 ;
delete y ;
console.log(y);

