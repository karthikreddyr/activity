const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.main);

 route.post('/login', services.login)
 route.post('/registration', services.registration);

 

/**
 *  @description add users
 *  @method GET /add-activity
 */
route.get('/add-activity', services.add_activity)
route.post('/activities', services.homeRoutes)


/**
 *  @description for update user
 *  @method GET /update-activity
 */
route.get('/update-activity', services.update_activity)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route