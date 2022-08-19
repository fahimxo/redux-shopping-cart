import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import Product from "../shared/product/Product";
import styles from "./Shop.module.css"
import { getAllProduct } from "../../redux/actions/productsActions";

const Shop = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  const products =productsState.items.slice(0,18)

  useEffect(() => {
    if(!productsState.items.length) getAllProduct(dispatch);
  },[]);

  
  if (productsState.message) {
    return <div className={styles.loading}>{productsState.message}</div>;
  }
  return (
    <>
    { productsState.isLoading && 
    <ReactLoading type="spokes" className={styles.loading} color='#1A73E8' height={80} width={80} />} 

      <div className={styles.container}>
          {   
            products.map((item) => (
              <Product key={item.id} productData={item} />
            ))
          }
      </div>
    </>
  );
};

export default Shop;
