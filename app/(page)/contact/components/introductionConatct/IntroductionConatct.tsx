import FormContact from "../formContact/FormContact";

export default function IntroductionConatct() {
  return (
    <div className=" my-42 flex-col md:flex-row max-w-[90rem] px-4  flex mx-auto  justify-between xl:px-6  ">
      <FormContact />
      <img className="mt-8 md:mt-0  size-[40%]   " src="landingPage/what_is_crypto.png" alt="" />
    </div>
  );
}
