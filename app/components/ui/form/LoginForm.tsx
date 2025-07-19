"use client";

export default function LoginForm({ form, setForm, handleLogin }: any) {
  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
      <label htmlFor="">email</label>
      <input type="email" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <label htmlFor="">password</label>
      <input type="password" className=" border-1 border-primary-border rounded-xl  px-3 py-3" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />

      <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-8 mb-3 ">
        Login
      </button>
    </form>
  );
}
