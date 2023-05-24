const { Activity, Country } = require('../db')

const postActivities = async (name, difficulty, duration, season, idPais) => {  
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
        });
    
    newActivity.addCountries(idPais);
    return newActivity;
};

const getActivities = async () => {
    const activities = await Activity.findAll({
        include: [{
            model: Country,
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }]
    })
    return activities;
};

const deleteActivities = async (id) => {
    await Activity.destroy({
        where: { id: id }
    })
}

const putActivities = async () => {

}


module.exports = { getActivities, postActivities, deleteActivities };