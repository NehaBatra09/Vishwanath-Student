import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useAuth } from '../Context';
import { useEffect } from 'react';
const AccountForm: React.FC = () => {
    let { accountTypes, getAccountTypes } = useAuth()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await getAccountTypes()
    }

    return (<>
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Account Form
                </Typography>
                <form>
                    <TextField
                        fullWidth
                        id="name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        type="password"
                        variant="outlined"
                        margin="normal"
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
                        >
                            {accountTypes.map((accountType: string) =>
                                <MenuItem value={10}>{accountType}</MenuItem>
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