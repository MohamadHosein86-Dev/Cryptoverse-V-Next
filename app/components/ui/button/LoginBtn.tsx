"use client";
import { useState } from "react";
import RegesterForm from "../form/RegesterForm";
import Modal from "../../modal/Modal";

export default function LoginBtn({ menu = false }: { menu?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`  ${menu ? "" : "hidden"} lg:block `}>
      <button onClick={() => setOpen(true)} className=" w-35 text-white  bg-primary py-2 px-3 rounded-md ">
        Login / SigUp
      </button>
      <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <RegesterForm setOpen={setOpen} />
        </div>
      </Modal>
    </div>
  );
}
