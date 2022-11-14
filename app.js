const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");

const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');

app.use(bodyParser.json());
app.use(cors());

app.use('/NodeJSRestApiMySQL/get',getRoute);
app.use('/NodeJSRestApiMySQL/post',postRoute);
app.use('NodeJSRestApiMySQL/put',putRoute);
app.use('/NodeJSRestApiMySQL/delete',deleteRoute);

app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods','POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });


app.listen(8083);