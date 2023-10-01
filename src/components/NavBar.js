import { Link, useNavigate , NavLink } from "react-router-dom"
import logo from "../assets/Logo.svg"
import { toast } from "react-hot-toast"

function NavBar(props){
    const navigate = useNavigate
    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    function handleLogOut(){
        setIsLoggedIn(false)
        toast.success("Logged Out")
    }
    return(
        <div className="flex flex-wrap gap-3 justify-center items-center pt-3 text-white w-[11/12] max-w-[1160px] lg:items-start overflow-hidden lg:justify-between lg:mx-auto">
         <Link to="/">
          <img src={logo} width={160} height={32} loading="lazy"/>
         </Link>
         <nav >
            <ul className="flex gap-10 justify-center">
                <Link to="/"><li className=" px-3 py-1 rounded-xl hover:bg-white hover:text-black hover:font-semibold">Home</li></Link>
                <Link to="/"><li className=" px-3 py-1 rounded-xl hover:bg-white hover:text-black hover:font-semibold" >About</li></Link>
                <Link to="/"><li className=" px-3 py-1 rounded-xl hover:bg-white hover:text-black hover:font-semibold">Contact</li></Link>
            </ul>
         </nav>
         <div className="flex gap-4 justify-center">
          { !isLoggedIn &&
            <Link to="/login"><button className=" bg-richblack-800  py-2 px-6 rounded-2xl hover:bg-richblack-500 ">Login</button></Link>}
          {isLoggedIn &&
            <Link to="/" onClick={handleLogOut}><button className=" bg-richblack-800 py-2 px-6 rounded-2xl hover:bg-richblack-500">LogOut</button></Link>}
          {isLoggedIn &&
            <Link to="/dashboard"><button className=" bg-richblack-800 py-2 px-6 rounded-2xl hover:bg-richblack-500">Dashboard</button></Link>}
          {!isLoggedIn &&
            <Link to="/signup"><button className=" bg-richblack-800 py-2 px-6 rounded-2xl hover:bg-richblack-500">Signup</button></Link>}
         </div>
        </div>
    )
}

export default NavBar
