import Joi from 'joi';

const movieSchema = Joi.object({
    name: Joi.string().required(),
    duration: Joi.number().required(),
    filmcast: Joi.string().required(),
    image: Joi.string(),
});

export default movieSchema;