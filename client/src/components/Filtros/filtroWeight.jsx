import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs, orderByWeight } from '../../Redux/actions';
import style from './filtroAlfa.module.css';

const FilterByWeight = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value));
  };

  return (
    <div>
      <select
        onChange={(event) => handleChangeFilter(event)}
        className={style.nameFilter}
        defaultValue=''
      >
        <option value=''>ORDER WEIGHT</option>
        <option value='LESS'>- WEIGHT</option>
        <option value='HIGH'>+ WEIGHT</option>
      </select>
    </div>
  );
};

export default FilterByWeight;