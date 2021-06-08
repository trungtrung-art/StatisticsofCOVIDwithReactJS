import React, { useState } from "react";
import {
    Card,
    CardContent,
    Grid,
    Typography,
    makeStyles,
} from "@material-ui/core";
import EmptyData from "../EmptyData";

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed") return { background: "#f44336" };
        if (props.type === "recovered") return { background: "#2196f3" };
        else return { background: "#575e65" };
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        color: "#fff",
    },
    count: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
    },
});

const HighLightCard = ({ title, count, type }) => {
    console.log(count);

    const styles = useStyles({ type });
    return (
        <Grid item sm={4} xs={12}>
            <Card className={styles.wrapper}>
                <CardContent>
                    <Typography
                        component="p"
                        variant="body2"
                        className={styles.title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        className={styles.count}
                    >
                        {count == undefined ? (
                            <EmptyData />
                        ) : (
                            <div>{count}</div>
                        )}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default HighLightCard;
