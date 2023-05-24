import { Link } from 'react-router-dom'
import style from './Landing.module.css'

const Landing = () => {
    return(
        <div className={style.container}>
            <div className={style.title}>
                <h1>
                COUNTRY/ADVENTURES
                </h1>
            </div> 
            <div className={style.buttonCont}>
            <button className={style.button}>
                <Link to='/home' className={style.text}>Sign In</Link>
            </button>
            </div>
        </div>
    )
};


export default Landing;