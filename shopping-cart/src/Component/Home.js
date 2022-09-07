import { Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </div>
  );
};

export default Home;
