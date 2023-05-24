import { useSelector } from "react-redux"
import style from './DetailActivities.module.css'


const DetailActivities = () => {
    const activities = useSelector(state=>state.countryDetail.activities)


    return(
        <div className={style.containerTotal}>
            <h1>ACTIVITIES LIST</h1>
            {activities?.map(activity => (
                <div className={style.container}>
                    <h4>{activity.name}</h4>
                    <div className={style.containerInfo}>
                        <div key={activity.id}>
                            <p>Difficulty level: {activity.difficulty}</p>
                            <p>Duration: {activity.duration}</p>
                            <p>Season: {activity.season}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DetailActivities;