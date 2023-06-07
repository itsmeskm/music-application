import React from 'react'
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deleteSong } from '../redux/musicEvent';

const Songs = () => {

    const dispatch = useDispatch()

    const location = useLocation();
    const data = location.state?.data; 
    const playlistId = data?.prop; 
    const playlist = useSelector(state => state?.music?.playlist);
    let songs = [];
    for(let i = 0;i<playlist.length;i++){
        if(playlist[i].id === playlistId){
            songs = playlist[i].song;
        }
    }

    console.log("songs",songs);

    // const handleDelete = (props) => {
    //     const songDetails = {
    //       song : props,
    //       id : playlistId,
    //     }
    //     dispatch(deleteSong(songDetails));
    //   }

  return (
    <div className='container mt-3'>
    <h2 className="bg-secondary d-flex justify-content-center alignItems-center text-white p-2">Welcome to your Songs collections</h2>
    <table className="table">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">URL</th>
                <th scope="col">Play</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (  
                <tr data-index={index} key={index}>  
                    <th scope="row">{index+1}</th>
                    <td>
                        <Link to={`${song}`} target="_blank">
                            <h2>{song}</h2>
                        </Link>
                    </td>  
                    <td>
                        <Link to={`${song}`} target="_blank">
                            <FontAwesomeIcon icon={faRandom} size="2x"/>          
                        </Link>
                    </td>
                    {/* <td>
                        <Link to="/Songs" onClick={() => handleDelete(song)}>
                            <i className="fa fa-trash">Del</i>
                        </Link>
                    </td> */}
                </tr>  
                ))}  
            </tbody>
        </table>
      {/* <div className='row'>
      {songs && songs.map((song) => {
        return(
            <>
                <div className="col-md-8">
                    <Link to={`${song}`} target="_blank">
                        <h2>{song}</h2>
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to={`${song}`} target="_blank">
                    <FontAwesomeIcon icon={faRandom} size="2x"/>          
                    </Link>  
                </div>
            </>
        )
      })}
      </div> */}
    </div>
  )
}

export default Songs
