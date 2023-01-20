import './productItem.css';

const Product = ({ product, addToCartHandler }) => {

    return (
        <>
            <div className="inner-product-div">
                <div className='product-pic'>
                    <img className="" src={product.image} alt="product-image" />
                </div>
                <div className="product-info-div">
                    <div className="typography-div">
                        <p className="product-name">{product.name}</p>
                        <p className="product-supplements">{product.caption}</p>
                        <p className="product-price"><span className="currency-symbol">$ </span> {(product.price).toFixed(2)}</p>
                    </div>
                </div>
                <div className="div-basket-button">
                    <button className="basket-button" onClick={() => addToCartHandler(product)}>
                        <img src="./images/shopping-basket.png" alt="basket-image" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Product;
