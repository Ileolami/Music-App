import axios from 'axios';
const USER_AUTH = {
    'grant_type': "client_credentials",
    'client_id': import.meta.env.VITE_CLIENT_ID,
    'client_secret': import.meta.env.VITE_SECRET,
  
};
const LOGIN_API =  "https://accounts.spotify.com/api/token"

export const loginApi =async ()=>{
  let res = await axios.post(LOGIN_API, USER_AUTH, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  return res.data;
}