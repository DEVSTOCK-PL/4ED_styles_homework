import { useReducer } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
  }
`;

const About = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { ...state, count: state.count + 1 };
        case "decrement":
          return { ...state, count: state.count - 1 };
        case "reset":
          return { ...state, count: 0 };
        case "change_input":
          return { ...state, inputValue: action.value };
        default:
          throw new Error();
      }
    },
    { count: 0, inputValue: "" }
  );

  const handleInputChange = (e) => {
    dispatch({ type: "change_input", value: e.target.value });
  };

  console.log(state);

  return (
    <Wrapper>
      <div>
        Licznik: {state.count}
        <button
          className="w-8 h-8 m-4 bg-slate-400"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="w-8 h-8 m-4 bg-slate-400"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="w-16 h-8 m-4 bg-slate-400"
          onClick={() => dispatch({ type: "reset" })}
        >
          reset
        </button>
      </div>
      <input
        type="text"
        onChange={handleInputChange}
        value={state.inputValue}
      />
    </Wrapper>
  );
};
export default About;
