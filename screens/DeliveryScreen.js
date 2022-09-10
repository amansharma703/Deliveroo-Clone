import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { Entypo } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className='bg-[#498fdd] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                    >
                        <Entypo name='circle-with-cross' size={30} color='white' />
                    </TouchableOpacity>
                    <Text className='text-white text-medium'>Order Help!</Text>
                </View>
                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-2xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://media.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif",
                            }}
                            className='h-20 w-20'
                        />
                    </View>
                    <Progress.Bar size={30} color='#498fdd' indeterminate={true} />
                    <Text className='mt-3 text-gray-500'>Your order at {restaurant.title} is being prepared</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                zoomEnabled={true}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_des}
                    identifier='origin'
                    pinColor='#498fdd'
                />
            </MapView>
            <View className='bg-white flex-row items-center space-x-5 h-24'>
                <Image
                    source={{
                        uri: "https://img.freepik.com/free-vector/delivery-guy-motor-scooter-wearing-mask_23-2148498576.jpg?w=826&t=st=1662206270~exp=1662206870~hmac=8615e2978e66134a5de1aa37a9f54e61eced9cdebbe5010af75021feabc5ae0f",
                    }}
                    className='h-12 w-12 bg-gray-300  rounded-full ml-5'
                />
                <View className='flex-1'>
                    <Text className='text-lg'>Aman Sharma</Text>
                    <Text className='text-gray-400'>Your Rider</Text>
                </View>
                <Text className='text-[#498fdd] text-lg mr-5 font-bold '>Call</Text>
            </View>
        </View>
    );
};

export default DeliveryScreen;
