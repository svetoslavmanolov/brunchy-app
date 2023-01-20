import { useContext } from "react";
import { BrunchyContext } from "../../Context/BrunchyContext";

const OrderButtons = ({ setOrderModal, setBasketModal }) => {
    const { state, dispatch } = useContext(BrunchyContext);
    const { cart } = state;

    const clearCartHandler = () => {
        setOrderModal(true);
        setBasketModal(false);
        dispatch({ type: 'CLEAR_CART' });
        localStorage.setItem('cart', JSON.stringify({
            ...cart,
            cartItems: [],
        }))
    }

    return (
        <div className="main-order-wrapper">
            <div className="basket-wrapper-div" onClick={() => setBasketModal((prevState) => !prevState)}>
                <img src="./images/shopping-basket.png" alt="basket-icon" />
            </div>
            <div className="order-price-wrapper">
                {cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0).toFixed(2)} $
            </div>
            <div>
                <button className="order-now-button" onClick={clearCartHandler}>
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default OrderButtons;