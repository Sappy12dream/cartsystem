import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

function Cart({cart}) {
    const [totalItem, settotalItem] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    useEffect(() => {
        let items =0;
        let price = 0;
        cart.forEach(item => {
            items += item.qty;
            price += item.qty*item.price
        });
        settotalItem(items);
        settotalPrice(price);
    }, [cart, totalItem, settotalItem, totalPrice, settotalPrice])

    return (
        <div className='cart-wrap flex'>
            <div className='item-list'>
                {cart.map(item => (
                    <Item key={item.id} itemData={item}/>
    ))}
            </div>
            <div className='cart-calc flex'>
                <p>ITEMS: {totalItem}</p>
                <p>Total: {totalPrice} RS</p>
                <button>Proceed to Pay</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps) (Cart);
