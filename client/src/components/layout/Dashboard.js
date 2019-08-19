import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AudioPlayer from '../player/AudioPlayer';





const Container = styled.div`
box-sizing: border-box;
width: 90%;
max-width: 1080px;
margin: 0 auto;
text-align: center;

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
   font-size: 50px;
   margin: 0 auto;
}
`

// const ValueProp = styled.h3`
// font-size: ${props => props.contentText ? "30px" : "55px"}
// text-align: ${props => props.contentText ? "left" : "center"}
// width: 80%;
// margin: 0 auto;
// padding-top: 20px;
// color: #00DEBC;
// `

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

@media(max-width: 800px) {
   font-size: 40px;
}

`

// const Button = styled.button`
// margin: 30px auto;
// background-color: #00debc;
// border: none;
// color: white;
// font-family: 'PT Sans', sans-serif;
// font-size: 22px;
// padding: 10px 15px;
// border-radius: 8px;
// cursor: pointer;
// transition: all .2s ease-in;
// -webkit-appearance: none;
// &:hover {
//    background-color:#00BEB3;
// }
// `

// const Content = styled.div`
// display: flex;
// align-items: center;
// width: 100%;
// margin: 100px auto;
// background-color: #00debc;
// height: 50vh;
// `


const Dashboard = ({ auth: { user, name }}) => {
   return (
    <Fragment>
       <Container>
          <Title>Welcome to sleepmode.fm</Title>
          <ValueStrong>{name}</ValueStrong>
       </Container>
       <AudioPlayer/>
    </Fragment>
  
  )}
 
  Dashboard.propTypes = {
     auth: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
     auth: state.auth
  })

export default connect(mapStateToProps) (Dashboard);