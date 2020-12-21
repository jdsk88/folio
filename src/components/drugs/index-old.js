import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { DrugsList } from "./drugsList";
import Loader from "../small_components/loader";
import axios from "axios";

// 
const DrugsList = ({ drugs }) => {
    return (
        <div>
            {drugs.map((drug, index) => (
                <div key={index}>
                    <p>drug name {drug[1].nazwa}</p>
                    <p>drug manufacturer {drug[0].podmOdpow}</p>
                    <p>drug code {drug[0].kodAtc}</p>
                    <p>drug pack content {drug[0].zawOpak}</p>
                </div>
            ))}
        </div>
    )
}

export const DrugsStore = () => {
    const [drugs, setDrugs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);
    // const api_url = "http://185.161.95.77:33733/api/"

    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            // name: queryParams.get("nazwa") || '',
        });
        setIsLoading(true);
        // axios.get("http://185.161.95.77:33733/api/drugs?" + params.toString())
        axios.get("http://185.161.95.77:33733/api/drugs?limit=1&page=3")
            .then((r) => {
                const data = r.data
                // const DATA = JSON.parse(data)
                setDrugs([data]);
                setIsLoading(false);
            })
    }, [ ]);
    console.log(drugs);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <DrugsList drugs={drugs} />

        </div>
    );

}





