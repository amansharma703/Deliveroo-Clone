import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const counterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTOCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newCart = [...state.items];
            if (index > 0) {
                newCart.splice(index, 1);
            } else {
                console.log(`can't remove product with id : ${action.payload.id} as it is not present in cart`);
            }
            state.items = newCart;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTOCart, removeFromCart } = counterSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemById = (state, id) => {
    return state.cart.items.filter((item) => item.id === id);
};

export const getCartTotal = (state) => {
    return state.cart.items.reduce((total, item) => (total += item.price), 0);
};

export default counterSlice.reducer;
