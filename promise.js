// promise
// syntax 
// return new Promise((resolve, reject) => {
// })


function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop = true
            if (shop){
                resolve("going to the shop")
            }
            else {
                reject("not going")
            }
       
        }, 5000);
    })
}
function buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = true
            if (product){
                resolve("buy the product")
            }
            else{
                reject("not buy the product")
            }
            
        }, 2500);
    })
}
function change (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const get = false
            if(get){
                resolve("get the change back")
            }
            else {
                reject("did not get the change back")
            }
            
        }, 1500);
    })
}
function back (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const home = true 
            if (home){
                resolve("come back to home")
            }
            else {
                reject("back to park")
            }
            
        }, 500);
    })
}
// go ()
// .catch(a => {console.log(a); return buy()})
// .then(b => {console.log(b); return change()})
// .catch(c => {console.log(c); return back()})
// .then(d => {console.log(d);console.log("work done")})

async function homework() {
    try {
        const a = await go ();
    console.log(a);
    const b = await buy ();
    console.log(b);
    const c = await change();
    console.log(c)
    const d = await back ();
    console.log(d);
    } catch (error) {
        console.log(error)
    }  
}
homework();










