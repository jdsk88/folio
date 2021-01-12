import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Nav3Buttons } from "./nav";
import { Button } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
            width: '100%',
            padding: '10px',
            paddingLeft: 0,
        },
        name: {
            width: "50%",
            boxSizing: "border-box",

        }
    },
}));

export const EmailForm = () => {


    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [signature, setSignature] = useState("");
    console.log(firstName)
    const sendMsg = () => {
        useEffect(() => {
            axios.post(`${API_URL}/email`, {
                from:firstName,
                to:,
                toCopy:,
                title:,
                letter:,
                signature:,
            })
        }, [])

    }
    return (
        <>
            <Nav3Buttons
                btn_01_label="INBOX"
                btn_01_link="/email"
                // btn_01_onClick={}
                btn_02_label="OUTBOX"
                btn_02_link="/email_form"
                // btn_02_onClick={}
                btn_03_label="SAVED"
                // btn_03_link={}
                // btn_03_onClick={RELOAD}
                btn_04_label="ARCHIVED"
            // btn_04_link={}
            // btn_04_onClick={RELOAD}
            />
            <Nav3Buttons
                btn_01_label="CREATE"
                // btn_01_link="/email"
                // btn_01_onClick={}
                btn_02_label="TRANSLATE"
                // btn_02_link="/email_form"
                // btn_02_onClick={}
                btn_03_label="SAVE"
                // btn_03_link={}
                // btn_03_onClick={RELOAD}
                btn_04_label="SEND"
            // btn_04_link={}
            // btn_04_onClick={RELOAD}
            />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.name}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    required />
                <TextField
                    className={classes.name}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined" />
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic"
                    label="title"
                    variant="outlined" />
                <TextField
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    id="outlined-basic"
                    label="subtitle"
                    variant="outlined" />
                <TextField
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="outlined-basic"
                    label="content message"
                    variant="outlined" />
                <TextField
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    id="outlined-basic"
                    label="signature"
                    variant="outlined" />
                <Button variant="outlined" color="primary" onClick={sendMsg}>Send</Button>
            </form>
        </>
    );
}
