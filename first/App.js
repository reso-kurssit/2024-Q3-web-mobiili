import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header/Header';
import HeartRate from './components/HeartRate/HeartRate';
import ExchangeRateConverter from './components/ExchangeRateConverter/ExchangeRateConverter';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />

      <Stack.Navigator>
        <Stack.Screen name="HeartRate" component={HeartRate} options={{ title: 'Heart Rate' }} />
        <Stack.Screen name="ExchangeRateConverter" component={ExchangeRateConverter}  options={{ title: 'Exchange Rate Converter' }} />
      </Stack.Navigator>
      </View>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
