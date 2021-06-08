import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import HighLightCard from "./HighLightCard";

const HighLight = ({ report, loading }) => {
    const data = report && report.length ? report[report.length - 1] : [];

    const summary = [
        {
            title: "Số ca nhiễm",
            count: data.Confirmed,
            type: "confirmed",
        },
        {
            title: "Số ca khỏi",
            count: data.Recovered,
            type: "recovered",
        },
        {
            title: "Số ca tử vong",
            count: data.Deaths,
            type: "deaths",
        },
    ];
    return (
        <Grid container spacing={3}>
            {summary.map((item) => (
                <HighLightCard
                    key={item.type}
                    title={item.title}
                    count={item.count}
                    type={item.type}
                />
            ))}
        </Grid>
    );
};

HighLight.propTypes = {};

export default HighLight;
