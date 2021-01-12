import React from "react";
import { EmailCard } from "./card";
import { useStyles } from './useStyles';

import {AcordionCard} from "./acordion"
export const EmailsList = ({ emails }) => {
    const classes = useStyles();
    return (
        <div className={classes.cards}>
            {emails.map((item) => (
                <>
                    {/* <EmailCard
                        key={item._id}
                        avatar={item.toCopy}
                        image={item.toCopy}
                        image_title={item.from}
                        title={item.to}
                        subtitle={item.from}
                        content={item.letter}
                        title_2={item.to}
                        content_2={item.letter}
                        sign={item.signature}
                    /> */}
                        <AcordionCard 
                        key={item._id}
                        title={item.to}
                        subtitle={item.from}
                        content={item.letter}
                        sign={item.signature}
                        />
                    </>
            ))}
        </ div>

    );
};
