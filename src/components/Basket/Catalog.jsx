import "./Catalog.css"
import { tomat, potato, cucumber } from "../../assets/images/images"




const products = [
    { id: 1, name: "Помидоры", price: 10, img: tomat },
    { id: 2, name: "Огурцы", price: 20, img: potato },
    { id: 3, name: "Картофель", price: 30, img: cucumber },
];
const Catalog = ({ basket, setBasket }) => {


    const addToBasket = (product) => {
        setBasket([...basket, product]);
    };

    return (
        <div className="catalog">
            {products.map(p => (
                <div className="product" key={p.id} >
                    <img src={p.img} alt={p.name} />
                    <span>{p.name} — {p.price}$</span>
                    <button className="buttonCatalog" onClick={() => addToBasket(p)}>
                        Add
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Catalog