// validations 
// validate middleware
const validate = require('../middlewares/validate');
const schemas = require('../validations/Project');

const express = require('express');
const { create, index } = require('../controllers/Projects');
const router = express.Router();

router.get('/', index);

router
.route('/')
.post(validate(schemas.createValidation), create);










module.exports =  router ;