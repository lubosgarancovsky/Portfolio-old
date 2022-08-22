import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import {LifeSim} from './routes/lifesim';
import {Notes} from './routes/simplenotes';



import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from './components/scrolltotop'
import { CollegeSearch } from './routes/collegesearch';
import { Eshop } from './routes/eshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={ <App />}></Route>
      <Route path="/project" element={<LifeSim />}></Route>
      <Route path="/mysimplenotes" element={<Notes />}></Route>
      <Route path="/collegesearch" element={<CollegeSearch />}></Route>
      <Route path="/eshop" element={<Eshop />}></Route>
    </Routes>
  </Router>
);
