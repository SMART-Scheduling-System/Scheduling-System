import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import 'antd/dist/antd.min.css'
// import {Button} from 'antd'

function App() {
  return (
    // <div className="App p-5">
    //   <h1>SMART-Scheduling System</h1>
    //   <Button type="primary" ><a href="/login">Primary Button</a></Button>
    
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
  // </div>
  );
}

export default App;
