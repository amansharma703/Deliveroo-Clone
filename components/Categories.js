import { View, ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./Card/CategoryCard";

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000' title='testing 1' />
            <CategoryCard imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000' title='testing 2' />
            <CategoryCard imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000' title='testing 3' />
            <CategoryCard imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000' title='testing 4' />
            <CategoryCard imgUrl='https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000' title='testing 5' />
        </ScrollView>
    );
};

export default Categories;
