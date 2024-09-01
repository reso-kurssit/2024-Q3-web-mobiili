import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tästä sovelluksesta löytyy navigoimalla nämä sovellusosat:<br/><br/>
            
            - Target Heart Rate (viikkotehtävä, viikko 1) <br/>
            - Modal (viikkotehtävä, viikko 2) <br/>
            - Custom navigation with React Native Paper (viikkotehtävä, viikko 3) <br/>
            - Exchange Rate Converter (harjoitus) <br/>
</Text>
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
