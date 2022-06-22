const { Sequelize } = require('sequelize');
const sequelize = require('./connection');
const User = sequelize.define('user', {
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: { type: Sequelize.STRING, allowNull:false },
    email: { type: Sequelize.STRING, allowNull:false },
    myDate: { type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})

const Projects = sequelize.define('project', {
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
sequelize.sync()
module.exports = User
module.exports = Projects