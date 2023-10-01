import React, { useState, useCallback } from 'react';

const ButtonComponent = ({ onClick }) => {
  console.log('ButtonComponent re-rendered');
  return <button onClick={onClick}>Click me</button>;
};

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);  // Only create a new function if `count` changes

  return (
    <div>
      <ButtonComponent onClick={increment} />
      Count: {count}
    </div>
  );
};
