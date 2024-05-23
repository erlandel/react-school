import { createSlice } from "@reduxjs/toolkit";

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    origin: null,
    destination: null,
    date: null,
    departureTime: null,
    arrivalTime: null,   
    capacity:null,
    price: null,
    id:null,
  },
  reducers: {
    setFlightsData: (state, action) => {
      // Actualiza el estado con los datos recibidos de los vuelos
      const { origin, destination, date, departureTime, arrivalTime,capacity,price,id } = action.payload;
      state.origin = origin;
      state.destination = destination;
      state.date = date;
      state.departureTime = departureTime;
      state.arrivalTime = arrivalTime;
      state.capacity=capacity;
      state.price = price;
      state.id=id;     
    },
  },
});

export const { setFlightsData } = flightsSlice.actions;

