import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <div className="flex justify-between p-4 select-none">
      <div className="logo_area">
      <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight text-blue-400">
         ZyproLink
    </h4>
      </div>

      <div className="menu_area flex items-center gap-5">
        <Link to="/auth">
        <Button >Log in</Button>
        </Link>
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Nav;
