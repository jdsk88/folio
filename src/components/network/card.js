import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export const NetworkCard = (props) => {
    const mac = props.mac;
    const bssid = props.bssid;
    const ssid = props.ssid;
    const channel = props.channel;
    const frequency = props.frequency;
    const signal_level = props.signal_level;
    const quality = props.quality;
    const security = props.security;
    const security_flag = props.security_flag;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };
    
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography ssid={ssid} className={classes.heading}>SSID: {ssid}</Typography>
                    <Typography signal_level={signal_level} className={classes.secondaryHeading}>Signal level: {signal_level}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  bssid={bssid} className={classes.heading}>{bssid}</Typography>
                    <Typography mac={mac} className={classes.secondaryHeading}>{mac}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


// mac,bssid,ssid,channel,frequency,signal_level,quality,security,security_flags


// mac,
// bssid,
// ssid,
// channel,
// frequency,
// signal_level,
// quality,
// security,
// security_flags


// [{"mac":"8c:04:ff:b9:4c:2d","bssid":"8c:04:ff:b9:4c:2d","ssid":"Krypta","channel":1,"frequency":2412,"signal_level":"-67","quality":66,"security":"WPA2","security_flags":["(PSK/AES,TKIP/TKIP)"]},


// [{ "ć": "8c:04:ff:b9:4c:2d", "ć": "8c:04:ff:b9:4c:2d", "ć": "Krypta", "ć": 1, "ć": 2412, "ć": "-67", "ć": 66, "ć": "WPA2", "securćity_flags": ["(PSK/AES,TKIP/TKIP)"] },