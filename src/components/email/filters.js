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

export const FiltersForm = () => {


    const classes = useStyles();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [onClick, setOnClick] = useState("");
    const [onTouch, setOnTouch] = useState("");
    const [value, setValue] = useState("");
    const [info, setInfo] = useState("");

    const sendMsg = async () => {
        await axios.post(`${API_URL}filters`, {
            name: name,
            type: type,
            link: link,
            onClick: onClick,
            onTouch: onTouch,
            value: value,
            info: info,
        })
        console.log("reloading data")
    }

    const [filters, setGetFilter] = useState([]);

    const getFilters = () => {
        fetch(`${API_URL}filters`)
            .then((resp) => resp.json())
            .then((data) => setGetFilter(data)
            )
        console.log("filers loading")
    }
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
                btn_01_onClick={getFilters}
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
                        VALUE={item.value}
                        ID={item._id}
                        LABEL={item.from}
                    // onClick={() => {axios.put(`${API_URL}filters/${item_id}`,{state:)}} 
                    />))}
            </FormGroup>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="outlined-basic"
                    label="name"
                    variant="outlined"
                    required />
                <TextField
                    className={classes.name}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    id="outlined-basic"
                    label="to"
                    variant="outlined" />
                <TextField
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    id="outlined-basic"
                    label="copy to"
                    variant="outlined" />
                <TextField
                    value={onClick}
                    onChange={(e) => setOnClick(e.target.value)}
                    id="outlined-basic"
                    label="copy hidden to"
                    variant="outlined" />
                <TextField
                    value={onTouch}
                    onChange={(e) => setOnTouch(e.target.value)}
                    id="outlined-basic"
                    label="title"
                    variant="outlined" />
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    id="outlined-basic"
                    label="content message"
                    variant="outlined" />
                <TextField
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                    id="outlined-basic"
                    label="signature"
                    variant="outlined" />
                <Button variant="outlined" color="primary" component={Link} to="/filters" onClick={sendMsg}>Send</Button>
            </form>
        </>
    );
}
