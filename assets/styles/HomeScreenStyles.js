// HomeScreenStyles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16, // Agregado para dar un poco de espacio a los lados
  },
  text: {
    marginBottom: 10,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%', // Ajustado para tener el mismo ancho en los campos mencionados
  },
  errorText: {
    color: 'red',
  },
  eyeIcon: {
    alignSelf: 'flex-end',
    marginTop: 10, // Ajuste para mejorar la alineación con el campo de contraseña
  },
  radioButton: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center', // Alinea los elementos del radio button verticalmente
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: 'powderblue',
    width: '50%', // Ajuste para dar un ancho fijo al botón
    alignSelf: 'center', // Alinea el botón al centro
  },
});
