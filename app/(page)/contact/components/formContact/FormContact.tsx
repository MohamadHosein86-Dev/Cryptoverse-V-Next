import { FaEdit, FaPaperPlane, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FormContact() {
  return (
    <form dir="ltr" className=" basis-1/2 ">
      <h2 className=" font-bold text-4xl pb-1 text-right pr-28 ">فرم را پر کنید</h2>
      <p className="  font-[480] w-full text-primary mb-8 ">Your email address will not be published. Required fields are marked *</p>
      <label className=" flex justify-end w-full -mb-14   " htmlFor="">
        <FaUserAlt size={21} />
      </label>
      <input placeholder="name *" className=" text-gray-500 font-semibold pb-6 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />
      <label className=" flex justify-end w-full -mb-14 mt-8  " htmlFor="">
        <MdEmail size={21} />
      </label>
      <input placeholder="email *" className=" text-gray-500 font-semibold pb-6 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />
      <label className=" flex justify-end w-full -mb-14 mt-8 " htmlFor="">
        <FaEdit size={21} />
      </label>
      <input placeholder="send your message" className=" text-gray-500 font-semibold pb-36 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />

      <button className=" ml-auto rounded-md mt-6 outline-none  transition-all text-white ease delay-200 cursor-pointer bg-primary  hidden  md:flex items-center justify-center gap-2  text-center px-4 w-44 py-4 pb-6 font-bold ">
        send
        <span>
          <FaPaperPlane />
        </span>
      </button>
    </form>
  );
}
