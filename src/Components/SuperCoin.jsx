import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import './ShoppingCart.css';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);

    const cartItems = useSelector(state => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    return (
        <>
            {superCoins >= 10 &&
            <div  style={{textAlign:'center'}}>
                <h2 style={{color:'#d32f2f'}}>Super Coins</h2>
                <p >You will earn {superCoins} super coins with this purchase.</p>
            </div>}
        </>
    );



};

export default SuperCoin;

