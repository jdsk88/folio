import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {API_URL} from '../../config/constants'

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
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [Networks, setNetworks] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}network/wifi_scanner`)
            .then((resp) => resp.json())
            .then((data) => setNetworks(data)
            )
        console.log("filers loading")
    }, []);
    console.log(Networks)
    return (
        <div className={classes.root}>
            {Networks.map((network) => (<Accordion key={network.mac} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>SSID: {network.ssid}</Typography>
                    <Typography className={classes.secondaryHeading}>Signal level: {network.signal_level}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.heading}>{network.bssid}</Typography>
                    <Typography className={classes.secondaryHeading}>{network.mac}</Typography>
                    {/* <Typography className={classes.secondaryHeading}>{network.signal_level}</Typography>
                    <Typography className={classes.secondaryHeading}>{network.frequency}</Typography>
                    <Typography className={classes.secondaryHeading}>{network.channel}</Typography> */}
                </AccordionDetails>
            </Accordion>))}
        </div>
    );
}
