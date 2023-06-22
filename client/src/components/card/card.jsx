import style from "../card/card.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card({id, name, image, height, life_span}) {
  return (
    <div className={style.Card}>
      <h1>Características</h1>
        <Link to={`/dogs/${id}`}>
          <img src={image} alt={name} className={style.Image} />
        </Link>
      <h2 className={style.text}> Raza: {name} </h2>
      <h3 className={style.text}> Peso: {height} Libras </h3>
      <h4 className={style.text}> Espectativa de vida: {life_span} </h4>
    </div>
  );
}

export default Card;