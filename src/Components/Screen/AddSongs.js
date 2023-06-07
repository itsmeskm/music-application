import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addSong} from '../redux/musicEvent'
import { useNavigate } from 'react-router-dom';

const AddSongs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  console.log(data,"rksadlt");
  const id = data?.prop;
  console.log(data?.prop,"---id---");
  const dispatch = useDispatch();

  const [track,setTrack] = useState("");

  const handleChange = (e) => {
    setTrack(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("--345----");
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=c4974f7d2194567f197ed030374e088a&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    const val = data?.results?.trackmatches?.track[0];
    const result = {...val,id};
    console.log(val,"result");
    dispatch(addSong(result));
    navigate('/dashboard');
  }
  
  return (
    <div className='container'>
        <div className='d-flex align-items-center justify-content-center row'>
        <form onSubmit={handleSubmit}>
            <h3>Input your song name</h3>
            <div className="mb-3 col-md-8">
                <input type="name" className="form-control" id="name" onChange={handleChange} value={track}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default AddSongs;
