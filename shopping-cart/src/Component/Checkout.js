import { Link } from "react-router-dom";

const Checkout = () => {
    return (
      <div>
        <h1>Checkout</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </div>
    );
}

export default Checkout