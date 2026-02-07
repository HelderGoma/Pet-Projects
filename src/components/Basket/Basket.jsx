import "./Basket.css"

const Basket = ({ basket, setBasket }) => {
    const removeFromBasket = (id) => {
        setBasket(basket.filter(item => item.id !== id));
    };

    const total = basket.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="basket">
            <h2>Basket</h2>
            {basket.length === 0 && <p>Basket is empty</p>}
            {basket.map(item => (
                <div className="product-basket" key={item.id}>
                    <span>{item.name} — {item.price}$</span>
                    <button className="buttonBasket" onClick={() => removeFromBasket(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
            {basket.length > 0 && <p>Total: {total}$</p>}
        </div>
    );
}

export default Basket