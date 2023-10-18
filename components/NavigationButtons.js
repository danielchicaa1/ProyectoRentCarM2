import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from '../assets/styles/NavigationButtonsStyles'; 

// export default function NavigationButtons({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Usuario"
//           onPress={() => navigation.navigate('Login')}
//           color="#007AFF" // Color del botón
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Información de Carros"
//           onPress={() => navigation.navigate('Car')}
//           color="#4CD964" // Color del botón
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Rentar un Carro"
//           onPress={() => navigation.navigate('Rent')}
//           color="#FF2D55" // Color del botón
//         />
//       </View>
//     </View>
//   );
// }

export default function NavigationButtons({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/imgs/camaro.png')} // Asegúrate de que la ruta sea correcta
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <Button
          title="Usuario"
          onPress={() => navigation.navigate('Login')}
          color="#007AFF" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Información de Carros"
          onPress={() => navigation.navigate('Car')}
          color="#4CD964" // Color del botón
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Rentar un Carro"
          onPress={() => navigation.navigate('Rent')}
          color="#FF2D55" // Color del botón
        />
      </View>
    </ImageBackground>
  );
}
