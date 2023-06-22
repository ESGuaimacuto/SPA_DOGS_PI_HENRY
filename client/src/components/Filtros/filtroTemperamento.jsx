import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByTemperament, getTemperaments } from '../../Redux/actions';
import style from './filtroAlfa.module.css';

export default function FilterByTemperament() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleFilterTemp(e) {
    e.preventDefault();
    dispatch(filterByTemperament(e.target.value)); 
  }

  return (
    <select onChange={(e) => handleFilterTemp(e)} className={style.nameFilter}>
      <option key={0} value='ALL'>
        Temperaments
      </option>
      {allTemperaments?.map((temp) => (
        <option value={temp[0].name} key={temp[0].id}>
          {temp[0].name}
        </option>
      ))}
    </select>
  );
}