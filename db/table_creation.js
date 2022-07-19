const { Sequelize } = require('sequelize');
const sequelize = require('./connection');
const Users = sequelize.define('user', {
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username: { type: Sequelize.STRING, allowNull:false },
    email: { type: Sequelize.STRING, allowNull:false },
    myDate: { type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW },
    password: {
        field: 'user_password',
        type: Sequelize.STRING,
        allowNull: true
        },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})
   

   
var Projects = sequelize.define('project', {
    project_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    user_id: {
        type: Sequelize.INTEGER,
        model: 'user', 
        key: 'user_id' 
  },
  qty:{
      type:Sequelize.INTEGER,
      allowNull:false
  },
    project_description: { type: Sequelize.STRING, allowNull:false },
    myDate: { type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})
const usersDescription = sequelize.define('userDescription', {
    user_description_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    user_id: {
        type: Sequelize.INTEGER,
        model: 'user', 
        key: 'user_id' 
  },
    user_description: { type: Sequelize.STRING, allowNull:false },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})
   
const Controller = {
    Users:Users,
    Projects:Projects,
    usersDescription:usersDescription
  
  }


sequelize.sync()
module.exports = Controller
