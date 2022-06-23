import React, { Component } from 'react'
import STLViewer from 'stl-viewer'
import SideBar from './SideBar.jsx'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

 
const options = [
  { key: '3', text: '3d Printed', value: '3d' },
  { key: 'c', text: 'CNC', value: 'CNC' },
  { key: 'o', text: 'other', value: 'other' },
]

class JobForm extends Component {
  state = {qty:'',
           value:''}
  onSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({project_description: this.state.value, qty: this.state.qty })
  };
  fetch('/api/form', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
}

 
  onChangeProjectDescription(event, data){
  this.setState({ value: data.value })
}
onChangeQty(event, data){
  
  this.setState({ qty: data.value })
}
  render() {
    const { value } = this.state
    return (
    
        
      <div style={{ "display": "flex", height: '100vh'}}>
        <div style={{ "border":"solid", "width":"8%"}}><SideBar/></div>
        <div style={{ "width":"50%","display": "flex", "align-items":"center", "justifyContent":"center", "border":"solid 1px #dddddd", height: '100vh'}}>
      <Form>
        <h1>Submit a Request</h1>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            label='Manufactured Type'
            options={options}
            placeholder='3d printed'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Input}
            onChange={this.onChangeQty.bind(this)}
            placeholder='1'

          />

        </Form.Group>
        <Form.Field
          control={TextArea}
          onChange={this.onChangeProjectDescription.bind(this)}
          label='About'
          placeholder='Tell us more about your project...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field onClick={this.onSubmit.bind(this)} control={Button}>Submit</Form.Field>
      </Form>
      </div>
      </div>
     
    )
  }
}

export default JobForm
