import {useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from 'react-icons/fa';
import SongList from "./Songlist";

const ArtistPlayList = () => {
    const [artistTrack, setArtistTrack] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState([]);
    const ID = window.location.search.split('?id=')[1];
    const AccessToken = useSelector((state) => state.login.loginDetails?.access_token);
    const globalArtist = useSelector((state) => state.artist?.artistDetails)
    
    const artistTopTrack = () => {
      const URL = `https://api.spotify.com/v1/artists/${ID}/top-tracks?market=NG`;
      axios.get(URL, {
        headers: {
          "Authorization" : `Bearer ${AccessToken}`
        }
      }).then((res) => {
        console.log(res.data);
        const previewUrls = res.data?.tracks.map(track => track.preview_url);
        console.log(previewUrls);
        setArtistTrack(res.data?.tracks);
      }).catch((err) => {
        console.log(err)
      })

    }
    useEffect(() => {
        artistTopTrack();
        if(globalArtist?.length > 0) {
            globalArtist.forEach((item)=>{
                if(item.id === ID){
                    setSelectedArtist(item);
                    return;
                }
            })
        }


    }, [])

  

    return ( 
        <div className="selectedArtist_main_box " >
        <section className="music_player" >
          <div className="artist_name">
           <p className="p-typewriter"> {selectedArtist?.name}</p>
            <div className="artist_follower">
              <p className="verified">
                <FaCheckCircle /> verified artist
              </p>
              {selectedArtist?.followers?.total.toLocaleString()}
            </div>
          </div>
        </section>
        {
          artistTrack?.map((item, index)=>{
            return <SongList artistAlbum={item} key={index} index={index} hide={true} />
          })
        }
      </div>
     );
}
 
export default ArtistPlayList;