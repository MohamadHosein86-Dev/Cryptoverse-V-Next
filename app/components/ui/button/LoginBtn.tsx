"use client";
import { Modal } from "@mui/material";
import React, { Fragment, useState } from "react";
import LoginForm from "../form/LoginForm";

export default function LoginBtn() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShowModal((res) => !res)} className=" text-white hidden lg:block bg-primary py-3 px-3 rounded-md ">
        Login / SigUp
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
    </Fragment>
  );
}
