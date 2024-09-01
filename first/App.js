import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Menu, Provider } from 'react-native-paper';

import HomeScreen from './components/HomeScreen/HomeScreen';
import HeartRate from './components/HeartRate/HeartRate';
import ExchangeRateConverter from './components/ExchangeRateConverter/ExchangeRateConverter';
import MyModal from './components/MyModal/MyModal';
import DefaultScreen from './components/DefaultScreen/DefaultScreen';


const Stack = createStackNavigator();

const CustomAppBar = () => {
  const navigation = useNavigation(); 
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Appbar.Header style={{ backgroundColor: '#c4d8be' }}>
      <Appbar.Content title="My awesome app"  titleStyle={{ color: '#000000' }} />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Appbar.Action 
            icon="dots-vertical" 
            color="#000000"
            onPress={() => setMenuVisible(true)} 
          />
        }
      >
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('Home'); }} title="Home" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('DefaultScreen'); }} title="Second Screen" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('HeartRate'); }} title="Heart Rate" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('ExchangeRateConverter'); }} title="Exchange Rate Converter" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('MyModal'); }} title="Modal" />
      </Menu>
    </Appbar.Header>
  );
};
const ForwardButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Appbar.Action 
        icon="arrow-right" 
        color="#000000"
        backgroundColor="#ffffff"
        onPress={() => navigation.navigate('DefaultScreen')} 
      />
    </View>
  );
};

export default function App() {
  return (

    
    <Provider>
      <NavigationContainer>
        <View style={styles.container}>

          <CustomAppBar />

          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerRight: () => <ForwardButton />, }} />
            <Stack.Screen name="DefaultScreen" component={DefaultScreen}  options={{ title: 'Second Screen' }} />
            <Stack.Screen name="HeartRate" component={HeartRate} options={{ title: 'Heart Rate' }} />
            <Stack.Screen name="ExchangeRateConverter" component={ExchangeRateConverter} options={{ title: 'Exchange Rate Converter' }} />
            <Stack.Screen name="MyModal" component={MyModal} options={{ title: 'Modal Message' }} />
          </Stack.Navigator>

          
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    marginRight: 10,
  },
});
