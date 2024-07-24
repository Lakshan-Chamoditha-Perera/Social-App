import React from 'react'
import {TextField} from "@mui/material";

const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRePasswordChange = (e) => {
        setRePassword(e.target.value);
    };

    return (<div className="auth_container">
        <div className="content">
            <div className="text-center">
                <h1 className="title">Create an account</h1>
                <p className="subtitle">Enter your email and password below</p>
            </div>

            <form className="auth-form">
                <div className="form-group">
                    <TextField size='small' className="input" required type="text" id="username"
                               label="Username or email" variant="outlined" value={email}
                               onChange={handleEmailChange}/>
                </div>
                <div className="form-group">
                    <TextField size='small' className="input" type="password" required id="password" label="Password"
                               variant="outlined" value={password}
                               onChange={handlePasswordChange}/>
                </div>
                <div className="form-group">
                    <TextField size='small' className="input" required type="text"
                               label="Re-password" variant="outlined" value={rePassword}
                               onChange={handleRePasswordChange}/>
                </div>
                <button className="button" type="submit">Register</button>
            </form>
            <p className="text-center">Already have an account? <a href="/login">Sign in</a></p>
        </div>
    </div>)
}

export default Signup;