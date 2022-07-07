/*
const express = require('express');
const app = express(); 
const cors = require('cors'); 

const bodyParser = require('body-parser'); 
const mysql = require('mysql'); 
const db = require('./app/server/dbService');
const routes = require('./app/server/dbService');

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

db.sequelize.sync();
app.use('/api/v1/offers', routes);

app.get('/', (req, res) => {
    res.json({message: "It works like Charm...!!!!" });
});



const PORT  = process.env.PORT||3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}.`);
});

*/
