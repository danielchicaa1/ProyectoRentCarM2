import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, IconButton, RadioButton } from 'react-native-paper';
import { styles } from '../assets/styles/HomeScreenStyles';

const backgroundImage = require('../assets/imgs/llaves.png');

export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      name: '',
      password: '',
      role: 'admin',
      reservedWord: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('admin');
  const onSubmit = (data) => console.log(data);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenid@ {route.params.username}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9a-zA-Z]+$/, // Acepta letras y números
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre de usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username?.type === 'required' && (
        <Text style={styles.errorText}>Nombre de usuario es obligatorio</Text>
      )}
      {errors.username?.type === 'pattern' && (
        <Text style={styles.errorText}>Solo se permiten letras y números</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          minLength: 3,
          pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, // Acepta solo letras y espacios
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name?.type === 'required' && (
        <Text style={styles.errorText}>Nombre completo es obligatorio</Text>
      )}
      {errors.name?.type === 'maxLength' && (
        <Text style={styles.errorText}>La longitud debe ser hasta 30 caracteres</Text>
      )}
      {errors.name?.type === 'minLength' && (
        <Text style={styles.errorText}>La longitud mínima es de 3 caracteres</Text>
      )}
      {errors.name?.type === 'pattern' && (
        <Text style={styles.errorText}>Solo se permiten letras y espacios</Text>
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 15,
            minLength: 8,
            pattern: /(?=.*[0-9])(?=.*[a-zA-Z])/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ flex: 1, marginRight: 5, marginBottom: 5 }}
              label="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!showPassword}
            />
          )}
          name="password"
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        />
      </View>
      {errors.password?.type === 'required' && (
        <Text style={styles.errorText}>Contraseña es obligatoria</Text>
      )}
      {errors.password?.type === 'maxLength' && (
        <Text style={styles.errorText}>La longitud debe ser hasta 15 caracteres</Text>
      )}
      {errors.password?.type === 'minLength' && (
        <Text style={styles.errorText}>La longitud mínima es de 8 caracteres</Text>
      )}
      {errors.password?.type === 'pattern' && (
        <Text style={styles.errorText}>La contraseña debe contener letras y números</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-Z]+$/, // Cambia la expresión regular según tus necesidades para las palabras reservadas
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Palabra Reservada"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="reservedWord"
      />
      {errors.reservedWord?.type === 'required' && (
        <Text style={styles.errorText}>Palabra reservada es obligatoria</Text>
      )}
      {errors.reservedWord?.type === 'pattern' && (
        <Text style={styles.errorText}>Solo se permiten letras para la palabra reservada</Text>
      )}

      {/* Botones de Rol */}
      <View style={{ marginTop: 10 }}>
        <Text>Rol:</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <RadioButton
            value="admin"
            status={selectedRole === 'admin' ? 'checked' : 'unchecked'}
            onPress={() => handleRoleChange('admin')}
          />
          <Text>Admin</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <RadioButton
            value="user"
            status={selectedRole === 'user' ? 'checked' : 'unchecked'}
            onPress={() => handleRoleChange('user')}
          />
          <Text>Usuario</Text>
        </View>
      </View>

      <Button
        style={styles.saveButton}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>
    </View>
    </ImageBackground>
  );
}
