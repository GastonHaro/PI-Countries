const { Router } = require('express');
const validate = require('../middlewares/validate')
const { 
    postActivitiesHandler,
    getActivitiesHandler,
    deleteActivitiesHandler
 } = require('../handlers/activitiesHandlers')

const activitiesRouter = Router();


activitiesRouter.post('/', validate, postActivitiesHandler);

activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.delete('/:id', deleteActivitiesHandler);

module.exports = activitiesRouter;