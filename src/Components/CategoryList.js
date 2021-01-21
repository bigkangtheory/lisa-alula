import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {categories as mockCategories} from "../MockData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  categoryBar: {
    display: "flex",
  },
  categoryName: {
    "text-transform": "uppercase",
    "font-size": "xx-large",
    "font-weight": "bold"
  }
}));

const CategoryList = props => {
  const classes = useStyles();
  const {category, setCategory} = props;
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // if null, dont open menu
    setAnchorEl(null);
  };

  const handleSelect = name => {
    setCategory(name);
    handleClose();
  };

  // Mock api call
  const getCategories = useCallback(() => {
    setCategories(mockCategories);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories])

  return (
    <div>
      <div onClick={handleClick} className={classes.categoryBar}>
        <ListItemText primary={category} className={classes.categoryName} />
        {/*<StarIcon />*/}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categories.map(category => {
          return <MenuItem onClick={() => handleSelect(category.name)} key={category.id}>{category.name}</MenuItem>
        })}
      </Menu>
    </div>
  );
}

export default CategoryList;
