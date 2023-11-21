import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Picker } from 'react-native';
import { rentCarStyles } from '../assets/styles/RentCarStyles';
import { handleRentCar } from './Data';

export default function RentCar({ cars, users }) {
  const [plateNumber, setPlateNumber] = useState('');
  const [username, setUsername] = useState('');
  const [rentStartDate, setRentStartDate] = useState('');
  const [rentEndDate, setRentEndDate] = useState('');
  const [rentNumber, setRentNumber] = useState('');
  const [rentStatus, setRentStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRent = () => {
    const result = handleRentCar(
      plateNumber,
      username,
      rentStartDate,
      rentEndDate,
      rentNumber,
      rentStatus,
      cars,
      users
    );

    if (result === 'Renta exitosa') {
      setErrorMessage('Renta exitosa');
      setPlateNumber('');
      setUsername('');
      setRentStartDate('');
      setRentEndDate('');
      setRentNumber('');
      setRentStatus('');
    } else {
      setErrorMessage(result);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/imgs/alarma.png')}
      style={rentCarStyles.background}
    >
      <View style={rentCarStyles.container}>
        {/* Cambiado a un Picker para Número de Placa */}
        <Picker
          selectedValue={plateNumber}
          style={rentCarStyles.input}
          onValueChange={(itemValue, itemIndex) => setPlateNumber(itemValue)}
        >
          <Picker.Item label="Selecciona una placa" value="" />
          {cars && cars.map((car, index) => (
            <Picker.Item key={index} label={car.platenumber} value={car.platenumber} />
          ))}
        </Picker>

        <TextInput
          style={rentCarStyles.input}
          placeholder="Nombre de Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={rentCarStyles.input}
          placeholder="Fecha de Inicio de Alquiler (DiaMesAño)"
          value={rentStartDate}
          onChangeText={setRentStartDate}
        />
        <TextInput
          style={rentCarStyles.input}
          placeholder="Fecha de Fin de Alquiler (DiaMesAño)"
          value={rentEndDate}
          onChangeText={setRentEndDate}
        />
        <TextInput
          style={rentCarStyles.input}
          placeholder="Número de Renta"
          value={rentNumber}
          onChangeText={setRentNumber}
        />
        <TextInput
          style={rentCarStyles.input}
          placeholder="Estado de la Renta"
          value={rentStatus}
          onChangeText={setRentStatus}
        />

        <Text style={{ color: 'red' }}>{errorMessage}</Text>
        <Button title="Rentar" onPress={handleRent} />
      </View>
    </ImageBackground>
  );
}
