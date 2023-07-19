import React from 'react'
import './SearchResults.css'
import Tracks from '../Tracks/Tracks'

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <div className="Tracks">
            {
                props.Tracks.map(Track => {
                    return(<Track
                        key={Track.id}
                        track={Track}
                        trackActionCharacter="+"
                        handleTrackAction={props.addTrackToPlaylist}/>)
                })
            }
            </div>
        </div>
    )
}

export default SearchResults;