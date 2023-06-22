import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { filterByCreated } from '../../Redux/actions';
import style from './filtroAlfa.module.css';

const FilterByOrigin = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    event.preventDefault();
    dispatch(filterByCreated(event.target.value));
  };

  return (
    <div className={style.container}>
      <select
        onChange={(event) => handleChangeFilter(event)}
        className={style.nameFilter}
        defaultValue=''
      >
        <option value='ALL'>FILTER BY ORIGIN</option>
        <option value='false'>API</option>
        <option value='true'>My Dogs</option>
      </select>
    </div>
  );
};

export default FilterByOrigin;