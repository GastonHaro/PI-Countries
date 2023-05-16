import style from './Card.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Card = (props) => {
    return(
        <div className={style.container}>
            <Link to={`detail/${props.id}`}>
            <h2>{props.name}</h2>
            </Link>
            <img src={props.flags} alt="" className={style.img} />
            <h5>Continent: {props.continent}</h5>
        </div>
    )
}

export default Card;