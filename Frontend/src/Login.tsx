import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material'
import { apis } from './apis'
import { useNavigate } from 'react-router-dom'




const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        let result = await apis.post("login", { email, password })
        if (result?.status && !localStorage.getItem("userId")) {
            localStorage.setItem("userId", result.data.id)
            localStorage.setItem("email", result.data.email)
        }
        if (result.status) {
            navigate("/accountView")

        } else {
            alert("User Not found.")
        }
    }



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
    )
}

export default Login
