
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const express = require('express'),
    userCtrl = require('./controllers/user'),
    notice = require('./controllers/notice'),
    image = require('./controllers/image'),
    site = require('./controllers/site')
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})

const { uploadFile, getFileStream } = require('./s3')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;



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
app.get('/api/notice', notice.notice);
app.post('/api/images', upload.single('image'), image.upload);
app.get('/images/:key', image.download);
app.get('/api/sites', site.sites);
app.get('/api/image_list', image.image_list);


app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));