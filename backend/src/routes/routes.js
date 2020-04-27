const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const UserTypeController = require('./controllers/UserTypeController');
const ProfileController = require('./controllers/ProfileController');
const PermissionsController = require('./controllers/PermissionsController');
const StocksController = require('./controllers/StocksController');

const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
  })
}), SessionController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.post('/user', celebrate({
  [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().required().email(),
      fullname: Joi.string().required(),
      initials: Joi.string().required(),
      state: Joi.boolean().required(),
      user_type_id: Joi.number().required()
  })
}),  UserController.create);

routes.get('/user', UserController.index);

routes.get('/user/:id', UserController.indexById);

routes.delete('/user/:id', UserController.delete);

routes.post('/user_type', celebrate({
  [Segments.BODY]: Joi.object().keys({
      description: Joi.string().required()
  })
}),  UserTypeController.create);

routes.get('/user_type/:is_admin', UserTypeController.indexByAdmin);
routes.get('/user_type', UserTypeController.indexAll);
routes.delete('/user_type/:id', UserTypeController.delete);

routes.post('/permissions', celebrate({
  [Segments.BODY]: Joi.object().keys({
      description: Joi.string().required(),
      user_type_id: Joi.number().required(),
      allow: Joi.boolean().required()
  })
}),  PermissionsController.create);

routes.get('/permissions', PermissionsController.indexAll);
routes.delete('/permissions/:id', PermissionsController.delete);


routes.post('/stocks', celebrate({
  [Segments.BODY] : Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
    setup_date: Joi.date().required(),
    from_wild: Joi.boolean().required(),
    collection_date: Joi.date(),
    collection_location: Joi.date(),
    collection_details: Joi.string(),
    date_of_birth: Joi.date(),
    has_parents: Joi.boolean().required(),
    mom_id: Joi.string(),
    dad_id: Joi.string(),
    responsible_user_id: Joi.number().required(),
    relevance: Joi.string(),
    comment: Joi.string(),
    genotype: Joi.string(),
    phenotype: Joi.string(),
    number_of_males: Joi.number(),
    number_of_females: Joi.number(),
    number_of_hermaphrodites: Joi.number(),
    number_of_juveniles: Joi.number(),
    has_dna_sample: Joi.boolean().required(),
    dna_sample_details: Joi.string(),
    has_other_sample: Joi.boolean().required(),
    other_sample_details: Joi.string(),
    amount_founder_fish: Joi.number(),
    last_check_date: Joi.date().required(),
    last_check_user_id: Joi.number().required(),
    /*photo1: Joi.blob(),
    photo2: Joi.blob() TODO Validate blob?*/
  })
}), StocksController.create);

routes.get('/stocks', StocksController.indexAll);
routes.delete('/stocks/:id', StocksController.delete);


module.exports = routes;