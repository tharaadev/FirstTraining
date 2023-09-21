import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( <div className=" flex items-center justify-between p-5 mb-5  bg-gray-600 rounded-lg ">
        <Link to={"/"} className="w-[70%] "> <ImHome3 color="pink" size="30px"/></Link>
        <div className=" w-[50%] flex items-center justify-around  text-lg text-slate-200  max-sm:w-[60%]" >
            <Link to={"create"}className=" hover:text-pink-300 cursor-pointer">create</Link>
            <p className=" hover:text-pink-300 cursor-pointer">about</p>
        </div>
    </div> );
}
 
export default Navbar;