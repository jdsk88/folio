import React from "react";
import { EmailCard } from "./card";
import { useStyles } from './useStyles';

import { AcordionCard } from "./acordion"
import Axios from "axios";
import { API_URL } from "../../config/constants";
export const EmailsList = ({ emails }) => {
    const classes = useStyles();

    return (
        <div className={classes.cards}>
            {emails.map((item) => (
                <>
                    <AcordionCard
                        key={item._id}
                        title={item.to}
                        subtitle={item.from}
                        content={item.letter}
                        sign={item.signature}
                        delId={() => {Axios.delete(`${API_URL}email/${item._id}`)}}
                        id={item._id}
                        link='/email_form'
                    />
                </>
            ))}
        </ div>

    );
};
