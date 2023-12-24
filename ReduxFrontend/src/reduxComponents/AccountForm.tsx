import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import { createNewAccount, fetchAccountTypes } from '../Redux/reducer';
import Header from './Header';
const AccountForm: React.FC = () => {
    const [newAccountDetails, setNewAccountDetails] = useState({ userId: 0, name: "", email: "", age: "", accountType: "" })
    const { accountTypes } = useSelector((state: RootState) => state.accountReducer)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchAccountTypes())
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let userId: string | null = localStorage.getItem("userId")
        if (userId) {
            newAccountDetails.userId = parseInt(userId)
            dispatch(createNewAccount(newAccountDetails))
        }
    }

    return (<>
        <Header />
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Account Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setNewAccountDetails({ ...newAccountDetails, name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setNewAccountDetails({ ...newAccountDetails, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        id="age"
                        label="Age"
                        variant="outlined"
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="accountType">Account Type</InputLabel>
                        <Select
                            labelId="accountType"
                            id="accountType"
                            label="Account Type"
                            value={newAccountDetails.accountType}
                            onChange={(e) => setNewAccountDetails({ ...newAccountDetails, accountType: e.target.value })}
                        >
                            {accountTypes.map((accountType: string, index: number) =>
                                <MenuItem value={accountType}>{accountType}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2, padding: "20px" }}
                    >
                        Done
                    </Button>
                </form>
            </Box>
        </Container>

    </>)
}

export default AccountForm