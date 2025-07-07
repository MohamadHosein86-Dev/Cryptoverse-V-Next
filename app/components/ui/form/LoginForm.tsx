"use client";
import { useState } from "react";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalLoginUser({ setOpen }: PropsType) {
  const [step, setStep] = useState<"signup" | "verify">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  /*  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false) */ return (
    <div className="p-8 max-w-[90rem] z-[10000000] mt-10 h-full text-black px-9 py-9 mx-auto">
      <div className="flex justify-between items-center mb-6">
        {step === "verify" && (
          <svg onClick={() => setStep("signup")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="cursor-pointer text-[#5C5C5B] size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        )}
        <h1 className="text-xl text-[#d15858] font-semibold text-center w-full"> ورود به فودکینگ </h1>
        <button onClick={() => setOpen(false)} className="text-[#5C5C5B] p-1 rounded-full text-2xl">
          ×
        </button>
      </div>

      {step === "signup" && (
        <form className="max-w-sm mx-auto flex flex-col gap-4">
          <p className="text-[#555555] mt-2 text-center text-sm mb-4">ثبت‌نام برای دریافت کد تأیید</p>
          <input type="text" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="نام کامل" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="شماره موبایل" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="password" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} required />

          {/* {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="bg-[#D12525] text-white py-3 rounded-xl mt-2">
            {loading ? "در حال ارسال..." : "ثبت‌نام و دریافت کد"}
          </button> */}
        </form>
      )}
    </div>
  );
}
