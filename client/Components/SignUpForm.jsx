import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { NavLink, Redirect, Route  } from 'react-router-dom'





class SignUpForm extends Component{
    state = {
        username:'',
        password:'',
        email:''
    }

    onSubmit(e){
        e.preventDefault()
        const requestOptions={
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({username:this.state.username, password:this.state.password, email: this.state.email})

        }
        console.log(this.state)
        fetch('/api/signup',requestOptions)
    }
    onChangePassword(event, data){
        this.setState({ password: data.value })
      }
    onChangeUsername(event, data){
        this.setState({ username: data.value })
      }
    onChangeEmail(event, data){
        this.setState({ email: data.value })
      }
       onLinkClick = (e) => {
        e.preventDefault();
        useNavigate('/login');
    };
    
    render(){
        return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Sign-up for an account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.onChangeEmail.bind(this)} />
          <Form.Input fluid icon='user secret' iconPosition='left' placeholder='User name' onChange={this.onChangeUsername.bind(this)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.onChangePassword.bind(this)}
          />

          <Button color='teal' fluid size='large' onClick={this.onSubmit.bind(this)}>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account?<NavLink to="/login"> Sign In </NavLink>
      </Message>
    </Grid.Column>
  </Grid>
)
        }
    }
export default SignUpForm