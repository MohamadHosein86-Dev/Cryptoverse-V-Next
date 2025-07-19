"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import MIniSpinner from "../../spinner/MiniSpinner";
import { loginUser, regestrUser, resnedOpt } from "@/app/servises/auth";
import RegesterForm from "./RegesterForm";
import OtpForm from "./OtpForm";
import LoginForm from "./LoginForm";

interface PropsType {
  setOpen: (s: boolean) => void;
}
export default function AuthenticatedForm({ setOpen }: PropsType) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", CodeOtp: "" });
  const [step, setStep] = useState("login");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { name, email, phone, password, CodeOtp } = form;

  async function handleRegestr(x: FormEvent<HTMLFormElement>) {
    x.preventDefault();
    setLoading(true);

    await regestrUser({ name, email, phone, password });

    const optcode = await resnedOpt({ phone });
    setForm({ ...form, CodeOtp: optcode.CodeOtp });

    setLoading(false);
    setStep("otp");
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

  async function handleLogin(x: FormEvent<HTMLFormElement>) {
    x.preventDefault();
    try {
      const result = await loginUser({ email, password });
      if (result?.error) {
        alert("Eamil or password is kir ");
      } else {
        router.push("/");
      }
    } catch {
      alert("مشکلی در ورود پیش آمد.");
    }
  }

  return (
    <div className=" rounded-2xl max-w-[90rem] z-[10000000] border-1  py-8 border-primary-border bg-black text-white    px-9  mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl flex gap-2 justify-center font-semibold w-full">
          <span onClick={() => setStep("login")} className={` ${step == "login" ? " text-primary " : "text-white"} cursor-pointer text-primary `}>
            Login
          </span>
          <span className=" text-white ">/</span>
          <span onClick={() => setStep("regester")} className={` ${step == "regester" ? " text-primary " : "text-white"} cursor-pointer  `}>
            SigUp
          </span>
        </h1>
        <button onClick={() => setOpen(false)} className="text-white p-1 rounded-full text-4xl">
          ×
        </button>
      </div>
      {loading ? (
        <div className=" flex justify-center   my-14 ">
          <MIniSpinner />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {step === "login" && (
            <motion.div key="login" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }}>
              <LoginForm setForm={setForm} form={form} handleLogin={handleLogin} />
            </motion.div>
          )}
          {step === "regester" && (
            <motion.div key="register" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }}>
              <RegesterForm setForm={setForm} form={form} handleRegestr={handleRegestr} />
            </motion.div>
          )}
          {step === "otp" && (
            <motion.div key="otp" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }}>
              <OtpForm CodeOtp={CodeOtp} handleVerify={handleVerify} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
