import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ handleFilterInput }) => {
  return (
    <label className={style.label}>
      Find contacts by name{' '}
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => {
          handleFilterInput(e.currentTarget.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
};

export default Filter;
