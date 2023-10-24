import { useState } from "react";

const useCustomState = () => {
  const [active, setActive] = useState(true);
  const [name, setName] = useState("Tom");

  return {
    active,
    setActive,
    name,
    setName,
  };
};

export default useCustomState;
