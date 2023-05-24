import { Link } from 'react-router-dom';
import style from './NavBar.module.css'



const NavBar = () => {

    

    return (
        <div className={style.mainContainer}>
            <div className={style.boton}> 
            <Link to='/home' className={style.text}>HOME</Link>
            </div>
            <div className={style.boton}>
            <Link to='/create' className={style.text}>FORM</Link>
            </div>
            <div className={style.boton}>
            <Link to='/' className={style.text}>SIGN OUT</Link>
            </div>
        </div>
    )
};

export default NavBar;