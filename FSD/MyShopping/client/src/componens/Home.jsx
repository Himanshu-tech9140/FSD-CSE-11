const Home = () => {
  const itemdata = [
    {name: "Wireless Mouse",price: 799},
    {name: "Mechanical Keyboard",price: 2499},
    { name: "Headphones", price: 3999},
    {name: "USB-C Hub",price: 1499 },
    {name: "Laptop Stand",price: 1199},
    {name: "Wireless Mouse",price: 799},
    { name: "Mechanical Keyboard", price: 2499},
    { name: "Headphones", price: 3999},
    {name: "USB-C Hub",price: 1499},
    { name: "Laptop Stand", price: 1199},
 ];

  return (
    <div>
        <br></br>
        <center><h1>Welcome to My Book Store</h1></center>
        <br></br>
      

      <div className="product-grid">
        {itemdata.map((item, index) => (
          <div key={index} className="product-card">

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button className="btn">
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;