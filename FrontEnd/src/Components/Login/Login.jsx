import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <div className="login-container">
                    <form className="login-form">
                        <h2>Login</h2>
                        <div className="input-group">
                            <label for="username">Username / Email</label>
                            <input type="text" id="username" required></input>
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required></input>
                        </div>
                        <button type="submit">Login</button>
                        <p className="message">Don't have an account? <a href="#">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
