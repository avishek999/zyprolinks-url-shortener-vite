import { useState } from "react";
import { useTheme } from "../theme-provider/Theme-provider";
import { CiSun } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";



const DarkModeButton = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const { setTheme } = useTheme();
  return (
    <>
    <div className="flex flex-row place-self-end  p-4 transition-colors duration-200 cursor-pointer">
      {isLightMode ? (
        <div   onClick={() => setIsLightMode(!isLightMode)} >
          <div onClick={() => setTheme("light")}>
            <CiSun className="hover:rotate-90 "  color="#fff" size={30}  />
          </div>
        </div>
      ) : (
        <div  onClick={() => setIsLightMode(!isLightMode)} >
          <div onClick={() => setTheme("dark")}>
            <IoMdMoon size={30}  className="hove" />
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default DarkModeButton;
