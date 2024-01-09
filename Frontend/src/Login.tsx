import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
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

    return (

        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login Form
                </Typography>

                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder='Enter UserName'
                />
                <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    placeholder='Enter Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2, padding: "20px" }}
                    onClick={() => handleLogin()}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
