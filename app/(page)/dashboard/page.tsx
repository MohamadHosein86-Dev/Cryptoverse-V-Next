"use client";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export default function Acount() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>در حال دریافت اطلاعات کاربر...</div>;
  }
  if (status === "unauthenticated") {
    return <div>شما وارد نشده‌اید.</div>;
  }

  if (!session || !session.user) {
    return <div>مشکلی در دریافت اطلاعات کاربر رخ داده است.</div>;
  }

  type CustomUser = typeof session.user & { phone?: string };
  const user = session.user as CustomUser;
  const name = user?.name;
  const email = user?.email;
  const phone = user?.phone;

  return (
    <div className=" hidden  md:block gap-8 rounded-[16px] border-1 border-[#E7E7E8] w-200  xl:basis-[70%] ">
      <div className=" px-8  border-b-[1px] border-b-white  py-6 flex  w-full ">
        <h2 className="  font-bold text-white flex gap-[.3rem]  ">
          <FaUser size={20} className=" mr-2 text-primary " />
          My Acount
        </h2>
      </div>
      <div className=" mt-[1rem] text-white p-[2rem] flex gap-[1rem] items-center  ">
        <p className=" text-primary font-semibold  "> Name : </p>
        <p className=" ">{name}</p>
      </div>
      <div className=" p-[2rem] text-white flex gap-[1rem] items-center  ">
        <p className=" text-primary font-semibold  "> Email : </p>
        <p className=" ">{email}</p>
      </div>
      <div className=" p-[2rem] text-white flex gap-[1rem] items-center  ">
        <p className=" text-primary font-semibold  "> Phone : </p>
        <p className=" ">{phone}</p>
      </div>
    </div>
  );
}
