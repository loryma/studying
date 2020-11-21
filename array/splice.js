const arr = [1,2,3,4,5,6,7,8,9];
const splicedArr = arr.splice(1,2);

arr.splice(1,2,...splicedArr);
console.log(arr);