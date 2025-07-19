import { useEffect, useState } from "react";
import MIniSpinner from "../../spinner/MiniSpinner";

export default function OtpForm({ CodeOtp, handleVerify }: any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (CodeOtp) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [CodeOtp]);

  return (
    <form onSubmit={handleVerify} className="max-w-sm mx-auto mt-12 flex flex-col gap-4">
      <label htmlFor="">Code</label>
      <button className=" flex justify-center border-1 border-primary-border rounded-xl px-3 py-3">{loading ? <MIniSpinner /> : CodeOtp}</button>
      <button type="submit" className="bg-primary text-white py-3 rounded-xl mt-2 mb-3 ">
        Submit
      </button>
    </form>
  );
}
