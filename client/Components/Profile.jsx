import React, { Component } from 'react'
import SideBar from './SideBar.jsx'
import { Header, Table, Rating } from 'semantic-ui-react'
class Profile extends Component {
    state={
        description:" ",
        jobs:[],
        userid: ''
    }
    onChangeDescription(event, data){
        event.preventDefault()
        this.setState({ description: event.target.value })
        
        }
    
      


    onDescriptionSubmit(event){

        event.preventDefault()
        var requestOptions ={
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({user_description:this.state.description})
        };
        fetch('/api/user_description', requestOptions).then((response)=>{
        if (response.ok){
            return response.json();
        }}).then((res)=>{
       
        }).catch((err)=>{
        console.log(err)
        })

    }
    componentDidMount(){
  
        console.log(this.state.username)
        fetch('/api/user_description')
        .then((response) =>response.json()).then((response)=>{
         this.setState({description:response.user_description.user_description})
         
        }).catch((err)=>console.log(err))

        fetch('/api/jobs')
        .then((response) =>response.json()).then((response)=>{

         this.setState({jobs:response})
         
        }).catch((err)=>console.log('error',err))
        
    
    }
   
	render() {
        
		return (
            <div style={{ "display": "flex", height: '100vh'}}>
                <div style={{ "border":"solid", "width":"8%"}}><SideBar/></div>
                    <div style={{"padding":"60px", "display":"flex", "flex-direction": "column","gap":"60px"}}>
                        <div style={{ "display": "flex", "justifyContent":"left", height: '300px'}}>
                            <img src='/profile.jpg' style={{"width": "300px","padding": "5px", "border-radius": "4px", "border": "1px solid #ddd"}} ></img>
                            <form onSubmit={this.handleSubmit} style = {{"display": "flex", "flex-direction": "column"}}>
                                 <label>
                                
                                    <textarea value={this.state.description} onChange={this.onChangeDescription.bind(this)} style={{"width":"600px", "height":"300px"}} />
                                 </label>
                               
                                </form>
                            
                        
                            
                        </div>
                        <div style={{"diplay":"flex", "flex-direction": "row"}}>
                        {/* <h1>Jobs</h1>
                        { this.state.jobs.map((job)=>
                            <div style={{"display":"flex", "flex-direction":"column", "border":"solid", "padding":"10px", "margin":"10px 0px 10px 0px"}}>
                                <div style={{"padding":"5px"}}>{job.qty}</div>
                                <div style={{"padding": "5px"}}>{job.project_description}</div>
                            </div>

                                )} */}
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
                        </div>
                        <button class="ui icon button" style={{"color":"white", "background-color": "#24a0ed", "width": "10%", "margin-left":"auto"}}  onClick={this.onDescriptionSubmit.bind(this)} >
                                    <i class="edit icon" size= "small" style={{"vertical-align": "middle"}}></i>
                                </button>
                                   
                </div>
            </div>


        )
        }
}

export default Profile 