import React, { useState } from "react";

import Childcreate from "./Childcreate";

const Create = ({setItems}) => {
//     const [name,setName]= useState("");
// const [age,setAge]=useState("");
// const [phone,setPhone]=useState("");
// const [address,setAddress]=useState("");
// const [title,setTitle]=useState("");
/////////
// const addData=(data)=>{
      
//     setItems((prevstate)=>([...prevstate,data]));
//   }////

const[input,setInput]=useState({
    name:"",
    age:"",
    phone:"",
    address:"",
    title:"",
    gmail:"",
    password:"",
})

const inputHandler=(e)=>{
 const key= e.target.id;
 const value =e.target.value;
 setInput((prevstate)=>({...prevstate,[key]:value}))
}



const adduser=(e)=>{
 e.preventDefault();
 const data=({
    id: Math.round(Math.random()*100),
    name: input.name,
    age: input.age,
    phone: input.phone,
    address: input.address,
    password:input.password,
    gmail:input.gmail,
    title: input.address
 });
 setItems((prevstate)=>([...prevstate,data]));

 setInput({
    name:"",
    age:"",
    phone:"",
    address:"",
    gmail:"",
    password:"",
    title:"",
})

}
    return ( <div>
        <Childcreate adduser={adduser} input={input}  inputHandler={inputHandler} />
       
    </div> );
}
 
export default Create;
//text-center capitalize text-[#803492] font-bold