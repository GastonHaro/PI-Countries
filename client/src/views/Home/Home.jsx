import style from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountryByName, getCountries} from '../../redux/actions';

import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from '../../Components/SearchBar/SearchBar';
import Filter from '../../Components/Filter/Filter';
import Ordering from '../../Components/Ordering/Ordering';


const Home = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(12); // Número de países por página
    const [resultSearch, setResultSearch] = useState(false)
    const pageNumbers = [];
    const searchPageNumbers = [];

    const indexOfLastCountry = currentPage * countriesPerPage; //Calcula el índice del último país y el índice del primer país
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    
    const countries = useSelector(state=>state.countries)
    const country = useSelector(state=>state.country)
    
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);

    const handleSearch = (value) => {
        dispatch(getCountryByName(value))
        setCurrentPage(1);
        setResultSearch(value !== '')
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
        pageNumbers.push(i); //Se calcula el numero de paginas del total
      };

      for (let i = 1; i <= Math.ceil(country.length / countriesPerPage); i++) {
        searchPageNumbers.push(i); //Se calcula el numero de paginas cuando se utiliza la SearchBar
      };
    
    return (
        <div className={style.container}>
            <SearchBar onSearch={handleSearch}/>
            <Filter />
            <Ordering />
            <div>
                {resultSearch && <CardsContainer countries={country.slice(indexOfFirstCountry, indexOfLastCountry)}/>}
            </div>
            <div>
                {!resultSearch && <CardsContainer countries={countries.slice(indexOfFirstCountry, indexOfLastCountry)}/>}
            </div>

            <nav className={style.containerPag}>
                <ul>
                {currentPage > 1 && (
                    <li>
                        <button onClick={() => paginate(currentPage - 1)}>◀</button>
                    </li>
                )}
                {searchPageNumbers.length === 0 && pageNumbers.map((number) => (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
                {searchPageNumbers.length !== 0 && searchPageNumbers.map((number) => (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
                {currentPage < pageNumbers.length && (
                    <li>
                        <button onClick={() => paginate(currentPage + 1)}>▶</button>
                    </li>
                )}
                </ul>
            </nav>
        </div>
    )
};

export default Home;