import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"
import { FcGoogle } from "react-icons/fc";
function Template(props){
    const title = props.title
    const desc1 = props.desc1
    const desc2 = props.desc2
    const img = props.image
    const type = props.type
    const setIsLoggedIn = props.setIsLoggedIn
    return(
<div className="p-4 text-white flex w-[11/12] flex-col justify-center max-w-[1160px] items-center mx-auto  lg:flex-row lg:justify-between lg:pt-7">
    <div className=" h-fit flex flex-col w-[90%] px-3 items-center mx-auto lg:w-[50%] lg:items-start lg:justify-start">
        <div className="my-3 pt-8 text-center lg:text-left lg:my-0 lg:pt-0">
            <h1 cla>{title}</h1>
            <p><span className="opacity-60">{desc1}</span><br></br><span  className=" text-blue-300">{desc2}</span></p>
        </div>
        {type==="signup" ?
        (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        <div className="flex mt-3 items-center justify-between w-[80%]">
            <div className="w-[40%] h-[2px] bg-slate-400"></div>
            <p>OR</p>
            <div className="w-[40%] h-[2px] bg-slate-400"></div>
        </div>
        <button className="flex rounded-md items-center w-[80%] justify-center gap-3 border-2 py-2 mt-3 border-gray-600" ><FcGoogle/>Sign up with Google</button>
    </div>
    <div className=" w-[90%] mx-auto lg:w-[40%] scale-0 lg:scale-100">
        <img src={img} width={444} height={404} loading="lazy" className="  self-start"></img>
    </div>
</div>
    )
}


export default Template