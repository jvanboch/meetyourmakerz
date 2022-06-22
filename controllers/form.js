const Projects = require('../db/table_creation')

module.exports = {
    new_project(req,res) {
        console.log('here',req.body)
        return Projects
        .create({
            project_description:req.body.project_description,
            qty:req.body.qty
        })
    .then((company) => res.status(201).send(company))
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)});
    }
}

