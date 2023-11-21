import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { forgotPasswordStyles } from '../assets/styles/ForgotPasswordStyles'; // Asegúrate de importar el estilo adecuado

export default function ForgotPassword({ navigation }) {
  const [username, setUsername] = useState('');
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState(true);

  const handleResetPassword = () => {
    // Lógica para restablecer la contraseña
    if (username === 'usuario_valido' && keyword === 'palabra_reservada') {
      setMessageColor(true);
      setMessage('¡Contraseña restablecida correctamente!');
      // Agregar lógica para restablecer la contraseña aquí
    } else {
      setMessageColor(false);
      setMessage('Nombre de usuario o palabra reservada incorrectos');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/imgs/mercedes.webp')} // Ruta de tu imagen de fondo
      style={forgotPasswordStyles.background}
    >
      <View style={forgotPasswordStyles.container}>
        <Text style={forgotPasswordStyles.text}>
          Ingresa tu nombre de usuario y palabra reservada para restablecer la contraseña:
        </Text>
        <TextInput
          label="Nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={forgotPasswordStyles.input}
        />
        <TextInput
          label="Palabra reservada"
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          secureTextEntry
          style={forgotPasswordStyles.input}
        />
        <Button
          mode="contained"
          onPress={handleResetPassword}
          style={forgotPasswordStyles.button}
        >
          Restablecer Contraseña
        </Button>
        <Text style={forgotPasswordStyles.message}>
          {message}
        </Text>
      </View>
    </ImageBackground>
  );
}
