import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LineChart from "../Chart/LineChart";
import HighMaps from "../Chart/HighMaps";

const Summary = ({ report, selectedCountryId }) => {
    const [mapData, setMapData] = useState({});
    useEffect(() => {
        // 'vi' 'us'
        if (selectedCountryId) {
            import(
                `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
            ).then((res) => setMapData(res));
        }
    }, [selectedCountryId]);

    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HighMaps mapData={mapData} />
            </Grid>
        </Grid>
    );
};

Summary.propTypes = {};

export default Summary;
