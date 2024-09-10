import React, { useReducer } from "react";
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import AddItem from "./AddItem";
import GetItems from "./GetItems"

const backgroundimage = [
    require('./background4.jpg'),
];


export default function ShoppingList() {

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={backgroundimage[0]}
                style={styles.backgroundImage}
            />
            <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
            <AddItem/>
            <GetItems/>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 2,
    },
    item: {
        backgroundColor: "#d2d2d2",
        padding: 8,
        marginHorizontal: 14,
        borderRadius: 8
    },
    title: {
        fontSize: 32,
    },
    text: {
        fontSize: 20,
    },
    completedText: {
        fontSize: 20,
        textDecorationLine: "line-through",
    },
    itemCompleted: {
        backgroundColor: "#c2edc1",
    },
    deleteTaskButton: {
        backgroundColor: "#be4742",
        padding: 6,
        borderRadius: 10,
        position: "absolute",
        right: 38,
        top: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteTaskButtonText: {
        color: "#ffffff",
        fontSize: 16,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },

});