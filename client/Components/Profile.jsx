import React, { useEffect, useState,useContext, useInsertionEffect } from 'react'
import SideBar from './SideBar.jsx'
import { Header, Table, Rating } from 'semantic-ui-react'
import UserContext from './Context.jsx'
import { REACT_APP_MAP_API_KEY } from "@env";
function Profile() {
 
    const [description, setDescription] = useState('')
    const [jobs, setJobs] = useState([])
    const[userInfo, setUserInfo] = useState([])
    const [jobsOwner, setjobsOwner] = useState([])
    const [user_id, setContext] = useContext(UserContext);
    const onChangeDescription = (event, data) =>
        {
            event.preventDefault()
            setDescription(event.target.value )
        }
    
      


    const onDescriptionSubmit = (event) =>
    {

        event.preventDefault()
        var requestOptions ={
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({user_description:description, username: user_id})
        };
        fetch('/api/user_description', requestOptions).then((response)=>{
        if (response.ok){
            return response.json();
        }}).then((res)=>{
       
        }).catch((err)=>{
        console.log(err)
        })

    }
    useEffect(() => 
    {
        
        const getJobs= async()=>{
            console.log('userid', user_id)
            fetch(`/api/${user_id}/user_description`)
        
            .then((response) =>response.json()).then((response)=>{
            
            setDescription(response.user_description.user_description)
            
            }).catch((err)=>console.log(err))

            fetch(`/api/${user_id}/jobs`)
            .then((response) =>response.json()).then((response)=>{
                console.log('jobs', response)
            setJobs(response)
            
            }).catch((err)=>console.log('error',err))
            fetch(`/api/${user_id}/userinformation`).then((response)=>response.json())
            .then((response)=>{
                
                setUserInfo(response.user_info)
            })
            .catch((err)=>{
                console.log('error user info', err)
            })
        } 
        getJobs()
    
    },[])

  
		return (
            <div style={{ "display": "flex", "height": "auto", "background-color":"#f3f2ef"
            }}>
                <div style={{ "border":"solid", "width":"8%", "position":"sticky", "top":"0"}}><SideBar/></div>
                    <div style={{"padding":"60px", "display":"flex", "flex-direction": "column","gap":"30px",  "margin":"auto"}}>
                        <div style={{  "height": "300px", "background-color":"white", "border": "2px rgb(0 0 0 / 60%)", "border-radius":"10px"}}>
                            <img src='/profile.jpg' style={{"width": "150px","height": "150px","padding": "5px", "border-radius": "50%"}} ></img>
                            <div style={{"border":"solid"}}>Username: {userInfo.username}</div>

                            <div style={{"border":"solid"}}>Techonologies: {userInfo.technologies}</div>
                        </div>
                        <div style = {{"display": "flex", "flex-direction": "row",  "background-color":"white", "border": "2px rgb(0 0 0 / 60%)", "border-radius":"10px", "align-items":"center"}}>
                            <div style ={{"height":"400px", "width":"400px", "padding":"5px"}}>{description}</div>
                           
                            <div><img style ={{"padding":"5px" }} src={`https://maps.googleapis.com/maps/api/staticmap?center=Redwood City, CA&zoom=12&size=350x350&key=${REACT_APP_MAP_API_KEY}`}></img></div>
                        </div> {/*user description Div*/}
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
                                    
                                {jobs.map((job)=>
                                <Table.Row>
                                    <Table.Cell singleLine>{job.user_id}</Table.Cell>
                                    <Table.Cell singleLine>{job.qty}</Table.Cell>
                                    <Table.Cell>{job.project_description}</Table.Cell>
                                </Table.Row>
                                )}

                                </Table.Body>
                            </Table>
                        </div>
                        <button class="ui icon button" style={{"color":"white", "background-color": "#24a0ed", "width": "10%", "margin-left":"auto"}}  onClick={onDescriptionSubmit} >
                                    <i class="edit icon" size= "small" style={{"vertical-align": "middle"}}></i>
                                </button>
                                   
                </div>
            </div>


        )
        }


export default Profile 