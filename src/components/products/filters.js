import React, { useState } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Typography } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { useStyles } from "./styles_categories"
import { CheckBOX } from '../small_components/checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';
export const ProductsFilters = (props) => {
  const [state, setState] = useState({});
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState('');
  const [sortAZ, setSortAZ] = React.useState('');
  const [track, setTrack] = React.useState('');
  const classes = useStyles();

  const ONClick1 = props.ONClick1;
  const ONClick2 = props.ONClick2;
  const ONClick3 = props.ONClick3;
  const ONClick4 = props.ONClick4;
  const ONClick5 = props.ONClick5;
  const ONClick6 = props.ONClick6;



  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(`${event.target.name} is ${event.target.checked} and its id: ${event.target.id}`)
  };


  return (
    <div className={classes.filterBox}>
      <Checkbox 
      // onClick={ONClick1} 
      ONClick1={ONClick1} 
      icon={<FilterListIcon />} 
      checkedIcon={<FilterListIcon />} 
      onChange={handleChange, ONClick1} 
      name="low" />
      <Checkbox 
      onClick={ONClick2} 
      ONClick2={ONClick2} 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite />} 
      onChange={handleChange} 
      name="low" />
      <Checkbox 
      onClick={ONClick3} 
      ONClick3={ONClick3} 
      icon={<SortByAlphaIcon />} 
      checkedIcon={<SortByAlphaIcon />} 
      onChange={handleChange} 
      name="high" />
      <Checkbox 
      onClick={ONClick4} 
      ONClick4={ONClick4} 
      icon={<GetAppIcon />} 
      checkedIcon={<ArrowDownwardIcon />} 
      onChange={handleChange} 
      name="10" />
      <Checkbox 
      onClick={ONClick5} 
      ONClick5={ONClick5} 
      icon={<GetAppIcon />} 
      checkedIcon={<GetAppIcon />} 
      onChange={handleChange} 
      name="50" />
      <Checkbox 
      onClick={ONClick6} 
      ONClick6={ONClick6} 
      icon={<GetAppIcon />} 
      checkedIcon={<GetAppIcon />} 
      onChange={handleChange} 
      name="50" />
    </div>
  );
}
