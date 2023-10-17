import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Avatar, Button } from 'react-native-paper';
import { styles } from '../assets/styles/LoginScreenStyles.js';
import data from './data'; // Importa el arreglo de objetos desde data.js


export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [messageColor, setMessageColor] = useState(true);

  // Función para manejar la autenticación
  const handleAuthentication = () => {
    // Busca en el arreglo de objetos de usuarios
    const userData = data.find(
      (item) => item.user && item.user.username === username && item.user.password === password
    );

    if (userData) {
      setMessageColor(true);
      setMessage("Inicio de sesión exitoso ...");
      // Puedes realizar acciones adicionales aquí si es necesario
      // Por ejemplo, guardar información de usuario en el estado global
    } else {
      setMessage("Usuario y/o contraseña incorrectos");
      setMessageColor(false);
    }
  };

  // Función para navegar a la pantalla de creación de cuenta
  const navigateToCreateAccount = () => {
    navigation.navigate('Home', { username: username });
    // Agrega aquí la navegación a la pantalla de creación de cuenta
    // Por ejemplo, navigation.navigate('CreateAccount');
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
        <Text style={[styles.message, messageColor ? { color: 'green' } : { color: 'red' }]}>{message}</Text>
      </View>
    </View>
  );
}
