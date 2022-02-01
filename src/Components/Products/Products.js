import React from 'react'
import Product from './Product';
import {connect} from 'react-redux';

function Products({products}) {
    return (
        <div className='products-wrap'>
            {products.map((pro)=>(
                    <Product key ={pro.id} productData={pro}/>           
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>{
   return { products: state.shop.products,}
};

export default connect(mapStateToProps)(Products);
