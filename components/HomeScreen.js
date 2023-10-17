
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { styles } from '../assets/styles/HomeScreenStyles.js';


export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '', // Nombre de usuario
      name: '', // Nombre completo
      password: '', // Contraseña
    },
  });

  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const onSubmit = (data) => console.log(data);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Función para cambiar la visibilidad de la contraseña
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Bienvenid@ {route.params.username}</Text>

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
        <Text style={{ color: 'red' }}>Nombre de usuario es obligatorio</Text>
      )}
      {errors.username?.type === 'pattern' && (
        <Text style={{ color: 'red' }}>Solo se permiten letras y números</Text>
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
            style={{ marginTop: 10 }}
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name?.type === 'required' && (
        <Text style={{ color: 'red' }}>Nombre completo es obligatorio</Text>
      )}
      {errors.name?.type === 'maxLength' && (
        <Text style={{ color: 'red' }}>La longitud debe ser hasta 30 caracteres</Text>
      )}
      {errors.name?.type === 'minLength' && (
        <Text style={{ color: 'red' }}>La longitud mínima es de 3 caracteres</Text>
      )}
      {errors.name?.type === 'pattern' && (
        <Text style={{ color: 'red' }}>Solo se permiten letras y espacios</Text>
      )}

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
            style={{ marginTop: 10 }}
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={!showPassword} // Aquí controlamos la visibilidad de la contraseña
          />
        )}
        name="password"
      />
      {errors.password?.type === 'required' && (
        <Text style={{ color: 'red' }}>Contraseña es obligatoria</Text>
      )}
      {errors.password?.type === 'maxLength' && (
        <Text style={{ color: 'red' }}>La longitud debe ser hasta 15 caracteres</Text>
      )}
      {errors.password?.type === 'minLength' && (
        <Text style={{ color: 'red' }}>La longitud mínima es de 8 caracteres</Text>
      )}
      {errors.password?.type === 'pattern' && (
        <Text style={{ color: 'red' }}>La contraseña debe contener letras y números</Text>
      )}

      <IconButton
        icon={showPassword ? 'eye-off' : 'eye'} // Cambiamos el ícono según la visibilidad
        onPress={togglePasswordVisibility} // Función para cambiar la visibilidad de la contraseña
      />

      <Button
        style={{ marginTop: 20, backgroundColor: 'powderblue' }}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>
    </View>
  );
}
