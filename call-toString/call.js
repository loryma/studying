const newStr = Object.prototype.toString;
const call = newStr.call([]);
console.log(call);
console.log([].toString());
console.log({}.toString())