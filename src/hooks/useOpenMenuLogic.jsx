import { useState } from "react";

const useOpenMenuLogic = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  console.log("Open:", open);

  return { open, handleOpen, closeMenu };
};
export default useOpenMenuLogic;
