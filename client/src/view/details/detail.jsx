import './detail.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { dogsDetail } from '../../Redux/actions';

function Detail() {
  const dispatch = useDispatch();
  const allDetail = useSelector((state)=> state.detail)
  useEffect(()=>{
    dispatch(dogsDetail())
  }, [])

  return (
    <div>
      <h1>Detail Page</h1>
      {
        allDetail.map(()=>{
          return
        })
      }
    </div>
  );
}

export default Detail;