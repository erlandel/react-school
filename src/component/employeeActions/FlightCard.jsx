import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { flightsData } from '../userActions/functionUser/FlightsData';

import { correct } from '../messages/correct';
import { ToastContainerMessage } from '../messages/ToastContainerMessage';
import { errorMessage } from '../messages/errorMessage';
import { setFlightsData } from '../../slice/flightsSlice';
import { deleteData } from '../../hooks/useDeleteData';
import { getData } from '../../hooks/useGetData';
import '../../styles/userActions.css';



export const FlightCard =  () => {
  const flightsRef = useRef(flightsData);
  const [flights, setFlights] = useState([]);
  const navegate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const getFlights = async () => {
      try {
          const url = "/api/authenticate";
          const response = await dispatch(getData({ url }));
          if (response.status === 200) {
            flightsRef.current=response.data;
              setFlights(flightsRef.current);
          } else {
            /*   errorMessage('Error al cargar los vuelos'); */
          }
          setFlights(flightsData);
      } catch (error) {          
          errorMessage('Error al cargar los vuelos');
      }
  };
  getFlights();
  }, [dispatch])
  

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();   
    
    const filteredFlights =  flightsRef.current.filter(flight => 
      flight.origin.toLowerCase().includes(searchTerm) ||
      flight.destination.toLowerCase().includes(searchTerm)
    );
    setFlights(filteredFlights);
  };
  


    const handleEdit = (flight) => {
      dispatch(setFlightsData(flight));
      navegate('/Employee/EditFlight');
    }

    const handleDelete= async (flight)=>{     
      const url = "/api/authenticate";
      const response = await dispatch(deleteData({ url,data:flight.id}));

      if(response.status===200){
        correct('Vuelo eliminado con exito!')  
        setTimeout(() => {
          window.location.reload();
          }, 5000);    
      }else{
        errorMessage('Error al eliminar el vuelo')
      }
    }
    

  return (
    <div className="d-flex flex-column vh-100 ">
      <header className="bg-blue text-white py-3 px-3">
        <div className="d-flex justify-content-center align-items-center animate__animated animate__backInDown">
          <h1 className="h2 font-weight-bold">Panel de administración de vuelo</h1>
          
        </div>
      </header>
      <main className="flex-grow-1 bg-light p-3">
        <div className="bg-white shadow-sm rounded p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="container">
              <div className="row">


                <div className="col-md-4 d-flex justify-content-start">
                  <h3 className="h5 font-weight-bold">Lista de vuelos</h3>
                </div>


                <div className="col-md-4 d-flex justify-content-center">
                  <div className="input-group searchFlight w-50">
                    <input 
                      type='text'
                      className='form-control'
                      placeholder='origen o destino...'
                      name='searchFrom'
                      onChange={handleSearchChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-dark border-primary">
                        <i className="bi bi-search text-white"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 d-flex justify-content-end'>
                <Link to={'/Employee/AddFlight'} className="btn btn-success" >Agregar Vuelo</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Fecha</th>
                  <th>Hora de salida</th>
                  <th>Hora de llegada</th>
                  <th>Capacidad</th>
                  <th className="text-right">Acción</th>
                  
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.id}>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.date}</td>
                    <td>{flight.departureTime}</td>
                    <td>{flight.arrivalTime}</td>
                    <td>{flight.capacity}</td>

                    <td className="text-right">
                      <button 
                        className="btn btn-sm btn-primary m-2" 
                        onClick={() => handleEdit(flight)}
                      >
                        Editar
                      </button>
                      <button 
                       className="btn btn-sm btn-danger"
                       onClick={() => handleDelete(flight)}
                       >
                        Eliminar
                        </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <ToastContainerMessage/>
    </div>
  );
}
