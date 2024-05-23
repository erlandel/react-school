import { Route, Routes } from "react-router-dom";

import { Navbar } from "../component/navbar/navbar";
import { HomeApp } from "../HomeApp";



export const DashboardRoutes = () => {
  return (
<div>
        <Navbar/>
          <Routes>
          <Route path="HomeApp" element={<HomeApp />} />          
          </Routes>
    </div>
  )
}

