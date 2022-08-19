import React from 'react';
import { Link } from 'react-router-dom';
import { shorten, isInCart, quantityCount } from '../../../helper/functions';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../../../redux/actions/cartActions';
import trashIcon from "../../../assets/icons/trash.svg";
import styles from "./Product.module.css";

const Product = ({productData}) => {
    const state = useSelector(state=>state.cartState)
    const dispatch = useDispatch()
    console.log(productData);
    
    const rateHandler =(rate)=>{
        if(rate>=4){
            return styles.green
        }
        if(rate>=3){
            return styles.orange
        }
        if(rate<3){
            return styles.red
        }
    }

    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <div className={styles.cardBody}>
            <p>{`${productData.price} $`}</p>
            <span className={rateHandler(productData.rating.rate)}>{productData.rating.rate}</span>
            </div>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    
                    <button className={isInCart(state, productData.id)? styles.smallButton:styles.fade} onClick={() => dispatch(increase(productData))}>+</button> 
                    <button className={isInCart(state, productData.id)?styles.fade:''} onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;