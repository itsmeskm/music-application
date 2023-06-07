import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [name,setName] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
      e.preventDefault();
      setName(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        prop1: name,
      };
      navigate('/dashboard', { state: { data } });
    }

  return (
    <div className='container d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit}>
            <h2>Please login to the Music Application</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">name</label>
                <input type="name" className="form-control" id="name" onChange={handleChange} value={name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login
