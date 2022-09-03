import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { Entypo } from "@expo/vector-icons";

const DishRow = ({ id, name, description, image, price, imgUrl }) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <>
            <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`} onPress={() => setIsPressed(!isPressed)}>
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>₹ {price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "3F3F3F4",
                            }}
                            source={{
                                uri: imgUrl,
                            }}
                            className='w-20 h-20 bg-gray-300 p-4 rounded'
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-2'>
                        <TouchableOpacity>
                            <Entypo name='circle-with-minus' size={30} color='#00CCBB' />
                        </TouchableOpacity>
                        <Text className='text-lg'>0</Text>
                        <TouchableOpacity>
                            <Entypo name='circle-with-plus' size={30} color='#00CCBB' />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;
