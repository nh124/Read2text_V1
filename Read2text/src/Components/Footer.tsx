import SplashLogo from "../assets/SplashLogo.svg";
import { fonts, primaryColors, taglines } from "../utils/themes";

const { green } = primaryColors;
const Footer = () => {
  return (
    <div
      className={`w-full max-w-[1920px] h-[400px] flex flex-col items-center justify-center gap-3 bg-gradient-to-t from-[#C3DB85]/30 relative`}
    >
      <div className="absolute left-0 w-[5%] h-full bg-gradient-to-r from-white/100"></div>
      <div className="absolute right-0 w-[5%] h-full bg-gradient-to-l from-white/100"></div>

      <span className="text-lg md:text-3xl italic text-center">
        {taglines.primary}
      </span>
      <div className="w-[70%] h-[70%] flex flex-row justify-between items-end relative">
        <ul className="w-full h-[90%] md:h-fit flex flex-col md:flex-row gap-[5%] text-lg">
          <button className="h-fit">About Us</button>
          <button className="h-fit">FAQs</button>
          <button className="h-fit">Privacy</button>
          <button className="h-fit">Terms</button>
          <button className="h-fit">Contact Us</button>
          <button className="h-fit">Demo</button>
        </ul>
        <div className="w-fit h-fit absolute top-0 right-0">
          <img src={SplashLogo} alt="" width={300} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
