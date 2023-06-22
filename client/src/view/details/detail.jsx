import style from "./detail.module.css"
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { dogsDetail } from '../../Redux/actions';

function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const allDetail = useSelector((state)=> state?.detail)
  
  useEffect(()=>{
    dispatch(dogsDetail(id))
  }, [dispatch, id])

  return (
    <div>
      {
        allDetail.map(({id, image, name, weight, height, life_span})=>{
          return(
            <div
            key={id}
            id={id}
            image={image}
            height={height}
            weight={weight}
            life_span={life_span}
            >
             <div className={style.cuerpoTarjeta}>
              <h1 className={style.title}>Especificaciones</h1>
              <img className={style.image} src={image} alt={name} />
              <h7 className={style.text}> Id: {id} </h7>
              <h1 className={style.text}> Raza: {name} </h1>
              <h4 className={style.text}> Tamaño Aprox: {weight} pulgadas</h4>
              <h4 className={style.text}> Peso Aprox: {height} libras</h4>
              <h4 className={style.text}> Espectativa de Vida: {life_span} </h4>
              <Link to="/dogs">
                <button className={style.link}>Home</button>
              </Link>
             </div>


            </div>
          )
        })
      }
    </div>
  );
}

export default Detail;