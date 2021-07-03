const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 604800000
    }
}))

massive({
    connectionstring: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected!')
})


app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));