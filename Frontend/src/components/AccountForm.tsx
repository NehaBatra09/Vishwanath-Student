import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useAuth } from '../Context';
import { useEffect } from 'react';
const AccountForm: React.FC = () => {
    let { accountTypes, newTransationDetails, setNewTransactionDetails, getAccountTypes, addNewAccount } = useAuth()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await getAccountTypes()
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await addNewAccount()
    }

    return (<>
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
                        onChange={(e) => setNewTransactionDetails({ ...newTransationDetails, name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setNewTransactionDetails({ ...newTransationDetails, email: e.target.value })}
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
                            value={newTransationDetails.accountType}
                            onChange={(e) => setNewTransactionDetails({ ...newTransationDetails, accountType: e.target.value })}
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