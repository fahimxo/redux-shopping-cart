import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from "./ProductDetails.module.css";
import Star from './star/Star';

const ProductDetails = () => {

    const {id} = useParams();
    const products=useSelector(state=>state.productsState.items)

    const product=products.find(p=>p.id == id)
    const {image, title, description, price, category,rating} = product;

    const rateHandler=(rate)=>{
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
        <div className={styles.container}>
            <div className={styles.box}>
                <img className={styles.image} src={image} alt="product" />
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.body}>
                    <p className={styles.category}><span>Category:</span> {category}</p>
                        <div className={styles.rate}>
                            <p>rate : <span className={rateHandler(rating.rate)}>{rating.rate}</span></p> 
                            <div>
                               <Star rate={rating.rate}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <span className={styles.price}>{price} $</span>
                        <Link to="/products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;