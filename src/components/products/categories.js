import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { coffee, electronics, food, health, drugs, skateboarding, snowboarding, bmx, yoga, clothes, pets } from './icons'
import { useStyles } from './useStyles';
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
      <BottomNavigationAction className={classes.drugs} label="drugs" icon={drugs} />
      <BottomNavigationAction className={classes.health} label="health" icon={health} />
      <BottomNavigationAction className={classes.coffe} label="coffe" icon={coffee} />
      <BottomNavigationAction className={classes.electronics} label="electonics" icon={electronics} />
      <BottomNavigationAction className={classes.food} label="food" icon={food} />
      <BottomNavigationAction className={classes.skate} label="skate" icon={skateboarding} />
      <BottomNavigationAction className={classes.snow} label="snow" icon={snowboarding} />
      <BottomNavigationAction className={classes.bmx} label="bmx" icon={bmx} />
      <BottomNavigationAction className={classes.yoga} label="yoga" icon={yoga} />
      <BottomNavigationAction className={classes.clothes} label="clothes" icon={clothes} />
      <BottomNavigationAction className={classes.pets} label="pets" icon={pets} />
    </BottomNavigation>
  );
}
