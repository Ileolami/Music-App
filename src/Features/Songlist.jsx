import React from 'react'

const SongList = ({artistAlbum, index, hide=false}) => {
    return ( 
        <React.Fragment>
            <div className="song_track">
                <div className="track_name">
                    {index + 1}
                    <div className="song_image">
                        <img src={artistAlbum?.album?.images[0].url} alt="song preview" />
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SongList;