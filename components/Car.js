import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../assets/styles/CarStyles';

export default function Car({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // Agregamos la función reset para reiniciar el formulario
  } = useForm({
    defaultValues: {
      platenumber: '', // Número de placa
      brand: '', // Marca del carro
      state: 'Disponible', // Estado inicial: Disponible
    },
  });

  const [cars, setCars] = useState([]); // Almacenar la lista de carros
  const [isCarSaved, setIsCarSaved] = useState(false);

  const onSubmit = (data) => {
    // Agregar el nuevo carro a la lista de carros
    setCars((prevCars) => [...prevCars, data]);
    // Restablecer los campos del formulario
    reset();
    setIsCarSaved(true);
  };

  return (
    <ImageBackground
      source={require('../assets/imgs/fondoNavigation.png')} // Ruta de tu imagen de fondo
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Agregar Carro</Text>

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 7, // Longitud máxima para el número de placa
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Número de Placa"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="platenumber"
        />
        {errors.platenumber?.type === 'required' && (
          <Text style={{ color: 'red' }}>Número de placa es obligatorio</Text>
        )}
        {errors.platenumber?.type === 'maxLength' && (
          <Text style={{ color: 'red' }}>La longitud máxima es de 7 caracteres</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Marca del Carro"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="brand"
        />
        {errors.brand?.type === 'required' && (
          <Text style={{ color: 'red' }}>Marca del carro es obligatoria</Text>
        )}
        {errors.brand?.type === 'maxLength' && (
          <Text style={{ color: 'red' }}>La longitud máxima es de 30 caracteres</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Estado"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={false} // El estado se establece automáticamente
            />
          )}
          name="state"
        />

        <Button
          style={{ marginTop: 20 }}
          icon="content-save"
          mode="outlined"
          buttonColor="lightblue"
          textColor='black'
          onPress={handleSubmit(onSubmit)}
        >
          Guardar Carro
        </Button>

        {isCarSaved && (
          <Text style={{ fontSize: 24, marginTop: 20, color: 'blue' }}>
            Listado de Carros
          </Text>
        )}
 
        <FlatList
          data={cars}
          keyExtractor={(car, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
              <Text style={{color:'black', fontSize:18}}>Número de Placa: {item.platenumber}</Text>
              <Text style={{color:'black', fontSize:18}}>Marca: {item.brand}</Text>
              <Text style={{color:'black', fontSize:18}}>Estado: {item.state}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}
