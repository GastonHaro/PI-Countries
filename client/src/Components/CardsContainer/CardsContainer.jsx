import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux'


const CardsContainer = ({countries}) => {

    return(
        <div className={style.container}>
            {countries?.map(country => {
                return <Card 
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    continent={country.continent}
                    flags={country.flags}
                />
            })}
        </div>
    )
}

export default CardsContainer;