import logo from "../../assets/Favicon.svg";

import SignButton from "../SignInButton/SignInButton";

export default function HomeComponent() {
  return (
    <main className="w-full h-[90dvh] flex items-center justify-center max-w-[1920px] px-5">
      <div className="flex flex-row justify-center h-auto gap-[4%] w-full items-center">
        <div className="h-full flex flex-col gap-3 justify-center w-[900px]">
          <span className="font-bold text-3xl md:text-5xl">
            Test Your Reading
          </span>
          <span className="md:text-lg">
            Improve your literacy skills using our intuitive webapp, designed to
            efficiently evaluate and enhance your reading and pronunciation.
            Join us on the journey to fluency and confident communication!
          </span>
          <div className="flex flex-row gap-5 items-center">
            <SignButton />
            <button className="p-3 rounded-full bg-[#C4DB85]/10 flex md:hidden">
              <img src={logo} alt="" className="w-[40px]" />
            </button>
          </div>
        </div>
        <button className="w-fit md:flex rounded-full p-3 overflow-hidden hidden">
          <img src={logo} alt="" className="w-[260px]" />
        </button>
      </div>
    </main>
  );
}
