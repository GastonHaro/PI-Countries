const { getCountries, searchCountryByName, getDetailcountry } = require('../controllers/countriesController')


const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const countries = name 
        ? await searchCountryByName(name)
        : await getCountries();
        if(!countries.length) throw Error('The Country does not exist')
        res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getDetailCountryHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
        const country = await getDetailcountry(idPais)
        res.status(200).json(country)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getCountriesHandler,
    getDetailCountryHandler
}