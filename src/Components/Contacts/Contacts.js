import React from 'react';
import PropTypes from 'prop-types';
import style from './Contacts.module.css';

const Contacts = ({ filterInpurt, deleteContact }) => {
  return (
    <ul className={style.list}>
      {filterInpurt.map(el => {
        return (
          <li key={el.id} className={style.item}>
            {el.name}: {el.number}
            <button
              type="button"
              className={style.button}
              onClick={() => deleteContact(el.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  filterInpurt: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
