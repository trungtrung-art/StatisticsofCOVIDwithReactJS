import { configureStore } from "@reduxjs/toolkit";

import countrySlice from "./slice/countrySlice";
import reportSlice from "./slice/reportSlice";

const reducer = {
    country: countrySlice,
    report: reportSlice,
};

const store = configureStore({ reducer });

export default store;
