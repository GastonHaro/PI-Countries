import { useParams } from 'react-router-dom'
import DetailCard from "../../Components/DetailCard/DetailCard";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../../redux/actions';



const Detail = () => {
    const {id} = useParams()
    console.log(id);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch, id])

    return (
        <div>
            <DetailCard />
        </div>
    )
};

export default Detail;