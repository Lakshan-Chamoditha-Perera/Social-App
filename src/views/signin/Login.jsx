import React from "react";
import "../style.css";
import {TextField} from "@mui/material";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (<div className="auth_container">
        <div className="content">
            <div className="text-center">
                <h1 className="title">Sign in to your account</h1>
                <p className="subtitle">Enter your username and password below</p>
            </div>

            <form className="auth-form">
                <div className="form-group">
                    <TextField size="small" className="input" required type="text" onChange={handleEmailChange}
                               id="email" label="Enter your email" variant="outlined" value={email}
                    />
                </div>
                <div className="form-group">
                    <p className="forgot-password">Forgot your password?</p>

                    <TextField size="small" className="input" type="password" required onChange={handlePasswordChange}
                               id="password" label="Enter your password" variant="outlined" value={password}
                    />
                </div>

                <button className="button" type="submit">Sign in</button>
            </form>

            <p className="text-center">
                Don't have an account? <a href="/register">Sign up</a>
            </p>
        </div>
    </div>);
};

export default Login;
