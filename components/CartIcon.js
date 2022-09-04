import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, getCartTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
    const items = useSelector(selectCartItems);
    const navigation = useNavigation();
    const cartTotal = useSelector(getCartTotal);

    if (items.length === 0) return null;

    return (
        <View className='absolute bottom-5 w-full z-10'>
            <TouchableOpacity
                className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
                onPress={() => navigation.navigate("Cart")}
            >
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
                <Text className='text-white font-extrabold text-lg flex-1 text-center'> View Cart</Text>
                <Text className='text-white font-extrabold text-lg'> ₹ {cartTotal}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartIcon;
