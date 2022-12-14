import { Link } from "react-router-dom";
const Nav = ({ score }) => {
    return (
      <nav>
        <div className="rightnav">
           <Link to="/"><h1>Home</h1></Link> 
        </div>  
        <div className="leftnav">
            <Link to="/shop" className="shops">Shop</Link>
            <Link to="/checkout"><img className="bag" src={require("../img/bag.png")} alt="hi"></img></Link>
            <p className="insidebox"><Link to="/checkout">{score}</Link></p>
        </div>
      </nav>
    );
}

export default Nav;