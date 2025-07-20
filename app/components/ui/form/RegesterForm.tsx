"use client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  CodeOtp: string;
  [key: string]: string;
}

interface RegisterFormProps {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  handleRegestr: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function RegesterForm({ form, setForm, handleRegestr }: RegisterFormProps) {
  return (
    <form onSubmit={handleRegestr} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
      <label htmlFor="">Name</label>
      <input type="text" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <label htmlFor="">Email</label>
      <input type="email" className=" border-1 border-primary-border rounded-xl  px-3 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <label htmlFor="">Phone</label>
      <input type="text" className=" border-1 border-primary-border rounded-xl px-3 py-3" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
      <label htmlFor="">Password</label>
      <input type="password" className=" border-1 border-primary-border rounded-xl mb-4  px-3 py-3" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />

      <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-6 mb-3 ">
        SignUp
      </button>
    </form>
  );
}
