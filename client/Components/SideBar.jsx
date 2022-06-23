import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SideBar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='search' />
        Find Jobs
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='pie chart' />
        Your Jobs
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SideBar