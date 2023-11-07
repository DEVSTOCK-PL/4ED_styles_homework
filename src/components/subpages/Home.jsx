import { useRef, useState, useMemo, useCallback } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const Home = () => {
  //useRef
  const inputRef = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
    console.log(section.current);
  };
  const focus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  //useMemo
  const [count, setCount] = useState(0);

  const [values] = useState(() =>
    Array.from({ length: 1000000 }, (_, index) => index)
  );

  const calcLargeArraySum = (array) => {
    console.log("Obliczanie...");
    return array.reduce((sum, value) => sum + value, 0);
  };

  // const sum = calcLargeArraySum(values);
  const sum = useMemo(() => calcLargeArraySum(values), [values]);

  //useCallback
  const getSum = useCallback(() => calcLargeArraySum(values), [values]);

  console.log("rerender");
  return (
    <Wrapper>
      {/* useMemo */}
      <h1>USE MEMO EXAMPLE</h1>
      <div className="w-full h-40 bg-slate-500 flex">
        <h2>Suma: {sum}</h2>
        <button onClick={() => setCount(count + 1)}>Kliknij {count}</button>
      </div>

      {/* useCallback */}
      <h1>USE CALLBACK EXAMPLE</h1>
      <div className="w-full h-40 bg-slate-400 flex">
        <button onClick={() => console.log(getSum())}>ObliczSumę</button>
      </div>

      {/* useRef */}
      <h1>USEREF EXAMPLE</h1>
      <button onClick={() => scrollToSection(section1)}>
        przejdź do sekcji 1
      </button>
      <button onClick={() => scrollToSection(section2)}>
        przejdź do sekcji 2
      </button>
      <button onClick={() => scrollToSection(section3)}>
        przejdź do sekcji 3
      </button>

      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus on input</button>

      <div className="h-screen bg-slate-300 text-xl" ref={section1}>
        Sekcja1
      </div>
      <div className="h-screen bg-slate-400 text-xl" ref={section2}>
        Sekcja2
      </div>
      <div className="h-screen bg-slate-300 text-xl" ref={section3}>
        Sekcja3
      </div>
    </Wrapper>
  );
};
export default Home;
