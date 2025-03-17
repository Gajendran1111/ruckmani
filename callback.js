// callback
// synchronous

function call (callback){
    setTimeout(() => {
        console.log("ruckmani");
        callback()
    }, 5000);
}
function back (callback){
    setTimeout(() => {
        console.log("javascript");
    }, 2000);
}
// call(back);

// call back hell 

function clean (callback){
    setTimeout(() => {
        console.log("cleaning house");
        callback()
    }, 5000);
}
function trash(callback){
    setTimeout(() => {
        console.log("put teh trash out ");
        callback()
    }, 2000);
}
function car (callback){
    setTimeout(() => {
        console.log("wash the car");
        callback()
    }, 100.100);
}
function water (callback){
    setTimeout(() => {
        console.log("dont waste water");
        callback()
    }, 500);
    
}
clean (()=>{
    trash(()=>{
        car(()=>{
            water(()=>{console.log("work done")})
        })
    })
})