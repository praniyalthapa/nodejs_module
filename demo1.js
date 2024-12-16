// require('./demo2');
// const {sum,x}=require('./calculate/function');
// const { multiply } = require('./calculate/multiply');

const {multiply, sum}=require('./calculate/index');
const datamore=require('./app.json');
console.log(JSON.stringify(datamore));

//there is module called utile:
// const util=require("node:util");
// console.log(util);

praniyal="hello world"; //without any datatype is common in common js module but not in ES6 module
console.log("hey",praniyal);

console.log("This is demo1 welcome to my demo1 module");
let a=1;
let b=299;


multiply(a,b);
sum(a,b);
// var x=20;
// console.log(x);  //can't use this because once we have imported it then it can't get double in case of node bocz it has already imported from third pary module which we created
//  console.log("value of x is",x);
