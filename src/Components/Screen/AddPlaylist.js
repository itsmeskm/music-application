import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addPlaylist } from '../redux/musicEvent';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AddPlaylist = () => {

  const [playListName,setPlayListName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const data = location?.state?.data;
  const id = data?.prop;

  const handleChange = (e) => {
    e.preventDefault();
    setPlayListName(e.target.value);
  }

  const handleSubmit = () => {
    const playlistData = {
        id,
        name: playListName,
        song:[],
    };
    dispatch(addPlaylist(playlistData));
    navigate('/dashboard');
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h2>Add Playlist</h2>
                <input type="text" className="form-control my-3" id="playlist" placeholder="Add your playlist Name" onChange={handleChange}  value={playListName} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default AddPlaylist
