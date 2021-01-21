import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import { Link, Router } from "react-router-dom";
import axios from 'axios';
import { Publish, GetApp, Save, Edit, DeleteForever } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        maxWidth: "100%",
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    gridListItem: {
        min: 250,
        height: 450,
    },
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

    //import data from file and post to server database
    let importData = [];
    const ImportedData = () => {
        const data = importData.result;
        const parsed_data = JSON.parse(data);
        setImport_data(parsed_data);
    };

    const ImportedDataSave = () => {
        for (var i in import_data) {
            axios.post(`${API_URL}products`, {
                name: import_data[i].name,
                type: import_data[i].type,
                category: import_data[i].category,
                price: import_data[i].price,
                ean: import_data[i].ean,
                bar: import_data[i].bar,
                images: import_data[i].images,
            })
        }
    }

    const DeleteProductsDataBase = () => {
        axios.delete(`${API_URL}products`)
    }

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

    const Grid = () => {
        return (
            
            <div>{import_data.length} objects found
            <GridList cellHeight={180} cols={2} rows={3} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"></ListSubheader>
                </GridListTile>
                {import_data.map((item) => (
                    <GridListTile key={item.images} className={classes.gridListItem}>
                        <img src={item.images} alt={item.name} />
                        <GridListTileBar
                            title={item.type}
                            subtitle={<span>by: {item.price}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${item.ean}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                            />
                    </GridListTile>
                ))}
            </GridList>
                </div>
            )
    }

    const ProductForm = () => {
        return (
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
        )
    }
const Navigation = () => {
    return (
        <div className={classes.root2}>
        <ButtonGroup size="large">
            <Button variant="contained" className={classes.lightblue} component="label">
                <Publish /><Typography ></Typography>
                <input
                    type='file'
                    id='file'
                    className='input-file'
                    accept='.json'
                    hidden
                    onChange={(e) => FReader(e.target.files[0])} />
            </Button>
            {/* <Button variant="contained" className={classes.blue}><GetApp /></Button> */}
            <Button variant="contained" className={classes.pink}><Edit /></Button>
            <Button variant="contained" className={classes.green} onClick={ImportedDataSave} ><Save /></Button>
            <Button variant="contained" className={classes.red} onClick={DeleteProductsDataBase}><DeleteForever /></Button>
        </ButtonGroup>
    </div >
    )
}


    return (
        <>



          
            {/* <Router>

            </Router> */}
<Navigation/>
<Grid/>
<ProductForm/>

            
        </>
    );
}
