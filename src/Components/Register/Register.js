import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = ({ onRegister }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

  const onRegisteruser=(userData)=>{                       
       fetch("http://localhost:3000/register",{
      method:"POST",
      body:JSON.stringify(userData),
      headers:{
        Accept:"application.json",
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((res2)=>{
      alert(res2.message);
      if(res2?.success){
        navigate("/login");
      }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisteruser({  firstName, lastName, email, password });
  };

//     const handleRegister = (e) => {
//         e.preventDefault();
//         // Validate form inputs before registration
//         if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
//             alert('Please fill in all fields.');
//             return;
//         }

        // Perform registration action
        // const newUser = {
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        // };
        // onRegister(newUser);
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');

    return (
        <div className='login-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>
                    Email Address:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;