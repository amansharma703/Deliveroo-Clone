import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_des, dishes, long, lat }) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1 pb-1'>
                    <Ionicons name={Platform.OS === "android" ? "star" : "ios-star"} size={20} color='#00CCBB' />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-xs text-green-500'>{rating}</Text>.{genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Ionicons name={Platform.OS === "android" ? "location-outline" : "ios-location-outline"} size={20} color='gray' />
                    <Text className='text-sm text-gray-500'>Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;