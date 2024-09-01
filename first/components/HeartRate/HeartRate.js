import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HeartRate() {

    const [age, setAge] = React.useState("");
    const [heartRateLimitLowest, setHeartRateLimitLowest] = React.useState(0);
    const [heartRateLimitMost, setHeartRateLimitMost] = React.useState(0);

    const setHeartRateLimitsByAge = () => {
        const heartRateLimitLowest = (220 - age) * 0.65;
        const heartRateLimitMost = (220 - age) * 0.85;
        setHeartRateLimitLowest(heartRateLimitLowest);
        setHeartRateLimitMost(heartRateLimitMost);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.info}>Heart rates by age for doing sports &#187; Enter age</Text>
        <Text>Age:</Text>
        <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="number-pad"
        />
        <Text style={styles.field}>Heartrate Limits:</Text>
        <Text style={styles.field}>{heartRateLimitLowest} - {heartRateLimitMost}</Text>
        <Button title="Calculate" onPress={setHeartRateLimitsByAge} />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 10,
        padding: 8,
        backgroundColor: "#f5f5f5",
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        marginBottom: 10
    },
    info: {
        fontStyle: 'italic',
        padding: 20,
    }
});

