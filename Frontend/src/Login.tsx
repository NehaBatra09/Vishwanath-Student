import React, { useEffect, useState } from 'react';
import { useAuth } from './Context';
const Login: React.FC = () => {
    const context = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (context) {
            context.login(email, password)
        }
    };
    useEffect(() => {
        if (context && context?.isAuthenticated) {
            window.location.href = "/accountView"
        }
    }, [context])
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                <button type="submit" onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    );
};

export default Login;
