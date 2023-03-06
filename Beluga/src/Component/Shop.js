import { Link } from "react-router-dom";
import React from 'react';
import Carousel from "better-react-carousel";

const Shop = ( { score, shopCart, setShopCart ,setScore} ) => {
  const test = () => {
    let select = document.getElementById("language")
    var value = select.options[select.selectedIndex].value;
    console.log(`beluga ${value}`)

    setShopCart({...shopCart , [score] : ["Beluga", value]})
    setScore()

  }
  return (
    <div className="shop">
      <Carousel cols={1} rows={1} loop>
        <Carousel.Item>
          <img src={require(`../img/beluga_left.webp`)} alt="beluga"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="belugaright" src={require(`../img/beluga_right.png`)} alt="beluga"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require(`../img/beluga.png`)} alt="beluga"></img>
        </Carousel.Item>
      </Carousel>
      <div className="shopinside">
        <h1>Yeezy Beluga 350 V2</h1>
        <h3>Product Description</h3>
        <p>
          {' '}
          One of Yeezy's most celebrated designs received a reflective makeover
          with the adidas Yeezy Boost 350 V2 Beluga Reflective.
        </p>
        <p>
          The adidas Yeezy Boost 350 V2 Beluga Reflective builds off of the
          original Beluga colorway by adding reflective qualities and speckled
          orange accents to its Primeknit upper. Signature details like a Boost
          sole and orange side stripe complete the design.
        </p>
        <p>
          The adidas Yeezy Boost 350 V2 Beluga Reflective released in December
          of 2021 and retailed for $240.
        </p>
        <h3>Price: $240</h3>
        <select id="language">
          <option value="4">Size 4</option>
          <option value="5">Size 5</option>
          <option value="6">Size 6</option>
          <option value="7">Size 7</option>
          <option value="8">Size 8</option>
          <option value="9">Size 9</option>
          <option value="10">Size 10</option>
          <option value="11">Size 11</option>
          <option value="12">Size 12</option>
        </select>
        <button onClick={test}>Add to Cart</button>
        <Link to="/checkout">
          <button>Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
