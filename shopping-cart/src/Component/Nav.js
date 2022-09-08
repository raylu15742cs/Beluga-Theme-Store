import { Link } from "react-router-dom";
import {useState} from "react";
const Nav = () => {
    const [score , setScore] = useState(0)
    return (
      <nav>
        <div className="rightnav">
           <Link to="/">Home</Link> 
        </div>  
        <div className="leftnav">
            <Link to="/shop" className="shop">Shop</Link>
            <Link onClick={()=> setScore(score+1)} to="/checkout"><img className="bag" src={require("../img/bag.png")} alt="hi"></img></Link>
            <p onClick={()=> setScore(score+1)} className="insidebox">{score}</p>
        </div>
      </nav>
    );
}

export default Nav;