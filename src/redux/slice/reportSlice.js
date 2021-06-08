import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReportCountry } from "../../apis";

const initialState = {
    data: [],
    error: "",
};

export const fetchReport = createAsyncThunk(
    "report/fetchReport",
    async (payload) => {
        const response = await getReportCountry(payload);
        return response.data;
    }
);

const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {},
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchReport.fulfilled]: (state, action) => {
            action.payload.pop();
            state.data = [...action.payload];

            return state;
        },
        [fetchReport.rejected]: (state, action) => {
            state.error = action.error.message;
            return state;
        },
    },
});

export default reportSlice.reducer;
