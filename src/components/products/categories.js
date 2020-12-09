import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { coffee, electronics, food, health, drugs, skateboarding, snowboarding, bmx, yoga, clothes, pets } from './icons'
import { useStyles } from './useStyles';
import { Link } from "react-router-dom";

export default function Categories() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);



  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.drugs}
        label="drugs"
        icon={drugs} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.health}
        label="health"
        icon={health} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.coffe}
        label="coffe"
        icon={coffee} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.electronics}
        label="electonics"
        icon={electronics} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.food}
        label="food"
        icon={food} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.skate}
        label="skate"
        icon={skateboarding} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.snow}
        label="snow"
        icon={snowboarding} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.bmx}
        label="bmx"
        icon={bmx} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.yoga}
        label="yoga"
        icon={yoga} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.clothes}
        label="clothes"
        icon={clothes} />
      <BottomNavigationAction component={Link}
        onClick={(e) => console.log(e.target)}
        className={classes.pets}
        label="pets"
        icon={pets} />
    </BottomNavigation>
  );
}
