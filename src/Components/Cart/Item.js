import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adjustQty, removeFromCart } from '../../Redux/Shop/shop-action'

function Item({itemData, removeFromCart, adjustQty}) {
    const [input, setinput] = useState(itemData.qty);

    const handleChanges = (e)=>{
        setinput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <div className='item flex'>
                    <div className='item-img'>
                        <img src={itemData.img} alt={itemData.title}/>
                    </div>
                    <div className='item-dsc'>
                        <p>{itemData.title}</p>
                        <p>{itemData.subtitle}</p>
                    </div>
                    <div className='item-qty'>
                        <input type='number' min="1" max="5" value={input} onChange={handleChanges}/>
                    </div>
                    <div className='item-price'>
                        <p>{itemData.price} RS</p>
                    </div>
                    <button onClick={()=> removeFromCart(itemData.id)} >Remove</button>
         </div>
    )
}

const MapDispatchToProps = (dispatch) =>{
    return{
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id,value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, MapDispatchToProps)(Item) 
