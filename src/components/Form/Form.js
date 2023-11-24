import { useState } from 'react';
import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ onSearchChange }) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className="search-form">
      <label className="search-by" htmlFor="search-by">
        Search Titles:
      </label>
      <input
        name="search-input"
        className="search-input"
        type="text"
        placeholder="SEARCH..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Form;

Form.propTypes = {
  onSearchChange: PropTypes.func,
};
