import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apis } from "../apis"

interface FetchAccountByUserIdResponse {
    data: [],
    status: boolean;
    code?: any;
    message: string;
}

export const fetchAccountByUserId = createAsyncThunk<FetchAccountByUserIdResponse, number>("accounts", async (userId: number, thunkAPI) => {
    const response = await apis.get("account/" + userId)
    return { data: response.data, status: true, code: 200, message: 'Accounts fetched successfully' };
})
export const fetchTransactionsByAccountId = createAsyncThunk<FetchAccountByUserIdResponse, { userId: number, accountId: number }>("transactions", async ({ userId, accountId }, thunkAPI) => {
    const response = await apis.get(`transactions/${userId}/${accountId}`)
    return { data: response.data, status: true, code: 200, message: 'Transactions fetched successfully' };
})
export const fetchAccountTypes = createAsyncThunk<FetchAccountByUserIdResponse>("accountTypes", async (thunkAPI) => {
    const response = await apis.get("accountTypes/")
    return { data: response.data, status: true, code: 200, message: 'Account Types fetched successfully' };
})
export const createNewAccount = createAsyncThunk<FetchAccountByUserIdResponse, { name: string, email: string, age: string, accountType: string, userId: number }>("createNewAccount", async (newAccountDetails, thunkAPI) => {
    const response = await apis.post("account/" + newAccountDetails.userId, newAccountDetails)
    return { data: response.data, status: true, code: 200, message: 'Account created successfully' };
})
export const loginAccount = createAsyncThunk<FetchAccountByUserIdResponse, { email: string, password: string }>("login", async (loginDetails, thunkAPI) => {
    const response = await apis.post("login/", loginDetails,)
    localStorage.setItem("userId", response.data.id)
    return { data: response.data, status: true, code: 200, message: 'Login successfully' };
})
export const logOut = createAction('logOut')
interface AccountStates {
    user: null | {},
    isAuthenticated: boolean,
    accountTypes: [],
    newAccountDetails: {},
    accounts: [],
    transactions: []
}

const initialState: AccountStates = {
    user: null,
    isAuthenticated: false,
    accountTypes: [],
    newAccountDetails: {},
    accounts: [],
    transactions: []
}


const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAccountByUserId.fulfilled, (state, action) => {
            console.log(action.payload)
            let { data } = action.payload
            state.accounts = data
        }).
            addCase(fetchTransactionsByAccountId.fulfilled, (state, action) => {
                let { data } = action.payload
                state.transactions = data
            }).
            addCase(fetchAccountTypes.fulfilled, (state, action) => {
                let { data } = action.payload
                state.accountTypes = data
            }).
            addCase(loginAccount.fulfilled, (state, action) => {
                let { data } = action.payload
                state.user = data
                state.isAuthenticated = true

            }).addCase(logOut, (state, action) => {
                localStorage.clear()
                state.user = null
                state.isAuthenticated = false

            })
    }
})
export default accountSlice.reducer