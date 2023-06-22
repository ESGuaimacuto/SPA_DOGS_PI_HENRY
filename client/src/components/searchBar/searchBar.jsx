import style from './searchBar.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchByName } from '../../Redux/actions';

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [isFocused, setIsFocused] = useState(false);

  // const buscarPerro = document.getElementsByName("Busqueda");
  // buscarPerro.addEventListener("keydown", (event)=> {
  //   if(event.keyCode === 13){
  //     event.preventDefault();
  //     dispatch(searchByName(name));
  //     setName("")
  //   }
  // })

  const handleChange = (event) =>{
     event.preventDefault(event);
     setName(event.target.value)
   
  };

  const handleSubmit = (event) => {
      event.preventDefault(event);
      dispatch(searchByName(name));
      setName("")
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  
  return (
      <div className={style.barra}>
        <input 
        className={style.imput}
        id="Busqueda"
        type="text"
        onChange={handleChange}
        value={name}
        placeholder={isFocused ? "" : 'Search dog'} 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        />
        <button
        className={style.botones}
        onClick={(event)=> handleSubmit(event)}
        type='submit'
        >
          Search Dog
        </button>       
        <Link to="/create">
          <button className={style.botones}>Create your Dog</button>
        </Link>
      </div>

 
  );
}

export default SearchBar;