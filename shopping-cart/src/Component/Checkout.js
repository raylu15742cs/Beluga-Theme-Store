

const Checkout = ({shopCart}) => {
  if(Object.keys(shopCart).length >= 1) {
      return (
        <div className="checkout">
          <div>
            { 
              Object.keys(shopCart).map(( key ,i) => {
                return(
                  <h1 key={i}>{shopCart[key][0]} size : {shopCart[key][1]}</h1>
                )
              }) 
            }
          </div>
        </div>
      );
    
  } else {
    return (
      <div className="checkout">
        <h1>Shopping Cart is Empty</h1>
      </div>
    )
  }
}

export default Checkout