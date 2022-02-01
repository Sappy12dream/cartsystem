import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Shop/shop-action';


function ProductDetail({currentItem, addToCart}) {
    return (
        <div className='productDetails flex'>
            <img src={currentItem.img} alt={currentItem.title}/>
            <div className='disc'>
                <div className='flex'>
                    <h2>{currentItem.title}</h2>
                    <button onClick={()=> addToCart(currentItem.id)}>Add to cart</button>
                </div>
                <p>{currentItem.price} RS</p>
                <p>{currentItem.desc}</p>

            </div>

        </div>
    )
}

const mapStateToProps = state =>{
    return{
        currentItem: state.shop.currentItem,

    }
}
const MapDispatchToProps = (dispatch) =>{
    return{
    addToCart: (id) => dispatch(addToCart(id)),
    }
}
export default connect(mapStateToProps, MapDispatchToProps) (ProductDetail)
