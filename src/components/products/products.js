import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ProductsList } from "./ProductsList";

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
        fetch("http://85.222.120.170:65500/api/products")
            .then((resp) => resp.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p className="alert alert-info">Please wait, Loading...</p>;
    }

    return (
        <div>
            <ProductsList products={products} />
        </div>
    );

}





