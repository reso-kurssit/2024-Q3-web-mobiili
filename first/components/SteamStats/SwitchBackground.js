import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const images = [
    require('./background1.jpg'),
    require('./background2.jpg'),
    require('./background3.jpg'),
];

const SwitchBackground = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 9000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={images[currentImageIndex]}
                style={styles.backgroundImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },
});

export default SwitchBackground;
