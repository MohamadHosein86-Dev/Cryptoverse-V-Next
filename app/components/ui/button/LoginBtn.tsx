"use client";
import { useState } from "react";
import LoginForm from "../form/LoginForm";
import Modal from "../../modal/Modal";

export default function LoginBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className=" text-white hidden lg:block bg-primary py-3 px-3 rounded-md ">
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
