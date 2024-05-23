import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FlightCard } from '../component/employeeActions/FlightCard'
import { Navbar } from '../component/navbar/navbar'


export const EmployeeRouter = () => {
  return (
    <div>
      <Navbar/>
        <Routes>     
      <Route path="FlightCard" element={<FlightCard />} />   
      
      </Routes>

    </div>
  )
}
