import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useAuth } from '../Context';
import React, { useState } from 'react';
const AccountForm: React.FC = () => {

    const [accountDetails, setNewAccountDetails] = useState({ name: "", email: "", age: 0, accountType: "ac1", acnumber: "", date: "", status: "" })
    const context = useAuth()
    const [accountTypes] = useState(["ac1",
        "ac2",
        "ac3",
        "ac4",
        "ac5",
        "ac6",
        "ac7",
        "ac8"])
    const handleSubmit = () => {
        if (context) {
            context.addNewAccount(accountDetails)
        }
    }

    return (<>
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Account Form
                </Typography>
                <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => {
                        const input = e.target.value;
                        const alphanumericInput = input.replace(/[^a-zA-Z0-9]/g, '');
                        setNewAccountDetails({ ...accountDetails, name: alphanumericInput }
                        )
                    }}
                />
                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setNewAccountDetails({ ...accountDetails, email: e.target.value })}
                />
                <TextField
                    fullWidth
                    id="age"
                    label="Age"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => {
                        const input = e.target.value;
                        const numericInput = input.replace(/\D/g, ''); // Filter non-numeric characters
                        setNewAccountDetails({ ...accountDetails, age: parseInt(numericInput) }
                        )
                    }}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="accountType">Account Type</InputLabel>
                    <Select
                        labelId="accountType"
                        id="accountType"
                        label="Account Type"
                        value={accountDetails.accountType}
                        onChange={(e) => setNewAccountDetails({ ...accountDetails, accountType: e.target.value })}
                    >
                        {accountTypes?.map((accountType: string, index: number) =>
                            <MenuItem key={index} value={accountType}>{accountType}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2, padding: "20px" }}
                    onClick={() => handleSubmit()}
                >
                    Done
                </Button>
            </Box>
        </Container>

    </>)
}

export default AccountForm