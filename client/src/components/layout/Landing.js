import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
box-sizing: border-box;
width: 90%;
max-width: 1080px
margin: 0 auto;
text-align: center;

@media(max-width: 800px) {
   width: 100%;
}
`


const Title = styled.h1`
width: 100%;
text-align: center;
font-family: 'PT Sans', sans-serif;
font-size: 73px;
font-weight: 700;
color: #00DEBC;

@media(max-width: 800px) {
   padding-top: 30px;
   font-size: 40px;
   margin: 0 auto;
}
`

const ValueProp = styled.h3`
font-size: ${props => props.contentText ? "30px" : "55px"}
text-align: ${props => props.contentText ? "left" : "center"}
width: 80%;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 50px;
color: #00DEBC;

@media(max-width: 500px) {
   font-size: 35px;
   padding-bottom: 50px;
}
`

const ValueStrong = styled.span`
font-size: 55px;
text-align: center;
width: 900px;
margin: 0 auto;
color: #00DEBC;
background-image: linear-gradient(transparent calc(100% - 10px), rgb(247, 254, 102) 10px);
background-size: 100% 94%;
background-repeat: no-repeat;
transition: background-size 1s ease 0s;

&:hover {
 background-size: 0% 94%;
}

@media(max-width: 500px) {
   font-size: 35px;
}
`

const Button = styled(Link)`
margin: 30px auto;
background-color: #00debc;
border: none;
color: white;
font-family: 'PT Sans', sans-serif;
font-size: 22px;
padding: 10px 15px;
border-radius: 8px;
cursor: pointer;
transition: all .2s ease-in;

&:hover {
   background-color:#00BEB3;
}
`

// const Content = styled.div`
// display: flex;
// align-items: center;
// width: 100%;
// margin: 100px auto;
// background-color: #00debc;
// height: 50vh;
// `



const Landing = ({ isAuthenticated }) => {

   if(isAuthenticated) {
      return <Redirect to='/dashboard'/>;
   }

  return (
   <Fragment>
      <Container>
         <Title>sleepmode.fm</Title>
         <ValueProp> A playlist that will help you <ValueStrong>sleep</ValueStrong>, <ValueStrong>calm down</ValueStrong>, and even <ValueStrong>lucid dream.</ValueStrong> </ValueProp>
         <Button to="/trial">Start Listening Free</Button>
      </Container>
   </Fragment>
 
 )}

 Landing.propTypes = {
    isAuthenticated: PropTypes.bool
 }

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps) (Landing);