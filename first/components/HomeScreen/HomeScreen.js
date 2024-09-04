import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tästä sovelluksesta löytyy navigoimalla nämä viikkotehtävien sovellusosat: {"\n"}{"\n"}
            
            - Target Heart Rate ( <Text style={styles.italic}>viikko 1</Text> ){"\n"}
            - Modal ( <Text style={styles.italic}>viikko 2</Text> ) {"\n"}
            - Custom navigation with React Native Paper ( <Text style={styles.italic}>viikko 3</Text> ) {"\n"}
            - Todo list ( <Text style={styles.italic}>viikko 4</Text> ) {"\n"}
            - Map with multiple markers ( <Text style={styles.italic}>viikko 5</Text> ) {"\n"}
            - Retrieving data from API ( <Text style={styles.italic}>viikko 6</Text> ) {"\n"}{"\n"}
            
            - Tulossa ( <Text style={styles.italic}>viikko 7</Text> ) {"\n"}
            - Tulossa ( <Text style={styles.italic}>viikko 8</Text> )
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
    },
    italic: {
        fontStyle: 'italic',
    }
});
