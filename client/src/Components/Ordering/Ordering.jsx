import { useDispatch } from "react-redux";
import { orderPopulation, orderAlphabetic } from "../../redux/actions";
import style from './Ordering.module.css'

const Ordering = () => {
    const dispatch = useDispatch();

    const handlePopulation = (event) => {
        const value = event.target.value
        dispatch(orderPopulation(value))
    }

    const handleAlphabetic = (event) => {
        const value = event.target.value;
        dispatch(orderAlphabetic(value))
    }

    return (
        <div className={style.container}>
            <div onChange={handlePopulation} className={style.inputsContainer} >
                <legend>Sorting by population</legend>
                <div>
                    <input type="radio" name="population" defaultChecked value={'0'} />
                    <label >None</label>
                </div>
                <div>
                    <input type="radio" name="population" value={'-'}/>
                    <label >More population</label>
                </div>
                <div>
                    <input type="radio" name="population" value={'+'}/>
                    <label >Less population</label>
                </div>
            </div>
            <div onChange={handleAlphabetic} className={style.inputsContainer} >
                <legend>Sorting by alphabetic</legend>
                <div>
                <input type="radio" name="alphabetic" defaultChecked value={'0'}/>
                    <label >None</label>
                </div>
                <div>
                <input type="radio" name="alphabetic" value={'-'}/>
                    <label >Z-A</label>
                </div>
                <div>
                <input type="radio" name="alphabetic" value={'+'}/>
                    <label >A-Z</label>
                </div>
            </div>
        </div>
    )
}

export default Ordering;