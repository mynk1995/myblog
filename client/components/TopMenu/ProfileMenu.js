import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react';
import {Link } from 'react-router';
import './index.css';
export default class ProfileMenu extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical className="ProfileMenu">
        <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
          Profile
        </Menu.Item>
        <Link to="/createPost">
        <Menu.Item name='createPost' active={activeItem === 'createPost'} onClick={this.handleItemClick}>
          Create Post
        </Menu.Item>
        </Link>
        <Menu.Item name='publications' active={activeItem === 'publications'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Your Publications
        </Menu.Item>
      </Menu>
    )
  }
}
