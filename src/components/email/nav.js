import React from 'react';
import Button from '@material-ui/core/Button';
import { icons } from './icons'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // background:"white",
        marginBottom: "5px",
        width:"100%",
        display: 'flex',
        position:"sticky",
        top:"64px",
        flexDirection: 'column',
        alignItems: 'center',
        zIndex:1,
    }
}));

export const Nav3Buttons = (props) => {
    const classes = useStyles();
    const btn_01_label = props.btn_01_label;
    const btn_02_label = props.btn_02_label;
    const btn_03_label = props.btn_03_label;
    const btn_04_label = props.btn_04_label;
    const btn_01_link = props.btn_01_link;
    const btn_02_link = props.btn_02_link;
    const btn_03_link = props.btn_03_link;
    const btn_04_link = props.btn_04_link;
    const btn_01_onClick = props.btn_01_onClick;
    const btn_02_onClick = props.btn_02_onClick;
    const btn_03_onClick = props.btn_03_onClick;
    const btn_04_onClick = props.btn_04_onClick;
    const btn_01_icon = props.btn_01_icon;
    const btn_02_icon = props.btn_02_icon;
    const btn_03_icon = props.btn_03_icon;
    const btn_04_icon = props.btn_04_icon;

    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="large outlined primary button group">
                <Button
                    icon={btn_01_icon}
                    btn_01_label={btn_01_label}
                    onClick={btn_01_onClick}
                    component={Link}
                    to={btn_01_link}>{btn_01_label}</Button>
                <Button
                    icon={btn_02_icon}
                    btn_02_label={btn_02_label}
                    onClick={btn_02_onClick}
                    component={Link}
                    to={btn_02_link}>{btn_02_label}</Button>
                <Button
                    icon={btn_03_icon}
                    btn_03_label={btn_03_label}
                    onClick={btn_03_onClick}
                    component={Link}
                    to={btn_03_link}>{btn_03_label}</Button>
                <Button
                    icon={btn_04_icon}
                    btn_04_label={btn_04_label}
                    onClick={btn_04_onClick}
                    component={Link}
                    to={btn_04_link}>{btn_04_label}</Button>
            </ButtonGroup>
        </div >
    );
}
