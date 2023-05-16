
import DetailCard from "../DetailCard/DetailCard";
import { useSelector } from "react-redux";

const DetailCardContainer = () => {
    const {id, name, population, continent, flags, capital, area} = useSelector(state=>state.countries)
    
   
    return (
        <div>
            <DetailCard 
                name={name}
                flags={flags}
                id={id}
                population={population}
                capital={capital}
                continent={continent}
                area={area}
                />
        </div>
    )
}

export default DetailCardContainer;
