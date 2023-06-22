import React from "react";
import style from "./paginado.module.css"

export default function NumberPage ({dogsPerPage, numDogs, paginado, pageNext, pagePrev}){
    const pagNumber = [];
    
    for(let i=0; i <= Math.ceil(numDogs/dogsPerPage); i++){
        pagNumber.push(i + 1)
    };
    console.log(numDogs);
    return(
        <nav >
            <div className={style.paginationCenter}>
            <div className={style.numberFlechita} onClick={pagePrev}>
            «
            </div>
            {pagNumber && pagNumber.map(number =>(
                    <li className={style.numberFlechita} key={number}>
                        <a className={style.currentPage}
                        onClick={()=>paginado(number)}> {number} </a>
                    </li>                  
                    ))}
            <div className={style.numberFlechita} onClick={pageNext}>
            »
            </div>
            </div>
        </nav>  
    )
}