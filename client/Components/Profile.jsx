import React, { Component } from 'react'
import SideBar from './SideBar.jsx'
class Profile extends Component {
    state={
        description:" "
    }
    onChangeDescription(event, data){
        event.preventDefault()
        console.log(event.target.value)
        this.setState({ description: event.target.value })
        }

    onDescriptionSubmit(event){

        event.preventDefault()
        console.log('triggered')
        var requestOptions ={
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({user_description:this.state.description})
        };
        fetch('/api/user_description', requestOptions).then((response)=>{
        if (response.ok){
            return response.json();
        }}).then((res)=>{
        console.log(res)
        }).catch((err)=>{
        console.log(err)
        })

    }
    componentDidMount(){
        console.log('running')
        fetch('/api/user_description')
        .then((response) =>response.json()).then((response)=>{
        console.log(response.user_description.user_description)
         this.setState({description:response.user_description.user_description})
         
        }).catch((err)=>console.log(err))
    }

	render() {
		return (
            <div style={{ "display": "flex", height: '100vh'}}>
            <div style={{ "border":"solid", "width":"8%"}}><SideBar/></div>
            <div style={{ "display": "flex", "justifyContent":"left", "border":"solid 1px #dddddd", height: '300px'}}>
            <img src='/profile.jpg' style={{"width": "300px","padding": "5px", "border-radius": "4px", "border": "1px solid #ddd"}} ></img>
            <form onSubmit={this.handleSubmit}>
                <label>
                <textarea value={this.state.description} onChange={this.onChangeDescription.bind(this)} style={{"width":"600px", "height":"300px"}} />
                </label>
                <input type="submit" value="Submit" onClick={this.onDescriptionSubmit.bind(this)} />
                </form>

            </div>
            </div>


        )
        }
}

export default Profile 