import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../../../redux/actions/cartActions';
import { shorten } from '../../../helper/functions';
import trashIcon from "../../../assets/icons/trash.svg";
import styles from "./Cart.module.css";

const Cart = ({data}) => {
    const dispatch = useDispatch()

    const {image, title, price, quantity} = data;

    return (
        <div className={styles.container} >
            <img className={styles.productImage} src={image} alt=''/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decrease(data))} >-</button> :
                    <button onClick={() => dispatch(removeItem(data))} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch(increase(data))} >+</button>
            </div>
        </div>
    );
};

export default Cart;