"use client";

import { FormState } from "@/app/types/DataTypes";

interface LoginFormProps {
  form: Pick<FormState, "email" | "password">;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({ form, setForm, handleLogin }: LoginFormProps) {
  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
      <label htmlFor="">email</label>
      <input type="email" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm((pr) => ({ ...pr, email: e.target.value }))} required />
      <label htmlFor="">password</label>
      <input type="password" className=" border-1 border-primary-border rounded-xl  px-3 py-3" placeholder="Password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} required />

      <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-8 mb-3 ">
        Login
      </button>
    </form>
  );
}
