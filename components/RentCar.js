import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { rentCarStyles } from '../assets/styles/RentCarStyles';
import DatePicker from 'react-native-datepicker';
// import NavigationButtons from './NavigationButtons';
import { handleRentCar } from './Data'; // Importa la función handleRentCar desde tu archivo data

export default function RentCar({ cars, users }) {
  const [plateNumber, setPlateNumber] = useState('');
  const [username, setUsername] = useState('');
  const [rentDate, setRentDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(''); 

  const handleRent = () => {
    
    const result = handleRentCar(plateNumber, username, rentDate, cars, users);

    if (result === "Renta exitosa") {
      setErrorMessage('Renta exitosa');
       // Restablece los campos en blanco
      setPlateNumber('');
      setUsername('');
      setRentDate('');
      // Puedes realizar más acciones aquí, como redirigir a otra pantalla o actualizar la interfaz de usuario.
    } else {
      setErrorMessage(result);
    }
  };

  return (
    <View style={rentCarStyles.container}>
      <TextInput
        style={rentCarStyles.input}
        placeholder="Número de Placa"
        value={plateNumber}
        onChangeText={setPlateNumber}
      />
      <TextInput
        style={rentCarStyles.input}
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />

      {/* <DatePicker // Componente DatePicker para seleccionar la fecha
        style={rentCarStyles.input}
        date={rentDate}
        mode="date"
        placeholder="Fecha de Alquiler"
        format="YYYY-MM-DD"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(date) => setRentDate(date)}
      /> */}
       
       

      <TextInput
        style={rentCarStyles.input}
        placeholder="Fecha alquiler DiaMesAño"
        value={rentDate}
        onChangeText={setRentDate}
      />

      <Text style={{ color: 'red' }}>{errorMessage}</Text>
      <Button title="Rentar" onPress={handleRent} />
    </View>
  );
}

