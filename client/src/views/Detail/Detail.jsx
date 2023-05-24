import { useParams } from 'react-router-dom'
import DetailActivities from '../../Components/DetailActivities/DetailActivites';
import DetailCard from "../../Components/DetailCard/DetailCard";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cleanDetail, getActivities, getCountry } from '../../redux/actions';



const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountry(id));
        dispatch(getActivities)
        return () => {
            dispatch(cleanDetail())
        }
    },[dispatch, id])

    return (
        <div>
            <div>
                <DetailCard />
            </div>
            <div>
                <DetailActivities />
            </div>
        </div>
    )
};

export default Detail;