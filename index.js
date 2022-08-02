

const express = require('express')
const app = express()
require('dotenv').config();
const path = require("path");
// var router = express.Router();
const projectFormController = require('./controllers/form');
const cookieParser = require("cookie-parser");
const port = 3000
bodyParser = require('body-parser')
var session = require('express-session')  
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    name:"session",
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    
}));
app.use(cookieParser());
app.get('/api/:userid/jobs',projectFormController.getProfileProjects)
app.get('/api/jobs', projectFormController.getAllProjects)
app.get('/api/:userid/user_description', projectFormController.get_user_description)
app.get('/api/:user/id', projectFormController.get_userid)
app.use(express.static(`${__dirname}/client/dist`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`);
});

app.post('/api/userlogin',projectFormController.user_login)
app.post('/api/form',projectFormController.new_project)
app.post('/api/signup', projectFormController.user_signup)
app.post('/api/user_description', projectFormController.new_description)
app.get('/session',function(req, res){
  
  res.send(req.session.user_id);
});
// router.route('/api/form')
// .post(projectFormController.new_project)
// .get(function(req,res,next){
//   res.send('hello world')
// })  


  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
