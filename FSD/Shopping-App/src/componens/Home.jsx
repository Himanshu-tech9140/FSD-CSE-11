import productImages from '../assets/productImages.js';

const itemstore = () => {
    const itemdata = [
        { image: productImages.mouse, name: "Wireless Mouse", price: 799 },
        { image: productImages.keyboard, name: "Mechanical Keyboard", price: 2499 },
        { image: productImages.headphones, name: "Headphones", price: 3999 },
        { image: productImages.usbHub, name: "USB-C Hub", price: 1499 },
        { image: productImages.laptopStand, name: "Laptop Stand", price: 1199 },
    ];
    return (
        <div>
            <div className="product-grid">
                {itemdata.map((item, index) => (
                    <div key={index} className="product-card">
                        <img src={item.image} alt={item.name} className="product-img" />
                        <h3>{item.name}</h3>
                        <p>Rs {item.price}</p>
                        <button className="btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default itemstore;