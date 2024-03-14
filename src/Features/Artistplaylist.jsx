import {useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const ArtistPlayList = () => {
    const [artistTrack, setArtistTrack] = useState([]);
    const ID = window.location.search.split('?id=')[1];
    const AccessToken = useSelector((state) => state.login.loginDetails?.access_token);
    
    const artistTopTrack = () => {
        const URL = `https://api.spotify.com/v1/artists/${ID}/top-tracks?market=NG`;
        axios.get(URL, {
            headers: {
                "Authorization" : `Bearer ${AccessToken}`
            }
        }).then((res) => {
            console.log(res);
            setArtistTrack(res.data?.tracks);
        }).catch((err) => {
            console.log(err)
        })

    }
    useEffect(() => {
        artistTopTrack();
    }, [])


    return ( 

        <div>playlist</div>
     );
}
 
export default ArtistPlayList;