import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Switch, Typography } from '@material-ui/core';
import { API_URL } from '../../config/constants';
import { Link, Route, Router } from "react-router-dom";
import axios from 'axios';
import { Publish, GetApp, Save, Edit, DeleteForever } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { AddProductForm } from './addProductForm';
import { AddProduct } from './addProduct';

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
    green:{
        background: "green",
    },
    red:{
        background: "red",
    },
    pink:{
        background: "pink",
    },
    blue:{
        background: "blue",
    },
    lightblue:{
        background: "lightblue",
    }
}));

export const AddProductRouter = () => {
    const [import_data, setImport_data] = useState([])
    const classes = useStyles();

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

    //import data from file and post to server database
  
    return (
        <>
        <div className={classes.root2}>
            <ButtonGroup size="large">
            <Button variant="contained" className={classes.lightblue} component="label">
                <Publish/><Typography ></Typography>
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

        <Router>
            <Switch>
                <Route path="/product_form" component={AddProductForm}/>
                <Route path="/product_import" component={AddProduct}/>
            </Switch>
        </Router>
           
        </>
    );
}
