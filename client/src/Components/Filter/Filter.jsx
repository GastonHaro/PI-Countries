import style from './Filter.module.css'
import { useDispatch } from "react-redux";
import { continentFilter, activitiesFilter } from "../../redux/actions";

const Filter = () => {

    const dispatch = useDispatch()
    

    const handleContinent = (event) => {
        const value = event.target.value
        dispatch(continentFilter(value))
    }

    const handleTypeActivity = (event) => {
        const value = event.target.value
        dispatch(activitiesFilter(value))
    }
 

    return (
        <div className={style.container}>
            <div onChange={handleContinent} className={style.containerInputs}>
                <legend>Filter by continent</legend>
                <div>
                    <input id='all' type="radio" name="continent" value={'All'} defaultChecked/>
                    <label htmlFor='all' >All</label>
                </div>
                <div>
                    <input id='south' type="radio"name="continent" value={'South America'}/>
                    <label htmlFor='south' >South America</label>
                </div>
                <div>
                    <input id='north' type="radio" name="continent" value={'North America'}/>
                    <label htmlFor='north' >North America</label>
                </div>
                <div>
                    <input id='europe' type="radio" name="continent" value={'Europe'}/>
                    <label htmlFor='europe' >Europe</label>
                </div>
                <div>
                    <input id='asia' type="radio" name="continent" value={'Asia'}/>
                    <label htmlFor='asia' >Asia</label>
                </div>
                <div>
                    <input id='africa' type="radio" name="continent" value={'Africa'}/>
                    <label htmlFor='africa' >Africa</label>
                </div>
                <div>
                    <input id='oceania' type="radio" name="continent" value={'Oceania'}/>
                    <label htmlFor='oceania' >Oceania</label>
                </div>
                <div>
                    <input id='antartica' type="radio" name="continent" value={'Antarctica'}/>
                    <label htmlFor='antartica' >Antarctica</label>
                </div>
            </div>
            <div onChange={handleTypeActivity} className={style.containerFilterActivity}>
                <legend>Filter by activity</legend>
                <div className={style.inputsActivity}>
                    <input id='alls' type="radio" name="activity" value={'All'} defaultChecked />
                    <label htmlFor='alls' >All</label>
                </div>
                <div className={style.inputsActivity}>
                    <input id='with' type="radio" name="activity" value={'With'} />
                    <label htmlFor='with' >With activities</label>
                </div>
                <div className={style.inputsActivity}>
                    <input id='without' type="radio" name="activity" value={'Without'} />
                    <label htmlFor='without' >Without activites</label>
                </div>
            </div>
        </div>

    )
}

export default Filter;