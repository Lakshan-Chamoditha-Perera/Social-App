import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {TextField} from "@mui/material";
import {login} from '../../redux/usersSlice';
import "./style.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}))
            .unwrap()
            .then(() => {
                navigate('/wall');
            })
            .catch((err) => {
                console.error('Failed to login:', err);
            });
    };

    return (<div className="auth_container">
        <div className="content">
            <div className="text-center">
                <h1 className="title">Sign in to your account</h1>
                <p className="subtitle">Enter your username and password below</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
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
        </div>
    </div>);
};

export default Login;