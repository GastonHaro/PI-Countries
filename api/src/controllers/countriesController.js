const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


const getCountries = async () => {
    const countries = await Country.findAll()
    return countries;
};

const searchCountryByName = async (name) => { 
    const country = await Country.findAll({
         where: { name: {[Op.iLike]: `${name}%`} },
         include: [{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { attributes: [] }
         }]
        })
    return country;
};

const getDetailcountry = async (idPais) => {
    const country = await Country.findByPk(idPais, { 
        include: [{
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { attributes: [] }
         }]
        })
    return country;
};

module.exports = { searchCountryByName, getDetailcountry, getCountries };