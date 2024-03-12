import axios from "axios";
import React from "react";

const USER_AUTH = {
    'grant_type': "client_credentials",
    'client_id': 'd30ca688764443ffb81f127b239d58bb',
    'client_secret': 'ffd94bfb93624fde8f41e5c8f3cefc78',
    // redirect_uri: "http://localhost:5173/dashboard",
};
const LOGIN_API = "https://accounts.spotify.com/api/token";


const Login = () => {

    const handleLogin = async () => {
        let res = await axios.post(LOGIN_API, USER_AUTH, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        console.log(res);
    }
    
    return (  
        <div className="flex justify-center items-center h-screen">
            <button className="px-10 py-5 bg-green-500 rounded-full text-white font-bold" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}
 
export default Login;


