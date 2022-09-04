import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { getCartTotal, removeFromCart, selectCartItems } from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { urlFor } from "../sanity";

const CartScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectCartItems);
    const cartTotal = useSelector(getCartTotal);
    const dispatch = useDispatch();
    const [grouppedItemInCart, setGrouppedItemInCart] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGrouppedItemInCart(groupedItems);
    }, [items]);

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-2 border-b border-[gray] shadow-xs bg-white'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Cart</Text>
                        <Text className='text-lg font-bold text-center'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        className='absolute top-3 right-5 '
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Entypo name='circle-with-cross' size={30} color='#00CCBB' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                    <Image
                        source={{
                            uri: "https://img.freepik.com/free-vector/delivery-guy-motor-scooter-wearing-mask_23-2148498576.jpg?w=826&t=st=1662206270~exp=1662206870~hmac=8615e2978e66134a5de1aa37a9f54e61eced9cdebbe5010af75021feabc5ae0f",
                        }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <Text className='flex-1 '>Deliver in 50-60 min </Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'> Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {Object.entries(grouppedItemInCart).map(([key, items]) => {
                        return (
                            <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                                <Text className='text-[#00CCBB]'>{items.length} x</Text>
                                <Image
                                    source={{
                                        uri: urlFor(items[0]?.image).url(),
                                    }}
                                    className='h-12 w-12 rounded-full'
                                />
                                <Text className='flex-1'> {items[0]?.name}</Text>
                                <Text className='text-gray-600'> ₹ {items[0]?.price}</Text>
                                <TouchableOpacity>
                                    <Text className='text-[#00CCBB] text-sm' onPress={() => dispatch(removeFromCart({ id: key }))}>
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-500'> Subtotal</Text>
                        <Text className='text-gray-500'>₹ {cartTotal}</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-500'> DeliveryFee</Text>
                        <Text className='text-gray-500'>₹ 29</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text> Order Total</Text>
                        <Text className='font-extrabold'>₹ {cartTotal + 29}</Text>
                    </View>
                    <TouchableOpacity className='rounded-lg bg-[#33CCBB] p-4'>
                        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;
