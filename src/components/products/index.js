import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Categories from "./categories";
import { ProductsList } from "./ProductsList";
import Loader from "../small_components/loader" 

export const Products = () => {
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
        // fetch("http://192.168.0.16:8080/api/products?")
        //     .then((resp) => resp.json())
        //     .then((data) => setProducts(data))
        //     .finally(() => setIsLoading(false));
        axios("http://192.168.0.16:8080/api/products?")
    }, []);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <div>
            <Categories />
            <ProductsList products={products} />
        </div>
    );

}





