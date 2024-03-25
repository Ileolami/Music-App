import React from 'react';
import { useDispatch } from 'react-redux';
import { songUpdate } from '../store/selectedSlice';
import { FaPlay as PlayArrow } from 'react-icons/fa';

const SongList = ({ artistAlbum, index, hide = false }) => {
  const dispatch = useDispatch();

  const handlePlay = (album) => {
    // Dispatch action to update selected song
    dispatch(songUpdate(album));
  }

  const secondDuration = (miliSecond)=>{
    const minute = Math.floor(miliSecond/60000);
    const seconds = ((miliSecond%60000) / 1000).toFixed(0);
    return `${minute}:${seconds}`;
  }

  return (
    <React.Fragment>
      <div className=" song_track" onClick={() => handlePlay(artistAlbum)}>
        <div className="track_name">
          {index + 1}
          <div className="song_image">
            <img alt="song preview" src={artistAlbum.album.images[0].url} />
          </div>
          <p>{artistAlbum?.name} </p>
        </div>
        <div className="details">
          <div className="progress">
          </div>
          <div className="duration">
            {hide && (secondDuration(artistAlbum?.duration_ms) + " min")}
          </div>
          <div className="duration">
            {hide && <PlayArrow className="play_duration" />}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SongList;
