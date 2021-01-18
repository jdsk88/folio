import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Nav3Buttons } from "./nav";
import { Button } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import { Link } from "react-router-dom";
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import { CheckBOX } from '../small_components/checkbox';


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
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [title, setTitle] = useState("");
    const [letter, setLetter] = useState("");
    const [toCopy, setToCopy] = useState("");
    const [toHiddenCopy, setToHiddenCopy] = useState("");
    const [signature, setSignature] = useState("");

    const sendMsg = async () => {
        await axios.post(`${API_URL}email`, {
            from: from,
            to: to,
            toCopy: toCopy,
            toHiddenCopy: toHiddenCopy,
            title: title,
            letter: letter,
            signature: signature,
        })
        console.log("reloading data")
    }

    const [filters, setGetFilter] = useState([]);

    // const getFilters = (props) => {
    //     const CHECKED = props.CHECKED
    //     fetch(`${API_URL}filters`)
    //         .then((resp) => resp.json())
    //         .then((data) => setGetFilter(data)
    //         )
    //     // valueChanger();
    //     console.log("filers loading")

    // }
    useEffect((props) => {
        fetch(`${API_URL}filters`)
            .then((resp) => resp.json())
            .then((data) => setGetFilter(data)
            )
        console.log("filers loading")

    },[])
    return (
        <>

            <Nav3Buttons
                btn_01_label="INBOX"
                btn_01_link="/email"
                // btn_01_onClick={getFilters}
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
                btn_01_link="/email_form"
                // btn_01_onClick={getFilters}
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
            <FormGroup row>
                {filters.map((item) => (
                    <CheckBOX
                        key={item._id}
                        value={item.value}
                        id={item._id}
                        label={item.name}
                        CHECKED={item.value}
                        ONCLICK={item.onClick}
                        ONTOUCH={item.onTouch}
                        LINK={item.link}
                        INFO={item.info}
                        // ONCLICK={}
                    />))}
            </FormGroup>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.name}
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    id="outlined-basic"
                    label="from"
                    variant="outlined"
                    required />
                <TextField
                    className={classes.name}
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    id="outlined-basic"
                    label="to"
                    variant="outlined" />
                <TextField
                    value={toCopy}
                    onChange={(e) => setToCopy(e.target.value)}
                    id="outlined-basic"
                    label="copy to"
                    variant="outlined" />
                <TextField
                    value={toHiddenCopy}
                    onChange={(e) => setToHiddenCopy(e.target.value)}
                    id="outlined-basic"
                    label="copy hidden to"
                    variant="outlined" />
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic"
                    label="title"
                    variant="outlined" />
                <TextField
                    // value={letter}
                    value={letter}
                    onChange={(e) => setLetter(filters.value)}
                    id="outlined-basic"
                    label="content message"
                    variant="outlined" />
                <TextField
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    id="outlined-basic"
                    label="signature"
                    variant="outlined" />
                <Button variant="outlined" color="primary" component={Link} to="/email" onClick={sendMsg}>Send</Button>
            </form>
        </>
    );
}
