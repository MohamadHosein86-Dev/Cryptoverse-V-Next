import Image from "next/image";
import FormContact from "../formContact/FormContact";

export default function IntroductionConatct() {
  return (
    <div className=" my-42 flex-col md:flex-row px-4  flex mx-auto  justify-between xl:px-6  ">
      <FormContact />
      <Image width={200} height={200} src="landingPage/what_is_crypto.png" alt="" />
    </div>
  );
}
