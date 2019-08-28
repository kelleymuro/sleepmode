import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import styled from 'styled-components';

const Nav = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width: 80%;
height: 100px; 
font-family: 'PT Sans', sans-serif;
`

const NavItem = styled(Link)`
background-color: #00debc;
border: none;
color: white;
font-family: 'PT Sans', sans-serif;
font-size: 18px;
margin-right: 20px;
padding: 9px 12px;
border-radius: 8px;
cursor: pointer;
text-decoration: none;
transition: all .2s ease-in;

&:hover {
   background-color:#00BEB3;
}

@media (max-width: 800px) {
   margin-right: 0

  &:last-of-type {
   margin-left: 20px; 
   
  } 
}
`


const Navbar = ({ auth: { isAuthenticated, loading}, logout }) => {
  
   const authLinks = (
      <Fragment>
         <NavItem to='/dashboard'>Home</NavItem>
          <NavItem to='/settings'>Settings</NavItem>
          <NavItem onClick={logout} to="#">Logout</NavItem>
      </Fragment>
     
   )

   const guestLinks = (
      <Fragment>
         <NavItem to='/'>Home</NavItem>
         <NavItem to='/register'>Create An Account</NavItem>
          <NavItem to='/login'>Login</NavItem>
      </Fragment>
     
   )
  
   return ( 
   
   <Nav>
      { !loading && (<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>)}
   </Nav>
   
 )}

 Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
 }

 const mapStateToProps = state => ({
    auth: state.auth
 });

export default connect(mapStateToProps, { logout }) (Navbar);