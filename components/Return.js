import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Picker } from 'react-native';
import { returnCarStyles } from '../assets/styles/returnCarStyles';
import { handleReturn } from './Data';

export default function ReturnCar({ rents, cars, users, onLogout }) {
    const [rentNumber, setRentNumber] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleReturnAction = () => {
        const result = handleReturn(rentNumber, plateNumber, returnDate, rents, cars, users);

        if (result === 'Devolución exitosa') {
            setErrorMessage('Devolución exitosa');
            // Restablece los campos en blanco
            setRentNumber('');
            setPlateNumber('');
            setReturnDate('');
        } else {
            setErrorMessage(result);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/imgs/mini.jpeg')}
            style={returnCarStyles.background}
        >
            <View style={returnCarStyles.container}>
                {/* Desplegable para Número de Renta */}
                <View style={returnCarStyles.pickerContainer}>
                    <Text style={returnCarStyles.pickerLabel}>Seleccione el número de renta</Text>
                    <Picker
                        selectedValue={rentNumber}
                        style={returnCarStyles.picker}
                        onValueChange={(itemValue, itemIndex) => setRentNumber(itemValue)}
                    >
                        {rents && rents.map((rent, index) => (
                            <Picker.Item key={index} label={rent.rentNumber} value={rent.rentNumber} />
                        ))}
                    </Picker>
                </View>

                {/* Campo de entrada para Número de Placa */}
                <TextInput
                    style={[returnCarStyles.input, { marginTop: 20 }]}
                    placeholder="Número de Placa"
                    value={plateNumber}
                    onChangeText={setPlateNumber}
                />

                {/* Campo de entrada para Fecha de Devolución */}
                <TextInput
                    style={returnCarStyles.input}
                    placeholder="Fecha de Devolución (DiaMesAño)"
                    value={returnDate}
                    onChangeText={setReturnDate}
                />

                <Text style={{ color: 'red' }}>{errorMessage}</Text>

                {/* Botón Guardar */}
                <Button
                    title="Guardar"
                    onPress={handleReturnAction}
                    containerStyle={returnCarStyles.buttonContainer}
                    buttonStyle={returnCarStyles.button}
                />

                {/* Separador */}
                <View style={{ marginVertical: 10 }} />

                {/* Botón Cerrar Sesión */}
                <Button
                    title="Cerrar Sesión"
                    onPress={onLogout}
                    containerStyle={returnCarStyles.buttonContainer}
                    buttonStyle={returnCarStyles.button}
                />
            </View>
        </ImageBackground>
    );
}
