import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../Redux/store';
import { loginAccount } from '../Redux/reducer';
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state: RootState) => state.accountReducer)
    const dispatch = useDispatch<AppDispatch>()
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginAccount({ email, password }))
    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/accountView")
        }
    }, [isAuthenticated])
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} >
                <div style={{ margin: "40px", fontSize: "25px" }}>
                    <input
                        style={{ padding: "15px" }}
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter UserName'
                    />
                </div>
                <div style={{ margin: "40px" }}>
                    <input
                        style={{ padding: "15px" }}
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
