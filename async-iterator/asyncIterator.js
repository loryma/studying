function indexDelay(arr) {
  arr.forEach((el, index) => {
    setTimeout(() => console.log(index), 3000 * index);
  })
};

indexDelay([2, 3, 4, 8]);