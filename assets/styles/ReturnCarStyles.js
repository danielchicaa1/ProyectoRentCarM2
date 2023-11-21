import { StyleSheet } from 'react-native';

export const returnCarStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  button: {
    marginBottom: 15, // Agrega este estilo para separar los botones verticalmente
  },
  // Agrega estos estilos
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Puedes ajustar el color según tus necesidades
  },
});
