import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReportCountry } from "../../apis";

const initialState = {
    data: [],
    error: "",
    loading: true,
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
        [fetchReport.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchReport.fulfilled]: (state, action) => {
            action.payload.pop();
            state.data = [...action.payload];
            state.loading = false;
            return state;
        },
        [fetchReport.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            return state;
        },
    },
});

export default reportSlice.reducer;
