import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RestaurantCard from "./Card/RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    const fetchDataFromSanity = async () => {
        await sanityClient
            .fetch(
                `*[_type == "featured" && _id == $id]{
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->{
                        ...,
                        }
                    }
                }[0]
            `,
                { id }
            )
            .then((data) => {
                setRestaurants(data?.restaurants);
            });
    };

    useEffect(() => {
        fetchDataFromSanity();
    }, [id]);

    return (
        <View>
            <View className='mt-4 flex flex-row items-center justify-between px-4'>
                <Text className='font-medium text-lg'>{title}</Text>
                <Ionicons name='ios-arrow-forward' size={28} color='#498fdd' />
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
                {restaurants?.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.title}
                            rating={restaurant.rating}
                            genre={restaurant.genre}
                            address={restaurant.address}
                            short_des={restaurant.short_des}
                            dishes={restaurant.dishes}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
