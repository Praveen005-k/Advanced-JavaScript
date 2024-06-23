/*
    Asyunchronous : JavaScript is a single-threded. Asynchronous programming provides a mechanism for managing long-running operation without
                   interrupting the flow of the program.
                   Asychronous operation involve the use of Callbacks, Promises, or async/wait, Higher order function and method chaining.

*/



console.log("This is first case.");
console.log("This is Second case.");
// console.("This is Thirs case.");    //  It's syncorns problem. we can achive this using asyncorns methods like setTimeOut().

setTimeout(function(){                      //  setTimeOut() method to wait  a particuler seconds of the time.
    console("this is Third case.");
},3000);

console.log("This is Four case.");