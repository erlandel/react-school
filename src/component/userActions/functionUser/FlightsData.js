export const flightsData = [
  {
    id: 1,
    origin: 'Miami', // Ciudad de origen
    destination: 'New York',
    date: '2024-05-01',
    departureTime: '08:00 AM',
    arrivalTime: '11:00 AM',
    price: 389,
    seat: 10,
    capacity: 30
  },
  {
    id: 2,
    origin: 'Miami', // Ciudad de origen
    destination: 'Los Angeles',
    date: '2024-05-01',
    departureTime: '10:00 AM',
    arrivalTime: '01:00 PM',
    price: 229,
    seat: 14,
    capacity: 32
  },
  {
    id: 3,
    origin: 'Baracoa', // Ciudad de origen
    destination: 'Havana',
    date: '2024-05-03',
    departureTime: '09:00 AM',
    arrivalTime: '10:30 AM',
    price: 150,
    seat: 14,
    capacity: 20,
  },
  {
    id: 4,
    origin: 'Baracoa', // Ciudad de origen
    destination: 'Santiago de Cuba',
    date: '2024-05-03',
    departureTime: '11:00 AM',
    arrivalTime: '12:30 PM',
    price: 400,
    seat: 8,
    capacity: 23
  },
  {
    id: 5,
    origin: 'Baracoa', // Ciudad de origen
    destination: 'Varadero',
    date: '2024-05-03',
    departureTime: '08:30 AM',
    arrivalTime: '10:00 AM',
    price: 269,
    seat: 25,
    capacity: 27
  },
  // Vuelos con la misma fecha y origen pero con destinos diferentes
  {
    id: 6,
    origin: 'Miami',
    destination: 'Chicago',
    date: '2024-05-01',
    departureTime: '09:00 AM',
    arrivalTime: '12:00 PM',
    price: 280,
    seat: 2,
    capacity: 26
  },
  {
    id: 7,
    origin: 'Miami',
    destination: 'Orlando',
    date: '2024-05-01',
    departureTime: '11:00 AM',
    arrivalTime: '02:00 PM',
    price: 300,   
    capacity: 40
  },
  // Vuelos con el mismo destino pero con orígenes diferentes
  {
    id: 8,
    origin: 'New York',
    destination: 'Havana',
    date: '2024-05-03',
    departureTime: '08:00 AM',
    arrivalTime: '10:30 AM',
    price: 230,
    capacity: 32
  },
  {
    id: 9,
    origin: 'Los Angeles',
    destination: 'Havana',
    date: '2024-05-03',
    departureTime: '09:00 AM',
    arrivalTime: '10:30 AM',
    price: 280,
    seat: 27,
    capacity: 28
  },
  {
    id: 10,
    origin: 'Barcelona', // Ciudad de origen
    destination: 'Madrid',
    date: '2024-05-03',
    departureTime: '11:00 AM',
    arrivalTime: '12:30 PM',
    price: 400,
    seat: 8,
    capacity: 23
  },
  // Puedes agregar más vuelos aquí si es necesario
];