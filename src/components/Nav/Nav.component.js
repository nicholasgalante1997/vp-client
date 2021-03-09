import react from 'react';
import { Nav, NavItem } from "shards-react";
import { Link } from 'react-router-dom'
import styles from './Nav.styles.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const CustomNav = (props) => {

    return (
    <Nav justified style={styles.container}>
      <NavItem style={styles.item}>
          <Link to='/'>
            <p style={styles.text}>Vantage Points</p>  
          </Link>
      </NavItem>
      <NavItem style={styles.item}>
      <Link to='/about' style={styles.item}>
          <p style={styles.text}>Scenes</p>  
        </Link>
      </NavItem>
    </Nav>
)}

export default CustomNav;