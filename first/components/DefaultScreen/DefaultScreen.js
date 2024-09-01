import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function DefaultScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Second Screen is here!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 35,
        backgroundColor: '#f8f8f8',
    },
    secondTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    }
});
