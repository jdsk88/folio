import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import { Link } from "react-router-dom";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
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

export const AddProduct = () => {

    const [import_data, setImport_data] = useState([])
    const classes = useStyles();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [ean, setEan] = useState("");
    const [bar, setBar] = useState("");
    const [images, setImages] = useState("");

    //
    let importData;
    const ImportedData = () => {
        const data = importData.result;
        setImport_data(data);
        const parsed_data = JSON.parse(data);
        // console.log(parsed_data)
        // for(var i in parsed_data){
        //     console.log(parsed_data[i].name)
        // }
        // console.log(data)
        for (var i in parsed_data) {
            axios.post(`${API_URL}products`, {
                name: parsed_data[i].name,
                type: parsed_data[i].type,
                category: parsed_data[i].category,
                price: parsed_data[i].price,
                ean: parsed_data[i].ean,
                bar: parsed_data[i].bar,
                images: parsed_data[i].images,
            })
        }
    };
    const FReader = (file) => {
        importData = new FileReader();
        importData.onloadend = ImportedData;
        importData.readAsText(file);
    };


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
            <Button variant="contained" component="label">
                import data
                <input
                    type='file'
                    id='file'
                    className='input-file'
                    accept='.json'
                    hidden
                    onChange={(e) => FReader(e.target.files[0])} />
            </Button>
            <div>{import_data.length}</div>
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
