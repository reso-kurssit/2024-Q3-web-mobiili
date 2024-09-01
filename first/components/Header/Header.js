import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
        <Text style={styles.title}>Exercises</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.secondTitle}>Assignments (week 1, 2, .....)</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('HeartRate')}>
            <Text style={styles.link}>Target Heart Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
            <Text style={styles.link}>Modal</Text>
          </TouchableOpacity>
          </View>

        <Text style={styles.secondTitle}>For practice</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('ExchangeRateConverter')}>
            <Text style={styles.link}>Exchange Rate Converter</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
    };

    const styles = StyleSheet.create({
        header: {
          padding: 35,
          backgroundColor: '#f8f8f8',

        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        secondTitle: {
            marginTop: 20,
            fontSize: 18,
            fontWeight: 'bold',
          },
        nav: {
          marginTop: 10,
          marginLeft: 20,
        },
        link: {
          color: 'blue',
          fontSize: 18,
        },
        
      });

export default Header;
