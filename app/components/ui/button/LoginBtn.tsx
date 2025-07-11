"use client";
import { useState } from "react";
import LoginForm from "../form/LoginForm";
import Modal from "../../modal/Modal";

export default function LoginBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" hidden lg:block ">
      <button onClick={() => setOpen(true)} className=" text-white  bg-primary py-2 px-3 rounded-md ">
        Login / SigUp
      </button>
      <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <LoginForm setOpen={setOpen} />
        </div>
      </Modal>
    </div>
  );
}
