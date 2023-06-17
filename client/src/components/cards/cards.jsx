import './cards.css';
import Card from '../card/card';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function Cards({id, name, image}) {
  return (
    <div>
      <Card
      key={id}
      id={id}
      name={name}
      image={image}
      />
    </div>
  );
}

export default Cards;