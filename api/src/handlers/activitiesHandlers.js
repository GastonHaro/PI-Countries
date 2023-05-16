const { getActivities, postActivities, deleteActivities } = require('../controllers/activitiesController')

const getActivitiesHandler = async (req, res) => {
    try {
        const activities = await getActivities();
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const postActivitiesHandler = async (req, res) => {
    const {name, difficulty, duration, season, idPais} = req.body;
    try {
        const newActivity = await postActivities(name, difficulty, duration, season, idPais);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteActivitiesHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteActivities(id)
        res.status(200).send('The activity has been successfully deleted!')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler,
    deleteActivitiesHandler
}