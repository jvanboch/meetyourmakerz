import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { NavLink , Navigate , Route, Router  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Jobs from "./Jobs.jsx"
  class LoginForm extends React.Component{
    state={
            loginSuccess:'not entered',
            password:"",
            username:""
        }

    onChangePassword(event, data){
      this.setState({ password: data.value })
      }
  onChangeUsername(event, data){
      this.setState({ username: data.value })
      }
      onCredentialSubmit(e){
        e.preventDefault()
        console.log('triggered')
        var requestOptions ={
          method: "POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({username:this.state.username, password:this.state.password})
        };
        fetch('/api/userlogin', requestOptions).then((response)=>{
          if (response.ok){
            return response.json();
          }}).then((res)=>{
         
          if (res.result!==true){
            console.log(res.result)
            this.setState({loginSuccess: false})
            
          }else{
            console.log('else', this.props)
        
            this.setState({loginSuccess:true})
          }
        }).catch((err)=>{
          console.log(err)
          this.setState({loginSuccess:false})})

      }

    render(){

      if (this.state.loginSuccess ===true){
      
  return(
    
    
    <Navigate to="/jobs"/>
    

)}else if (this.state.loginSuccess){
return(
    
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' onChange = {this.onChangeUsername.bind(this)}placeholder='User Name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.onChangePassword.bind(this)}
          />

          <Button color='teal' fluid size='large' onClick = {this.onCredentialSubmit.bind(this)}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us?<NavLink to="/signup"> Sign Up </NavLink>
      </Message>
    </Grid.Column>
  </Grid>
)
}else{

    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' onChange = {this.onChangeUsername.bind(this)} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.onChangePassword.bind(this)}
            />
  
            <Button color='teal' fluid size='large' onClick = {this.onCredentialSubmit.bind(this)}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?<NavLink to="/signup"> Sign Up </NavLink>
        </Message>
        <div style={{"color":"Red"}}>
          Incorrect Password
        </div>
      </Grid.Column>
    </Grid>
  )}
  


      }
    }

export default LoginForm