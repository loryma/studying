/*https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/

  Object-Oriented Programming is a way of writing code that allows you to create different objects from a common object. The common object is usually called a blueprint while the created objects are called instances.

  Each instance has properties that are not shared with other instances. For example, if you have a Human blueprint, you can create human instances with different names.

  The second aspect of Object-Oriented Programming is about structuring code when you have multiple levels of blueprints. This is commonly called Inheritance or subclassing.

  The third aspect of Object Oriented Programming is about encapsulation where you hide certain pieces of information within the object so they’re not accessible.


  Four ways to write Object-Oriented Programming in JavaScript.

  Using Constructor functions
  Using Classes
  Using Objects linking to other objects (OLOO)
  Using Factory functions

  */

//1)Constructor functions

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const mila = new Human('Mila', 'M');

//2)Class syntax

class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const mila = new Human('Mila', 'M');

//3) Objects Linking to Other Objects (OLOO)
const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const mila = Object.create(Human);
mila.init("Mila", "M");

//OR

const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this;
  }
}

const mila = Object.create(Human).init("Mila", "M");
//4) Factory functions

function Human (firstName, lastName) {
  return {
    firstName,
    lastName
  }
}

const mila = Human("Mila", "M");

//Declaring properties and methods

//1)Constructor function
function Human(firstName, lastName) {
  this.firstName = firstName;

  //declare method
  this.sayHello = function() {
    console.log(`Hello, ${firstName}`);
  }
}

const chris = new Human('Chris', 'Coyier')
console.log(chris);

//methods declared on Prototype
function Human(f, l) {
  this.f=f;
  this.l=l;
}

Human.prototype.sayHello = function () {
  console.log(`Hello ${f}`);
}

Human.prototype.method1 = function () { /*...*/ }
Human.prototype.method2 = function () { /*...*/ }
Human.prototype.method3 = function () { /*...*/ }

Object.assign(Human.prototype, {
  method1 () { /*...*/ },
  method2 () { /*...*/ },
  method3 () { /*...*/ }
});


//Declaring properties and methods with Classes
//on instance
class Human {
  constructor (f, l) {
    this.f = f;
    this.l = l;

    this.sayHello = function () {
      console.log(`Hello, ${f}`);
    }
  }
}

//on prototype

class Human {
  constructor(f, l) {}
  
  sayHello() {
    console.log("hello");
  }
}

//3)OLOO - methods declared on instance
const Human = {
  init (f, l) {
    this.f = f;
    this.sayHello = function () {
      console.log(`Hello, ${f}`);
    }

    return this;
  }
};

const mila = Object.create(Human).init('Mila', 'm');

//on prototype
const Human = {
  init() {},
  sayHello() {
    console.log("Hello");
  }
};

//4)Factory functions method declaration
function Human (f, l) {
  return {
    f,
    l,
    sayHello() {
      console.log('Hello, ' + f);
    }
  }
}

//SUBCLASSING

//1)Subclassing with classes
class Child extends Parent {

}

class Human {
  constructor(f,l) {
    this.f = f;
    this.l = l;
  }
  sayHello() {}
}

class Developer extends Human {
  constructor(f,l) {
    // super calls the Human (also called the “parent”) Class. It initiates the constructor from Human. If you don’t need extra initiation code, you can omit constructor entirely.
    super(f,l)
  }
}

//2)subclassing with Functory function
function Subclass (...args) {
  const instance = ParentClass(...args)
  return Object.assign({}, instance, {

  })
}

//OVERWRITING THE PARENTS METHOD
//classes
class Developer extends Human {
  sayHello() {
    //calls parent method
    super.sayHello();
    //additional stuff
    console.log("Developer class code")
  }
}
//factory functions
function Developer (f,l) {
  const human = Human(f, l);
  
  return Object.assign({}, human, {
    sayHello() {
      human.sayHello();

      console.log('new stuff');
    }
  })
}

const chris = new Developer('m', 'l');

//INHERITANCE VS COMPOSITION
//Composition is the act of combining two things into one. It’s about merging things together

const one = {one: 'one'};
const two = {two: 'two'};

const combined = Object.assign({}, one, two);


//object that stores common features
const skills = {
  code (thing) {},
  design (thing) {},
  sayHello () {},
}

class DesignerDeveloper {
  constructor(f,l) {
    this.f = f;
    this.l = l;

    Object.assign(this, {
      code: skills.code,
      design: skills.design,
      sayHello: skills.sayHello,
    })
  }
}
//composition with factory functions 
// is adding shared methods into the returned object
function DesignerDeveloper(f,l) {
  return {
    f,
    l,
    code: skills.code,
    design: skills.design,
    sayHello: skills.sayHello,
  }
}
//using inheritance and composition at same time for classes

class Human {
  constructor (f,l) {
    this.f = f;
    this.l = l;
  }

  sayHello() {
    console.log('Hello', f);
  }
}

class DesignerDeveloper extends Human {};

