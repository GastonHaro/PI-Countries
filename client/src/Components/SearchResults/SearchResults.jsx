import style from './SearchResults'
import Card from "../Card/Card";
import CardsContainer from '../CardsContainer/CardsContainer';


const SearchResults = ({ results }) => {

    
    return(
        <div>
            {results?.map(country => {
                return (
                    <div key={country.id} className={style.container}>
                        <Card
                            id={country.id}
                            key={country.id}
                            name={country.name}
                            continent={country.continent}
                            flags={country.flags}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults;