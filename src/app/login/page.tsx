"use client"
import React from 'react'
import "./login.css"
import { useState } from 'react'

const Login = () => {

    const [users , setusers] = useState(
        { email: "", password:"" }
    );

    let name, value;

    const handleClick = (e) => {
        e.preventDefault()
        name = e.target.name;
        value = e.target.value;
        
        setusers({...users, [name]:value});
        console.log(users)
    }


    return (
        <>
            <form action="" onSubmit={handleClick}>
            <h2>Sing in</h2>
                <div className="singin">
                    <div className="email">
                        <h3>Email or mobile phone number</h3>
                        <input type="text" name='email' value={users.email} onChange={handleClick}/>
                    </div>
                    <div className="pass">
                        <h3>Password </h3>
                        <input type="password" name='password' value={users.password} onChange={handleClick} />
                    </div>
                    <div className="login">
                        <button type='submit'>Login</button>
                    </div>
                    <span>Invail Text</span>
                </div>
            </form>
        </>
    )
}

export default Login;
