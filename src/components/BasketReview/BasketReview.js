import { useRef, useContext } from 'react';
import uuid from 'react-uuid';

import './BasketReview.css';

import products from '../../data.json';
import OrderedProduct from './OrderedProduct/OrderedProduct';
import OrderButtons from '../OrderButtons/OrderButtons';
import { BrunchyContext } from '../../Context/BrunchyContext';

const BasketReview = ({ handleClose, setOrderModal, setBasketModal }) => {
    const { state, dispatch } = useContext(BrunchyContext);
    const { cart } = state;

    const modalRef = useRef(null);
    const orderButtonRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && orderButtonRef.current && !orderButtonRef.current.contains(e.target)) {
            handleClose();
        }
    }

    return (
        <div onClick={handleClickOutside} className="modal-basket-div-wrapper">
            <div className="" style={{ display: 'block' }}>
                <div ref={modalRef} className="main-div-review">
                    {cart.cartItems.map(product => <OrderedProduct key={uuid()} product={product} />)}

                    <div>
                        <hr className="orders-line" />
                    </div>

                    <div className="single-order-div">
                        <p className="basket-name">Total</p>
                        <p className="basket-price"><span className="basket-symbol">$ </span> {cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0).toFixed(2)}</p>
                    </div>
                </div>
                <div ref={orderButtonRef}>
                    <OrderButtons
                        setOrderModal={setOrderModal}
                        setBasketModal={setBasketModal}
                    />
                </div>
            </div>
        </div>
    );
}

export default BasketReview;