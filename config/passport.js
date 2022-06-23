const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const Users = require('../models/users');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

const params = {
	secretOrKey: SECRET_KEY,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
