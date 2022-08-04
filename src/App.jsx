import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Footer/Footer';
import Branding from './Branding/Branding';
import ItemDetails from './ItemDetails/ItemDetails';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog/' element={<Catalog />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/item' element={<ItemDetails />} />
                    <Route path='/catalog/:id' element={<ItemDetails />} />
                </Routes>
                <Branding/>
                <Footer/>
            </Router>
        )
    }
}
