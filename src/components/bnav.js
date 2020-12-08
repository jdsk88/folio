import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 500,
    },
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
                component={Link}
                to="/dashboard"
                label="Recents"
                value="recents"
                icon={<DashboardSharpIcon />} />
            <BottomNavigationAction
                component={Link}
                to="/favorites"
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />} />
            <BottomNavigationAction
                component={Link}
                to="/nearby"
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />} />
            <BottomNavigationAction
                component={Link}
                to="/folder"
                label="Folder"
                value="folder"
                icon={<FolderIcon />} />
        </BottomNavigation>

    );
}
