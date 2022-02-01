import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FcShop} from 'react-icons/fc'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <header className='flex'>
            <div className='logo flex'>
                <FcShop size={32}/>
                <Link to='/'><h1>12shop</h1></Link>
            </div>
            <div className='cart'>
                <Link to='/cart'><AiOutlineShoppingCart size={32} color='Black' /></Link>
            </div>
        </header>
    )
}

export default Navbar
