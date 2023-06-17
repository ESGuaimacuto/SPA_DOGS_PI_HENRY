import './home.css';
import Card from '../../components/card/card';
import Cards from '../../components/cards/cards';
import NavBar from '../../components/navBar/navBar';
import SearchBar from '../../components/searchBar/searchBar';
import { getDogs, getTemperaments } from '../../Redux/actions';
import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state)=>state.dogs);

  useEffect(()=>{
    dispatch(getDogs())
    dispatch(getTemperaments())
  }, []);

  return (
    <div>
      <h1>Enciclopedia Perruna</h1>
      <NavBar/>
      <SearchBar/>
      {
        allDogs.map(({id, name, image})=>{
          return (
            <Cards
              key={id}
              id={id}
              name={name}
              image={image}
            />
            )
          })
        }
    </div>
  );
}

export default Home;