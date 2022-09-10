import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
    const {
        params: { id, imgUrl, title, rating, genre, address, short_des, dishes, long, lat },
    } = useRoute();

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setRestaurant({
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_des,
                dishes,
                long,
                lat,
            })
        );
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className='relative'>
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url(),
                        }}
                        className='w-full h-56 bg-gray-300 p-4'
                    />
                    <TouchableOpacity
                        className='absolute top-12 left-5 p-2 bg-gray-100 rounded-full'
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Ionicons name='arrow-back' size={25} color='#498fdd' />
                    </TouchableOpacity>
                </View>
                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold mb-1'>{title}</Text>
                        <View className='flex-row space-x-2 items-center'>
                            <View className='flex-row space-x-2 items-center'>
                                <Ionicons name={Platform.OS === "android" ? "star" : "ios-star"} size={20} color='#498fdd' />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-xs '>{rating}</Text>.{genre}
                                </Text>
                            </View>
                            <View className='flex-row items-center space-x-1'>
                                <Ionicons name={Platform.OS === "android" ? "location-outline" : "ios-location-outline"} size={20} color='gray' />
                                <Text className='text-sm text-gray-500'>{address.slice(0, 15)}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-4'>{short_des}</Text>
                    </View>
                </View>
                <View className='pb-28'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
                    {dishes?.map((dish) => {
                        return (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.title}
                                description={dish.short_des}
                                price={dish.price}
                                image={dish.image}
                                imgUrl={urlFor(dish.image).url()}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </>
    );
};

export default RestaurantScreen;
