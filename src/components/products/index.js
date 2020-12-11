import React, { useState, Route, useEffect } from "react";
import { Router, Switch, useLocation } from "react-router-dom";
import Categories from "./categories";
import { ProductsList } from "./ProductsList";
import Loader from "../small_components/loader";
import { useStyles } from "./styles_categories"
import ToggleButtons from "./toggle2btns";

export const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            name: queryParams.get("name") || '',
        });
        setIsLoading(true);
        fetch("http://192.168.0.16:8080/api/products?")
            .then((resp) => resp.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <Categories className={classes.categories} />
            <ToggleButtons />
            <ProductsList products={products} />
        </div>
    );

}





