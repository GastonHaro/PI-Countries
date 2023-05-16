const axios = require('axios')
const { Country } = require('../db')


const API = 'https://restcountries.com/v3/all';

const dataFromApi = async () => {
    try {
        const response = await axios.get(API)
        const countries = response.data.map(country => ({
            id: country.cca3,
            name: country.name.common,
            continent: country.continents[0],
            capital: Array.isArray(country.capital) ? country.capital[0] : 'no capital',
            population: country.population,
            flags: country.flags[1],
            area: country.area
        }))   
        await Country.bulkCreate(countries)
    } catch (error) {
        return { error: error.message }
    }
}

module.exports = dataFromApi;