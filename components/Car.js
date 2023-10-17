import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

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

  const onSubmit = (data) => {
    // Agregar el nuevo carro a la lista de carros
    setCars((prevCars) => [...prevCars, data]);
    // Restablecer los campos del formulario
    reset();
  };

  return (
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
        onPress={handleSubmit(onSubmit)}
      >
        Guardar Carro
      </Button>

      <Text style={{ fontSize: 20, marginTop: 20 }}>Listado de Carros</Text>

      <FlatList
        data={cars}
        keyExtractor={(car, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
            <Text>Número de Placa: {item.platenumber}</Text>
            <Text>Marca: {item.brand}</Text>
            <Text>Estado: {item.state}</Text>
          </View>
        )}
      />
    </View>
  );
}
