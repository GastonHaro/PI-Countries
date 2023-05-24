import style from './DetailCard.module.css'
import { useSelector } from "react-redux";



const DetailCard = () => {
    const {id, name, flags, capital, continent, population, area,} = useSelector(state=>state.countryDetail);
    

    return(
        <div className={style.container}>
            <div
                style={{
                backgroundImage: `url(${flags})`,//le doy la image al background
                }} className={style.background}>
            </div>
            <div className={style.containerImg}>
                <h1>{name}</h1>
                <img src={flags} alt={name} />
                <h5>{id}</h5>
            </div>
            <div className={style.infoContainer}>
                <h5>Capital: {capital}</h5>
                <h5>Continent: {continent}</h5>
                <h5>Population: {population}</h5>
                <h5>Area: {area}</h5>
                </div>
        </div>
    )
};

export default DetailCard;