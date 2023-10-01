import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {FaEye , FaEyeSlash} from "react-icons/fa"
import { toast } from "react-hot-toast"


function LoginForm({setIsLoggedIn}){
    const [isHidden , setHidden] = useState(true)
    const [formData , setFormData] = useState({email : "" , password : ""})
    const navigate = useNavigate()
    function handleChange(e){
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name] : e.target.value
        }) )
    }
    function handleHidden(){
        setHidden(!isHidden)
    }
    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
        toast.success("Login Success")
        navigate("/dashboard")

    }
    return(
        <form onSubmit={handleSubmit} className="w-full text-center lg:text-left">
            <label>Email Address<sup className="text-pink-200">*</sup>
            <br></br>
            <input
            required
            type="text"
            placeholder="Enter your email.."
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[80%] mt-2 px-1 py-2 rounded-md bg-richblack-700"
            ></input>
            </label>
            <br/><br/>
            <label className=" relative">Password<sup className="text-pink-200">*</sup>
            <br></br>
            <input
            required
            type={isHidden? ("password") : ("text")}
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[80%] mt-2 px-1 py-2 rounded-md bg-richblack-700"
            ></input>
            {isHidden ? (<FaEye onClick={handleHidden} className=" absolute top-[45px] -right-80 scale-125"/>) : (<FaEyeSlash onClick={handleHidden} className=" absolute -right-80 top-[45px] scale-125"/>) }
            </label>
            <Link to="#"><p>Forgot Password</p></Link>
            <button className="w-[80%] text-center bg-yellow-400 text-black py-1 mt-3 font-semibold rounded-md ">Log In</button>
        </form>
    )
}

export default LoginForm