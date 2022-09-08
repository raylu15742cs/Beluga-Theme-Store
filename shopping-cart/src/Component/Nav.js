import { Link } from "react-router-dom";
const Nav = ({ score , setScore}) => {
    return (
      <nav>
        <div className="rightnav">
           <Link to="/">Home</Link> 
        </div>  
        <div className="leftnav">
            <Link to="/shop" className="shops">Shop</Link>
            <Link onClick={setScore} to="/checkout"><img onClick={setScore}  className="bag" src={require("../img/bag.png")} alt="hi"></img></Link>
            <p onClick={setScore} className="insidebox">{score}</p>
        </div>
      </nav>
    );
}

export default Nav;