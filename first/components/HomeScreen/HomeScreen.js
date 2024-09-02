import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tästä sovelluksesta löytyy navigoimalla nämä viikkotehtävien sovellusosat:<br/><br/>
            
            - Target Heart Rate ( <i>viikko 1</i> ) <br/>
            - Modal ( <i>viikko 2</i> ) <br/>
            - Custom navigation with React Native Paper ( <i>viikko 3</i> ) <br/>
            - Todo list ( <i>viikko 4</i> ) <br/>
            - <s>Tulossa ( <i>viikko 5</i> )</s> <br/>
            - <s>Tulossa ( <i>viikko 6</i> )</s> <br/>
            - <s>Tulossa ( <i>viikko 7</i> )</s> <br/>
            - <s>Tulossa ( <i>viikko 8</i> )</s> <br/>
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
