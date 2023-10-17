import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/styles/allstyles';
import LoginScreen from './components/LoginScreen.js';
import Car from './components/Car.js';
import HomeScreen from './components/HomeScreen.js';
import RentCar from './components/RentCar.js';
import NavigationButtons from './components/NavigationButtons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { data, handleRentCar } from './components/Data.js'  ; // Importa los datos y la función de manejo de renta

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicio de sesión' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="Car" component={Car} options={{ title: 'Pantalla Carros' }} />
        <Stack.Screen name="Navigation" component={NavigationButtons} options={{ title: 'Menú' }} />
        <Stack.Screen
          name="Rent"
          component={RentCar}
          options={{ title: 'Renta Carros' }}
          initialParams={{
            cars: data.carData, // Utiliza los datos de carros desde data.js
            users: data.userData, // Utiliza los datos de usuarios desde data.js
            onRent: handleRentCar, // Utiliza la función de manejo de renta desde data.js
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
