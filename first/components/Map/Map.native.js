import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {

    const [location, setLocation] = useState(null);
    const [marker, setMarker] = useState([]); 
    
    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
    
        try {
    
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
    
            const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
            setLocation({ 
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221
            })
            } catch (error) {
                console.log(error);
        }
    }
    
    const handleLongPress = (event) => {
        const newMarker = {
            coordinate: event.nativeEvent.coordinate
        };
        setMarker([...marker, newMarker]); 
    };
    useEffect(() => {
        getUserLocation();
    }
    , []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={location}
                mapType="satellite"
                onLongPress={handleLongPress}
            >
                    {marker.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.coordinate}
                            image={require('./marker.png')}
                        />
                    ))}
            </MapView>
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
    map: {
        width: '100%',
        height: '100%',
    },
});
