import React from 'react';
import { View, Button } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from '../assets/styles/NavigationButtonsStyles';

export default function NavigationButtons({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/imgs/camaro.png')}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <Button
          title="Usuario"
          onPress={() => navigation.navigate('Login')}
          color="#007AFF"

        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Información de Carros"
          onPress={() => navigation.navigate('Car')}
          color="#4CD964"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Rentar un Carro"
          onPress={() => navigation.navigate('Rent')}
          color="#FF2D55"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Devolver Carro"
          onPress={() => navigation.navigate('Return')}
          color="black"
        />
      </View>
      
    </ImageBackground>
  );
}
