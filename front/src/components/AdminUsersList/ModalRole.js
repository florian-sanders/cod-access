import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ModalRole = ({}) => {
  const handleChange = (event) => {
    // event.preventDefault();
    // console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange}>
        <option value="2">Admin</option>
        <option value="1">Utilisateur</option>
      </select>
      <button type="submit">Valider les modifications</button>
    </form>

  )
}


export default ModalRole;
