import axios from "axios";
import React from "react";
import { loginUpdate } from "../store/loginSlice";
import { useDispatch } from "react-redux";
import DarkMode from "./Darkmode";
import { useNavigate } from "react-router-dom";

const USER_AUTH = {
    'grant_type': "client_credentials",
    'client_id': import.meta.env.VITE_CLIENT_ID,
    'client_secret': import.meta.env.VITE_SECRET,
    // redirect_uri: "http://localhost:5173/dashboard",
};
const LOGIN_API = "https://accounts.spotify.com/api/token";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async () => {
        let res = await axios.post(LOGIN_API, USER_AUTH, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        dispatch(loginUpdate(res));
        navigate("/dashboard");
        // console.log(res);
    }
    
    return (  
        <div className="flex justify-center items-center h-screen">
            <DarkMode/>
            <button className="px-10 py-5 bg-green-500 rounded-full text-white font-bold" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}
 
export default Login;


