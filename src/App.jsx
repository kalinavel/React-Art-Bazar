import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Catalog/Catalog';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Footer/Footer';
import Branding from './Branding/Branding';
import ItemDetails from './Pages/ItemDetails';

function App() {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog/' element={<Catalog />} />
                <Route path='/catalog/:itemId' element={<ItemDetails /> }/>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Branding/>
            <Footer/>
        </Router>
    )
}

export default App