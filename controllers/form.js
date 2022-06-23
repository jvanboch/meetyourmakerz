const Projects = require('../db/table_creation')

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
        return Projects
        .findAll({}).then((projects)=>{
            console.log('here are the projects', projects)
            res.status(200).send(projects)})
        .catch((error)=>{
            console.log(error)
            res.status(400).send(error)})
        }
    }


