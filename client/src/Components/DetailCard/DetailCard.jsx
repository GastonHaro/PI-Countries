// import style from './DetailCard.module.css'


const DetailCard = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.flags} alt="" />
            <h5>{props.id}</h5>
            <h5>Capital: {props.capital}</h5>
            <h5>Continent: {props.continent}</h5>
            <h5>Population: {props.population}</h5>
            <h5>Area: {props.area}</h5>
        </div>
    )
}

export default DetailCard;