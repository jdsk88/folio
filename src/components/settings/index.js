import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import axios from 'axios';


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
    }
}));

export const Brightness = () => {
    const API_URL = "localhost:8888"
    const classes = useStyles();
    const [brightness, setBrightness] = useState(32)
    
    
    useEffect(() => {
        console.log(brightness)
        axios.post(API_URL + '/settings', {
            brightness: brightness
        })
    },[brightness])
   

    return (
        <div className={classes.root}>
            <Typography>Screen Brigtness Controller</Typography>
            <Slider
                // defaultValue={}
                // getAriaValueText={valuetext}
                brightness={brightness}
                setBrightness={setBrightness}
                onChange={(event, v) => {
                    setBrightness(v);
                  }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={255}
            />
        </div>
    );
}
