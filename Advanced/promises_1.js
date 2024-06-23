/*
    Promises: Promises in javaScript is an object repersenting the eventual completion or failure of an asychronous operation.
            manging the asyuchronous operations, callback hell and unmanageable code.
    Parameters: The promise constructor takes only one argument which is callback function.
                The callback function takes two arguments, resolve and reject.
    
    A Promise has four state:
        Fulfilled: Action related to the promise succeeded.
        Rejected : Action related to the promise failed 
        Pending  : Promise is still pending, not fulfilled or rejected yet.
        Settled  : Promise has been fulfilled or rejected.


*/


// let promise = new Promise(function(resolve,reject){
//     const x = "JavaScrip";
//     const y = "JavaScript";

//     if(x === y){
//         resolve();
//     }else{
//         reject();
//     }
// });

// promise.then(function(){
//     console.log("Success, You are JavScript.");
// }).catch(function(){
//     console.log("Some error has occured.");
// })



const register = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {
            console.log("Please Register");
            resolve("Successfull")
        }, 3000)
    })
}

const login = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Please Login.");
            resolve()
        },1000)
    })
}

const thank = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Thank You");
            // resolve();
            reject("Registration Failed.. Try again.");
        },1000)
    })
}

// register().then((data) => console.log(data))
// register().then(login)
register().then(login).then(thank).catch((i) => console.log(i))