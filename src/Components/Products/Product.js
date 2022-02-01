import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, loadCurrentItem } from '../../Redux/Shop/shop-action'

function Product({productData, addToCart, loadCurrentItem}) {

    return (
        <div className='product'>
            <img src={productData.img} alt={productData.title}/>
            <div className='content flex'>
                <div>
                    <Link  to={`/product/${productData.id}`} ><h6 onClick={()=>loadCurrentItem(productData)}>{productData.title}</h6></Link>
                <p>{productData.price}</p>
                </div>               
                <button onClick={()=>addToCart(productData.id)}>Add to cart</button>          
            </div>            
        </div>
    )
}

const MapDispatchToProps = (dispatch) =>{
    return{
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}


export default connect(null, MapDispatchToProps) (Product)
