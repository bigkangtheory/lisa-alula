import React, {useCallback, useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import SearchAppBar from './AppBar';
import CategoryList from './CategoryList';
import MediaCard from "./MediaCard";
import { makeStyles } from '@material-ui/core/styles';
import {products as mockProducts} from "../MockData";
import './Main.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("Category");
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(() => {

    let products = mockProducts.filter( product => {
      return product.categoryId === category;
    });

    setProducts(products)
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <div className={classes.root}>
      <Paper className="paperWrap">
        <SearchAppBar/>
        <div>
          <CategoryList category={category} setCategory={setCategory}/>
          <div className="productGrid">
            {
              products.map(product => {
                return <MediaCard name={product.name} desc={product.description} imageUrl={product.imageUrl} key={product.id}/>
              })
            }
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Main;