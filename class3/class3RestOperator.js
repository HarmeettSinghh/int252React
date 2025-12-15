//Rest Operator -- collect multiple elements into single array
function add(...num){
return num.reduce((add,n)=>add+n,0);
}
console.log(add(1,2,3,4,5,6,7));
/* using rest keyword in the given example a will be a parameter which is hello and Ankit, Raj will be given 
as a parameter */
function info(a,...rest){
console.log(a);
console.log(...rest);
}
info("Hello","Ankit","Raj");


//destructuring using rest operator

const [first, ...rest]=[1,2,3,4,5];
console.log(first);
console.log(rest);