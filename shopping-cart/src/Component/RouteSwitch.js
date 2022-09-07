import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
}

export default RouteSwitch