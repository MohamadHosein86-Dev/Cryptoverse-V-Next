
const BASE_URL = process.env.NEXT_PUBLIC_API_URL_2;

export const regestrUser = async ({ name, email, phone, password }:{ name:string, email:string, phone:string, password:string }) => {
  const res1 = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password })
    });
    const data1 = await res1.json();
    if (!res1.ok) throw new Error(data1?.message || "Regester is Unsucssfuly");
};

export const resnedOpt = async ({ phone, }:{ phone:string }) => {
 const res2 = await fetch(`${BASE_URL}/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });
    const data2 = await res2.json();
    if (!res2.ok) throw new Error(data2?.message || "There is no phone");
    return data2 ;
};

export const loginUser = async ({ email, password }:{ email:string , password:string }) => {
  const res1 = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data1 = await res1.json();
    if (!res1.ok) throw new Error(data1?.message || "Login is Unsucssfuly");
};