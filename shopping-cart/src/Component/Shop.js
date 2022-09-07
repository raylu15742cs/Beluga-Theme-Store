import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </div>
  );
};

export default Shop;
