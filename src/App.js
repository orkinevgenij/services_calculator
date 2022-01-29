import './App.css'
import Electricity from './components/Electricity/Electricity'
import Gas from './components/Gas/Gas'
import Water from './components/Water/Water'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header/Header'

function App () {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<Electricity/>}/>
        <Route path="/gas" element={<Gas/>}/>
        <Route path="/watter" element={<Water/>}/>
      </Routes>
    </div>
  )
}

export default App