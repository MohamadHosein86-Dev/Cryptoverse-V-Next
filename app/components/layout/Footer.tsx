import CopyRight from "./components/CopyRight";
import Logo from "../logo/Logo";
import IntroductionFooter from "./components/introductionFooter/IntroductionFooter";

export default function Footer() {
  return (
    <footer className=" bg-dark mt-34 border-1 border-primaryBorder ">
      <div className=" text-white pt-16 px-14 ">
        <div className=" max-w-[90rem]   mx-auto ">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Logo />
              <p className="mt-4 text-md text-gray-400">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <IntroductionFooter />
          </div>
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}