Object.assign(DesignerDeveloper.prototype, {
  code: skills.code,
  design: skills.design,
})

//using inheritance and composition at same time for factory functions

function Human (f, l) {
  return {
    f, 
    l,
    sayHello() {}
  }
}

function DesignerDeveloper (f, l) {
  const human = Human(f, l);
  
  return Object.assign({}, human, {
    code: skills.code,
    design: skills.design
  })
}

//ENCAPSULATION
//Encapsulation is the act of enclosing one thing inside another thing so the thing inside doesn’t leak out.
//In JavaScript, we’re interested in enclosing variables (which can include functions) so these variables don’t leak out into the external scope. 

//1.private by convention
//3.real private members (propeties)

//private by convention
class Car {
  constructor() {
    this._fuel = 50;
  }

  getFuel() {
    return this._fuel;
  }

  setFuel (value) {
    this._fuel = value;

    if (value > 100) this._fuel = 50;
  }
}

//real private variables, functions and methods

class Car {

  //Declares private variable
  #fuel

  constructor () {
    this.#fuel = 50;
  }
}


//same
class Car {
  #fuel = 50;
}

class Car {
  #fuel = 50;

  getFuel () {
    return this.#fuel;
  }

  setFuel (value) {
    this.#fuel = value;

    if(value > 100) this.#fuel = 50;
  }
}

//with getters and setters

class Car {
  #fuel = 50;

  get fuel () {
    return this.#fuel;
  }

  set fuel (value) {
    this.#fuel = value;
    if(value > 100) this.#fule = 100;
  }
}

const car = new Car();
console.log(car.fuel);
car.fuel = 3000;

//private methods with factory functions
//Factory functions create Private Members automatically

function Car () {
  const fuel = 50;
}

const car = new Car ();
console.log(car.fuel) //undefined

//use getter and setter to access private varibale

function Car () {
  const fuel = 50;

  return {
    get fuel () {
      return fuel;
    },
    set fuel (value) {
      fuel = value;
      if (value > 100) fuel = 100;
    }
  }
}

const car = new Car();
car.fuel = 2000;

//THIS
//this refers to the instance when used in class
class Human {
  constructor(f, l) {
    this.f = f;
    this.l = l;
    console.log(this);
  }
}

//this inside constructor function refers to instance
function Human (f, l) {
  this.f = f;
  this.l = l;
}

//this inside factory function refers to window or undefined
//correct way to use this in factoru function is to use it in object property/method context

function Human (f, l) {
  return {
    f, 
    l,
    sayThis() {console.log(this)}
  }
}

//can use variable instead of this
//(can use wihtout human due to f being in scope)

function Human (f, l) {
  const human = {
    f,
    l,
    sayHello() {
      console.log("hi", human.f);
    }
  }

  return human;
}

//  EXAMPLE 
class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello () {
    console.log(`Hello, I am ${this.firstName}`)
  }
}

class Developer extends Human {
  code (thing) {
    console.log(`${this.firstName} coded ${thing}`)
  }

  sayHello() {
    super.sayHello();
    console.log('I am a developer');
  }
}

//EXAMPLE WITH factory functions
function Human (firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I am ${this.firstName}`)
    }
  }
}

function Developer (firstName, lastName) {
  const human = Human (firstName, lastName);

  return Object.assign({}, human, {
    code (thing) {
      console.log(`${this.firstName} coded ${thing}`)
    },

    sayHello () {
      //overrided human method
      human.sayHello();
      console.log('I am a developer')
    }
  })
}

//without this

function Human (firstName, lastName) {
  return {
    sayHello () {
      console.log(`Hello, I am ${firstName}`)
    }
  }
}

function Developer (firstName, lastName) {
  return Object.assign({}, human, {
    code (thing) {
      console.log(`${firstName} coded ${thing}`)
    },

    sayHello () {}
  })
}

//Classes vs Factory function - Event listeners

//Count

class Counter {
  #count = 0;

  constructor (counter) {
    this.countElement = counter.querySelector('span');
    this.buttonElement = counter.querySelector('button');

    //Initialize count
    this.#count = parseInt(this.countElement.textContent);

    //Adds event listener
    this.buttonElement.addEventListener('click', this.increaseCount);
  }

  updateCounter () {
    this.countElement.textContent = this.#count
  }

  increaseCount = () => {
    this.#count = this.#count + 1;
    this.updateCounter();
  }
}

const counter = new Counter(document.querySelector('.counter'))

//factoru function event listeners
function Counter (counterElement) {
  const countElement = counterElement.querySelector('span');
  const buttonElement = counterElement.querySelector('button');

  let count = parseInt(counterElement.textContent) || 0;

  const counter = {
    updateCounter () {
      counterElement.textContent = count;
    }, 
    increaseCount: event => {
      count = count + 1;
      counter.updateCounter()
    }
  }

  buttonElement.addEventListener('click', counter.increaseCount)
}

const counter = Counter(document.querySelector('.counter'));