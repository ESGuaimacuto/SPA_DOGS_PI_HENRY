import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from "../../Redux/actions"
import style from './filtroAlfa.module.css';

const FilterByAlphabet = () => {
  
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
   

  };
  return (
    <div>
      <select
        onChange={(event) => {
          handleFilter(event);
        }}
        name='filterAZ'
        id='filterAZ'
        className={style.nameFilter}
      >
        <option className={style.Az} value='AZ'>
          Order A-Z
        </option>
        <option className={style.Az} value='ZA'>
          Order Z-A
        </option>
      </select>
    </div>
  );
};

export default FilterByAlphabet;