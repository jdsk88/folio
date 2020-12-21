import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        height: '25vh',
        border: "black 1px solid",
    }
}))

export const DrugsList = ({ drugs }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {drugs.map((drug, index) => (
                <div key={index}>
                    <p>{drug.nazwa}</p>
                    <p>{drug.podmOdpow}</p>
                    <p>{drug.kodAtc}</p>
                    <p>{drug.zawOpak}</p>
                </div>
            ))}
        </div>
    )
}