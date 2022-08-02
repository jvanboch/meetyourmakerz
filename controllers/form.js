const Controller = require('../db/table_creation')
const Project = Controller.Project
const User = Controller.User
const usersDescription = Controller.usersDescription
const bcrypt = require('bcrypt');

module.exports = {
    new_project(req,res) {
       
        return Project
        .create({
            project_description:req.body.project_description,
            qty:req.body.qty, 
            job_customer_id:req.body.job_ownerid
        })
    .then((company) => res.status(201).send(company))
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)});
    },
    getAllProjects(req,res){
        return Project
        .findAll()
        .then((projects)=>{
            res.status(200).send(projects)
        })
           
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)
        })
        },
    getProfileProjects(req,res){
        userid=req.params.userid;
        return Project
        .findAll({
            where:{
                job_customer_id: userid
            },
            raw:true
           
        }).then((projects)=>{
            var user_projects= projects
            return User
            .findOne({
                where:{
                    user_id: userid
                },
                raw:true
            }).then((result)=> {
                user_projects[0].user_id=result.username
                console.log('projects,  user', user_projects[0])
                res.status(200).send(user_projects)})
            })
           
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)})
        },
    async user_signup(req,res){//used to create a new user
        const salt = await bcrypt.genSalt(10);
        return User
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
        return User
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
            return User.findOne(
                {where:{username:req.params.user}
            })
                .then((record)=>{
                   res.status(201).send(record)
                }).catch(err=>res.status(400).send('not found'))
                },
    
    new_description(req,res) {
    
        return usersDescription
        .create({
            user_description:req.body.user_description,
            user_id: req.body.username
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


