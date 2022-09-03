import { Image, Text, View, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className='bg-white pt-2'>
            <View className='flex flex-row pb-3 items-center mx-4 space-x-2'>
                <Image
                    source={{
                        uri: "https://img.freepik.com/free-vector/delivery-guy-motor-scooter-wearing-mask_23-2148498576.jpg?w=826&t=st=1662206270~exp=1662206870~hmac=8615e2978e66134a5de1aa37a9f54e61eced9cdebbe5010af75021feabc5ae0f",
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Cureent Location
                        <Ionicons name='chevron-down' size={20} color='#00CCBB' />
                    </Text>
                </View>
                <Ionicons name='person-outline' size={28} color='#00CCBB' />
            </View>
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-1 items-center flex-row space-x-2  bg-gray-200 p-2'>
                    <Ionicons name='search' size={20} color='gray' />
                    <TextInput
                        placeholder={"Restaurants and cuisines"}
                        placeholderTextColor={"gray"}
                        keyboardType='default'
                        textAlignVertical={"center"}
                    />
                </View>
                <Ionicons style name='filter' size={28} color='#00CCBB' />
            </View>
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Categories />
                <FeaturedRow title='featured' description='Featured' featuredCategory='data' />
                <FeaturedRow title='Explore' description='Explore' featuredCategory='data' />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
