import { useState, useRef, useEffect, useCallback } from "react";
// import TweTwe from "../assets/Kizz-Daniel-–-Twe-Twe-Remix-Ft.-Davido.webp";
// import SongOne from "../assets/Kizz_Daniel_Ft_Davido_-_Twe_Twe_Remix_.mp3";
// import Life from "../assets/Adekunle-Gold-–-The-Life-I-Chose pic.webp";
// import SongTwo from "../assets/Adekunle_Gold_-_The_Life_I_Chose.mp3";
import Button from "../components/Button";
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MusicPlayer = () => {

    const navigate = useNavigate();
    const loginDetails = useSelector(state => state.login.loginDetails); 

    useEffect(() => {
        if (!loginDetails.access_token) { 
            navigate('/login');
        }
    }, [loginDetails, navigate]);

    const globalState = useSelector((state) => state?.song?.selectedSong)
    const dispatch = useDispatch();

    //to be implemented
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSong, setCurrentSong] = useState(0);
    const audioRef = useRef(null);

   
    // function to play the next song and play the song itself without clicking on the play button
    const forward = useCallback(() => {
        setCurrentSong((currentSong) => (currentSong + 1) % globalState?.song);
        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, 0);
    }, [globalState?.song]);
    
    //function to get the duration of the song 
    useEffect(() => {
        const audio = audioRef.current;
        const setAudioData = () => {
            setDuration(audio.duration || 0);
        };

        //function to play the next song when the current song ends
        const handleEnded = () => {
            forward();
        };

        //function to remove the event listener when the component is unmounted
        audio.addEventListener("loadedmetadata", setAudioData);
        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("loadedmetadata", setAudioData);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [forward]);

    //function to format the duration of the song
    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    //function to play or pause the song
    const handlePlayPause = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    }

    //function to play the previous song 
    const backward = useCallback(() => {
        setCurrentSong((currentSong) => (currentSong - 1 + globalState?.length?.tracks) % globalState?.song);
        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, 0);
    }, [globalState?.song, setCurrentSong, globalState?.length?.tracks]);

    //function to get the current time of the song
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    //function to seek the song to a particular time
    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };

    return (
        <div className="flex justify-center items-center ">
            <div>
                <div className="">
                    <img src={globalState?.album?.images[0]?.url}  className={`md:h-40 md:w-40 lg:h-80 lg:w-80 rounded-full ${isPlaying ? 'animate-spin-slow' : ''}`} />
                </div>
                <div className="text-center my-3">
                    <p className={`text-xl font-bold text-pink-900 ${isPlaying ? 'animate-bounce' : ''}` }>{globalState?.name}</p>
                </div>
                <div>
                    <input type="range" className="w-full" value={currentTime} onChange={handleSeek} max={audioRef.current ? audioRef.current.duration : 0} />
                    <div className="flex justify-between">
                    <p className="text-sm flex justify-start text-gray-400">{formatDuration(currentTime)}</p>
                    <p className="text-sm flex justify-end text-gray-400">{formatDuration(duration - currentTime)}</p>
                    </div>
                </div>
                <audio ref={audioRef} src={globalState?.preview_url} onTimeUpdate={handleTimeUpdate}></audio>
                <div className="flex justify-center gap-10 -my-2">
                    <Button
                        icon={<FaBackward />}
                        onClick={backward}
                    />
                    <Button
                        onClick={handlePlayPause}
                        icon={isPlaying ? <FaPause /> : <FaPlay />}
                    />
                    <Button
                        icon={<FaForward />}
                        onClick={forward}
                    />
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;



