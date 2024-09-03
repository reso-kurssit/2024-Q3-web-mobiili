import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Map() {

    return (
        <View style={styles.container}>
          <Text>Kartta toimii mobiililaitteella, ei avattavissa web-alustalta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },

});
