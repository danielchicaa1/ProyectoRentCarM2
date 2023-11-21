// import React, { useState } from 'react';
// import { View, Text, FlatList, ImageBackground } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { TextInput, Button } from 'react-native-paper';
// import { styles } from '../assets/styles/CarStyles';

// export default function Car({ navigation }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       platenumber: '',
//       brand: '',
//       state: 'Disponible',
//       dailyValue: '', // Nuevo campo para el valor diario
//     },
//   });

//   const [cars, setCars] = useState([]);
//   const [isCarSaved, setIsCarSaved] = useState(false);

//   const onSubmit = (data) => {
//     setCars((prevCars) => [...prevCars, data]);
//     reset();
//     setIsCarSaved(true);
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/imgs/fondoNavigation.png')}
//       style={{ flex: 1 }}
//     >
//       <View style={{ flex: 1, padding: 20 }}>
//         <Text style={{ fontSize: 20, marginBottom: 10 }}>Agregar Carro</Text>

//         <Controller
//           control={control}
//           rules={{
//             required: true,
//             maxLength: 7,
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               label="Número de Placa"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//           name="platenumber"
//         />
//         {/* ... validaciones y mensajes de error para número de placa ... */}

//         <Controller
//           control={control}
//           rules={{
//             required: true,
//             maxLength: 30,
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               style={{ marginTop: 10 }}
//               label="Marca del Carro"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//           name="brand"
//         />
//         {/* ... validaciones y mensajes de error para marca del carro ... */}

//         <Controller
//           control={control}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               style={{ marginTop: 10 }}
//               label="Estado"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//               editable={false}
//             />
//           )}
//           name="state"
//         />

//         <Controller
//           control={control}
//           rules={{
//             required: true,
//             pattern: /^[0-9]+$/,
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               style={{ marginTop: 10 }}
//               label="Valor Diario"
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//               keyboardType="numeric"
//             />
//           )}
//           name="dailyValue"
//         />
//         {errors.dailyValue?.type === 'required' && (
//           <Text style={{ color: 'red' }}>Valor diario es obligatorio</Text>
//         )}
//         {errors.dailyValue?.type === 'pattern' && (
//           <Text style={{ color: 'red' }}>Ingresa un valor entero para el valor diario</Text>
//         )}

//         <Button
//           style={{ marginTop: 20 }}
//           icon="content-save"
//           mode="outlined"
//           buttonColor="lightblue"
//           textColor="black"
//           onPress={handleSubmit(onSubmit)}
//         >
//           Guardar Carro
//         </Button>

//         {isCarSaved && (
//           <Text style={{ fontSize: 24, marginTop: 20, color: 'blue' }}>Listado de Carros</Text>
//         )}

//         <FlatList
//           data={cars}
//           keyExtractor={(car, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={{ borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
//               <Text style={{ color: 'black', fontSize: 18 }}>Número de Placa: {item.platenumber}</Text>
//               <Text style={{ color: 'black', fontSize: 18 }}>Marca: {item.brand}</Text>
//               <Text style={{ color: 'black', fontSize: 18 }}>Estado: {item.state}</Text>
//               <Text style={{ color: 'black', fontSize: 18 }}>Valor Diario: {item.dailyValue}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// }
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
    reset,
  } = useForm({
    defaultValues: {
      platenumber: '',
      brand: '',
      state: 'Disponible',
      dailyValue: '', // Nuevo campo para el valor diario
    },
  });

  const [cars, setCars] = useState([]);
  const [isCarSaved, setIsCarSaved] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const onSubmit = (data) => {
    if (isCreating) {
      setCars((prevCars) => [...prevCars, data]);
    } else {
      const updatedCars = [...cars];
      updatedCars[selectedCar] = data;
      setCars(updatedCars);
      setSelectedCar(null);
    }

    reset();
    setIsCarSaved(true);
    setIsCreating(false);
  };

  const handleDelete = (index) => {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  };

  const handleEdit = (index) => {
    const selectedCarData = cars[index];
    reset(selectedCarData);
    setIsCreating(true);
    setSelectedCar(index);
  };

  const handleView = (index) => {
    const selectedCarData = cars[index];
    // Implementar la navegación o lógica para ver detalles según tus necesidades
    console.log("Ver detalles:", selectedCarData);
  };

  return (
    <ImageBackground
      source={require('../assets/imgs/fondoNavigation.png')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, padding: 20 }}>
        {isCreating ? (
          <>
            <Text style={{ fontSize: 20, marginBottom: 10, color: 'black' }}>Editar Carro</Text>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 7,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Número de Placa"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{ color: 'black' }}
                />
              )}
              name="platenumber"
            />

            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 30,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ marginTop: 10, color: 'black' }}
                  label="Marca del Carro"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="brand"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ marginTop: 10, color: 'black' }}
                  label="Estado"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={false}
                />
              )}
              name="state"
            />

            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^[0-9]+$/,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ marginTop: 10, color: 'black' }}
                  label="Valor Diario"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
              name="dailyValue"
            />
            {errors.dailyValue?.type === 'required' && (
              <Text style={{ color: 'red' }}>Valor diario es obligatorio</Text>
            )}
            {errors.dailyValue?.type === 'pattern' && (
              <Text style={{ color: 'red' }}>Ingresa un valor entero para el valor diario</Text>
            )}

            <Button
              style={{ marginTop: 20 }}
              icon="content-save"
              mode="outlined"
              buttonColor="lightblue"
              textColor="black"
              onPress={handleSubmit(onSubmit)}
            >
              Guardar Carro
            </Button>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 24, marginBottom: 20, color: 'blue' }}>Listado de Carros</Text>
            <FlatList
              data={cars}
              keyExtractor={(car, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={{ borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 18 }}>Número de Placa: {item.platenumber}</Text>
                  <Text style={{ color: 'black', fontSize: 18 }}>Marca: {item.brand}</Text>
                  <Text style={{ color: 'black', fontSize: 18 }}>Estado: {item.state}</Text>
                  <Text style={{ color: 'black', fontSize: 18 }}>Valor Diario: {item.dailyValue}</Text>
                  <Button
                    style={{ marginTop: 10 }}
                    icon="delete"
                    mode="outlined"
                    onPress={() => handleDelete(index)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    style={{ marginTop: 10 }}
                    icon="pencil"
                    mode="outlined"
                    onPress={() => handleEdit(index)}
                  >
                    Editar
                  </Button>
                  <Button
                    style={{ marginTop: 10 }}
                    icon="eye"
                    mode="outlined"
                    onPress={() => handleView(index)}
                  >
                    Visualizar
                  </Button>
                </View>
              )}
            />
            <Button
              style={{ marginTop: 20 }}
              icon="plus"
              mode="outlined"
              onPress={() => {
                reset();
                setIsCreating(true);
              }}
            >
              Crear
            </Button>
          </>
        )}
      </View>
    </ImageBackground>
  );
}
