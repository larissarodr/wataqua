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


routes.post('/stocks', StocksController.create); //TO-DO NEED TO ADD VALIDATION HERE

routes.get('/stocks', StocksController.indexAll);
routes.delete('/stocks/:id', StocksController.delete);


module.exports = routes;