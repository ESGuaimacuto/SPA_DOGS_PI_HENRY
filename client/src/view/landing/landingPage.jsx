import style from "./landingPage.module.css"
import { NavLink } from "react-router-dom"

const LandingPage = ()=>{
    return (
        <div className={style.contenedor}>
            <h1>Wellcome to Enciclopedia Perruna</h1>
            <button>
                <NavLink to="/dogs"> Ingresar </NavLink>
            </button>
            
        </div>
    )
}

export default LandingPage;