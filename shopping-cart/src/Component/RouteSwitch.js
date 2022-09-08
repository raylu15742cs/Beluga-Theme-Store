import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import Nav from "./Nav"
import Footer from "./Footer"
import { useEffect, useState } from 'react';

const RouteSwitch = () => {
    const [score, setScore] = useState(0);
    const [shopCart , setShopCart] = useState({})
    const updatescore = () => {setScore(score+1)}

    useEffect(() => {
      console.log(shopCart)
    })
    return (
      <BrowserRouter>
        <Nav score={score} setScore={updatescore}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop  score={score} setScore={updatescore} setShopCart={setShopCart} shopCart={shopCart}/>} />
          <Route path="/checkout" element={<Checkout shopCart={shopCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default RouteSwitch