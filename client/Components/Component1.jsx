import React, { Component } from 'react'
import STLViewer from 'stl-viewer'

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

class FormExampleFieldControl extends Component {
  state = {qty:'',
           value:''}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div style={{"width": "50%", "display": "flex", "align-items":"center", "justifyContent":"center", "border":"solid", height: '100vh'}}>
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
            placeholder='1'

          />

        </Form.Group>
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about your project...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

export default FormExampleFieldControl
