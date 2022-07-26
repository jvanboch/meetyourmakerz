import React, { useState,createContext, useContext, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { NavLink , Navigate , Route, Router  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import UserContext from './Context.jsx'

function LoginForm() {


  const [context, setContext] = useContext(UserContext);
    // useEffect(()=>{
    //   setContext("New Value")

    // console.log(context)
    // })
    const[password, userPassword] = useState('')
    const[username, userUsername] = useState('')
    const[loginSuccess, userLoginSuccess] = useState('pending password')
   
    const onChangePassword = (event, data)=>{
        userPassword(data.value)
      }
    const onChangeUsername = (event, data) => {
      userUsername(data.value)
      }
    const onCredentialSubmit= (e) => {
        e.preventDefault()
        var requestOptions ={
          method: "POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({username:username, password:password})
        };
        fetch('/api/userlogin', requestOptions).then((response)=>{
          if (response.ok){
            return response.json();
          }}).then((res)=>{
         
          if (res.result!==true){
            userLoginSuccess(false)
            
          }else{
            setContext(username)
            userLoginSuccess(true)
          }
        }).catch((err)=>{
          console.log(err)
          userLoginSuccess(false)

      })
    }

      if (loginSuccess===true){
      
  return(
    
 
     <Navigate to ="/jobs"/>
    

)}else if (loginSuccess){
return(
  
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' onChange = {onChangeUsername}placeholder='User Name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={onChangePassword}
          />

          <Button color='teal' fluid size='large' onClick = {onCredentialSubmit}>
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
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' onChange = {onChangeUsername} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={onChangePassword}
            />
  
            <Button color='teal' fluid size='large' onClick = {onCredentialSubmit}>
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
    

export default LoginForm