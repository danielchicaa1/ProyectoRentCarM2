import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Avatar, Button } from 'react-native-paper';
import { styles } from '../assets/styles/LoginScreenStyles.js';
import { data } from './Data.js'; // Importa el arreglo de objetos desde data.js

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [messageColor, setMessageColor] = useState(true);

  const handleAuthentication = () => {
    if (data) {
      const userData = data.find(
        (item) => item.user && item.user.username === username && item.user.password === password
      );

      if (userData) {
        setMessageColor(true);
        setMessage("Inicio de sesión exitoso ...");
        setUsername('');
        setPassword('');
      } else {
        setMessage("Usuario y/o contraseña incorrectos");
        setMessageColor(false);
      }
    } else {
      setMessage("Error en la base de datos de usuarios");
      setMessageColor(false);
    }
  };

  const navigateToCreateAccount = () => {
    navigation.navigate('Home', { username: username });
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.avatar}
        size={100}
        source={require('../assets/imgs/car.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          label="Nombre de usuario"
          left={<TextInput.Icon icon="car" />}
          onChangeText={(username) => setUsername(username)}
          value={username}
        />
        <TextInput
          style={styles.input}
          label="Contraseña"
          secureTextEntry={!showPass}
          onChangeText={(password) => setPassword(password)}
          value={password}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <Button
          style={styles.button}
          icon="login"
          mode="outlined"
          onPress={handleAuthentication}
        >
          Iniciar Sesión
        </Button>
        <Button
          style={styles.button}
          icon="account"
          mode="outlined"
          onPress={navigateToCreateAccount}
        >
          Crear Cuenta
        </Button>
        <Button
          style={styles.button}
          icon="account-question"
          mode="outlined"
          onPress={navigateToForgotPassword}
        >
          ¿Olvidaste tu contraseña?
        </Button>
        <Text style={[styles.message, messageColor ? { color: 'green' } : { color: 'red' }]}>{message}</Text>
      </View>
    </View>
  );
}
