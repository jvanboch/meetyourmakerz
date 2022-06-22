
const express = require('express')
const app = express()

const path = require("path");
var router = express.Router();
const projectFormController = require('./controllers/form');
const port = 3000
bodyParser = require('body-parser')

var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`);
});

app.post('/api/form',projectFormController.new_project)

// router.route('/api/form')
// .post(projectFormController.new_project)
// .get(function(req,res,next){
//   res.send('hello world')
// })  


  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
app.use(express.static(`${__dirname}/client/dist`));