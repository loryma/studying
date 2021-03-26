import React, { useEffect, createRef, useState } from "react";

function CreateRefFunc() {
  const [counter, setCounter] = useState(0);
  const ref = createRef();

  const increment = () => setCounter(counter => counter + 1);

  useEffect(() => {
    console.log("[useEffect] counter = ", counter, ref.current);
  }, [counter]);

  return (
    <div ref={ref}>
      <button onClick={increment}>+</button>
      <span>{counter}</span>
    </div>
  )
};

export default CreateRefFunc;