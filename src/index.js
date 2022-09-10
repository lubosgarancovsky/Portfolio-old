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
import { PlusShoes } from './routes/plusshoes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={ <App />}></Route>
      <Route exact path="/lifesim" element={<LifeSim />}></Route>
      <Route exact path="/mysimplenotes" element={<Notes />}></Route>
      <Route exact path="/collegesearch" element={<CollegeSearch />}></Route>
      <Route exact path="/eshop" element={<Eshop />}></Route>
      <Route exact path="/plusshoes" element={<PlusShoes />}></Route>
    </Routes>
  </Router>
);
