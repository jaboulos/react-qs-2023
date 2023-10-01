import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ computations }) => {
  console.log('ExpensiveComponent re-rendered');
  return <div>Computed Value: {computations}</div>;
};

export const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveComputations = useMemo(() => {
    console.log('Computations performed');
    let result = 0;
    for (let i = 0; i < 10000; i++) {  // Simulating expensive calculations
      result += i;
    }
    return result + number;
  }, [number]);  // Only recompute if `number` changes

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setOtherState(otherState + 1)}>Update Other State</button>
      <ExpensiveComponent computations={expensiveComputations} />
      <div>Other State: {otherState}</div> {/* This line displays the value of otherState */}
    </div>
  );
};

