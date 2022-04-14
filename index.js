'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
require('express-async-errors');
//routers
const tutorRoutes = require('./routes/tutorRoutes');
const userRoutes =  require('./routes/userRoutes');

//middleware
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware  = require('./middleware/error-handler.js');
const auth  = require("./middleware/auth.js");

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/tutor',auth,tutorRoutes.routes);
app.use('/api/user',userRoutes.routes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

try{
app.listen(config.PORT, ()=> console.log('App is listening on '+config.HOST_URL));
}catch{
    console.log(error);
}
 