import {Routes, Route,Navigate } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import ProductDetail from './Components/SingleItem/ProductDetail';
import Products from './Components/Products/Products';
import './Styles/App.scss';
import { connect } from 'react-redux';
function App({current}) {
  const GoToHome= ()=>{
      if (!current) {
       return <Navigate to="/" />      
  }
  else<Navigate to='/product/:id'/>
  return <ProductDetail/>
  }
  return (

    <div className="App">
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Products/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path={`/product/:id`} element={<GoToHome><ProductDetail/> </GoToHome> } />
    </Routes>
    </div>

  );
}
const mapStateToProps = state =>{
  return{
  current: state.shop.currentItem

  }
}

export default connect(mapStateToProps) (App);
