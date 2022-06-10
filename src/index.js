import React from 'react';
import ReactDOM from 'react-dom/client';
import Lojas from './components/Lojas.jsx';

import './commons/styles/asset.min.css';
import './commons/styles/styles.css';

console.log(document.getElementById('main'))

const root = ReactDOM.createRoot(document.getElementById('main'))


root.render(
   <Lojas />
);
