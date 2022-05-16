import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checoutProduct_image" src={image} />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                            {
                                Array(rating)
                                .fill()
                                .map((_) =>(
                                    <p>⭐</p>
                                ))
                            }
                     </div>
                     <button onClick={removeFromBasket}>Remove from basket </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;