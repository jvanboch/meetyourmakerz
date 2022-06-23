import React, { Component } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

class Jobs extends Component {
        state = {jobs:[]}

        componentDidMount(){
            console.log('running')
            fetch('/api/jobs')
            .then((response) =>response.json()).then((response)=>{
            console.log(response)
             this.setState({jobs:response})
             
            }).catch((err)=>console.log(err))
        }

    render(){
    return(
        
  <Table celled padded>
    <Table.Header>
       
      <Table.Row>
        <Table.HeaderCell singleLine>User</Table.HeaderCell>
        <Table.HeaderCell>Qty</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        
      { this.state.jobs.map((job)=>
    <Table.Row>
        <Table.Cell>
        </Table.Cell>
        <Table.Cell singleLine>{job.qty}</Table.Cell>
        <Table.Cell>
        {job.project_description}
        </Table.Cell>
      </Table.Row>
    )}

    </Table.Body>
  </Table>
)
}}
export default Jobs