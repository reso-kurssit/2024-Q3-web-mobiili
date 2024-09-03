import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Menu, Provider } from 'react-native-paper';
import { useFonts } from 'expo-font';

import HomeScreen from './components/HomeScreen/HomeScreen';
import HeartRate from './components/HeartRate/HeartRate';
import MyModal from './components/MyModal/MyModal';
import DefaultScreen from './components/SecondScreen/SecondScreen';
import TodoList from './components/TodoList/TodoList';
import Map from './components/Map/Map';

const Stack = createStackNavigator();

const CustomAppBar = () => {
  const navigation = useNavigation(); 
  const [menuVisible, setMenuVisible] = useState(false);

  const [loaded] = useFonts({
    SatisfyRegular: require('./assets/fonts/Satisfy-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Appbar.Header style={{ backgroundColor: '#c4d8be' }}>
      <Appbar.Content title="My Awesome App" titleStyle={{ color: '#000000', fontFamily: 'SatisfyRegular', fontSize: 30, padding: 6 }} />
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
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('SecondScreen'); }} title="Second Screen" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('HeartRate'); }} title="Heart Rate" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('MyModal'); }} title="Modal" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('TodoList'); }} title="Todo List" />
        <Menu.Item onPress={() => { setMenuVisible(false); navigation.navigate('Map'); }} title="Map" />
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
        onPress={() => navigation.navigate('SecondScreen')} 
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
            <Stack.Screen name="SecondScreen" component={DefaultScreen}  options={{ title: 'Second Screen' }} />
            <Stack.Screen name="HeartRate" component={HeartRate} options={{ title: 'Heart Rate' }} />
            <Stack.Screen name="MyModal" component={MyModal} options={{ title: 'Modal Message' }} />
            <Stack.Screen name="TodoList" component={TodoList} options={{ title: 'Todo List' }} />
            <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }} />

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
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
