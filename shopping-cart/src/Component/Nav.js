import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <nav>
        <div className="rightnav">
           <Link to="/">Home</Link> 
        </div>  
        <div className="leftnav">
            <Link to="/shop" className="shop">Shop</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
      </nav>
    );
}

export default Nav;