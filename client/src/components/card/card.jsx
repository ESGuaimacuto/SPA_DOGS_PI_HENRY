import './card.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function Card({id, name, image}) {
  return (
    <div>
      <h1>Caracteristicas</h1>
      <img src={image} alt={name} />
      <h1> {id} </h1>
      <h2> {name} </h2>
    </div>
  );
}

export default Card;