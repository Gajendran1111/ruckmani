// function 

// syntax 

// function name (){}

function box (){
    console.log (12);

    var a = 10;
    console.log(a);

    let b = 20;
    console.log(b);
}

box();

// function types 

// function statement and declration 
// function expression / anonymous function 
// immediate invoke function expression --> IIFE
// arrow function 

// function statement and declration  --> it have parameter and argument method
// var s = 10;

function task (ad){
    console.log(ad)
}
task("javascript");

// function expression / anonymous function 

let fun = function ex (press){
    console.log(press)
}
fun("function expression");

// anonymous function 

let o =function (d){
console.log(d)
}
o("anonymous");


// immediate invoke function expression --> IIFE

(function (iife){
console.log(iife)
})("arrow function");

// arrow function 
// syntax 
//  ()=>{}

let w = (arro)=>{console.log(arro)}
w("arrow function");