import style from './Card.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Card = (props) => {
    return(
        <Link to={`detail/${props.id}`}>
            <div className={style.container}>
            <h2 className={style.title} >{props.name}</h2>
            <img src={props.flags} alt="flags" className={style.img} width="280px" height="150" />
            <h5 className={style.continentCard} >Continent: {props.continent}</h5>
            </div>
        </Link>
    )
}

export default Card;