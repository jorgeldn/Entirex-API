var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

module.exports = function(){
    var app = express();
    app.set('view engine','ejs');
    app.set('views','./app/views');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());
    app.options('*', cors());
    consign()
        .include('./app/routes')
        .into(app);
    return app;
}