import { Sort } from "@material-ui/icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortBy } from "lodash";
import { getCountry } from "../../apis";

const initialState = {
    data: [],
    selectedCountryId: "vn",
    error: "",
    loading: false,
};

export const fetchCountry = createAsyncThunk(
    "country/fetchCountry",
    async () => {
        const response = await getCountry();
        return response.data;
    }
);

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setSelectedCountryId(state, action) {
            console.log(state.selectedCountryId);
            state.selectedCountryId = action.payload;
            return state;
        },
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchCountry.fulfilled]: (state, action) => {
            state.data = [...action.payload];
            // const country = sortBy(state, "Country");
            return state;
        },
        [fetchCountry.rejected]: (state, action) => {
            state.error = action.error.message;
            return state;
        },
    },
});

export const { setSelectedCountryId } = countrySlice.actions;
export default countrySlice.reducer;
