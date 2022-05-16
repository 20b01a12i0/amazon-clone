import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
// import {MapContainer} from 'react-leaflet'
const Checkout = () => {
    const [{basket}]=useStateValue();
    return (
        
        <div className='checkout'>
            <div className='checkout_left'>
            <img className="checkout_ad" src="https://tse2.mm.bing.net/th?id=OIP.aSNODBNqKNT-vIzZDNiCYQHaB5&pid=Api&P=0&w=374&h=96" alt="" />
            
            {basket.length==0 ?(
                <div>
                    <h2>YOUR BASKET IS EMPTY</h2>
                    <p>You have no items in your basket .To buy one or more items.Click"Add to basket " next to the item</p>
                </div>
            ):(
                <div>
                    <h2 className='checkout_title'>Your shopping basket</h2>
                    {basket.map((item)=>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />

                    ))}
                </div>
            )

            }
            </div>
            {basket.length>0 && (
                <div className='checkout_right'>
                  {/* <h1>Subtotal</h1> */}
                <Subtotal />
                </div>
            )}
        </div>

    );
};

export default Checkout;