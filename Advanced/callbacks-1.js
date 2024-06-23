/*
    Callbacks:  A callback is function passed as an argument to another function, which get invoked after the main function complete it execution.
                You can pass the callback function to the main function as an argument, & once the main function finsihes it task, it call the call
                back function to deliver a result. 
        Key concepts: Asychronous, Non-blocking, HIger order functon, Anonymous function and closure.
*/


function process(input, back){
        return back(input);
}
function uppercase(str){
        return str.toUpperCase();
}

console.log(process("Javascript", uppercase));