import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span
        className="counter__value"
        onClick={() => setCount(0)}
      >
        {count}
      </span>
      <button
        className="counter__button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  )
}

export default Counter;