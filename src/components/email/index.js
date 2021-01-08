import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EmailsList } from "./email";
import Loader from "../small_components/loader";

export const Email = () => {
    const [emails, setEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            name: queryParams.get("name") || '',
        });
        setIsLoading(true);
        fetch("http://192.168.0.16:8888/api/email?" + params.toString())
            .then((resp) => resp.json())
            .then((data) => setEmails(data))
            .finally(() => setIsLoading(false));
    }, []);
    console.log(emails)

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <EmailsList emails={emails} />
        </div>
    );

}





