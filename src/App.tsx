import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from "./pages/Main";
import {Route, Routes } from 'react-router-dom';
import OneModule from "./pages/module/OneModule";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}>
                <Route path='/module' element={<OneModule/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
