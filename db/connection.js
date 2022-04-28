const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('meetyourmakers','root',process.env.MYSQLPASS,{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = sequelize