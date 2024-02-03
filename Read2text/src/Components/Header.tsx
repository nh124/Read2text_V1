import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="w-full max-w-[1920px] h-[10vh] flex flex-row items-center px-5">
      <button>
        <img src={logo} alt={""} width={150} height={100} />
      </button>
    </nav>
  );
};

export default Header;
