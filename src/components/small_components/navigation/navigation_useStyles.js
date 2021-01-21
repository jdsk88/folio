import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        // background:"white",
        marginBottom: "5px",
        width: "100%",
        display: 'flex',
        position: "sticky",
        top: "64px",
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
    }
}));
