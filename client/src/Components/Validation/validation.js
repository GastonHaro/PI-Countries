
const validation = (dataActivity) => {
    const errors = {};
  
    if (!dataActivity.name) {
      errors.name = 'Name is required.';
    }
    if (!dataActivity.difficulty) {
      errors.difficulty = 'Difficulty level is required.';
    }
    if (!dataActivity.duration) {
      errors.duration = 'Duration is required.';
    }
    if (!dataActivity.season) {
      errors.season = 'Season is required.';
    }
    if (dataActivity.idPais.length === 0) {
      errors.idPais = 'Countries is required.';
    }

    if (dataActivity.difficulty && (dataActivity.difficulty < 1 || dataActivity.difficulty > 5)) {
      errors.difficulty = 'Invalid difficulty level selected.';
    }

  
    if (dataActivity.name && dataActivity.name.length > 36) {
      errors.name = 'Name cannot exceed 36 characters.';
    }
    return errors
  };
  
  export default validation;