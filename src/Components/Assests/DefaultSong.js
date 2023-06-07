import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const DefaultSong = () => {

  const data = [
    {
        "name": "Believer",
        "artist": "Imagine Dragons",
        "url": "https://www.last.fm/music/Imagine+Dragons/_/Believer",
    },
    {
        "name": "Faded",
        "artist": "Alan Walker",
        "url": "https://www.last.fm/music/Alan+Walker/_/Faded",
    }
]

  return (
    <div>
    <div className="row">
        {data.map((music) => {
                return (
                    <>
                        <div className="col-md-6">
                        <h2>{music.name}</h2>  
                        </div>
                        <div className="col-md-6">
                            <Link to={`${music.url}`}>
                            <FontAwesomeIcon icon={faRandom} size="2x"/>          
                            </Link>  
                        </div>
                    </>
                )
        })}
    </div>
    </div>
  )
}

export default DefaultSong
