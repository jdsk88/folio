import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '38%',
        height: '38%',
        position: 'fixed',
        top: '31%',
        left: '31%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        marginBottom: '20px',
    }
}));

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.loader} />
            <Typography>Products loading</Typography>
            <Typography>please wait</Typography>
        </div>
    );
}

export default Loader;
