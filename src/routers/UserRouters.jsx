import React from 'react'
import { Navbar } from '../component/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import { FlightList } from '../component/userActions/FlightList';
import { UserFlightList } from '../component/userActions/UserFlightList';


export const UserRouters = () => {
  return (
    <div>
    <Navbar/>
      <Routes>     
      <Route path="FlightList" element={<FlightList />} /> 
      <Route path="UserFlightList" element={<UserFlightList />} />     
      </Routes>
</div>
  )
}
