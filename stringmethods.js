// string method

// .length:       Returns the length of the string.

let l = "hi iam java";
console.log(l.length);


// .toUpperCase():Converts the entire string to uppercase.

let up = "hi iam java"
console.log(up.toUpperCase());

// .toLowerCase():Converts the entire string to lowercase.

let lo = "JAVACSRIPT"
console.log(lo.toLowerCase());

// .charAt(index):Returns the character at the specified index.

let ch = "hi iam java"
console.log(ch.charAt(5));

// .indexOf():    Returns the index of the first occurrence of the specified substring.

let ind = "hi iam java"
console.log(ind.indexOf("a"));

// .lastIndexOf():Returns the index of the last occurrence of the specified substring.

let last = "hi iam java"
console.log(last.lastIndexOf("a"));

// .slice():      Extracts a section of the string - 

let sli = "hello sir welcome"
console.log(sli.slice(-6));  

// .substring :   is use to take the particular word in sentance starting 0

let sub = "hello sir welcome"
console.log(sub.substring(0,5));

// .replace():    Replaces the specified value with a new value.

let rep = "hi iam gajendran from chennai "
console.log(rep.replace("chennai","pondy"));

// .replaceAll :  this function use to replace all the same words in the para

let all = "hi iam js and js is a coding language"
console.log(all.replaceAll("js","javascript"));

// .trim():       Removes whitespace from both ends of the string.

let tri = "          hello          ";
console.log(tri.trim());

// .split():    Splits the string into an array of substring

let spl = "hello world"
console.log(spl.split("").join(""));

// .join():       it use to join the words
// .concat():     Joins two or more strings.

let con = "gajendran"
console.log(con.concat(""));

// .startsWith(): Checks if the string starts with the specified substring.
let str = "javascript"
console.log(str.startsWith("l"));

// .endsWith():   Checks if the string ends with the specified substring.

let end ="javascript"
console.log(end.endsWith("t"));


// .includes():   Checks if the string contains the specified substring.

let incl = "hi java wlcome to coding world"
console.log(incl.includes("java"));

