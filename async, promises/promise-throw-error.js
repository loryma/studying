new Promise(res => res())
  .then(() => {
    throw new Error('Oшибка');
    console.log(2);
  })
  .catch(err => {
    console.log(1);
    throw err;
  })
  .then(() => console.log(3))
  .catch(() => console.log(4))
  .then(() => console.log(5))
  .catch(() => console.log(6));