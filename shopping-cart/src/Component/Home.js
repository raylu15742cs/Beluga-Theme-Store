import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="leftsidehome">
        <h1>Yeezy 350 Beluga</h1>
        <Link to="odin-shopping-cart/shop" className="shops"><button >Buy Now</button></Link>
      </div>
      <img  className="belugaimg" src={require(`../img/beluga.png`)} alt="beluga"></img>
    </div>
  );
};

export default Home;
