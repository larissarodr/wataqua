const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controller/SessionController');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
  })
}), SessionController.create);  //the order of parameters here matters. validation must come first

routes.post('/user', celebrate({
  [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().required().email(),
      fullname: Joi.string().required(),
      initials: Joi.string().required(),
      state: Joi.boolean().required(),
  })
}),  UserController.create);

module.exports = routes;