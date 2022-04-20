'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./server/config');
const morgan = require('morgan');
const dotenv = require('dotenv'); 
dotenv.config();
require('express-async-errors');

const PORT = process.env.PORT || 5000;
//routers
const tutorRoutes = require('./server/routes/tutorRoutes');
const userRoutes =  require('./server/routes/userRoutes');

//middleware
const notFoundMiddleware = require("./server/middleware/not-found.js");
const errorHandlerMiddleware  = require('./server/middleware/error-handler.js');
const auth  = require("./server/middleware/auth.js");

const app = express();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build'));
    
}

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
app.listen(config.PORT, ()=> console.log('App is listening on '+PORT));
}catch{
    console.log(error);
}
 