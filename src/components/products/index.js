import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Categories from "./categories";
import { ProductsList } from "./ProductsList";
import Loader from "../small_components/loader";
import { useStyles } from "./styles_categories"
import {ProductsFilters} from "./filters";
import {Button} from "../small_components/button"
import { API_URL } from "../../config/constants";

export const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([0]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            name: queryParams.get("name") || '',
        });
        setIsLoading(true);
        fetch(`${API_URL}products?${params.toString()}`)
            .then((resp) => resp.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);
    console.log(products)

    const edit = () => {
        console.log("item edit")
    };

    if (isLoading) {
        return <Loader title="Products loading" subtitle="Please wait"/>;
    }


    return (
        <div>
            <Categories className={classes.categories} />
            <ProductsFilters onClick={edit}/>
            <ProductsList products={products} />
        </div>
    );

}





