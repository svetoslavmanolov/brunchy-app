import { useState, useContext, useRef } from 'react';
import { BrunchyContext } from '../../Context/BrunchyContext';
import uuid from 'react-uuid';

import ProductItem from '../Products/Product/ProductItem'
import OrderButtons from '../../components/OrderButtons/OrderButtons';
import products from '../../data.json';
import './products.css';


const Products = ({ setOrderModal, setBasketModal, basketModal }) => {
    const { state, dispatch } = useContext(BrunchyContext);
    const { cart } = state;

    const addToCartHandler = async (product) => {
        const existingItem = cart.cartItems.find((item) => item.name === product.name);
        const quantity = existingItem ? existingItem.quantity + 1 : 1;

        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    }

    return (
        <>
            <div className="main-product-div">
                {products.items.length > 0
                    ? products.items.map(x => <ProductItem
                        key={uuid()}
                        product={x}
                        addToCartHandler={addToCartHandler}
                    />)
                    : <p>Sorry, there are no products!</p>}
            </div>

            {!basketModal && (
                <OrderButtons
                    setOrderModal={setOrderModal}
                    setBasketModal={setBasketModal}
                />
            )}
        </>
    );
}

export default Products;