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

moment.locale("vi");

function App() {
    const [country, setCountry] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountry().then((res) => {
            const countries = sortBy(res.data, "Country");
            setCountry(countries);
            setSelectedCountryId("vn");
        });
    }, []);

    const handleOnChange = useCallback((e) => {
        console.log(e.target.value);
        setSelectedCountryId(e.target.value);
    });

    useEffect(() => {
        if (selectedCountryId) {
            const { Slug } = country.find(
                (count) => count.ISO2 === selectedCountryId.toUpperCase()
            );

            getReportCountry(Slug).then((res) => {
                res.data.pop();
                setReport(res.data);
            });
        }
    }, [country, selectedCountryId]);
    return (
        <Container className="App">
            <Typography variant="h2" component="h2">
                Số liệu COVID-19
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
            <CountrySelector
                country={country}
                handleOnChange={handleOnChange}
                value={selectedCountryId}
            />
            <HighLight report={report} />
            <Summary report={report} selectedCountryId={selectedCountryId} />
        </Container>
    );
}

export default App;
