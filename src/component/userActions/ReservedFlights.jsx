import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { correct } from '../messages/correct';
import { errorMessage } from '../messages/errorMessage';
import { ToastContainerMessage } from '../messages/ToastContainerMessage';
import { deleteData } from '../../hooks/useDeleteData';


export const ReservedFlights = ({ flights }) => {
const email=useSelector((state) => state.auth.email);
const dispatch = useDispatch();


  const handleCancelClick = async (flight) => {
        const id=flight.id;
        const dataObject={id,email}
        const url = "/api/authenticate";
      const response = await dispatch(deleteData({ url, data: dataObject }));
  if(!response){      
      correct('Reserva cancelada!');
  }else{    
    errorMessage('Error al cancelar reserva!');
  }

  };

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const flightsChunks = chunkArray(flights, 3);

  return (
    <div>
      {flightsChunks.map((flightGroup, groupIndex) => (
        <div key={groupIndex} className="row mb-3">
          {flightGroup.map((flight, index) => (
            <div key={index} className="col-md-4">
              <div className="fond flight-item card bg-light mb-3 border-4 animate__animated animate__backInUp">
                <div className="card-body d-flex justify-content-between align-items-center ">
                  <div>
                    <h6 className="card-title">Origen: {flight.origin}</h6>
                    <h6 className="card-title">Destino: {flight.destination}</h6>
                    <p className="card-text mb-1">Fecha: {flight.date}</p>
                    <p className="card-text mb-1">Hora de salida: {flight.departureTime}</p>
                    <p className="card-text mb-1">Hora de llegada: {flight.arrivalTime}</p>
                    <p className="card-text mb-1">Asiento: {flight.seat}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className="card-text">Precio: ${flight.price}</p>
                    <button className="btn btn-dark" onClick={() => handleCancelClick(flight)}>
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <ToastContainerMessage/>
    </div>
  );
};
