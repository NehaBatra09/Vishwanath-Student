import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apis } from "../apis"

interface FetchUserByIdResponse {
    status: boolean;
    code?: any;
    message: string;
}

export const fetchUserById = createAsyncThunk<FetchUserByIdResponse, number>("accounts", async (userId: number, thunkAPI) => {
    const response = await apis.get("accounts/" + userId)
    return { status: true, code: 200, message: 'User fetched successfully' };
})
interface Counter {
    count: 0,
    accounts: [],
    transactions: any
}

const initialState: Counter = {
    count: 0,
    accounts: [],
    transactions: []
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log(state)
            state.count++
        },
        decrement: (state, action) => {
            state.count--
        }
    }
})
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer