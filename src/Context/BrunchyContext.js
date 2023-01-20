import React, { createContext, useReducer } from "react";

export const BrunchyContext = createContext();

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
        cartItems: []
    }
};

function reducer (state, action) {

    switch (action.type) {
            case 'CART_ADD_ITEM': {
                const newItem = action.payload;
                const existingItem = state.cart.cartItems.find((item) => item.name === newItem.name);
                const cartItems = existingItem ? state.cart.cartItems.map((item) => item.name === existingItem.name ? newItem : item) : [...state.cart.cartItems, newItem];

                localStorage.setItem('cart', JSON.stringify({ ...state.cart, cartItems}));
                
                return { ...state, cart: { ...state.cart, cartItems } };
            };
            case 'CLEAR_CART': {
                return { ...state, cart: { ...state.cart, cartItems: [] }};
            };
        default:
            return state;
    }
}

export function BrunchyProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <BrunchyContext.Provider value={value}>
        {children}
    </BrunchyContext.Provider>
}


// import React, { createContext, useReducer } from "react";

// export const BrunchyContext = createContext();

// const initialState = {
//     basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : {
//         basketItems: []
//     }
// };

// function reducer(state, action) {

//     switch (action.type) {
//         case 'BASKET_ADD_ITEM': {
//             const newItem = action.payload;
//             const existingItem = state.basket.basketItems.find((item) => item.name === newItem.name);
//             const basketItems = existingItem ? state.basket.basketItems.map((item) => item.name === existingItem.name ? newItem : item) : [...state.basket.basketItems, newItem];

//             localStorage.setItem('basket', JSON.stringify(...state.basket, basketItems));  //----------
//             return {...state, basket: { ...state.basket, basketItems }}
//         };
//         case 'CLEAR_BASKET': {
//             return { ...state, basket: { ...state.basket, basketItems: [] }}
//         }
//         default:
//             return state;
//     }
// }

// export function BrunchyProvider({ children }) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const value = { state, dispatch };
//     return <BrunchyContext.Provider value={value}>
//         {children}
//     </BrunchyContext.Provider>
// }

