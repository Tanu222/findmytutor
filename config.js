'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    PORT : PORT,
    HOST : HOST,
    HOST_URL :HOST_URL,
    firebaseConfig : {
    API_KEY: API_KEY,
    AUTH_DOMAIN: AUTH_DOMAIN,
    PROJECT_ID:PROJECT_ID,
    STORAGE_BUCKET:STORAGE_BUCKET,
    MESSAGING_SENDER_ID:MESSAGING_SENDER_ID,
    APP_ID:APP_ID,
    MEASUREMENT_ID:MEASUREMENT_ID
    }
}