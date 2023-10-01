import { useState } from "react"
import {FaEye , FaEyeSlash} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"


function SignUpForm({setIsLoggedIn}){
    const [isHiddenC , setHiddenC] = useState(true)
    const [isHiddenP , setHiddenP] = useState(true)
    const navigate = useNavigate()
    const [accountType , setAccount] = useState("student")
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    })
    function handleChange(e){
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name] : e.target.value
        }) )
    }
    function handleHiddenC(){
        setHiddenC(!isHiddenC)
    }
    function handleHiddenP(){
        setHiddenP(!isHiddenP)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(formData.password!=formData.confirmPassword){
            toast.error("passwords don't match")
            return ;
        }
        setIsLoggedIn(true)
        toast.success("Account Created")
        navigate("/dashboard")
        const accountData={
            ...formData
        }
        const finalData={
            ...accountData,
            accountType
        }

    }
    return(
        <div className="w-[100%]">
            <div className="flex justify-center items-center gap-8 mx-auto w-[90%] mb-3 bg-richblack-700  mt-2 px-2 py-1 rounded-3xl lg:justify-start lg:w-[46%] lg:mx-0" >
            <button onClick={()=> setAccount("student")}
            className={accountType==="student"? ("bg-richblack-800 rounded-2xl py-1 px-5 opacity-100 transition-all duration-100") : ("bg-none rounded-3xl opacity-50 py-1 px-5")}
            >Student</button>
            <button onClick={()=> setAccount("instructor")}
             className={accountType==="instructor"? ("bg-richblack-800 rounded-2xl py-1 px-5 opacity-100  transition-all duration-100") : ("bg-none rounded-3xl opacity-50 py-1 px-5")}
            >Instructor</button>
            </div>
            <form onSubmit={handleSubmit} className="text-center  flex flex-col gap-3 lg:text-left ">
            <div className="flex">
            <label className="text-left">
                <p>First Name</p>
                <input
                required
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                className="w-[85%] px-1 mt-1  bg-richblack-700 py-2 rounded-md"
                ></input>
            </label>
            <label  className="text-left">
                <p>Last Name</p>
                <input
                required
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                className="w-[85%] px-1 mt-1  bg-richblack-700 py-2 rounded-md"
                ></input>
            </label>
            </div>
            <label  className="text-left">
                <p>Email Address</p>
                <input
                required
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-[85%] px-1 my-1  bg-richblack-700 py-2 rounded-md"
                ></input>
            </label>
            <div>
            <label className="text-left relative " >
                <p>Password</p>
                <input
                required
                type={isHiddenP? ("password") : ("text")}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="w-[85%] px-1 my-1  bg-richblack-700 py-2 rounded-md"
                ></input>
               {/* {isHiddenP ? (<FaEye onClick={handleHiddenP} className=" absolute right-3 top-[5px] scale-125" />) : (<FaEyeSlash onClick={handleHiddenP} className=" absolute right-3 top-[5px] scale-125"/>) }  */}
            </label>
            <label  className="text-left relative">
                <p>Confirm Password</p>
                <input
                required
                type={isHiddenC? ("password") : ("text")}
                placeholder="Confirm your password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                className="w-[85%] px-1 mt-1 bg-richblack-700 py-2 rounded-md"
                ></input>
                <span onClick={handleHiddenC} className=" absolute top-[75px] -translate-x-9 scale-125">{isHiddenC ? (<FaEye/>) : (<FaEyeSlash/>) }</span>
            </label>
            </div>
            <button className="w-[80%] text-center rounded-md bg-yellow-400 text-black py-1 mt-3 font-semibold mx-auto lg:mx-0">Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm