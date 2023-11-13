import { useState, useContext } from "react";
import { MoonIcon, SunIcon } from "../../assets";
import useThemeContext from "../../hooks/useThemeContext";

const svgFill = {
  dark: "#fff",
  light: "#1F2A37",
};
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const { currentTheme, setCurrentTheme } = useThemeContext();

  const update = (value) => {
    setToggle(value);
    setCurrentTheme(value ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <MoonIcon fill={svgFill[currentTheme]} />
      <div>
        <span className="text-sm font-medium text-gray-900 dark:text-white "></span>
        <label className="relative">
          <input
            name="toggle"
            type="checkbox"
            checked={toggle}
            value={toggle}
            className="sr-only peer"
            onChange={(e) => update(e.target.checked)}
          />

          <div className="w-11 h-6 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <SunIcon fill={svgFill[currentTheme]} />
    </div>
  );
};

export default Toggle;
