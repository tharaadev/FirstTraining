import { IoMdTrash } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Card = ({names,DeletFunc}) => {
    return (<>
        <div className=" italic mb-5  border border-slate-500  rounded-xl shadow-lg pt-3 px-4 bg-slate-300  text-lg " >
          
        <h1> Name: {names.name}</h1>
        <p>Age: {names.age}</p>
        <p>Phone: {names.phone}</p>
        <p>Address: {names.address}</p>
        <p >Title: {names.title}</p>
      
       <div className ="  flex  justify-end "     >
       <div className= "    w-fit h-fit pb-4 hover:animate-wiggle mx-3" >
            <IoMdTrash size="30px" color="purple" onClick={(e)=>DeletFunc(e,names.id)}/></div>
            <Link to={"modify"}  className= "w-fit h-fit pb-5 hover:animate-wiggle  mx-3"  >
            <IoPencilSharp size="30px" color="#3d383bb9" />
         </Link>
         </div>
     </div>
  
     </> );
}
 
export default Card;