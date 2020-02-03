import React from "react";
import "antd/dist/antd.css";
import logo from '../../assets/images/topBar/logoWhite.png'
import { Link } from "react-router-dom";
import { Menu } from "antd";
import LanguageSwitch from "../../LanguageSwitch";

import "./topBar.css";


export default class TopBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  
  render() {

    return (
      <header className="nav-bar">
      <Link  to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <LanguageSwitch />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ backgroundColor: "transparent" }}
        >
          <Menu.Item key="services">
            <Link className='nav-bar-link'  to="/services">
              Services
            </Link>
          </Menu.Item>
          <Menu.Item key="products">
            <Link className='nav-bar-link' to="/products">
              Products
            </Link>
          </Menu.Item>
          <Menu.Item key="rental">
            <Link className='nav-bar-link' to="/rental">
              Rental
            </Link>
          </Menu.Item>
          <Menu.Item key="showRoom">
            <Link className='nav-bar-link' to="/showRoom">
              Show room
            </Link>
          </Menu.Item>          
          <Menu.Item key="events">
            <Link className='nav-bar-link' to="/events">
              Events
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link className='nav-bar-link' to="/contact">
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}