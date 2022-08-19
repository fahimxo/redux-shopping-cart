
import { Route, Routes } from "react-router-dom";
import Shop from './components/shop/Shop';
import ProductDetails from './components/productDetails/ProductDetails';
import Navbar from './components/shared/navbar/Navbar';
import ShopCart from './components/shopCart/ShopCart';

function App() {
  return (<>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/products" element={<Shop/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/shopcart" element={<ShopCart/>} />
        </Routes>
     </>
  );
}

export default App;