import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { login } from '../../actions/auth';

const Container = styled.form`
width: 50vh;
margin: 0 auto;


@media (max-width: 800px) {
   width: 90%;
}

`
const Input = styled.input`
box-sizing: border-box;
background-color: rgb(247, 247, 247);
color: rgb(102, 102, 102);
font-size: 24px;
text-align: left;
width: 100%;
border-radius: 10px;
border-style: none;
padding: 28px;
margin: 10px 0;
transition: all 0.3s cubic-bezier(0.497, 0.51, 0.25, 1) 0s;

&:hover {
   filter: brightness(96%);
}

&::placeholder {
   color: #DBDBDB;
}

@media(max-width: 800px) {
  font-size: 18px;
  width: 100%;
}

`

const Button = styled.input`
box-sizing: border-box;
background-color: #00debc;
height: 50px;
width: 100%;
border: none;
color: white;
font-family: 'PT Sans', sans-serif;
font-size: 21px;
height: 60px;
margin-top: 10px;
border-radius: 8px;
cursor: pointer;
text-decoration: none;
transition: all .2s ease-in;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

&:hover {
   -webkit-box-shadow: 0px 8px 52px -11px rgba(0,0,0,0.44);
   -moz-box-shadow: 0px 8px 52px -11px rgba(0,0,0,0.44);
   box-shadow: 0px 8px 52px -11px rgba(0,0,0,0.44);
}

@media(max-width: 800px) {
   font-size: 21px;
   padding: 12px 0;
   width: 97%;
 }

`

const Title = styled.h3`
color: #fff;
font-size: 30px;
font-family: 'PT Sans', sans-serif;
font-weight: 400;
text-align: center;

`


const Login = ({ login, isAuthenticated }) => {
   const [formData, setFormData] = useState({
      email: '',
      password: ''
     
   });

   const { email, password } = formData;

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

   const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
   };

   if(isAuthenticated) {
      return <Redirect to='/dashboard'/>;
   }

   return(
    <Fragment>

       <Container onSubmit={e => onSubmit(e)}>
          <Title>Login to your account</Title>
           <Input 
          type='email'
          placeholder="Enter your email address"
          name='email'
          value={email}
          onChange={e => onChange(e)}
          />
           <Input 
          type='password'
          placeholder="Enter your password"
          name='password'
          value={password}
          onChange={e => onChange(e)}
          />  
          <Button type='submit' value='Login'/>
       </Container>
     </Fragment>
   );
};

Login.propTypes = { 
   login: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
