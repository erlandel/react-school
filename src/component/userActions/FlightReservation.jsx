import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { alertMessage } from '../messages/alertMessage';
import { errorMessage } from '../messages/errorMessage';
import { ToastContainerMessage } from '../messages/ToastContainerMessage';
import { correct } from '../messages/correct';
import { postData } from '../../hooks/usePostData';
import '../../styles/userActions.css'

export const FlightReservation = () => {
 const navigate = useNavigate();
 const flightData = useSelector(state => state.flights);
 const dispatch = useDispatch();
 const { email } = useSelector(state => state.auth);



 const handleReturn = () => {
    navigate(-1);
 };
 const handleConfirm = async () => {
  try {
    const responseUser = await alertMessage('¿Está seguro que desea realizar esta reserva?');
    if (responseUser) {
      const id=flightData.id;
      const dataObject = { id, email }; 
      const url = "/api/authenticate";
      const response = await dispatch(postData({ url, data: dataObject }));
      
      if (response.status===200) {
        correct('Reserva realizada exitosamente!');
        setTimeout(() => {
          navigate('/User/UserFlightList');
        }, 5000);
      } else {       
        errorMessage('Error al realizar la reserva.');
      }
    }
  } catch (error) {
    console.error('Error al confirmar la reserva:', error);
  }
};

return (
  <div className=" min-vh-100 bg-light overflow-hidden">
    <div className="container-fluid p-2 shadow-sm min-vh-100 d-flex justify-content-center align-items-center fond-reservation">

      <div className='ticket'>
          <header className='d-flex justify-content-between align-items-center text-white py-1'>
              <div className='container'>
                <div className='row w-100'>
                  <div className='col-sm-9 d-flex align-items-center'>
                    <i className="bi bi-airplane-fill me-2"></i>
                    <h3 className='mb-0'>SWIFTRES</h3>
                  </div>
                  <div className='col-sm-3 d-flex justify-content-end align-items-center'>
                    <h3 className='mb-0'>Ticket</h3>
                  </div>
                </div>
              </div>
          </header>

          <main>
              <div className='container bg-white'>
                  <div className='row'>
                      <div className='col-sm-6'>
                          <ul>
                          <li className="list-group-item mt-2"><b>Origen: </b> {flightData.origin}</li>
                          <li className="list-group-item mt-2"><b>Fecha: </b> {flightData.date}</li>
                          <li className="list-group-item mt-2"><b>Hora de salida: </b> {flightData.departureTime}</li>
                          <li className="list-group-item mt-2"><b>Precio: $</b> {flightData.price}</li>
                          </ul>
                        </div>    

                        <div className='col-sm-6'>
                          <ul >
                          <li className="list-group-item mt-2"><b>Destino: </b> {flightData.destination}</li>
                          <li className="list-group-item mt-2"><b>Capacidad: </b> {flightData.capacity}</li>
                          <li className="list-group-item mt-2"><b>Hora de llegada: </b> {flightData.arrivalTime}</li>
                          </ul>
                        </div>  
                  </div>
              </div>
          </main>

        <footer className='d-flex justify-content-between align-items-center text-white py-1 '>
          <div className='container'>
             <div className='row'>
                <div className='col-sm-9'>
                    <button className="btn btn-danger buton m-1" onClick={handleReturn}>
                      Cancelar
                    </button>
                </div>
                <div className='col-sm-3'>
                  <button className="btn btn-success buton m-1" onClick={handleConfirm}>
                    Confirmar
                  </button>
                </div>
             </div>
          </div>
         
        </footer>
      </div>
    </div>
    <ToastContainerMessage />
  </div>
);
};
