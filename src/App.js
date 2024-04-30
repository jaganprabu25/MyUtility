import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignatureComponent from './components/Signature';
import DayPickerComponent from './components/DayPicker';
import HomeComponent from './components/Home';
import ImageColorPickerComponent from './components/ImageColorPicker';
import AccordionComponent from './components/Accordion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/signature" element={<SignatureComponent />} />
        <Route path="/daypicker" element={<DayPickerComponent />} />
        <Route path='/imagecolorpicker' element={<ImageColorPickerComponent />}/>
        <Route path='/accordion' element={<AccordionComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
