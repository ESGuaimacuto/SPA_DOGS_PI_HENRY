import style from "../navBar/navBar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import FilterByAlphabet from '../Filtros/filtroAlfabetico';
import FilterByTemperament from '../Filtros/filtroTemperamento';
import FilterByOrigin from '../Filtros/filtroOrigen';
import FilterByWeight from '../Filtros/filtroWeight';

function NavBar() {
  
  const resetButon = () =>{
    location.reload()
  }
  
  return (
    <div className={style.barra}>
      <FilterByAlphabet/>
      <FilterByTemperament/>
      <FilterByOrigin/>
      <FilterByWeight/>
      <button className={style.botones} onClick={resetButon} >
        Reset Filters
      </button>
    </div>
  );
}
export default NavBar;