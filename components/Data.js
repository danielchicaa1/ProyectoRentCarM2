const data = [
  {
    user: {
      username: "user1",
      name: "John Doe",
      password: "password123",
    },
    car: {
      platenumber: "ABC123",
      brand: "Toyota",
      state: "Available",
    },
    rent: {
      rentnumber: "RNT001",
      username: "user1",
      platenumber: "ABC123",
      rentdate: new Date("2023-10-15"),  // Representación de fecha
    },
  },
  {
    user: {
      username: "user2",
      name: "Jane Smith",
      password: "securePassword",
    },
    car: {
      platenumber: "XYZ789",
      brand: "Honda",
      state: "Rented",
    },
    rent: {
      rentnumber: "RNT002",
      username: "user2",
      platenumber: "XYZ789",
      rentdate: new Date("2023-10-16"),  // Representación de fecha
    },
  },
  // Puedes agregar más datos de usuarios, carros y rentas según sea necesario
];

const handleRentCar = (plateNumber, username, rentDate) => {
  // Lógica para rentar un carro
  const user = data.find((item) => item.user.username === username);
  const car = data.find((item) => item.car.platenumber === plateNumber);

  if (!user) {
    return "El usuario no existe.";
  }

  if (!car) {
    return "El carro no existe.";
  }

  if (car.state === "Rented") {
    return "El carro no está disponible.";
  }

  const currentDate = new Date();
  const rentDateObject = new Date(rentDate);

  if (isNaN(rentDateObject) || rentDateObject < currentDate) {
    return "La fecha de alquiler no es válida.";
  }

  car.state = "Rented";
  car.rentdate = rentDateObject;  // Actualizar la fecha como objeto Date

  return "Renta exitosa.";
};

export { data, handleRentCar };
