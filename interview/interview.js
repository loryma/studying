/** dog dgo -> true
 * dog  dfo -> false
 * doog ddog -> false
 */

 function isEqual(original, str) {
  const arr1 = original.split('');
  const arr2 = str.split('');
  let result = true;

  const originalMap = {};
  const strMap = {};

  arr1.forEach(el => {
    originalMap[el] = originalMap[el] ? originalMap[el] + 1 : 1;
  });


  arr2.forEach(el => {
    strMap[el] = strMap[el] ? strMap[el] + 1 : 1;
  });

  const keys1 = Object.keys(originalMap);

  const keys2 = Object.keys(strMap);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (originalMap[key] !== strMap[key]) {
      result = false;
      break;
    }
  }

  return result;
 };

 console.log(isEqual('dog', 'dgo'), isEqual('dog', 'dfo'), isEqual('doog', 'ddog'));

 const multiArr = [1, [1, 2, [3,4]], [2,4]];

 function arrFlat() {
   
 }