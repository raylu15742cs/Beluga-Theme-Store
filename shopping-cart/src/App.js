import { Routes, Route } from 'react-router-dom';
import Checkout from './Component/Checkout';
import Home from './Component/Home';
import Shop from "./Component/Shop"
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';

const App = () => {
    const [score, setScore] = useState(0);
    const [shopCart , setShopCart] = useState({})
    const updatescore = () => {setScore(score+1)}
    const clearScore = () => {
      setScore(score-score)
      Object.keys(shopCart).forEach((k) => delete shopCart[k])
      console.log('clear')
    }
    useEffect(() => {
      console.log(shopCart)
    })
    return (
      <div>
          <Nav score={score} setScore={updatescore}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop  score={score} setScore={updatescore} setShopCart={setShopCart} shopCart={shopCart}/>} />
            <Route path="/checkout" element={<Checkout shopCart={shopCart} clearScore={clearScore} />} />
          </Routes>
          <Footer />
      </div>
    );
}

export default App;