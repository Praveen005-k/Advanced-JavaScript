/*
    Proxy & Handler :  JavaScript Proxy is "an object which intercepts another object and resists the fundamental operations on it." 
                       This object is mostly used when "we want to hide information about one object from unauthorized access".
 
                       Ex:  const prox = new Proxy(tar, handle)

    Parameters: 
        Target: It is the object on which the Proxy is to be applied
        handle: It is the object in which the intercept condition is defined

*/

let details = {name: "Praveen", Course:"Javascript"};

// let pro = new Proxy(details , {});
// console.log(pro);


// let pro_1 = new Proxy(details, {      //   to implementing the target and handler method hide the data.
//     get : function(){
//         return "Unauthorized"
//     }
// })

// console.log(pro_1.name);                //  Unauthorized.
// console.log(pro_1.Course);              // Unauthorized.



let pro_2 = new Proxy(details, {            //  Here the method traps calls on the target object based on the condition.
    get : function(tar, prop){
        if(prop == "Course"){
            return "Unauthorized"
        }
        return tar[prop];
    }
})

console.log(pro_2.name);
console.log(pro_2.prop);