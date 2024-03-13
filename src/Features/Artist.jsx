import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artistUpdate } from '../store/artistSlice';

const IDS = [
    '3wcj11K77LjEY1PkEazffa?si=TI0talSnS4avaQA81_UeHA',
    '3Qh89pgJeZq6d8uM1bTot3?si=3w0iaUFeSNyEFFyt4s3agw',
    '6fOMl44jA4Sp5b9PpYCkzz?si=Z4RtzF7VSy-IO8nJkuh-CA',
    '0AepkoQhYvkjEzzwIcGxdV?si=dyr3t1uHTcatFJMi7gi9oA',
    '1CFCsEqKrCyvAFKOATQHiW?si=qa7U78UKQVmgMjayr_Bx2A',
    '7sP4SQ0WY6jfps1I19Ot7i?si=NNiy-TIIRt-s9EipSWHP8Q',
    '43bV8yQzojEPet60WrZJau?si=tNpchxGhRi-LoCUiYLHI4g',
    '6UBA15slIuadJ8h2lPRPos?si=MxfGjKp3RNuuHd3MO2HeVA',
    '5lFNvgjjW0gug2hAG5RPrQ?si=RHq1POLYSPSMlW0sSgu0GA',
    '1lnFZEM6ysvjOx59VyxRE?si=RuxbkI6JT_Oup5ufx4oNfA',
    '16plk1BhihSieDutGFbLt8?si=nwh2gCcPQJGZsS3yYz_Q1Q',
    'fJd7w897ouOZzDc6e3oyU?si=mT7qPJW8SbijCcOYwlE69w'
]
const Artist= () => {
    const ARTIST_URL = `'https://api.spotify.com/v1/artists?ids=${IDS}'`
    const globalLoginToken = useSelector(state => state.login.loginDetails.access_token);
    const dispatch = useDispatch();

    const getArtist = async () => {
        let res = await axios.get(ARTIST_URL, {
            headers: {
                'Authorization' : `Bearer ${globalLoginToken}`
            }
        })
        console.log(res)
        dispatch(artistUpdate(res))
    }

    useEffect(() => {
        getArtist();
        
    }, [])


    return ( 
        <div >
            <h1 className="text-2xl font-serif text-pink-900">Artists</h1>
          <div className="grid grid-cols-3">

         </div> 
        </div>
     );
}
 
export default Artist;