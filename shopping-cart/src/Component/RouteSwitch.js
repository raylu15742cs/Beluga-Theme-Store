import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import Nav from "./Nav"
import Footer from "./Footer"

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default RouteSwitch