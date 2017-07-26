import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import './MyMenu.css';
import 'font-awesome/css/font-awesome.css';

class MyMenuItem extends Component {
  render() {
    return (
      <div>
        <a
          id={this.props.menuId}
          href={this.props.menuHref} >
          <i
            className={"fa fa-fw menu-item " + this.props.fa}
          />
          <span>
            {this.props.menuName}
          </span>
        </a>
      </div>
    )
  }
}

class MyMenu extends Component {
  render () {
    return (
      <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} >
        <MyMenuItem fa="fa-sign-in" menuHref="#/" menuName="Sign In" />
        <MyMenuItem fa="fa-user-circle-o" menuHref="#/profile" menuName="Profile" />
        <MyMenuItem fa="fa-map" menuHref="#/map" menuName="Map" />
        <MyMenuItem fa="fa-heart" menuHref="#/swiper" menuName="Swipe" />
      </Menu>
    );
  }
}

export default MyMenu;