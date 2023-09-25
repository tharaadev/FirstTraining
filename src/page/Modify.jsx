import React, { useEffect, useState } from"react";
import { useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
const Modify = ({items}) => {
// const[ gmail,setGmail]=useState("" );
// const[  password,setPassword]=useState( "")
const {id_mod}=useParams();
const[auth,setAuth]=useState(false);

const gmailRef=useRef();
const passwordRef=useRef();


const data= items.find((el)=>(el.id == id_mod)
  
)
 

const modifyHandler=(e)=>{
    e.preventDefault();
    const Newdata={
        password :passwordRef.current.value,
        gmail:gmailRef.current.value, 
     
        };
   
     
      if(Newdata.password == data.password && Newdata.gmail == data.gmail ){
       
     
    }



    }



    return ( 
    
    
    <div>
         <form  className="w-[60%] mx-auto max-sm:w-[100%] " onSubmit={modifyHandler}  >
            <h1 className="text-center capitalize font-bold text-[#074e557a] m-6"> please inter the your information </h1>

        <div className="flex items-center justify-between  my-2 max-sm:flex-col "> 
    <label className=" labelstyle  text-[#074e557a]" htmlFor="gmail">gmail </label>
    <input className="inputstyle" type="email"   id="gmail" ref={gmailRef} 
    //onChange={popo}
    // value={gmail}  onChange={(e)=>setGmail(e.target.value)}
     />
    </div>

  
    <div className="flex items-center justify-between  my-2 max-sm:flex-col  "> 
            <label className=" labelstyle text-[#074e557a]" htmlFor="password">password </label>
            <input className="inputstyle" type="password"  id="password"  ref={passwordRef} 
            //onChange={popo}
            //value={password}  onChange={(e)=>setPassword(e.target.value)}
            />
            </div>

            <div className=" flex  justify-around my-12 max-sm:flex-col ">
            <button className="buttonstyle bg-[#074e557a]  " type="submit">Enter</button>
            <button className="buttonstyle  bg-[#074e557a]" type="reset"    onClick={()=>navigate("/")} > go back</button>
            </div>

    </form>
</div> );
}
 
export default Modify;
