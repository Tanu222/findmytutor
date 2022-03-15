'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

//routers
const tutorRoutes = require('./routes/tutorRoutes')
//middleware
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware  = require('./middleware/error-handler.js');
//const authenticateUser  = require("./middleware/auth.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',tutorRoutes.routes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(config.PORT, ()=> console.log('App is listening on '+config.HOST_URL));
 