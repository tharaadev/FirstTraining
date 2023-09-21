import React, { useEffect, useState } from"react";
const Modify = ({items}) => {
    
const[ gmail,setGmail]=useState("");
const[  password,setPassword]=useState("")
const[auth,setAuth]=useState(false);



const[modifiedData,setModifiedData]=useState("");

const modifyHandler=(e)=>{
    e.preventDefault();
    const Newdata=({
       password,
       gmail, 
       });
       setModifiedData(Newdata);
    //    if(modifiedData.password === items.password){
    //     setAuth(!auth);
    
      // }
    //   console.log(auth)


}

console.log(modifiedData)
    return ( 
    
    
    <div>
         <form  className="w-[60%] mx-auto max-sm:w-[100%] " onSubmit={modifyHandler}  >
            <h1 className="text-center capitalize font-bold text-[#074e557a] m-6"> please inter the your information </h1>

        <div className="flex items-center justify-between  my-2 max-sm:flex-col "> 
    <label className=" labelstyle  text-[#074e557a]" htmlFor="gmail">gmail </label>
    <input className="inputstyle" type="gmail"   id="gmail"  value={gmail}  onChange={(e)=>setGmail(e.target.value)}/>
    </div>

  
    <div className="flex items-center justify-between  my-2 max-sm:flex-col  "> 
            <label className=" labelstyle text-[#074e557a]" htmlFor="password">password </label>
            <input className="inputstyle" type="passwoed"  id="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className=" flex  justify-around my-12 max-sm:flex-col ">
            <button className="buttonstyle bg-[#074e557a] " type="submit">Enter</button>
            <button className="buttonstyle  bg-[#074e557a]" type="reset"    onClick={()=>navigate("/")} > go back</button>
            </div>

    </form>
</div> );
}
 
export default Modify;