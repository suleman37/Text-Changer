import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Textutiles from './Components/Textutiles';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Textutiles/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;