// const myModule1 = require("./my-module1");
// console.log(myModule1);
// console.log(myModule1.add2(3, 5));
// console.log(myModule1.getYear(50));

// const y = { s: 3, t: 6 };
// const { s: paul, t } = y;
// console.log(paul);
const { add2, getYear } = require("./my-module1");
console.log(add2(5, 7));
