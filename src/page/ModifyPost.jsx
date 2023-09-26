import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Childcreate from "./Childcreate";

export default function ModifyPost({ setItems, items }) {
  const navigate = useNavigate();
  const { postid } = useParams();
  const modify = (name, age, gmail, password, address, phone, title) => {
    const modifedItems = items.map((el) => {
      if (el.id == postid) {
        (el.name = name),
          (el.age = age),
          (el.gmail = gmail),
          (el.password = password),
          (el.address = address),
          (el.phone = phone),
          (el.title = title);
      }
      return el;
    });
    setItems(modifedItems);
    navigate("/");
  };
  return (
    <div>
      <h1>Modify Post</h1>
      <Childcreate
        adduser={modify}
        item={items.find((el) => el.id == postid)}
      />
    </div>
  );
}
