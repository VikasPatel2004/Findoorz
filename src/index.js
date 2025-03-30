import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import NotFound from "./landingpage/NotFound";
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import PgHome from './landingpage/pg/PgHome';
import FlatHome from './landingpage/Flat/FLatHome';
import LandLordHome from './landingpage/LandLord/LandLordHome';
import PgRenterHome from './landingpage/PgRenter/PgRenterHome';
import FlatRenterHome from './landingpage/FlatRenter/FlatRenterHome';
import FlatBrokerHome from './landingpage/FlatBroker/FlatBorkerHome';
import FlatLenderHome from './landingpage/FlatLender/FlatLenderHome';
import PgListingHome from './landingpage/PgListing/PgListingHome';
import PgLandlordFormHome from './landingpage/PgLandlordForm.jsx/PgLandLordFormHome';
import FlatLenderFormHome from './landingpage/FLatLenderForm/FlatLenderFormHome';
import FlatListingHome from './landingpage/FlatListing/FlatListingHome';
import SignupHome from './landingpage/signup/SignupHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/PgHome" element={<PgHome/>}/>
    <Route path="/FlatHome" element={<FlatHome />}/>
    <Route path="/LandLordHome" element={<LandLordHome />}/>
    <Route path="/PgRenterHome" element={<PgRenterHome/>}/>
    <Route path="/FlatRenterHome" element={<FlatRenterHome/>}/>
    <Route path="/FlatBrokerHome" element={<FlatBrokerHome/>}/>
    <Route path="/FlatLenderHome" element={<FlatLenderHome/>}/>
    <Route path="/PgListingHome" element={<PgListingHome/>}/>
    <Route path="/PgLandlordFormHome" element={<PgLandlordFormHome/>}/>
    <Route path="/FlatLenderFormHome" element={<FlatLenderFormHome/>}/>
    <Route path="/FlatListingHome" element={<FlatListingHome/>}/>
    <Route path="/SignupHome" element={<SignupHome/>}/>
    
    

    <Route path="*" element={<NotFound />}/>
    
  </Routes>
  <Footer />
  </BrowserRouter>
);

