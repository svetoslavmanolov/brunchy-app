import { useContext } from "react";

import { BrunchyContext } from "../../../Context/BrunchyContext";

const OrderedProduct = ({ product }) => {
    const { state } = useContext(BrunchyContext);
    const { cart } = state;

    return (
        <div className="single-order-div">
            <p className="basket-name">{product.name}</p>
            <p className="basket-price">{product.quantity} x<span className="basket-symbol">$</span>{(product.price).toFixed(2)}</p>
        </div>
    );
}

export default OrderedProduct;