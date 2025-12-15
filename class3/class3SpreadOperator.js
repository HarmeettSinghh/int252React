/* Spreading -----  it expands an iterable into individual elements commonly use for copying arrays/objects , merging or passing 
elements to functions  */
const arr1 = [1,2,4,5,6];
const arr2 = [10, 20, ...arr1];
console.log(arr2);
const arr3 = [...arr1,...arr2];
console.log(arr3);

//copy using one array to another using spreading
const arr4 = [10,20,30,40];
const newarr = [...arr4];
newarr.push(100);
console.log(newarr);

//functions
function sum1(a,b,c){
    return a+b+c;
}
const arr5 = [1,2,3];
console.log(sum1(...arr5));

//Spreading objects

const person = {
    name: "Alice",
    age: 30
}
const student = {state: "Punjab",...person};
console.log(student);
//document.write(JSON.stringify(student));