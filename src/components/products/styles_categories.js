import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: '100vw',
    height: '64px',
    position: "absolute",
    top: '64px',
    left: '0px',
    padding: '0px',
    zIndex: 1,
    overflowX: 'scroll',
    justifyContent: 'flex-start',
  }, 
  categories: {
    position: 'fixed',
    top:"64px",
    left:"0px"
  },
  coffe: {
    borderBottom: 'solid brown 3px',
  },
  electronics: {
    borderBottom: 'solid black 3px',
  },
  food: {
    borderBottom: 'solid green 3px',
  },
  health: {
    borderBottom: 'solid red 3px',
  },
  skate: {
    borderBottom: 'solid blue 3px',
  },
  snow: {
    borderBottom: 'solid lightblue 3px',
  },
  bmx: {
    borderBottom: 'solid purple 3px',
  },
  yoga: {
    borderBottom: 'solid orange 3px',
  },
  clothes: {
    borderBottom: 'solid lightblue 3px',
  },
  pets: {
    borderBottom: 'solid pink 3px',
  },
  drugs: {
    borderBottom: 'solid pink 3px',
  },
  filterBox:{
    width: '100vw',
    position: 'absolute',
    zIndex: 1,
    top: '128px',
    left: '0px',
  },
  filter: {
    width: '50vw',
  },
  search: {
    width: '16.666vw',
  },
});
