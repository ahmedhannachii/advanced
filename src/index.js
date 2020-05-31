import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './component/ProductTable';
import * as serviceWorker from './serviceWorker';


  const products = [
  {id:1, nom:"pc", prix:"1000dt", categorie:"Electronics"},
  {id:2, nom:"pull", prix:"80dt", categorie:"Clothes"}
];


ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
