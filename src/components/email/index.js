import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EmailsList } from "./email";
import Loader from "../small_components/loader";
import { API_URL } from "../../config/constants";
import { Geolocation } from "../geolocation";
import { Nav3Buttons } from "./nav";
import Axios from "axios";

export const Email = () => {
    const [emails, setEmails] = useState([]);
    const [reload, setReload] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryParams = new URLSearchParams(useLocation().search);
    useEffect(() => {
        const params = new URLSearchParams({
            limit: queryParams.get("limit") || 10,
            page: queryParams.get("page") || 1,
            name: queryParams.get("name") || '',
        });
        setIsLoading(true);

        fetch(`${API_URL}email?${params.toString()}`)
            .then((resp) => resp.json())
            .then((data) => setEmails(data))
            .finally(() => setIsLoading(false));
    }, [reload]);
    if (isLoading) {
        return <Loader title="Emails loading" subtitle="Please wait" />;
    }
    const RELOAD = () => {
        setReload((state) => !state);
        console.log("reloading data")
    }
    const DEL = () => {
        Axios.delete(`${API_URL}/email`)
        setReload((state) => !state);
        console.log("DEL data")
    }
    return (
        <div>
            <Nav3Buttons
            style={{position:'fixed', top: '64px'}}
            btn_01_icon="skateboarding"
            btn_01_label="Inbox"
            btn_02_label="Outbox"
            btn_03_label="Priority"
            btn_04_label="Reload"
            // btn_01_link={}
            btn_02_link="/email_form"
            // btn_03_link={}
            // btn_01_onClick={}
            // btn_02_onClick={DEL}
            btn_03_onClick={DEL}
            btn_04_onClick={RELOAD}
            />
            <EmailsList emails={emails} />
        </div>
    );

}