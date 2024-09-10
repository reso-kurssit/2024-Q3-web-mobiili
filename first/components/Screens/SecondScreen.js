import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function DefaultScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🥳 🎊	 Pääsit tokalle screenille! {"\n"}{"\n"}
                <Text style={styles.secondTitle}>Home-näkymästä pääsee tähän suoraan eteenpäin vievästä nuoli-kuvakkeesta ja mistä tahansa kohtaa sovellusta valikon kautta "Viikko 3". </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 35,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    secondTitle: {
        fontSize: 18,
        color: '#b92c07',
    },
});
