"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Links } from "@/app/data/Data";
import BtnDashboard from "@/app/components/ui/button/BtnDashboard";
import Spinner from "@/app/components/spinner/Spinner";
import PanleUser from "./panleUser/panleUser";
import { FaUser } from "react-icons/fa";

export default function ProfileUser() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [, setshowmodal] = useState(false);

  const name = session?.user?.name && session.user.name;

  if (status == "loading") return <Spinner />;

  return (
    <section className=" pb-20 mb-12  ">
      <div className="container flex gap-4 mt-28 ">
        <PanleUser />
        <div className="  rounded-[16px] flex flex-col gap-3 w-full md:w-280 lg:w-120  xl:basis-1/3 ">
          <div className=" rounded-[15px] px-4  border-1 border-white  py-5 flex gap-4  w-full ">
            <p onClick={() => {}} className=" items-center mr-auto cursor-pointer flex  gap-2 text-white ">
              <div className={`p-2 rounded-full transition-all  duration-200 bg-white `}>
                <FaUser className=" text-primary " />
              </div>
              {name}
            </p>
          </div>
          <div className=" rounded-[15px]  pb-4 px-4 flex-col border-1 border-white gap-1 py-6 flex  ">
            {Links.map((res) => (
              <BtnDashboard key={res.titel} onclick={() => router.push(`${res.herf}`)} icon={`${res.icon}`} rout={`${res.herf}`}>
                {res.titel}
              </BtnDashboard>
            ))}
            <BtnDashboard
              logout={true}
              onclick={() => {
                signOut();
                router.push("/");
              }}
            >
              {" "}
            </BtnDashboard>
            <BtnDashboard rout="/profile" icon="user" sm={true} onclick={() => setshowmodal((x) => !x)}>
              {" "}
            </BtnDashboard>
          </div>
        </div>
      </div>
    </section>
  );
}
