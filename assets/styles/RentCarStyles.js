import { StyleSheet } from 'react-native';

// export const rentCarStyles = StyleSheet.create({
//   container: {
//     margin: 40,
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//   },
// });


export const rentCarStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta cómo se muestra la imagen
    justifyContent: 'center', // Ajusta la alineación vertical
    alignItems: 'center', // Ajusta la alineación horizontal
  },
});
