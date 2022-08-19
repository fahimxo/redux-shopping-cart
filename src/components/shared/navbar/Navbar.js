import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shopIcon from "../../../assets/icons/shop.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
const state = useSelector(state=>state.cartState)
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/shopcart"><img src={shopIcon} alt='shopIcon'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;