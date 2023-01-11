import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import InfosMagasins from './Components/InfosMagasins';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/infosmagasins' element={<InfosMagasins/>} />
                <Route path='*' element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;