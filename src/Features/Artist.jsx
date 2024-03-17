import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artistUpdate } from '../store/artistSlice';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { loginCancel } from '../store/loginSlice';

const IDS = [
    '3wcj11K77LjEY1PkEazffa',
    '3Qh89pgJeZq6d8uM1bTot3',
    '6fOMl44jA4Sp5b9PpYCkzz',
    '0AepkoQhYvkjEzzwIcGxdV',
    '1CFCsEqKrCyvAFKOATQHiW',
    '7sP4SQ0WY6jfps1I19Ot7i',
    '43bV8yQzojEPet60WrZJau',
    '6UBA15slIuadJ8h2lPRPos',
    '5lFNvgjjW0gug2hAG5RPrQ',
    '6l3HvQ5sa6mXTsMTB19rO5',
    '16plk1BhihSieDutGFbLt8',
    '2YZyLoL8N0Wb9xBt1NhZWg'
]
const Artist= () => {
    const navigate = useNavigate();
    const ARTIST_API = `https://api.spotify.com/v1/artists?ids=${IDS}`;
    const globalLoginToken = useSelector((state)=>state.login.loginDetails?.access_token);
    const [artistDetails, setArtistDetails] = useState([]);
    const dispatch = useDispatch();

    const getArtist = async ()=>{
        try {
          const res = await axios.get(ARTIST_API, {
            headers: {
              'Authorization': `Bearer ${globalLoginToken}`
            }
          });
          dispatch(artistUpdate(res.data));
          setArtistDetails(res.data.artists);
        } catch (err) {
          dispatch(loginCancel());
          navigate('/login');
          return ;
        }
      }
    
      useEffect(()=>{
        getArtist();
      },[])


    return ( 
        <div className='hidden md:block lg:block'>
            <h1 className="text-2xl font-serif text-pink-900 text-center">Artists</h1>
          <div className="grid grid-cols-3 gap-3 md:gap-1">
          {
          artistDetails?.map((artist, ind)=> <Card key={ind} artistDetails={artist} url={`/artist?id=${artist.id}`} /> )
        }
         </div> 
        </div>
     );
}
 
export default Artist;