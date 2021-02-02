import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '100vw',
        bottom: '75px',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        width: '100%',
        border: '2px solid black',
        borderRadius: 15,

    }
}));

const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
}

export const ListItemW = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem className={classes.listItem} button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
            </List>
        </div>
    );
}