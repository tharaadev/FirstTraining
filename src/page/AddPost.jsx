import React from "react";
import { useNavigate } from "react-router-dom";
import Childcreate from "./Childcreate";

export default function AddPost({ setItems }) {
  const navigate = useNavigate();
  const adduserpost = (name, age, gmail, password, address, phone, title) => {
    setItems((prev) => [
      ...prev,
      { name, age, gmail, password, address, phone, title },
    ]);
    navigate("/");
  };
  return (
    <div>
      <h1>Add a new post</h1>
      <Childcreate adduser={adduserpost} />
    </div>
  );
}
