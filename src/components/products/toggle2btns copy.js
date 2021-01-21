import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
import { useStyles } from "./styles_categories"

const Filters = () => {
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState('');
  const [sortAZ, setSortAZ] = React.useState('');
  const [track, setTrack] = React.useState('');
  const classes = useStyles();
  const HandleFilter = (event, newFilter) => {
    setFilter(newFilter);
    console.log(event)
  };
  const HandleSort = (event, newSort) => {
    setSort(newSort);
    console.log(event)
  };
  const HandleSortAZ = (event, newSortAZ) => {
    setSortAZ(newSortAZ);
    console.log(event)
  };
  const clickTracker = (event, newClick) => {
    setTrack(newClick)
  }
  // const clickTracker = (e) => console.log(e.target);
  // if(){
  //   console.log('sort by a-z')
  // }else{
  //   console.log('random')
  // }

  return (
    <div className={classes.filterBox}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={HandleFilter}
        aria-label="filters-box"
        className={classes.filter}
      >
        <ToggleButton
          className={classes.filter}
          value="filters"
          aria-label="filters"
          onClick={clickTracker}
        >
          <FilterListIcon />
          <Typography >FILTERS</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={sortAZ}
        exclusive
        onChange={HandleSortAZ}
        aria-label="AZ-box"
      >
        <ToggleButton
          className={classes.search}
          onClick={clickTracker}
          value="A-Z"
          aria-label="A-Z sort"
        >
          <SortByAlphaIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={sort}
        exclusive
        onChange={HandleSort}
        aria-label="price sort"
      >
        <ToggleButton
          className={classes.search}
          value="low"
          onClick={clickTracker}
          aria-label="price low">
          <ArrowDownwardIcon />$
        </ToggleButton>
        <ToggleButton
          onClick={clickTracker}
          className={classes.search}
          value="high"
          aria-label="price high">
          <ArrowUpwardIcon />$
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
export default Filters