import style from './home.module.css';
import Cards from '../../components/cards/cards';
import NavBar from '../../components/navBar/navBar';
import SearchBar from '../../components/searchBar/searchBar';
import NumberPage from '../../components/Paginado/paginado';
import { getDogs, getTemperaments } from '../../Redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state?.dogs);
  //console.log(allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs?.slice(indexOfFirstDog, indexOfLastDog);
  //console.log(currentDogs);

  const paginado = (pagNumber) => {
    setCurrentPage(pagNumber);
  };

  const numDogs = allDogs?.length;
  //console.log(numDogs);

  function pagePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function pageNext() {
    let lastPage = Math.ceil(allDogs.length / dogsPerPage);
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  }


  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    setCurrentPage(1);
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className={style.text}>
          <strong>Enciclopedia Perruna</strong>
        </h1>
        <div>
          <NavBar
          allDogs={allDogs}
          />
          <SearchBar />
          <NumberPage
            dogsPerPage={dogsPerPage}
            numDogs={numDogs}
            paginado={paginado}
            pageNext={pageNext}
            pagePrev={pagePrev}
          />
        </div>
        <div className={style.cuerpoHome}>
          {currentDogs.map(({ id, name, image, height, life_span }) => (
            <Cards
              key={id}
              id={id}
              name={name}
              image={image}
              height={height}
              life_span={life_span}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;