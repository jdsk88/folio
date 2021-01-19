import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {API_URL} from '../../config/constants'
import {NetworkCard} from './card'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export const Networks = () => {
    const classes = useStyles();

    const [Networks, setNetworks] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}network/wifi_scanner`)
            .then((resp) => resp.json())
            .then((data) => setNetworks(data)
            )
        console.log("networks loading")
    }, []);
    console.log(Networks)
    return (
        <div className={classes.root}>
            {Networks.map((network) => (
            <NetworkCard 
            key={network.mac} 
            mac={network.mac}  
            bssid={network.bssid} 
            ssid={network.ssid} 
            signal_level={network.signal_level}/>
            ))}
        </div>
    );
}
