import style from './SearchBar.module.css'
const SearchBar = ({ onSearch }) => {
    
    const handleChange = (event) => {
        const value = event.target.value
        onSearch(value)
    }
    
    return(
        <div className={style.container}>
            <input className={style.search} type="search" onChange={handleChange} placeholder="Search Country..."/>
        </div>
    )

}

export default SearchBar;




