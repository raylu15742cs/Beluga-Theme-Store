import { Link } from "react-router-dom";

const Checkout = ({shopCart, clearScore}) => {
  if(Object.keys(shopCart).length >= 1) {
    let totalitems =  Object.keys(shopCart).length 
      return (
        <div className="checkout">
          <div className="checkoutitems">
            <h1> Your Bag</h1>
            {Object.keys(shopCart).map((key, i) => {
              return (
                <div className="item">
                  <img class="checkoutimage" src={require(`../img/beluga.png`)} alt="beluga"></img>
                  <div> 
                    <h1>{shopCart[key][0]}</h1>
                  <p key={key}>
                     Size : {shopCart[key][1]}
                  </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="total">
              <div className="lefttotal">
                <h3> Order Summary</h3>
                <p> Original Price</p>
                <p> Number Items</p>
                <p> Deliver </p>
                <h3> Total </h3>
              </div>
              <div className="righttotal">
                <p className="righttotalfirst"> 240</p>
                <p> {totalitems}</p>
                <p> Free</p>
                <p> ${totalitems * 240}</p>
              </div>
            </div>
            <button onClick={clearScore} className="checkoutbutton"> <Link to="/" >Checkout</Link></button>
          </div>
        </div>
      );
    
  } else {
    return (
      <div className="empty" >
        <h1>Shopping Cart is Empty</h1>
      </div>
    )
  }
}

export default Checkout