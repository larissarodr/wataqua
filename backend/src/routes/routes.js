const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const UserTypeController = require('./controllers/UserTypeController');
const ProfileController = require('./controllers/ProfileController');

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

routes.post('/user_type', celebrate({
  [Segments.BODY]: Joi.object().keys({
      description: Joi.string().required()
  })
}),  UserTypeController.create);

routes.get('/user_type/:is_admin', UserTypeController.index);

module.exports = routes;