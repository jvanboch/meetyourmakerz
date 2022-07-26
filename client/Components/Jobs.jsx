import React, { useState, useContext} from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import SideBar from './SideBar.jsx'
import { useEffect } from "react";
import UserContext from './Context.jsx'

function Jobs() {
        const [context, setContext] = useContext(UserContext);
        const [jobs,setJobs]=useState([])
       
          //  let useid=  useContext(UserContext)

        useEffect(()=>{  
          console.log(context)
          const fetchData = async()=>{
            
            fetch('/api/jobs')
            .then((response) =>response.json()).then((response)=>{
            console.log(response)
            setJobs(response);
            }).catch((err)=>console.log(err))
          }
          fetchData()
        },[])
    return(
      
  <div style={{ "display": "flex", height: '100vh'}}>
      <div style={{ "border":"solid", "width":"8%"}}><SideBar/></div>
      <div style={{"width":"50%", "display": "flex", "align-items":"center", "justifyContent":"center", "border":"solid 1px #dddddd", height: '100vh', "padding":"10%"}}>
  <Table celled padded>
    <Table.Header>
       
      <Table.Row>
        <Table.HeaderCell singleLine>User</Table.HeaderCell>
        <Table.HeaderCell>Qty</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {console.log( 'setjobs', jobs)}
      { jobs.map((job)=>
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
  </div>
  </div>      
)
}
export default Jobs