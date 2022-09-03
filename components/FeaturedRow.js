import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import RestaurantCard from "./Card/RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    return (
        <View>
            <View className='mt-4 flex flex-row items-center justify-between px-4'>
                <Text className='font-medium text-lg'>{title}</Text>
                <Ionicons name='ios-arrow-forward' size={28} color='#00CCBB' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='pt-3'
            >
                <RestaurantCard
                    id={1}
                    imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000'
                    title='Pizza'
                    rating={4.5}
                    genre='Italian'
                    address='sda'
                    short_des='love pizza'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={1}
                    imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000'
                    title='Pizza'
                    rating={4.5}
                    genre='Italian'
                    address='sda'
                    short_des='love pizza'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={1}
                    imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000'
                    title='Pizza'
                    rating={4.5}
                    genre='Italian'
                    address='sda'
                    short_des='love pizza'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
