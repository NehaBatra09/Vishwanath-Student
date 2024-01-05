import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { useAuth } from '../Context';
import React, { useState } from 'react';
import { extractAlphanumeric, alphaWithSpecialChars, isNumber, isValidEmail } from './validate';
import { useNavigate } from 'react-router-dom';
const AccountForm: React.FC = () => {
    const navigate = useNavigate()
    const [accountDetails, setNewAccountDetails] = useState({ id: "", name: "", email: "", age: "", accountType: "ac1", date: "", address: "", branch: "", status: "" })
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
        navigate("/accountView")
    }

    return (<>
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Account Form
                </Typography>
                <TextField

                    label="Id"
                    fullWidth
                    id="id"
                    variant="outlined"
                    margin="normal"
                    onChange={(e: any) => {

                        setNewAccountDetails({ ...accountDetails, id: e.target.value }
                        )
                    }}
                    required
                    error={!alphaWithSpecialChars(accountDetails.id) && accountDetails.id != ""}
                    helperText={(!alphaWithSpecialChars(accountDetails.id) && accountDetails.id != "") ? "Id length shoule be greater than 8" : ""}
                />
                <TextField

                    label="Name"
                    fullWidth
                    id="name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e: any) => {

                        setNewAccountDetails({ ...accountDetails, name: e.target.value }
                        )
                    }}
                    required
                    error={!extractAlphanumeric(accountDetails.name) && accountDetails.name != ""}
                    helperText={(!extractAlphanumeric(accountDetails.name) && accountDetails.name != "") ? "Name Should be alphanumeric" : ""}
                />
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    error={!isValidEmail(accountDetails.email) && accountDetails.email != ""}
                    helperText={(!isValidEmail(accountDetails.email) && accountDetails.email != "") && "Email Should valid."}
                    onChange={(e: any) => setNewAccountDetails({ ...accountDetails, email: e.target.value })}
                />
                <TextField
                    fullWidth
                    required
                    id="age"
                    label="Age"
                    variant="outlined"
                    margin="normal"
                    error={!isNumber(accountDetails.age) && accountDetails.age != ""}
                    helperText={(!isNumber(accountDetails.age) && accountDetails.age != "") && "Age should be in numbers"}
                    onChange={(e: any) => {

                        setNewAccountDetails({ ...accountDetails, age: e.target.value }
                        )
                    }}
                />
                <TextField

                    label="Address"
                    fullWidth
                    id="address"
                    variant="outlined"
                    margin="normal"
                    onChange={(e: any) => {

                        setNewAccountDetails({ ...accountDetails, address: e.target.value }
                        )
                    }}
                    required
                />
                <TextField

                    label="branch"
                    fullWidth
                    id="branch"
                    variant="outlined"
                    margin="normal"
                    onChange={(e: any) => {

                        setNewAccountDetails({ ...accountDetails, branch: e.target.value }
                        )
                    }}
                    required
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="accountType">Account Type</InputLabel>
                    <Select
                        labelId="accountType"
                        id="accountType"
                        label="Account Type"
                        value={accountDetails.accountType}
                        onChange={(e: any) => setNewAccountDetails({ ...accountDetails, accountType: e.target.value })}
                    >
                        {accountTypes?.map((accountType: string, index: number) =>
                            <MenuItem key={index} value={accountType}>{accountType}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" onChange={(e: any) => setNewAccountDetails({ ...accountDetails, date: e })} />
                    </DemoContainer>
                </LocalizationProvider>
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