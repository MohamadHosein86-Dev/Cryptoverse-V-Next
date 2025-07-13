import CopyRight from "./components/copyRight/CopyRight";
import Logo from "../logo/Logo";
import IntroductionFooter from "./components/introductionFooter/IntroductionFooter";

export default function Footer() {
  return (
    <footer className=" bg-surface-900 mt-34 border-1 border-primary-border ">
      <div className=" pt-16 px-14 text-white container ">
        <div className=" justify-center flex flex-wrap md:justify-between mb-8">
          <div className="w-full text-center md:text-left md:w-1/3 mb-6 md:mb-0">
            <Logo />
            <p className="mt-4 text-md text-gray-400">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <IntroductionFooter />
        </div>
        <CopyRight />
      </div>
    </footer>
  );
}
