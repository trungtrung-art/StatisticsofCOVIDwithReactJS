import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
        position: "absolute",
        zIndex: "1",
        height: "100vh",
        width: "100%",
        background: "rgb(255 255 255 / 80%)",
        alignItems: "center",
        justifyContent: "center",
    },
}));

function Loading(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}

export default Loading;
