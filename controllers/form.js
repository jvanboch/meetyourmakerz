const Controller = require('../db/table_creation')
const Projects = Controller.Projects
const Users = Controller.Users
const usersDescription = Controller.usersDescription
const bcrypt = require('bcrypt');

module.exports = {
    new_project(req,res) {
       
        return Projects
        .create({
            project_description:req.body.project_description,
            qty:req.body.qty
        })
    .then((company) => res.status(201).send(company))
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)});
    },
    getProjects(req,res){
        userid=req.params.userid;
        return Projects
        .findAll({
            where:{
                user_id: userid
            }
        }).then((projects)=>{
            res.status(200).send(projects)})
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)})
        },
    async user_signup(req,res){//used to create a new user
        const salt = await bcrypt.genSalt(10);
        return Users
        .create({
            username:req.body.username,
            password:  await bcrypt.hash(req.body.password, salt),
            email: req.body.email
        }).then((created)=>res.status(201).send(created))
        .catch((error)=>{
            console.log(error)
        res.status(400).send(error)})
    },
    user_login(req,res){
        return Users
        .findOne({where:{username:req.body.username}})
        .then((result)=>bcrypt.compare(req.body.password, result.password))
        .then((result)=>{
            res.status(200).send({'result':result})

           })
        
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)
        })

        },
    get_userid(req,res){
            return Users.findOne(
                {where:{username:req.params.user}
            })
                .then((record)=>{
                   res.status(201).send(record)
                }).catch(err=>res.status(400).send('not found'))
                },
    
    new_description(req,res) {
    
        return usersDescription
        .create({
            user_description:req.body.user_description
        })
    .then((result) => res.status(201).send(result))
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)});
    },
    get_user_description(req,res){
        userid=req.params.userid;
        return usersDescription
        .findOne({where:{user_id:userid}})
        .then((result)=>{
            res.status(200).send({'user_description':result})})
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)
        })

        }
    }


