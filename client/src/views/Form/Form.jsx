import { useEffect, useState } from "react";
import style from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryByName, postActivities } from "../../redux/actions";
import validation from "../../Components/Validation/validation";

const Form = () => {
    
    const [infoActivities, setInfoActivities] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idPais: []
    });

    const [errors, setErrors] = useState({});
    const [disable, setDisable] = useState(true);
    const dispatch = useDispatch();
    const country = useSelector(state=>state.country);
    const id = country[0]?.id;

    
    //Disable submit
    const allProperties = Object.values(infoActivities).every(info => {
        if (Array.isArray(info)) {
          return info.length !== 0;
        } else {
          return info !== '';
        }
      });

    const changeHandle = (event) => {
        const prop = event.target.name
        const value = event.target.value   //guardamos valores en el estado interno de forma dinamica 
        setErrors(validation({...infoActivities,[prop]:value}))
        setInfoActivities({...infoActivities,[prop]:value})

    };
        
    const handleCountries = (event) => {
        const value = event.target.value
        dispatch(getCountryByName(value))
        setDisable(value === '')
    };
    
    const handleSearch = () => {
        const country = new Set([...infoActivities.idPais, id]);
        const newArray = [...country]
        setInfoActivities({...infoActivities, idPais:newArray})

    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postActivities(infoActivities))
        setInfoActivities({        
        name: '',
        difficulty: '',
        duration: '',
        season: '',
    })
    };
    console.log(errors.idPais);

    return (
        <div className={style.container}>
           <form onSubmit={handleSubmit} className={style.formCont}>
            <h1>Form page</h1>
            <h2>Create your activity!</h2>
            <div className={style.inputCont}>
                <label >Activity Name: </label>
                <input value={infoActivities.name} type="text" name="name" onChange={changeHandle} required autoComplete="off" />
                    <div className={style.error}>
                        {errors.name && <label>{errors.name}</label>}
                    </div>
            </div>
            <div className={style.inputCont}>
                <label >Difficulty level: </label>

                <input value={infoActivities.difficulty} type="range" min={0} max={5} placeholder=" 1 - 5" name="difficulty" onChange={changeHandle} required />
                    <div className={style.error}>
                        {errors.difficulty && <label>{errors.difficulty}</label>}
                    </div>
            </div>
            <div className={style.inputCont}>
                <label >Duration : </label>
                <input value={infoActivities.duration} type="time" name="duration" onChange={changeHandle} required/>
                    <div className={style.error}>
                        {errors.duration && <label>{errors.duration}</label>}
                    </div>
            </div>
            <div onChange={changeHandle} className={style.inputCont}>
                <legend>Season: </legend>
                <input type="radio" name="season" value={'Summer'} className={style.radio} /> 
                <label >Summer</label>
                <input type="radio" name="season" value={'Winter'} className={style.radio} />
                <label >Winter</label>
                <input type="radio" name="season" value={'Spring'} className={style.radio} />
                <label >Spring</label>
                <input type="radio" name="season" value={'Autum'} className={style.radio} />
                <label >Autum</label>
                    <div className={style.error}>
                        {errors.season && <label>{errors.season}</label>}
                    </div>
            </div>
            <div className={style.inputCont}>
                <label >Countries: </label>
                <input type="text" list="options" autoComplete="off" onChange={handleCountries} required/>
                <datalist id="options">
                    {country.map(coun => (
                        <option key={coun.id} value={coun.name}/>
                    ))}
                </datalist>
                <button className={style.addButton} disabled={disable} type='button' onClick={handleSearch}>Add</button>
                    <div className={style.error}>
                        {errors.idPais?.length && <label>{errors.idPais}</label>}      
                    </div>
            </div>
            <div className={style.inputCont}>
                <button className={style.submitButton} disabled={!allProperties} type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
    );
};

export default Form;