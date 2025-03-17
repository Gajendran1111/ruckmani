// map 

// syntax 
// variablename .map ((value,index,acctualarray)=>)

let ma =[10,20,30,40,50];
let a =ma.map((val,ind,acc)=> acc*2)
console.log(a);

 // filter 
// variablename .filter ((value,index,acctualarray)=>)

let fi = [100,22,54,63,75,952,6541,852,963,62,12,10,2,3,4,745,6]
let ter =fi .filter((a,b,c)=>b>10)
console.log(ter);

// reduce 
// syntax 

// variablename .reduce ((accumalator,currentvalue)=>)
let  red = [10,20,30,40]
let ce =red.reduce((g,h)=>g+h)
console.log(ce);



