"use client";
import { useState } from "react";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalLoginUser({ setOpen }: PropsType) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" rounded-2xl max-w-[90rem] z-[10000000] border-1  py-8 border-primaryBorder bg-black text-white mt-10 h-95  px-9  mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl text-primary font-semibold text-center w-full"> Login / SigUp</h1>
        <button onClick={() => setOpen(false)} className="text-white p-1 rounded-full text-4xl">
          ×
        </button>
      </div>

      <form onSubmit={() => alert("error in Login")} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
        <input type="email" className=" border-1 border-primaryBorder rounded-xl px-3 py-3" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className=" border-1 border-primaryBorder rounded-xl mt-4 px-3 py-3" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
