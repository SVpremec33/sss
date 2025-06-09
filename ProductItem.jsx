import { useCart } from "../../context/CartContext";

function ProductItem({product}) {

    const { addToCart } = useCart();

    function handleAddtoCart() {
        addToCart(product)
    }

    return (
        <div className="product-item">
            <img src={product} alt={product.name} class="product-item__img" />
            <h3 className="product-item__title">{product.name}</h3>
            <p className="product-item__description">{product.description}</p>
            <p className="product-item__description">{product.category}</p>
            <div class="product-item__action">
                <strong className="product-item__title">{product.price.toLocaleString()} &#8376;</strong>
                <button className="add-button" onClick={handleAddtoCart}>
                В корзину
                </button>
            </div>
        </div>
    );
}


export default ProductItem;