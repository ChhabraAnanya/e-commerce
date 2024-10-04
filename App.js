import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import MainCarousel from './customer/components/HomeCarousel/MainCarousel';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './customer/Routers/CustomerRouter';

function App() {
  return (
    <div className="App">
      <div>
<Navigation></Navigation>
</div>
        <Routes>
          <Route path='/' element={<CustomerRouter/>}></Route>

        </Routes>
       <div>
       <Footer/>
       </div>
      
 
    </div>

  );
}

export default App;
