import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ShopIcon from '@material-ui/icons/Shop';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '56px',
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        overflowX: 'auto',
        marginLeft: 0,
    },
    button: {

        padding: 0,
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                className={classes.button}
                component={Link}
                to="/dashboard"
                label="Dashboard"
                value="dashboard"
                icon={<DashboardSharpIcon />} />
            <BottomNavigationAction
                className={classes.button}
                component={Link}
                to="/invoices"
                label="Invoices"
                value="invoices"
                icon={<DescriptionIcon />} />
            <BottomNavigationAction
                className={classes.button}
                component={Link}
                to="/tasks"
                label="Tasks"
                value="tasks"
                icon={<AssignmentTurnedInIcon />} />
            <BottomNavigationAction
                className={classes.button}
                component={Link}
                to="/products"
                label="Products"
                value="workers"
                icon={<ShopIcon />} />
        </BottomNavigation>

    );
}
