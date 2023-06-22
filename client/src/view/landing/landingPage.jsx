import style from "./landingPage.module.css"
import { NavLink } from "react-router-dom"

const LandingPage = ()=>{
    return (
        <div className={style.cuerpoLanding}>
            <h1 className={style.landing}><strong>Welcome to Enciclopedia Perruna</strong></h1>
            <button className={style.boton}>
                <NavLink to="/dogs" className={style.link}> <strong>Ingresar</strong> </NavLink>
            </button>
        </div>
    )
}

export default LandingPage;