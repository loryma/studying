function bind(context, ...arg) {
  const self = this;
  return function (...newArg) {
    return self.call(context, ...arg, ...newArg);
  }
};

Function.prototype.bindMethod = bind;

function exampleFunc(age, location) {
  return {
    name: this.name,
    age,
    location,
  }
};

const person = {name: 'Mila'};

const bindedExampleFunc = exampleFunc.bindMethod(person, 32);

console.log(bindedExampleFunc('Chernivtsi'));