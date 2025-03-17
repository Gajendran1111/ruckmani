// arraymethod 

// 1.push():  Adds a new element to the end of the array

let pu =[10,20,30,40,50]
pu.push(60)
console.log(pu);

// 2.pop(): Removes the last element from the array.

let po = [10,20,30,40,50,60]
po.pop()
console.log(po);

// 3.shift(): Removes the first element from the array.

let shi = [0,10,20,30]
shi.shift()
console.log(shi);

// 4.unshift(): Adds a new element to the beginning of the array.

let un = [10,20,30,40,50]
un.unshift(0)
console.log(un);

// 5.sort():       Sorts the elements of the array.

let alf = ["c","a","e","b","d","f"]
console.log(alf.sort());

// 6.reverse():    Reverses the order of elements in the array.

let rev = "trndnologies"
console.log(rev.split("").reverse("").join(""));

// 7.splice() :  it contant 0,1 method to sploice the concept 

// syntax
// variable_name.splice(index,splice,value)

let week =["monday","tuesday","wednesday","thuresday","friday","saturday"]
week.splice(0,1,"sunday")
console.log(week);
