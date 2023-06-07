import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { images } from '../Assests/image';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { deletePlaylist } from '../redux/musicEvent';

const Dashboard = () => {

  const dispatch = useDispatch()

  const playlists = useSelector(state => state.music.playlist);

  const location = useLocation();
  const data = location?.state?.data;
  const user = data?.prop1;

  const navigate = useNavigate();

  const handleClick = () => {
    const data = {
        prop: Date.now(),
      };
      navigate('/addPlaylist', { state: { data } });
  }

  const handleAddSongs = (id) => {
    console.log(id,"---check props");
    const data = {
        prop : id,
    };
    navigate('/addSongs',{ state: { data } })
  };

  const handlePlayListClick = (id) => {
    console.log(id,"---check playlist id---");
    const data = {
      prop: id,
    };
    navigate('/Songs', { state: { data } });
  };

  const handleDeletePlaylist = (id) => {
    console.log(id,"id");
    dispatch(deletePlaylist(id));
  };

  return (
    <div className='container'>
      <h2 className='my-4 font-weight-bold'>Welcome {user} to the world of Amazing playist</h2>
      <img className='mx-4 my-4' src={images.tripBanner} style={{width:"600px" ,height:"300px" }} alt="Logo" />
      <div className='row'>
        <button className='btn btn-primary m-3 col-md-8' onClick={handleClick}>Add Playist</button>
      </div>
      <div className='row'>
        {playlists.map((playlist) => {
            return (
                <>
                  <button type="button"
                    className="btn btn-block btn-outline-success btn-lg mt-4 col-md-4 border border-primary rounded" onClick={() => handlePlayListClick(playlist.id)}>{playlist.name}</button> 
                  <button type="button" onClick={() => handleAddSongs(playlist.id)}
                    className="btn btn-block btn-outline-secondary btn-lg mt-4 col-md-2 mx-2 border border-primary rounded">Add Songs</button> 
                  <button type="button" onClick={() => handleDeletePlaylist(playlist.id)}
                    className="btn btn-block btn-outline-danger btn-lg mt-4 col-md-2 mx-2 border border-primary rounded">Delete Playlist</button>     
                </>
            )
        })}
      </div>
    </div>
  )
}

export default Dashboard

