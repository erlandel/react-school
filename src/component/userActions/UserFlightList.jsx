import React, {useEffect, useState } from 'react';
import { ReservedFlights } from './ReservedFlights';

import { flightsData } from './functionUser/FlightsData';
import { useDispatch, useSelector } from 'react-redux';
import { getDataObject } from '../../hooks/useGetDataObject';
/* import { errorMessage } from '../messages/errorMessage'; */



export const UserFlightList = () => {
    const dispatch=useDispatch();
    const email=useSelector((state) => state.auth.email);
    const [flights, setFlights] = useState(flightsData);

 
useEffect(() => {
 const getFlights=async()=>{
    try {
        const url='aaa/api';
        const response= await dispatch(getDataObject({url,email}))
        if (response.status === 200) {
            setFlights(response.data);            
        } else {
            /* errorMessage('Error al cargar los vuelos'); */
        }
    } catch (error) {
        console.log(error);
    }
 }
 getFlights();
}, [dispatch,email])   


    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card cmx-auto p-2 shadow-sm min-vh-100 w-100 bg-custom">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12 text-center animate__animated animate__backInDown">
                        <div className='text-white'>
                            <h1>Vuelos reservados</h1>
                        </div>
                    </div>

                    <div className="container">
                        <ReservedFlights flights={flights} />
                    </div>
                </div>
            </div>
        </div>
    );
};
