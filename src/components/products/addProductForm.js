import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Publish, GetApp, Save, Edit, DeleteForever } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
const useStyles = makeStyles((theme) => ({
    root2: {
        // background:"white",
        marginBottom: "5px",
        width: "100%",
        display: 'flex',
        position: "sticky",
        top: "64px",
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
    },
    green: {
        background: "green",
    },
    red: {
        background: "red",
    },
    pink: {
        background: "pink",
    },
    blue: {
        background: "blue",
    },
    lightblue: {
        background: "lightblue",
    }
}));

export const AddProductForm = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [ean, setEan] = useState("");
    const [bar, setBar] = useState("");
    const [images, setImages] = useState("");
    const sendMsg = async () => {
        await axios.post(`${API_URL}products`, {
            name: name,
            type: type,
            category: category,
            price: price,
            ean: ean,
            bar: bar,
            images: images,
        })
        console.log("reloading data")
    }

    return (
        <>
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id="outlined-basic"
                    label="copy to"
                    variant="outlined" />
                <TextField
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="outlined-basic"
                    label="copy hidden to"
                    variant="outlined" />
                <TextField
                    value={ean}
                    onChange={(e) => setEan(e.target.value)}
                    id="outlined-basic"
                    label="title"
                    variant="outlined" />
                <TextField
                    value={bar}
                    onChange={(e) => setBar(e.target.value)}
                    id="outlined-basic"
                    label="content message"
                    variant="outlined" />
                <TextField
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                    id="outlined-basic"
                    label="signature"
                    variant="outlined" />
                <Button variant="outlined" color="primary" component={Link} to="products" onClick={sendMsg}>Send</Button>
            </form>
        </>
    );
}
