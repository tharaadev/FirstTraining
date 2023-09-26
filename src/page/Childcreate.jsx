import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Childcreate = ({ adduser, item }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gmail, setgmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const addvalues = (e) => {
    e.preventDefault();
    adduser(name, age, gmail, password, address, phone, title);
  };
  useEffect(() => {
    if (item) {
      setName(item.name);
      setPassword(item.password);
      setPhone(item.phone);
      setAddress(item.address);
      setgmail(item.gmail);
      setTitle(item.title);
      setAge(item.age);
    }
  }, []);
  return (
    <div>
      <form className="w-[60%] mx-auto max-sm:w-[100%] " onSubmit={addvalues}>
        <h1 className="text-center capitalize font-bold text-[#2d033675] m-6">
          {" "}
          please inter the Data
        </h1>
        <div className=" flex items-center justify-between  my-2 max-sm:flex-col">
          <label className=" labelstyle text-[#3a042c75] " htmlFor="name">
            Name{" "}
          </label>
          <input
            className="inputstyle"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between  my-2 max-sm:flex-col ">
          <label className=" labelstyle text-[#3a042c75] " htmlFor="age">
            Age{" "}
          </label>
          <input
            className="inputstyle"
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between  my-2 max-sm:flex-col">
          <label className=" labelstyle text-[#3a042c75]" htmlFor="phone">
            Phone{" "}
          </label>
          <input
            className="inputstyle"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between  my-2 max-sm:flex-col ">
          <label className=" labelstyle text-[#3a042c75]" htmlFor="address">
            Address{" "}
          </label>
          <input
            className="inputstyle"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between  my-2 max-sm:flex-col ">
          <label className=" labelstyle text-[#3a042c75]" htmlFor="password">
            password{" "}
          </label>
          <input
            className="inputstyle"
            type="passwoed"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between  my-2 max-sm:flex-col ">
          <label className=" labelstyle  text-[#3a042c75]" htmlFor="gmail">
            gmail{" "}
          </label>
          <input
            className="inputstyle"
            type="gmail"
            value={gmail}
            id="gmail"
            onChange={(e) => setgmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between   my-3 max-sm:flex-col">
          <label className=" labelstyle  text-[#3a042c75]" htmlFor="title">
            Title{" "}
          </label>
          <textarea
            className="inputstyle"
            row="2"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>

        <div className=" flex  justify-around my-12 max-sm:flex-col ">
          <button className="buttonstyle bg-purple-300" type="submit">
            submit
          </button>
          <button
            className="buttonstyle  bg-purple-300"
            type="reset"
            onClick={() => navigate("/")}
          >
            {" "}
            go back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Childcreate;
