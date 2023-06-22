import style from "../cards/cards.module.css"
import Card from '../card/card';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function Cards({id, name, image, height, life_span}) {
  return (
    <div className={style.contenedor}>
      <Card
       key={id}
       id={id}
       name={name}
       image={image}
       height={height}
       life_span={life_span}
      />
    </div>
  );
}

export default Cards;