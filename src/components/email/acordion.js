import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    col: {
        disply: "flex",
        flexDirection: "column"
    },
});
export const AcordionCard = (props) => {
    const classes = useStyles();
    const id = props.id;
    const delId = props.delId;
    const avatar = props.avatar;
    const image = props.image;
    const image_title = props.image_title;
    const title = props.title;
    const subtitle = props.subtitle;
    const content = props.content;
    const title_2 = props.title_2;
    const content_2 = props.content_2;
    const sign = props.sign;

    return (
        <div className={classes.root}>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <CardHeader
                        avatar={
                            <Avatar avatar={avatar} aria-label="recipe" className={classes.avatar}>
                            </Avatar>
                        }
                    />
                    <div className={classes.col}>
                        <Typography className={classes.heading}>From: {title}</Typography>
                        <Typography className={classes.heading}>To: {subtitle}</Typography>
                        </div>
                        <button key={id} onClick={delId}></button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.heading} color="textPrimary">{content}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}