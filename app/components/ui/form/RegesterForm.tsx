"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "../../spinner/Spinner";

interface PropsType {
  setOpen: (s: boolean) => void;
}
export default function RegesterForm({ setOpen }: PropsType) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", CodeOtp: "" });
  const { name, email, phone, password, CodeOtp } = form;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  async function handleRegestr(x: FormEvent<HTMLFormElement>) {
    x.preventDefault();

    setLoading(true);
    // regster
    const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL_2}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password })
    });
    const data1 = await res1.json();
    if (!res1.ok) throw new Error(data1?.message || "ثبت‌نام ناموفق بود");

    // resned opt
    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL_2}/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });

    const data2 = await res2.json();
    setForm({ ...form, CodeOtp: data2.CodeOtp });
    if (!res2.ok) throw new Error(data2?.message || "شماره وجود ندارد  ");

    setLoading(false);
    setStep(2);
  }
  async function handleVerify(x: FormEvent<HTMLFormElement>) {
    x.preventDefault();

    try {
      const result = await signIn("credentials", {
        phone,
        CodeOtp,
        name,
        email,
        redirect: false
      });

      if (result?.error) {
        alert("کد وارد شده اشتباه است.");
      } else {
        setOpen(false);
        router.push("/dashboard");
      }
    } catch {
      alert("مشکلی در ورود پیش آمد.");
    }
  }

  return (
    <div className=" rounded-2xl max-w-[90rem] z-[10000000] border-1  py-8 border-primary-border bg-black text-white    px-9  mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl text-primary font-semibold text-center w-full"> Login / SigUp</h1>
        <button onClick={() => setOpen(false)} className="text-white p-1 rounded-full text-4xl">
          ×
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {step === 1 && (
            <form onSubmit={handleRegestr} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
              <input type="text" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <input type="email" className=" border-1 border-primary-border rounded-xl mt-4 px-3 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <input type="text" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              <input type="password" className=" border-1 border-primary-border rounded-xl mt-4 px-3 py-3" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />

              <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-2 mb-3 ">
                SignUp
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleVerify} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
              <button className=" text-center border-1 border-primary-border rounded-xl px-3 py-3">{CodeOtp}</button>
              <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-2 mb-3 ">
                Sibmit
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
