import { Link } from "react-router-dom";
import { primaryColors } from "../../Utils/themes";
const SignButton = () => {
  const { green } = primaryColors;
  return (
    <Link
      className={`w-fit h-fit px-[32px] py-2 border-2 border-[#C3DB85] rounded-md hover:bg-[#C3DB85] duration-300 hover:font-semibold`}
      style={{ borderColor: `${green}` }}
      to="/assignments"
    >
      Sign In
    </Link>
  );
};

export default SignButton;
