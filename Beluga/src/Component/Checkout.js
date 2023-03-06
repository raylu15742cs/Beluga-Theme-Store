import { Link } from "react-router-dom";
import { useState } from "react";

const Checkout = ({shopCart, clearScore}) => {
  const [popup, setPopup] = useState(false);
  const [blurapp , setBlurapp] = useState(true)

  const checkoutTime = () => {
    setPopup(true)
    setBlurapp(false)
  }
  if(Object.keys(shopCart).length >= 1) {
    let totalitems =  Object.keys(shopCart).length 
      return (
        <div>
          <div className={blurapp ? 'checkout' : 'checkout blur'}>
            <div className="checkoutitems">
              <h1> Your Bag</h1>
              {Object.keys(shopCart).map((key, i) => {
                return (
                  <div className="item">
                    <img
                      class="checkoutimage"
                      src={require(`../img/beluga.png`)}
                      alt="beluga"
                    ></img>
                    <div>
                      <h1>{shopCart[key][0]}</h1>
                      <p key={key}>Size : {shopCart[key][1]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total">
              <div className="totalz">
                <h2> Order Summary</h2>
                <div className="totals">
                  <div className="lefttotal">
                    <p> Original Price</p>
                    <p> Number Items</p>
                    <p> Deliver </p>
                    <h3> Total </h3>
                  </div>
                  <div className="righttotal">
                    <p className="righttotalfirst"> 240</p>
                    <p> {totalitems}</p>
                    <p> Free</p>
                    <h3> ${totalitems * 240}</h3>
                  </div>
                </div>
                <button onClick={checkoutTime} className="checkoutbutton">
                  Checkout
                </button>
              </div>
            </div>
          </div>
          {popup ? (
            <div className="returnHome">
              <h1>Checkout is currently not available</h1>
              <Link to="/">
                <button onClick={clearScore}>Return to Home</button>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      );
    
  } else {
    return (
      <div className="empty" >
        <h2>Shopping Cart is Empty</h2>
      </div>
    )
  }
}

export default Checkout