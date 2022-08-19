import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkout, clear } from '../../redux/actions/cartActions';
import Cart from '../shared/cart/Cart';
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const state = useSelector(state=>state.cartState)
    const dispatch = useDispatch()

    return (
        <>
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                        <p><span>Total Items:</span> {state.itemsCounter}</p>
                        <p><span>Total Payments:</span> {state.total} $</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                            <button className={styles.checkout} onClick={() => dispatch(checkout())}>Checkout</button>
                        </div>
                    </div>
            }
        </div>
            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                        <h3 className={styles.cartEmpty}>cart is empty!</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
            }
            </>
        
        
    );
};

export default ShopCart;