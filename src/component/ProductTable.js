import React from 'react';
import PropTypes from 'prop-types';

const ProductTable = (props) =>{

  return (
  <table>
  <thead>
    <tr>
    <th>Nom</th>
    <th>Prix</th>
    <th>Categorie</th>
    </tr>
  </thead>
  <tbody>
   {props.products.map(item => {
     return (
     <tr key={item.id}>
      <td>{item.nom}</td>
      <td>{item.categorie}</td>
      <td>{item.prix}</td>
      </tr> )
     })}
  </tbody>
 </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.array
}

export default ProductTable;