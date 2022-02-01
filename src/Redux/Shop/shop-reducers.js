import * as actionTypes from './shop-types';

const INITIAL_STATE ={
    products: [{
        id: 1,
        title: 'Lamp Rio',
        subtitle: 'Lamp for a room',
        price: 70,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        
    },{
        id: 2,
        title: 'Lamp Blue',
        subtitle: 'Lamp for a room',
        price: 78,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1573469635233-7974cb21a915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        
    },
    {
        id: 3,
        title: 'Lamp Yellow',
        subtitle: 'Lamp for a room',
        price: 90,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1614743559948-d158e36ecb4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        
    },
    {
        id: 4,
        title: 'Lamp XIO',
        subtitle: 'Lamp for a room',
        price: 30,
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        
    }
],
    cart:[],
    currentItem: null
}
const shopreducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //check item exists in products
            const item = state.products.find((prod)=> prod.id === action.payload.id);
            //check item exists in cart
            const isCart = state.cart.find((item)=> item.id === action.payload.id ? true: false)
            return{
                ...state,
                cart: isCart? state.cart.map((item)=>item.id === action.payload.id ? { ...item, qty: item.qty + 1}: item ): [...state.cart, {...item,qty:1}],
                
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item=>item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item=>item.id === action.payload.id? {...item, qty: +action.payload.qty}:item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload

            }  
        default:
            return state;
    }

}

export default shopreducer;