import { Container, Typography } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { getCountry, getReportCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import "moment/locale/vi";
import "@fontsource/roboto";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry, setSelectedCountryId } from "./redux/slice/countrySlice";
import { fetchReport } from "./redux/slice/reportSlice";
import Loading from "./components/Loading";

import "../src/App.css";

moment.locale("vi");

function App() {
    const dispatch = useDispatch();

    const country = useSelector((state) => state.country.data);
    const selectedCountryId = useSelector(
        (state) => state.country.selectedCountryId
    );

    const report = useSelector((state) => state.report.data);
    const loading = useSelector((state) => state.report.loading);

    useEffect(() => {
        dispatch(fetchCountry());
    }, []);

    const handleOnChange = useCallback((e) => {
        dispatch(setSelectedCountryId(e.target.value));
    });

    useEffect(() => {
        if (selectedCountryId && country && country.length) {
            const { Slug } = country.find(
                (count) => count.ISO2 === selectedCountryId.toUpperCase()
            );

            dispatch(fetchReport(Slug));
        }
    }, [country, selectedCountryId]);

    return (
        <Container className="App">
            {loading && <Loading />}

            <Typography variant="h2" component="h2">
                Số liệu COVID-19
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
            <CountrySelector
                country={country}
                handleOnChange={handleOnChange}
                value={selectedCountryId}
            />
            <HighLight report={report} loading={loading} />
            <Summary report={report} selectedCountryId={selectedCountryId} />
        </Container>
    );
}

export default App;
