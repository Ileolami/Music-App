
import React from "react";
import { loginUpdate } from "../store/loginSlice";
import { useDispatch } from "react-redux";
import DarkMode from "./Darkmode";
import { loginApi } from '../utils/apis';

const Login = () => {
    const dispatch = useDispatch();
    const handleLogin =async ()=>{
      let res = await loginApi();
      dispatch(loginUpdate(res));
    }
    
    return (  
        <div className="flex justify-center items-center h-screen">
            <DarkMode/>
            <button className="px-10 py-5 bg-green-500 rounded-full text-white font-bold" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}
 
export default Login;


