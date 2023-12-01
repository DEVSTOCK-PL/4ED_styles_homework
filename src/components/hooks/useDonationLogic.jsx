
import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(376856);

  const increment = () => {
    setCount(count + 500);
  };

  const barWidth = (count / 1000000) * 250;

  return [count, increment, barWidth];
};

export default useCounter;
