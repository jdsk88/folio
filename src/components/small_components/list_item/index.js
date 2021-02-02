import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PlayArrow } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        width: '99vw',
        height: '50px',
        bottom: '75px',
        left: '.5vw',
        color: 'darkblue',
        backgroundColor: 'grey',
        border: '2px solid black',
        borderRadius: 15,
        justifyContent: 'space-between',
        lineHeight: '50px',
        textAlign: 'center',
    },
    listItem: {
        marginTop: 0,
        width: '40%',
        height: '100%',
        borderRadius: 15,
        // border: '2px solid black',
        boxSizing: 'border-box',
    },
    insideOfItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '50px',
        boxSizing: 'border-box',
        textAlign: 'center',
    },
    itemInsideOfItem: {
        width: '70%',
        alignSelf: 'center',
        boxSizing: 'border-box',
    },
    startDay:{
        fontSize: '2rem',
        color: 'red',
        height: '50px',
        width: '50px',
        lineHeight: '50px',
        position: 'absolute',
        top: '0px',
        right: '10px',
    }
}));

// const ListItemLink = (props) => {
//     return <button  component="a" {...props} />;
// }

const StartDayConfirmation = () => {
    const confirmation = alert('are you sure to start your work day ?')
    if (confirmation === true) {
        console.log("confirmed")
    } else {
        console.log("canceled")
    }
}

let user = 'user';
export const ListItemW = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <h1 className={classes.listItem} >Welcome {user}</h1>
            <button className={classes.listItem} onClick={StartDayConfirmation}>
                <div className={classes.insideOfItem} >
                    {/* <i /> */}
    
                    <h3 className={classes.startDay}></h3>
                    <h1 style={{ width: '20%' }}><PlayArrow fontSize="large" /></h1>
                    <h3 className={classes.itemInsideOfItem}>Start WorkDay</h3>
                </div>
            </button>
        </div>
    );
}