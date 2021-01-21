import React from 'react';
import Button from '@material-ui/core/Button';
import { Publish, GetApp, Save, Edit, DeleteForever } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import { useStyles } from './navigation_useStyles';

export const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="large outlined primary button group">
                <Button component={Link}><Publish /></Button>
                <Button component={Link}><GetApp /></Button>
                <Button component={Link}><Edit /></Button>
                <Button component={Link}><Save /></Button>
                <Button component={Link}><DeleteForever /></Button>
            </ButtonGroup>
        </div >
    );
}
