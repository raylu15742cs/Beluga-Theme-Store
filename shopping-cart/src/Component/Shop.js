

const Shop = ( { score, shopCart, setShopCart ,setScore} ) => {
  const test = () => {
    let select = document.getElementById("language")
    var value = select.options[select.selectedIndex].value;
    console.log(`beluga ${value}`)

    setShopCart({...shopCart , [score] : ["beluga", value]})
    setScore()

  }
  return (
    <div className="shop">
      <img src={require(`../img/beluga.png`)} alt="beluga"></img>
      <div className="shopinside">
        <h1>Yeezy Beluga 350 V2</h1>
        <select id="language">
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={test}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Shop;
