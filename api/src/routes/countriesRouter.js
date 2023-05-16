const { Router } = require('express');
const { 
    getCountriesHandler,
    getDetailCountryHandler,
 } = require('../handlers/countriesHandlers')

const countriesRouter = Router();

countriesRouter.get('/', getCountriesHandler); 

countriesRouter.get('/:idPais', getDetailCountryHandler); 


module.exports = countriesRouter;