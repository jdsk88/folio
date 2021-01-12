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

const Loader = (props) => {
    const classes = useStyles();
    const title = props.title;
    const subtitle = props.subtitle;

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.loader} />
            <Typography title={title}>{title}</Typography>
            <Typography subtitle={subtitle}>{subtitle}</Typography>
        </div>
    );
}

export default Loader;
