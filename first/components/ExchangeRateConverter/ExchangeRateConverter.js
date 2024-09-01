import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ExchangeRateConverter() {

    const [euros, setEuros] = React.useState("");
    const [pounds, setPounds] = React.useState(0);

    const calculate = () => {
        const resultInPounds = euros.replace (",", ".") * 0.9
        setPounds(resultInPounds.toFixed(2));
    }

    return (
        <View style={styles.container}>
        <Text style={styles.info}>Convert euros to pounds &#187; Enter amount in euros</Text>
        <Text style={styles.field}>Euros:</Text>
        <TextInput
        style={styles.field}
        value={euros}
        onChangeText={text => setEuros(text)}
        keyboardType="decimal-pad"
        />
        <Text style={styles.field}>Pounds:</Text>
        <Text style={styles.field}>{pounds}</Text>
        <Button title="Calculate" onPress={calculate} />

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