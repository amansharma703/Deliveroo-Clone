import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer,
    },
});
