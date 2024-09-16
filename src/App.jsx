
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parent, Home, Contact, About } from './pages/index';
import './App.scss'; 
import React from 'react';
const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
