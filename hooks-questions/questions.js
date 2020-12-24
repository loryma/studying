import React, { useState, useEffect, useCallback, useContext } from 'react';

/**
 * 1)
 * What are hooks in React?
 * Hooks are functions that allows to use react state and lifecycle events 
 * in functional components
 */
 /**
  * 2)Will React hooks work inside class components?
  * No
  */
 /**
  * 3)Why React hooks was introduced?
  * Due to loosing context when passing callbacks
  * Functions are more lightweight then classes
  */
 /**
  * 4)How useState hook works? 
  * What is/are the arguments accepted by this hook and what is returned by the hook?
  * useState allows to hold on to state when React functional component is rerendered
  * useSate accepts inital value and returns an array where first value is current state 
  * and second value is method for updating state 
  */

  /**
   * 5)
   */
function Counter () {
  const [count, setCount ] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <button onClick={incrementCount}>
        Count: {count}
      </button>
    </div>
  )
};

/**
 * 6)
 */
function Counter () {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(state => state + 1);
  const decrementCount = () => setCount(state => state - 1);

  return (
    <div>
      <strong>Count: {count}</strong>
      <button onClick={incrementCount}>
        Increment
      </button>
      <button onClick={decrementCount}>
        Decrement
      </button>
    </div>
  )
};
/**
 * 6)
 */
//with useCallback
function Counter () {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  const decrementCount = useCallback(() => setCount(count - 1), [count]);

  return (
    <div>
      <strong>Count: {count}</strong>
      <button onClick={incrementCount}>
        Increment
      </button>
      <button onClick={decrementCount}>
        Decrement
      </button>
    </div>
  )
};

/**
 * 7)
 */
function Profile() {
  const [name, setName] = useState('Backbencher');
  const [age, setAge] = useState(23);

  const onNameChange = ({target: {value}}) => setName(value);

  const onAgeChange = ({target: {value}}) => setAge(value);

  return(
    <div>
      <form>
        <input type='text' value={name} onChange={onNameChange} />
        <input type='text' value={age} onChange={onAgeChange} />
        <h2>
          Name: {name} Age: {age}
        </h2>
      </form>
    </div>
  );
};

/**
 * 8)
 * What are the differences in using hooks and class components with respect to state management?
 * state in the class component can only be object 
 * setState merges passes values into state object
 *  
 */

/**
 * 9)
 * What is the purpose of useEffect hook?
 * It allows to have side effects in the functional component - like network requests
 * and perform actions on lifecycle events
 * */

 /**
  * 10)
  */
 function Banner () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Boom');
  });

   const updateState = () => setCount(count + 1);

  return (
    <div>
      <button onClick={updateState}>
        State: {count}
      </button>
    </div>
  );
 };

 /**
  * 11)
  */
 function Banner() {
   const [count, setCount] = useState(0);
   const [name, setName] = useState("");

   useEffect(() => {
     console.log("Count is updated");
   }, [count]);

   return (
     <div>
       <button onClick={() => setCount(count + 1)}>
         Count: {count}
       </button>
       <input type="text" value={name} onChange={({target: {value}}) => setName(value)} />
     </div>
   );
 };
/**
 * 12)
 */
 function Clock () {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
   }, [])

   return (
     <div>
       {date.toString()}
     </div>
   );
 };
 /**
  * 13)
  */
 useEffect(() => {
  window.addEventListener('mousemouve', handleMouseMove);
  return () => window.removeEventListener('mousemouve', handleMouseMove);
 }, []);

 /**
  * 13)
  */
 import { NameContext, AgeContext } from './ProviderComponent';

 function ConsumerComponent() {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);

  return (
    <div>
      Name: {name}, Age: {age}
    </div>
  )
 };


