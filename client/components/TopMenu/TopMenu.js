import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import values from '../../values.js';
import ProfileMenu from './ProfileMenu';
import logOutAction from './logOutAction';
class TopMenu extends Component {
  state = {showProfileMenu:false,
            loginValue:0
            }

  handleItemClick = (e, { name }) =>{

    if(this.props.loginReducer.status == values.NOTLOGIN ){
      this.props.toggleForm();
    } else if(this.props.loginReducer.status == values.LOGIN ){
      this.props.logOutUser();
    }

     this.setState({ activeItem: name
                  })

  }
  toggleProfileMenu = (e) => {
    this.setState({showProfileMenu:!this.state.showProfileMenu})
  }
  topMenuBar = (activeItem) => {
    return <Menu>
      <Menu.Item
        name='Home'
        active={activeItem === 'editorials'}
        onClick={this.handleItemClick}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name='aboutUs'
        active={activeItem === 'aboutUs'}
        onClick={this.handleItemClick}
      >
        About Us
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Link to="/createArticle"><Menu.Item>
        Create Article
        </Menu.Item></Link>
        <Menu.Item  active={activeItem === 'logout'} onClick={this.handleItemClick} >
        {this.props.loginReducer.status == values.NOTLOGIN ? 'Login' : 'Logout' }
        </Menu.Item>:
        <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.toggleProfileMenu} />
      </Menu.Menu>

    </Menu>
  }
  render() {
    const { activeItem } = this.state

    return (
        <div>
        {this.topMenuBar(activeItem)}

        { this.state.showProfileMenu === true ?  <ProfileMenu /> : null}
                  </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    loginReducer : state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutUser : () => dispatch(logOutAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
