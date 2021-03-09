import react from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const CustomNav = (props) => {
    console.log(props);
    return (
    <Nav justified>
      <NavItem>
        <NavLink active href="#">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
    </Nav>
)}

export default CustomNav;