import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Homepage from './page/Homepage';
import About from './page/About';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Footer from "./footer"
import { BrowserRouter, createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Organization from './page/Organization';
import Information from './page/Information';
import Agenda from './page/Agenda';
import Itinerary from './page/Itinerary';
import Session from './page/Session';
import Paper from './page/Paper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <div style={{marginTop: "5vh", minHeight: "86.3vh"}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Organization' element={<Organization />}></Route>
          <Route path='/Information' element={<Information />}></Route>
          <Route path='/Agenda' element={<Agenda />}></Route>
          <Route path='/Itinerary' element={<Itinerary />}></Route>
          <Route path='/Session' element={<Session />}></Route>
          <Route path='/Paper' element={<Paper />}></Route>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
