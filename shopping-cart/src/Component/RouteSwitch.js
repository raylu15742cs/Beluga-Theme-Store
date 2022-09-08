import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import Nav from "./Nav"
import Footer from "./Footer"
import { useState } from 'react';

const RouteSwitch = () => {
    const [score, setScore] = useState(0);
    
    const updatescore = () => {setScore(score+1)}
    return (
      <BrowserRouter>
        <Nav score={score} setScore={updatescore}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop setScore={updatescore} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default RouteSwitch