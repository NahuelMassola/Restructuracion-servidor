const dotenv= require('dotenv');

dotenv.config();

const { 
    PORT,
    MONGODBURL,
    PRIVATE_KEY_JWT,
    LOGIN_STRATEGY,
    JWT_STRATEGY,
    REGISTER_STRATEGY,
    COOKIE_USER
 } = process.env

module.exports = {
    PORT,
    MONGODBURL,
    PRIVATE_KEY_JWT,
    LOGIN_STRATEGY,
    JWT_STRATEGY,
    REGISTER_STRATEGY,
    COOKIE_USER
}

