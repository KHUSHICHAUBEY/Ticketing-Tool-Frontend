import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleLogin = (userData) => {
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          Accept:"application.json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      })
      .then((res)=>res.json())
      .then((res2)=>{
        alert(res2.message);
        if(res2?.succsess){
          localStorage.setItem('token',res2?.accessToken);
          navigate("/ticket");
        }
      });
      onLogin(userData);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    // if (username.trim() === '' || password.trim() === '') {
    //     alert('Please enter username and password.');
    //     return;
    handleLogin({username, password});
    }
       

        // onLogin({ username, password });
        // setUsername('');
        // setPassword('');
    //};

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>

            </form>
        </div>
    );
};

export default Login;