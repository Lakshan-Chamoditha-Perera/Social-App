import React from "react";
import {useDispatch} from 'react-redux';
import {Button, TextField} from "@mui/material";
import {login} from '../../redux/usersSlice';
import "../../App.css";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                toast.error(err);
            });
    };

    return (<div className="flex min-h-screen w-full flex-col items-center justify-center bg-whitesmoke p-2.5">
        <div className="content">
            <div className="text-center">
                <h1 className="text-[1.875rem] font-bold">Sign in to your account</h1>
                <p className="mt-2 text-[0.875rem]">Enter your username and password below</p>
            </div>

            <form className="my-[15px]" onSubmit={handleSubmit}>
                <div className="d-flex my-[20px] flex-col justify-center">
                    <TextField size="small" className="input" required type="text" onChange={handleEmailChange}
                               id="email" label="Enter your email" variant="outlined" value={email}
                    />
                </div>
                <div className="form-group">
                    <TextField size="small" className="input" type="password" required
                               onChange={handlePasswordChange}
                               id="password" label="Enter your password" variant="outlined" value={password}
                    />
                </div>
                <div className={'mt-6'}>
                    <Button variant='contained' className="w-full" type="submit">Sign in</Button>
                </div>
            </form>
        </div>
    </div>);
};

export default Login;