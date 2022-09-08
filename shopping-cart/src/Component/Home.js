import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Yeezy 350 Beluga</h1>
      <button> <Link to="/shop" className="shops">Shop Now</Link></button>
      <img  className="belugaimg" src={require(`../img/beluga.png`)} alt="beluga"></img>
    </div>
  );
};

export default Home;
