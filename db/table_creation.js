const { Sequelize } = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define("User",{
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
     technologies:{type: Sequelize.STRING, allowNull: true}
    })


   
var Project = sequelize.define("Project", {
    project_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    user_id: {
        type: Sequelize.INTEGER,

  },
  qty:{
      type:Sequelize.INTEGER,
      allowNull:false
  },
  job_ownerid: {
    type: Sequelize.INTEGER,
    // model: 'user', 
    // key: 'user_id' 
},
job_customer_id: {
    type: Sequelize.INTEGER,
    // model: 'user', 
    // key: 'user_id' 
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
// Users.hasOne(Projects, {
//     foreignKey: 'job_ownerid'
//   });
//   Projects.belongsTo(Users);
User.hasMany(Project)


const Controller = {
    User:User,
    Project:Project,
    usersDescription:usersDescription
}
  



module.exports = Controller
