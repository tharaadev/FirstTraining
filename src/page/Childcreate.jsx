import { useNavigate } from "react-router-dom";
import React from "react";
const Childcreate = ({adduser,input,inputHandler}) => {
    const navigate= useNavigate();
    return ( <div>
   <form  className="w-[60%] mx-auto max-sm:w-[100%] " onSubmit={adduser} >
            <h1 className="text-center capitalize font-bold text-[#2d033675] m-6"> please inter the Data</h1>
        <div className=" flex items-center justify-between  my-2 max-sm:flex-col"> 
            <label className=" labelstyle text-[#3a042c75] " htmlFor="name">Name </label>
            <input className="inputstyle" type="text"  value={input.name} id="name" onChange={inputHandler}/>
             </div>
             <div className="flex items-center justify-between  my-2 max-sm:flex-col ">
            <label className=" labelstyle text-[#3a042c75] " htmlFor="age">Age </label>
            <input className="inputstyle" type="text"  value={input.age} id="age" onChange={inputHandler} />
            </div>
            <div className="flex items-center justify-between  my-2 max-sm:flex-col"> 
            <label className=" labelstyle text-[#3a042c75]" htmlFor="phone">Phone </label>
            <input className="inputstyle" type="text"  value={input.phone} id="phone" onChange={inputHandler} />
            </div>
            
            <div className="flex items-center justify-between  my-2 max-sm:flex-col "> 
            <label className=" labelstyle text-[#3a042c75]" htmlFor="address">Address </label>
            <input className="inputstyle" type="text"  value={input.address} id="address" onChange={inputHandler} />
            </div>

            <div className="flex items-center justify-between  my-2 max-sm:flex-col "> 
            <label className=" labelstyle text-[#3a042c75]" htmlFor="password">password </label>
            <input className="inputstyle" type="passwoed"  value={input.password} id="password" onChange={inputHandler} />
            </div>

            <div className="flex items-center justify-between  my-2 max-sm:flex-col "> 
            <label className=" labelstyle  text-[#3a042c75]" htmlFor="gmail">gmail </label>
            <input className="inputstyle" type="gmail"  value={input.gmail} id="gmail" onChange={inputHandler} />
            </div>

            <div className="flex items-center justify-between   my-3 max-sm:flex-col">
            <label className=" labelstyle  text-[#3a042c75]" htmlFor="title">Title </label>
            <textarea className="inputstyle"   row="2" value={input.title}  id="title"  onChange={inputHandler}></textarea>
            </div> 

            <div className=" flex  justify-around my-12 max-sm:flex-col ">
            <button className="buttonstyle bg-purple-300" type="submit">submit</button>
            <button className="buttonstyle  bg-purple-300" type="reset"    onClick={()=>navigate("/")} > go back</button>
            </div>
        </form>
    </div> );
}
 
export default Childcreate;