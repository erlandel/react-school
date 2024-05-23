import { Navbar } from '../component/navbar/navbar'
import { Route, Routes } from 'react-router-dom'

import { UserAdmin } from '../component/administratorActions/UserAdmin'

export const AdminRouter = () => {
 
    return (
        <div>
          <Navbar/>
            <Routes>     
          <Route path="UserAdmin" element={<UserAdmin />} />  
          </Routes>
    
        </div>
      )
}
