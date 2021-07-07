
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const express = require('express'),
    userCtrl = require('./controllers/user');


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
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected!')
})

app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
//app.get('/api/auth/me', userCtrl.getUser);
//app.post('/api/auth/logout', userCtrl.logout);




app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));