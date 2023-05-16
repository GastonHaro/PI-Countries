import style from './Home.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../../redux/actions'
import CardsContainer from "../../Components/CardsContainer/CardsContainer";


const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div className={style.container}>
            <CardsContainer />
        </div>
    )
};

export default Home;