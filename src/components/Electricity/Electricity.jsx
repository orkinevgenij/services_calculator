import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleZoneCounter from './SingleZoneCounter/SingleZoneCounter'
import DualZoneCounter from './DualZoneCounter/DualZoneCounter'
import ThreeZoneCounter from './ThreeZoneCounter/ThreeZoneCounter'
import ElectricityMenu from './ElectricityMenu/ElectricityMenu'

const Electricity = (props) => {
  return (
    <div>
      <ElectricityMenu/>
      <Routes>
        <Route path="*" element={<SingleZoneCounter/>}/>
        <Route path="/dual" element={<DualZoneCounter/>}/>
        <Route path="/three" element={<ThreeZoneCounter/>}/>
      </Routes>


    </div>

  )

}

export default Electricity