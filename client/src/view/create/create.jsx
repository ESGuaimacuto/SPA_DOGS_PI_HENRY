import style from "../create/copycreated.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from "react-router-dom";
import { postDog, getTemperaments } from '../../Redux/actions';
import validationForm from "./validationForm"

function Create() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state)=>state.temperaments)
  //console.log(allTemperaments);
  const [errors, setErrors] = useState({})
  const [success] = useState(false);
  const [input, setInput] = useState({
    name: '',
    height: '',
    weight: '',
    life_span: '',
    imagen: '',
    temperament:[],
  }); 
  
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (!input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (Object.values(input).some((value) => value === '')) {
        throw new Error('Please fill out all fields');
      }
      const { heightMin, heightMax, weightMin, weightMax } = input;
      if (input.temperament.length === 0) {
        return alert('TEMPERAMENTS MUST BE SELECTED');
      }
      const parsedHeightMin = parseInt(heightMin, 10);
      const parsedHeightMax = parseInt(heightMax, 10);
      const parsedWeightMin = parseInt(weightMin, 10);
      const parsedWeightMax = parseInt(weightMax, 10);
      if (
        parsedHeightMin >= parsedHeightMax ||
        parsedWeightMin >= parsedWeightMax
      ) {
        return alert(
          'CHECK HEIGTHS OR WEIGHTS, MINS MUST BE MAYORS THAN HIGHS'
        );
      }
      dispatch(postDog(input));
      console.log("Disparé la acción");
      
      setInput({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        imagen: '',
        temperament: [],
      });
    } catch (error) {
      console.log("Estoy entrando al catch");
      alert(error.message);
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== e),
    });
  }

  console.log(input);

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.title}><strong>Create Your Dog</strong></h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={style.label}>
                <strong>Breed Name:</strong>
              </label>
              <input
                type='text'
                value={input.name}
                name='name'
                onChange={(e) => handleChange(e)}
                className={style.input}
              />
              {errors.name && <p className='error'>{errors.name}</p>}
            </div>
            <div>
              <label className={style.label}>
                <strong>Height: </strong>
              </label>
              <input
                className={style.input}
                type='number'
                value={input.height}
                name='height'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong>pulgadas</strong>
              </label>
              {errors.height && <p className='error'>{errors.height}</p>}
            </div>
            <div>
              <label className={style.label}>
                <strong>Weight: </strong>
              </label>
              <input
                className={style.input}
                type='number'
                value={input.weight}
                name='weight'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong>lbs</strong>
              </label>
              {errors.weight && <p className='error'>{errors.weight}</p>}
            </div>
            <div>
              <label className={style.label}>
                <strong>Life Span:</strong>
              </label>
              <input
                type='number'
                value={input.life_span}
                name='life_span'
                onChange={(e) => handleChange(e)}
                className={style.input}
              />
              <label>
                <strong> years</strong>
              </label>
              {errors.life_span && (
                <p className='error'>{errors.life_span}</p>
              )}
            </div>
            <div>
              <label className={style.label}>
                <strong className={style.text1}>Image: </strong>
              </label>
              <input
                className={style.input}
                type='text'
                value={input.imagen}
                name='imagen'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <select onChange={(e) => handleSelect(e)} className={style.prueba}>
                <option value='selected' hidden>
                  Temperaments
                </option>
                {allTemperaments.map((temp) => {
                    return (
                      <option value={temp[0].id} key={temp[0].id}>
                        {temp[0].name}
                        {errors.temperament && (
                          <p className='error'>{errors.temperament}</p>
                        )};
                      </option>
                    );
                  })}
              </select>
              {input.temperament.map((e) => {
                return (
                  <ul className='allSelecction' key={e}>
                    <li>
                      <p className='selecction'>
                        <strong>{e}</strong>
                      </p>
                      <button
                        onClick={() => handleDelete(e)}
                        className={style.x}
                      >
                      X
                      </button>
                    </li>
                  </ul>
                );
              })}
            </div>
          </form>
        </div>
        <div>
          <button className={style.btnDog} onClick={handleSubmit} type='submit'>
            PUSH TO CREATED
          </button>
        </div>
        <Link to='/dogs'>
          <button className={style.btnDog2}>Back To Home</button>
        </Link>
      </form>

      {success ? <h2>Created Successfully</h2> : null}
    </div>
  );
};
export default Create;